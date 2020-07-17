const daysSince = (date) => {
  const start = Date.now();
  const end = new Date(date);
  const difference = start - end;
  const timeAgo = (difference / 1000 / 60 / 60 / 24).toFixed(0);
  const daysAgo = timeAgo == 0 ? "today." : `${timeAgo} days ago.`;
  return daysAgo;
};

const randomId = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export { daysSince, randomId };
