// Create HTML elements for the img list
// create the array list
const imgArray = [
    {
        image: 'img/1.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/2.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/3.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/4.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/5.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// const for the <div> with class .imgList
const imgListDom = document.querySelector('.imgList');
// const for empty content
let carouselContent = "";

// now the cycle for the img <div>
for (let i = 0; i < imgArray.length; i++ ) {
    newImgBox = `<div class="imgBox"><img class="image" src="${imgArray[i]}"></div>`;
 //change the img[i]
    carouselContent += newImgBox;
};
// set the img inside the <div class="imgList"> 
imgListDom.innerHTML = carouselContent;
// const for the <div class="imgBox">
const imgBoxDom = document.getElementsByClassName('imgBox');
//

// Create HTML elements for the miniature
// create the array list
const imgMiniatureArray = ['img/1.webp', 'img/2.webp', 'img/3.webp', 'img/4.webp', 'img/5.webp'];
// const for the <div> with class .min-content
const imgMiniatureDom = document.querySelector('.min-content');
// const for empty content
let MiniatureContent = "";
// now the cycle for the img <div>
for (let i = 0; i < imgMiniatureArray.length; i++ ) {
    newMinBox = `<div class="miniatureBox"><img src="${imgMiniatureArray[i]}" alt=""></div>`;
 //change the img[i]
 MiniatureContent += newMinBox;
};
// set the img inside the <div class="min-content"> 
imgMiniatureDom.innerHTML = MiniatureContent;
//

// button function part
// do add show class to the img
let presentImg = 0;
imgBoxDom[presentImg].classList.add('show');

// next e prev button const
const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

// new code for the infite loop
nextDom.addEventListener ('click',
function() {
    imgBoxDom[presentImg].classList.remove('show');
    presentImg++;
// in this case if presentImg >= 5 present img=0 because presentImg max val. is 4 (lenght is 5 but array goes from 0 to 4)
    if (presentImg >= imgBoxDom.length) {
        presentImg = 0;
    }
    imgBoxDom[presentImg].classList.add('show');

}
);

// new code for the infite loop
prevDom.addEventListener ('click',
function() {
    imgBoxDom[presentImg].classList.remove('show');
    presentImg--;
// in this case if presentImg < 0 present img=4 because presentImg max val is 4
    if (presentImg < 0) {
        presentImg = imgBoxDom.length - 1;
    }
    imgBoxDom[presentImg].classList.add('show');
}
);




