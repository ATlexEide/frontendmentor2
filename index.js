const tempData = [
  {
    title: "Work",
    id: "work",
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
    id: "play",
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
    id: "study",
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
    id: "exercise",
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
    id: "social",
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
    id: "self-care",
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
const generated = document.getElementById("generated");
const timeframes = {
  daily: { timeframe: "daily", prefix: "Yesterday - " },
  weekly: { timeframe: "weekly", prefix: "Last Week - " },
  monthly: { timeframe: "monthly", prefix: "Last Month - " },
};
function render(_mode = "daily") {
  let mode = timeframes[_mode];
  const period = mode.timeframe;
  let prefix = mode.prefix;
  generated.textContent = "";
  data.forEach((area) => {
    const cardCont = document.createElement("section");
    cardCont.classList.add("card-container");
    const bg = document.createElement("div");
    bg.id = `${area.id}`;
    bg.classList.add("background");
    const bgImg = document.createElement("img");
    bgImg.src = `./images/icon-${area.id}.svg`;
    const fig = document.createElement("figure");
    fig.appendChild(bgImg);
    bg.appendChild(fig);
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("span");
    title.classList.add("title");
    const activity = document.createElement("h3");
    activity.classList.add("activity");
    activity.textContent = area.title;
    title.appendChild(activity);

    const nav = document.createElement("nav");
    nav.classList.add("select");
    const navButton = document.createElement("button");
    navButton.classList.add("select-button");
    const icon = document.createElement("img");
    icon.src = "./images/icon-ellipsis.svg";
    icon.alt = "ellipsis icon";
    navButton.appendChild(icon);
    nav.appendChild(navButton);
    title.appendChild(nav);
    card.appendChild(title);

    const hours = document.createElement("div");
    hours.classList.add("hours");
    const currHours = document.createElement("div");
    currHours.classList.add("current-hours");
    currHours.textContent = `${area.timeframes[period].current}hrs`;
    const prevHours = document.createElement("div");
    prevHours.classList.add("previous-hours");
    prevHours.textContent = `${prefix}${area.timeframes[period].previous}hrs`;
    hours.appendChild(currHours);
    hours.appendChild(prevHours);
    card.appendChild(hours);
    cardCont.appendChild(bg);
    cardCont.appendChild(card);
    generated.appendChild(cardCont);
  });
}
let lastClicked = "daily";
const timelineButtons = document.querySelectorAll(".timeline-buttons");
timelineButtons.forEach((btn) => {
  console.log(btn.id);
  btn.addEventListener("click", () => {
    if (lastClicked) document.getElementById(lastClicked).disabled = false;
    changeMode(btn.id);
    lastClicked = btn.id;
    btn.disabled = true;
  });
});

function changeMode(_mode) {
  console.log("yipp");
  render(_mode);
}
(function () {
  render();
})();
