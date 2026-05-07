import { GitHubEvent } from "./GitHubActivityTicker";

type GitHubActivityProps = {
  events: Array<GitHubEvent>;
}

const GitHubActivities = ({events}: GitHubActivityProps) => {
  const eventElements = [...events, ...events].map((event, i) => {
      // const createdAtDate = new Date(event.created_at).toLocaleDateString("en-AU", { timeZone: "Australia/Brisbane" });
      const createdAtDate = new Date(event.created_at);
      const todaysDate = new Date();

      const msPerDay = 1000 * 60 * 60 * 24;
      const daysAgo = Math.floor((todaysDate.getTime() - createdAtDate.getTime()) / msPerDay);

      let daysAgoString;
      if (daysAgo === 0) {
        daysAgoString = "Today";
      } else if (daysAgo === 1) {
        daysAgoString = "Yesterday";
      } else {
        daysAgoString = `${daysAgo} days ago`;
      }

      const eventNumber = i % events.length + 1;

      return (
      // concatenate index to id to prevent duplicate keys
      <div key={event.id + i} className="whitespace-nowrap">
        #{eventNumber} {event.type}: {event.repo.name} - {daysAgoString}
      </div>
    )
  });

  return (
    <>
      {eventElements}
    </>
  )
}

export default GitHubActivities;