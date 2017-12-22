// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain


console.log('Shiffmans of the world, unity in dance!');

let filenames = [
  "shiffdance.gif"
];

let imgs = document.getElementsByTagName('img');

for (let imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'shiffdance/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}
