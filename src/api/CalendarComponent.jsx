import Calendar from "react-calendar";
import { useState } from "react";
import PropTypes from 'prop-types';

const CalendarComponent = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <Calendar onChange={handleDateChange} value={selectedDate} />
  );
};

CalendarComponent.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};

export default CalendarComponent;