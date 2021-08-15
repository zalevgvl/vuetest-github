const dateFormatDdMmYyyy = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return `${day > 9 ? '' : '0'}${day}.${month > 9 ? '' : '0'}${month}.${date.getFullYear()}`;
};

export default dateFormatDdMmYyyy;
