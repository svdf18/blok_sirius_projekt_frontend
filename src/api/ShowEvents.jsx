import { useState, useEffect } from 'react';
import { getEvents } from './EventApis.jsx';

export const ShowEvents = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [todayEvents, setTodayEvents] = useState([]);

  useEffect(() => {
    getEvents()
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  useEffect(() => {
    const filteredUpcomingEvents = events.filter(
      event => new Date(event.date) >= date
    );
    setUpcomingEvents(filteredUpcomingEvents);

    const filteredTodayEvents = events.filter(
      event => new Date(event.date).toDateString() === date.toDateString()
    );
    setTodayEvents(filteredTodayEvents);
  }, [date, events]);

  return { date, setDate, upcomingEvents, todayEvents };
};