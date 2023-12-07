export const formatDateFrontend = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

export const formatDateBackend = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return new Date(`${year}-${month}-${day}`);
};

export const formatTime = (time) => {
  const [hours, minutes] = time.split(':');
  const today = new Date();
  today.setHours(parseInt(hours, 10));
  today.setMinutes(parseInt(minutes, 10));

  const options = { hour: '2-digit', minute: '2-digit', hour12: false };
  const formattedTime = today.toLocaleTimeString('dk-DK', options);

  return formattedTime;
};