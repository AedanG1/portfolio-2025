import { afterInp, afterRender, beforeInp, beforeRender, map, notification, osUsage, scheduling } from "@assets/paliascheduler";

const PaliaSchedulerArticle = () => {
  return (
    <article>
        <h2 id="overview">
          Overview
        </h2>
        <hr></hr>
        <p>
          Palia Scheduler allows users to schedule in-game activities to be
          notified when they're about to go live.
        </p>

      <div>
        <h3 id="design-rationale">
          Design Rationale
        </h3>
        <p>
          Palia has an in-game day/night cycle which is 24 times faster than our real-life
          day/night cycle. Every Palia day there are a variety of events that occur at specific times.
          Currently, players have to refer to third-party sources (like the wiki) in order to know when
          these events take place. They must also constantly pay attention to the in-game time if there's
          an event coming up that they want to take part in, as events can only last a couple of real-life minutes.
          It can be frustrating for a player to have to wait another real-life hour to attend an event 
          because they lost track of time.
        </p>
        <p>
          In order to help players never miss an event they want to attend, I designed and developed this web
          app to notify players where and when those events are going to take place. The user can see the current in-game
          time in relation to the events on their schedule via a live time-indicator bar, making it easy for users to 
          see how much time they have before each event. Because there are so many events in Palia, the schedule also 
          acts as a way to keep track of all the events <em>to</em> attend.
        </p>
      </div>

      <h2 id="screenshots">
        Screenshots
      </h2>
      <hr></hr>

      <div>
        <h3 id="scheduling">
          Scheduling
        </h3>
        <img
          src={scheduling}
          loading="lazy"
          alt="A screenshot of the palia scheduler interface."
        />
        <p>
          Users find an activity in the list and select a time of day that
          the activity is available to add to the schedule.
        </p>
      </div>

      <div>
        <h3 id="locations">
          Locations
        </h3>
        <img
          src={map}
          loading="lazy"
          alt="A screenshot of the palia scheduler map modal."
        />
        <p>
          All activity locations can be viewed by clicking the map pin
          button on either the schedule item or list item.
        </p>
      </div>

      <div>
        <h3 id="notifications">
          Notifications
        </h3>
        <img
          src={notification}
          loading="lazy"
          alt="A screenshot of the palia scheduler interface with a google chrome notification in the top right."
        />
        <p>
          If the user has notifications enabled, a browser notification is
          sent for every activity an in-game hour (2.5 real life minutes)
          before the activity goes live.
        </p>
      </div>

      <h2 id="technical-notes">
        Technical Notes
      </h2>
      <hr></hr>

      <div>
        <h3 id="web-scraping">
          Web Scraping
        </h3>
        <p>
          In order to collect all the data and images for the website, I
          downloaded the raw index.html file from the palia wiki site and
          used Python with BeautifulSoup to run a script which extracted the
          names, descriptions, locations, and image URLs. In the script, all
          the data was converted to a JSON object which is stored on the
          client. There are a relatively small number of activites and new
          ones don't get added frequently to the game so, I didn't see the
          need to create a script that scrapes and updates the data
          automatically or to store the data on a server.
        </p>
      </div>

      <div>
        <h3
          id="schedule-item-collision"
        >
          Schedule Item Collision
        </h3>
        <p>
          One of the technical/design challenges I faced when developing the
          schedule component was how to render the items on the schedule
          which had the same start time. At first, I considered that if two
          items were scheduled with the same start time, the latest item
          scheduled by the user should replace the item already on the
          schedule. However, this ended up being too limiting and led to
          problems where a user could accidentally replace an activity they
          didn't want to, thus having to find it and reschedule it again.
        </p>
        <p>
          With Google Calendar as a reference, I decided that items with the
          same start time should fit on the schedule side by side. To do
          this I switched from a grid layout to absolute positioning. Using
          absolute positioning meant that I had to calculate the position of
          each item instead of letting the Grid layout do the work but also
          meant that I now had the freedom to position the schedule items
          side by side. In order to calculate the position of each item, I
          created a Map to group each item with equal start times. Then for
          each group, I calculated their position and width based on the
          number of items in the group.
        </p>
      </div>

      <div>
        <h3
          id="optimizing-list-rendering"
        >
          Optimizing list rendering
        </h3>
        <p>
          While checking the performance of the website during development I
          noticed that the list was taking too long to render, making the
          type select animation look choppy. I knew this poor render time
          was because I was rendering a list of over 100 components, each
          with images and child components. To improve the render time of
          the list, I used Virtuoso. Using Virtuoso allowed me to only
          render the list items in view, decreasing the list's render time
          by 98%.
        </p>
        <p>
          <em>Before</em>
        </p>
        <img
          src={beforeInp}
          loading="lazy"
          alt="A screenshot of the google chrome developer tools performance tab showing an INP of 360ms"
        />
        <img
          src={beforeRender}
          loading="lazy"
          alt="A screenshot of the google chrome developer tools react profiler tab showing the List component rendering after 282ms"
        />
        <p>
          <em>After</em>
        </p>
        <img
          src={afterInp}
          loading="lazy"
          alt="A screenshot of the google chrome developer tools performance tab showing an INP of 72ms"
        />
        <img
          src={afterRender}
          loading="lazy"
          alt="A screenshot of the google chrome developer tools react profiler tab showing the List component rendering after 5.4ms"
        />
      </div>

      <div>
        <h3
          id="handling-ios-notifications"
        >
          Handling IOS Notifications (In Progress)
        </h3>
        <p>
          After launching the palia scheduler, I noticed more users visiting
          the website on mobile devices, and more specifically IOS, than I
          had expected.
        </p>
        <img
          src={osUsage}
          loading="lazy"
          alt="A screenshot of the vercel analytics page for the palia scheduler website. The Devices and Operating Systems sections are highlighted showing high mobile and IOS usage"
        />
        <p>
          My initial assumption was that people would use the website on
          their desktops, maybe on a second monitor or in the background,
          while playing the game. However, Palia is cross platform and can
          be played on Xbox, PlayStation, Nintendo Switch, etc. Players
          using these platforms might find it easier to use the site on
          their phone while playing the game. Currently, IOS users aren't
          able to receive notifications from the website due to my
          implementation.
        </p>
        <p>
          Enabling and sending notifications on IOS is different than
          enabling and sending notifications on a web browser as Apple
          requires notifications for IOS to go through the Apple Push
          Service. To do this, I'll have to use a server to handle sending
          notifications through APS. I am currently working on implementing
          this.
        </p>
      </div>
    </article>
  )
}

export default PaliaSchedulerArticle;
