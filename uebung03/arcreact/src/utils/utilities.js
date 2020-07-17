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

const parseJwt = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export { daysSince, randomId, parseJwt };
