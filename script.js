// //You can edit ALL of the code here
// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }


// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`
// }






// Store elements as HTML collection, then create proceeding elements - added header id directly to HTML tag
const header = document.getElementsByTagName('header');
header[0].insertAdjacentHTML('afterend', '<main id="main"></main>');

const main = document.getElementsByTagName('main');
main[0].insertAdjacentHTML('afterend', '<footer id="footer"></footer>');

const footer = document.getElementsByTagName('footer');
footer[0].insertAdjacentHTML('afterbegin', '<p>All data is provided by <a href="tvmaze.com">TVMaze.com</a></p>');


// containers for episodes
main[0].insertAdjacentHTML("afterbegin", '<div id="container"><div id="episodeBox"></div></div>');


// conversion to variables
const headerEl = document.getElementById('header');
const mainEl = document.getElementById('main');
const container = document.getElementById('container');
const episodeBox = document.getElementById('episodeBox');
const footerEl = document.getElementById('footer');




// Variable to access object keys from within function
const episodes = getAllEpisodes();


for (i = 0; i < episodes.length; ++i) {

// Creating card
let card = document.createElement('div');
card.setAttribute('id', 'card');



  // Creating elements to add to card
  const epImage = document.createElement('img');
  epImage.setAttribute('id', 'image');
  epImage.src = episodes[i].image.medium;

  const title = document.createElement('h3');
  title.append(episodes[i].name);

  const seaEpNumber = document.createElement('h4');
  seaEpNumber.append(`S0${episodes[i].season}E0${episodes[i].number}`);

  const summary = document.createElement('p');
  summary.append(episodes[i].summary);

  // Adding elements to the card
  card.append(epImage);
  card.append(title);
  card.append(seaEpNumber);
  card.append(summary);

  // Adding card to episode box
  episodeBox.append(card);

}