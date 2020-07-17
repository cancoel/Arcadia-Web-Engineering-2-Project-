const daysSince = (date) => {
  const start = Date.now();
  const end = new Date(date);
  const difference = start - end;
  const timeAgo = (difference / 1000 / 60 / 60 / 24).toFixed(0);
  const daysAgo = timeAgo == 0 ? "today." : `${timeAgo} days ago.`;
  return daysAgo;
};

export { daysSince };
