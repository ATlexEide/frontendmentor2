////////
// Fetch the data from the local data.json
const req = await fetch("./data.json");
const data = await req.json();

const generated = document.getElementById("generated");
////////
// Timeframe object for easy selection of correct timeframe and attributed prefix
const timeframes = {
  daily: { timeframe: "daily", prefix: "Yesterday - " },
  weekly: { timeframe: "weekly", prefix: "Last Week - " },
  monthly: { timeframe: "monthly", prefix: "Last Month - " },
};
////////
// Render the activity cards
function render(_mode = "daily") {
  //// Select current mode (daily, weekly,monthly)
  //   - "daily" by default
  let mode = timeframes[_mode];
  // Store the actual timeframe
  const period = mode.timeframe;
  // Store the prefix
  let prefix = mode.prefix;
  ////
  // Clear the page to avoid duplication
  generated.textContent = "";
  ////
  // Loop over each activity provided in data.json
  data.forEach((area) => {
    ////
    // Create containers for each activity
    // then append child elements
    // (images, headings, paragraphs)
    // at the end
    const cardCont = document.createElement("section");
    cardCont.classList.add("card-container");

    // Create container for bacground color / icon
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

    // Create title for activity
    // ("Work", "Play", "Exercise" etc)
    // title will include nav element for the button
    // Idea being the button would hamburger out to go to different pages relating to activity
    const title = document.createElement("span");
    title.classList.add("title");
    const activity = document.createElement("h3");
    activity.classList.add("activity");
    activity.textContent = area.title;
    title.appendChild(activity);

    // Create nav element
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

    // Create container for the actual hours
    const hours = document.createElement("div");
    hours.classList.add("hours");
    // Current hours
    const currHours = document.createElement("div");
    currHours.classList.add("current-hours");
    currHours.textContent = `${area.timeframes[period].current}hrs`;
    // Previous hours
    const prevHours = document.createElement("div");
    prevHours.classList.add("previous-hours");
    prevHours.textContent = `${prefix}${area.timeframes[period].previous}hrs`;
    ////
    // Append containing elements to the main element main container)
    hours.appendChild(currHours);
    hours.appendChild(prevHours);
    card.appendChild(hours);
    cardCont.appendChild(bg);
    cardCont.appendChild(card);
    generated.appendChild(cardCont);
  });
}
////////
// Change between viewing daily/weekly/monthly stats
////
// Cache "Last"(current) used timeframe
let lastClicked = "daily";
////
// Select the buttons for each timeframe
const timelineButtons = document.querySelectorAll(".timeline-buttons");
////
// Add eventlistener all buttons to fire the render function
timelineButtons.forEach((btn) => {
  console.log(btn.id);
  btn.addEventListener("click", () => {
    ////
    // Enable the button for current timeframe when viewing a different one
    if (lastClicked) document.getElementById(lastClicked).disabled = false;
    ////
    // Fire the render function
    render(btn.id);
    ////
    // Update current timeframe
    lastClicked = btn.id;
    // Disable the button for current timeframe
    btn.disabled = true;
  });
});

////////
// Run the render function on pageload
// Defaults to "daily"
// Use string "daily", "weekly" or "monthly" as argument to change default timeframe on load
(function () {
  render();
})();
