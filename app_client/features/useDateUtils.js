export const removeTimezoneOffset = (date) =>
  new Date(date.getTime() - date.getTimezoneOffset() * 60000);
