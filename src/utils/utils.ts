export const getTime = () => {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${formattedDay}.${formattedMonth} ${formattedHours}:${formattedMinutes}`;
};
