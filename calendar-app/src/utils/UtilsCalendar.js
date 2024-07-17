const totalHeight = window.innerHeight;
const convertStringInTimeMinutes = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const sortedEventOrder = (events) =>
  events.sort((a, b) => {
    return (
      convertStringInTimeMinutes(a.start) - convertStringInTimeMinutes(b.start)
    );
  });

const doEventsOverlap = (event, nextEevent) => {
  const startEvent = convertStringInTimeMinutes(event.start);
  const endEvent = startEvent + event.duration;
  const startNextEevent = convertStringInTimeMinutes(nextEevent.start);
  const endNextEvent = startNextEevent + nextEevent.duration;
  return startEvent < endNextEvent && endEvent > startNextEevent;
};

export const getGroupsOverlap = (events) => {
  const sortedEvents = sortedEventOrder(events);
  const groups = [];
  const visited = sortedEvents.map(() => false);

  for (let i = 0; i < sortedEvents.length; i++) {
    if (visited[i]) continue;

    const group = [sortedEvents[i]];
    visited[i] = true;

    for (let j = i + 1; j < sortedEvents.length; j++) {
      if (visited[j]) continue;

      for (const event of group) {
        if (doEventsOverlap(event, sortedEvents[j])) {
          console.log(group);
          group.push(sortedEvents[j]);
          visited[j] = true;
          break;
        }
      }
    }
    groups.push(group);
  }

  return groups;
};

export const convertTimeToTopPosition = (time) => {
  const startCalendar = 9;
  const endCalendar = 21;
  const [hours, minutes] = time.split(":").map(Number);
  const totalTimeInminute = (hours - startCalendar) * 60 + minutes;
  const totalMinuteCalendar = (endCalendar - startCalendar) * 60;
  return (totalTimeInminute / totalMinuteCalendar) * totalHeight;
};

export const calculateHeightOfEvent = (duration) => {
  const heightHour = totalHeight / 12;
  const Hourduration = duration / 60;

  return heightHour * Hourduration;
};
