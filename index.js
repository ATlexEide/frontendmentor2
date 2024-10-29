const tempData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const data = tempData;
const body = document.body;
const timeframes = {
  daily: { timeframe: "daily", prefix: "Last Day(?) - " },
  weekly: { timeframe: "weekly", prefix: "Last Week - " },
  monthly: { timeframe: "monthly", prefix: "Last Month - " },
};
let mode = timeframes.daily;
const period = mode.timeframe;
let prefix = mode.prefix;
data.forEach((area) => {
  const card = document.createElement("section");
  card.classList.add("card");

  const activity = document.createElement("h3");
  activity.classList.add("activity");
  activity.textContent = area.title;
  card.appendChild(activity);

  const nav = document.createElement("nav");
  nav.classList.add("select");
  const navButton = document.createElement("button");
  navButton.classList.add("select-button");
  const icon = document.createElement("img");
  icon.src = "./images/icon-ellipsis.svg";
  icon.alt = "ellipsis icon";
  navButton.appendChild(icon);
  nav.appendChild(navButton);
  card.appendChild(nav);

  const hours = document.createElement("div");
  hours.classList.add("total-hours");
  const currHours = document.createElement("div");
  currHours.classList.add("current-hours");
  currHours.textContent = area.timeframes[period].current;
  const prevHours = document.createElement("div");
  prevHours.classList.add("previous-hours");
  prevHours.textContent = `${prefix}${area.timeframes[period].previous}`;
  hours.appendChild(currHours);
  hours.appendChild(prevHours);
  card.appendChild(hours);

  body.appendChild(card);
});
