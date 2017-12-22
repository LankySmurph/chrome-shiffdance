// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain


console.log('Kittens of the world, unite as one!');

let filenames = [
  "dshifdance.gif"
];

let imgs = document.getElementsByTagName('img');

for (let imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'shifdance/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}
