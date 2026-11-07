import { getCollection, type CollectionEntry } from 'astro:content';
import type { MeetingCardData } from '../components/MeetingCard';

export type Meeting = CollectionEntry<'meetings'>;
export type MapOfTheMonth = CollectionEntry<'maps'>;

const TIME_ZONE = 'America/Los_Angeles';

const isPublished = ({ data }: { data: { draft: boolean } }) =>
  import.meta.env.DEV || !data.draft;

/** Newest first. */
export async function getMeetings(): Promise<Meeting[]> {
  const meetings = await getCollection('meetings', isPublished);
  return meetings.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Newest first. */
export async function getMaps(): Promise<MapOfTheMonth[]> {
  const maps = await getCollection('maps', isPublished);
  return maps.sort((a, b) => b.data.month.valueOf() - a.data.month.valueOf());
}

// Frontmatter dates are parsed as UTC midnight, so compare and format them in UTC
// to keep the calendar day the editor wrote.
const dayKey = (date: Date) => date.toISOString().slice(0, 10);
const todayKey = () =>
  new Intl.DateTimeFormat('en-CA', { timeZone: TIME_ZONE }).format(new Date());

export const isUpcoming = (meeting: Meeting) => dayKey(meeting.data.date) >= todayKey();

/** The next upcoming meeting, or the most recent one if nothing is scheduled. */
export function getFeaturedMeeting(meetings: Meeting[]) {
  const upcoming = meetings.filter(isUpcoming);
  const meeting = upcoming.at(-1) ?? meetings[0];
  return meeting ? { meeting, upcoming: isUpcoming(meeting) } : undefined;
}

export function formatDate(date: Date, options: Intl.DateTimeFormatOptions = {}) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    ...options,
    timeZone: 'UTC',
  });
}

export const formatMonth = (date: Date) =>
  formatDate(date, { weekday: undefined, day: undefined });

export function toPlainText(markdown = '') {
  return markdown
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/^\s*(#{1,6}|>|[-*+])\s+/gm, '')
    .replace(/[*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function excerpt(markdown = '', maxLength = 170) {
  const text = toPlainText(markdown);
  if (text.length <= maxLength) return text;
  return `${text.slice(0, text.lastIndexOf(' ', maxLength))}…`;
}

export const meetingHref = (meeting: Meeting) => `/meetings/${meeting.id}/`;

export function toCardData(meeting: Meeting): MeetingCardData {
  const { title, date, summary, image, imageAlt } = meeting.data;
  return {
    href: meetingHref(meeting),
    title,
    isoDate: dayKey(date),
    dateLabel: formatDate(date, { weekday: 'short', month: 'short' }),
    year: String(date.getUTCFullYear()),
    excerpt: summary || excerpt(meeting.body),
    image: image || undefined,
    imageAlt,
    upcoming: isUpcoming(meeting),
    searchText: `${title} ${summary ?? ''} ${toPlainText(meeting.body)}`.toLowerCase(),
  };
}
