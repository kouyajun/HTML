const myHeading = document.querySelector('h1');
myHeading.textContent = 'My visit to Japan 2019!';

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fuji-1.jpg') {
      myImage.setAttribute ('src','images/fuji-2.jpg');
    } else {
      myImage.setAttribute ('src','images/swan.jpg');
    }
}