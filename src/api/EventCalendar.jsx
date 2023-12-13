import Calendar from "react-calendar";
import { useState } from "react";
import PropTypes from 'prop-types';

const EventCalendar = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <Calendar onChange={handleDateChange} value={selectedDate} />
  );
};

EventCalendar.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};

export default EventCalendar;