export interface MeetingCardData {
  href: string;
  title: string;
  isoDate: string;
  dateLabel: string;
  year: string;
  excerpt: string;
  image?: string;
  imageAlt: string;
  upcoming: boolean;
  searchText: string;
}

export default function MeetingCard({ meeting }: { meeting: MeetingCardData }) {
  return (
    <article className="card">
      <a className="card__link" href={meeting.href}>
        <div className="card__media">
          {meeting.image ? (
            <img src={meeting.image} alt={meeting.imageAlt} loading="lazy" decoding="async" />
          ) : (
            <div className="card__placeholder" aria-hidden="true" />
          )}
        </div>
        <div className="card__body">
          <p className="card__meta">
            <time dateTime={meeting.isoDate}>{meeting.dateLabel}</time>
            {meeting.upcoming && <span className="badge">Upcoming</span>}
          </p>
          <h3 className="card__title">{meeting.title}</h3>
          <p className="card__excerpt">{meeting.excerpt}</p>
        </div>
      </a>
    </article>
  );
}
