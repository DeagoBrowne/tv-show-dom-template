// Store elements as HTML collection, then create proceeding elements - added header id directly to HTML tag
const header = document.getElementsByTagName("header");
header[0].insertAdjacentHTML("afterend", '<main id="main"></main>');

const main = document.getElementsByTagName("main");
main[0].insertAdjacentHTML("afterend", '<footer id="footer"></footer>');

const footer = document.getElementsByTagName("footer");
footer[0].insertAdjacentHTML(
  "afterbegin",
  '<p>All data is provided by <a href="tvmaze.com">TVMaze.com</a></p>'
);


// containers for episodes
main[0].insertAdjacentHTML(
  "afterbegin",
  '<div id="container"><div id="episodeBox"></div></div>'
);


// conversion to variables
const headerEl = document.getElementById("header");
const mainEl = document.getElementById("main");
const container = document.getElementById("container");
const episodeBox = document.getElementById("episodeBox");
const footerEl = document.getElementById("footer");


// Search Bar
const searchBar = document.getElementById("search");



// Variable to access object keys from within function
const episodes = getAllEpisodes();


function setup() {
  makePageForEpisodes(episodes);
  searchBar.addEventListener('keydown', episodeFilter);
}



function makePageForEpisodes(episodes) {
  episodeBox.innerHTML = "";

  // Beginning card generation
  episodes.forEach((episode) => {
    // Creating card
    let card = document.createElement("div");
    card.setAttribute("id", "card");


    // Creating elements to add to card
    const epImage = document.createElement("img");
    epImage.setAttribute("id", "image");
    epImage.src = episode.image.medium;

    const title = document.createElement("h3");
    title.append(episode.name);

    const seaEpNumber = document.createElement("h4");
    seaEpNumber.append(`S0${episode.season}E0${episode.number}`);

    const summary = document.createElement("p");
    summary.append(episode.summary);


    // Adding elements to the card
    card.append(epImage);
    card.append(title);
    card.append(seaEpNumber);
    card.append(summary);


    // Adding card to episode box
    episodeBox.append(card);
  });
}

// function to filter episodes
function episodeFilter(event) {
  const searchValue = event.target.value.toLowerCase();
  const filter = getAllEpisodes().filter((episode) => {
    return episode.name.toLowerCase().includes(searchValue);
  });
  makePageForEpisodes(filter);
}


// Episode Selection Box
const EpSelection = document.getElementById("selection");



// Populate Selection Box
function SelectEp () {
  const options = episodes.map(episode => {
    `<option value = ${episode.name}>${episode.name} S0${episode.season} E0${episode.number}</option>`});
    console.log(options);

    EpSelection.innerHTML = options;
  };



window.onload = setup;




// var xmlString = "<div id='foo'><a href='#'>Link</a><span></span></div>";
// var doc = new DOMParser().parseFromString(xmlString, "text/xml");
// const summary = episode.summary;

// for (i = 0; i < episodes.length; ++i) {

// // Creating card
// let card = document.createElement('div');
// card.setAttribute('id', 'card');

//   // Creating elements to add to card
//   const epImage = document.createElement('img');
//   epImage.setAttribute('id', 'image');
//   epImage.src = episodes[i].image.medium;

//   const title = document.createElement('h3');
//   title.append(episodes[i].name);

//   const seaEpNumber = document.createElement('h4');
//   seaEpNumber.append(`S0${episodes[i].season}E0${episodes[i].number}`);

//   const summary = document.createElement('p');
//   summary.append(episodes[i].summary);

//   // Adding elements to the card
//   card.append(epImage);
//   card.append(title);
//   card.append(seaEpNumber);
//   card.append(summary);

//   // Adding card to episode box
//   episodeBox.append(card);

// }
