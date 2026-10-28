import { useMemo, useState } from 'react';
import MeetingCard, { type MeetingCardData } from './MeetingCard';

const ALL = 'all';

export default function MeetingArchive({ meetings }: { meetings: MeetingCardData[] }) {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState(ALL);

  const years = useMemo(() => [...new Set(meetings.map((m) => m.year))], [meetings]);

  const results = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return meetings.filter(
      (m) =>
        (year === ALL || m.year === year) && terms.every((term) => m.searchText.includes(term)),
    );
  }, [meetings, query, year]);

  return (
    <div className="archive">
      <div className="archive__controls">
        <label className="search">
          <span className="visually-hidden">Search meetings</span>
          <input
            type="search"
            placeholder="Search by topic, speaker, or tool…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="chips" role="group" aria-label="Filter by year">
          {[ALL, ...years].map((option) => (
            <button
              key={option}
              type="button"
              className="chip"
              aria-pressed={year === option}
              onClick={() => setYear(option)}
            >
              {option === ALL ? 'All years' : option}
            </button>
          ))}
        </div>
      </div>

      <p className="archive__count" aria-live="polite">
        {results.length} {results.length === 1 ? 'meeting' : 'meetings'}
      </p>

      {results.length > 0 ? (
        <div className="card-grid">
          {results.map((meeting) => (
            <MeetingCard key={meeting.href} meeting={meeting} />
          ))}
        </div>
      ) : (
        <p className="empty">
          No meetings match your search.{' '}
          <button
            type="button"
            className="link-button"
            onClick={() => {
              setQuery('');
              setYear(ALL);
            }}
          >
            Clear filters
          </button>
        </p>
      )}
    </div>
  );
}
