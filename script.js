const fuzeNormalImages = [
    { url: 'https://i.imgur.com/C1oR4sg.jpg', description: 'Notre tismé sucré' },
    { url: 'https://i.imgur.com/48fiNLG.jpg', description: 'Julien qui fait un chat en Afrique' },
    { url: 'https://i.imgur.com/QMBmso5.jpg', description: 'Riche Entrepreneur artiste' },
    { url: 'https://i.imgur.com/NeHJv6w.jpg', description: 'Fuze se trompe de coiffeur' },
    { url: 'https://i.imgur.com/hvkyAk0.jpg', description: 'Fuze et son sang espagnol' },
    { url: 'https://i.imgur.com/dKCCYUS.jpg', description: 'Fuze à Bollywood' },
    { url: 'https://i.imgur.com/FsDXbxw.jpg', description: 'Fuze agent immobillier' },
    { url: 'https://i.imgur.com/I41Yf4D.jpg', description: 'Fuze le mexicain' },
    { url: 'https://i.imgur.com/5D1DMs5.jpg', description: 'Titouan 18 ans et toujours au collège en 4ème' },
    { url: 'https://i.imgur.com/rjg6McP.jpg', description: 'WTF c\'est IA qui a fait ça...' },
    { url: 'https://i.imgur.com/jNRi57t.jpg', description: 'L\'Évadé fiscale sur yacht' },
    { url: 'https://i.imgur.com/afb4pOR.jpg', description: 'Miss France Juliette' },
    { url: 'https://i.imgur.com/JDAIAtk.jpg', description: 'Matthéo il croit qu\'il gère tout les filles' },
    { url: 'https://i.imgur.com/JDAIAtk.jpg', description: 'c\'est l\'acteur typique des séries français sur TF1' },
    { url: 'https://i.imgur.com/UIHabQ7.jpg', description: 'Fuze mais il est à Bollywood' }
];

const fuzeMondeImages = [
    { url: 'https://i.imgur.com/vPQgEMo.jpg', description: 'Fuze in the street' },
    { url: 'https://i.imgur.com/eTcItLN.jpg', description: 'Fuze explore Boston' },
    { url: 'https://i.imgur.com/HPt0laI.jpg', description: 'Fuze en Studio Photo' },
    { url: 'https://i.imgur.com/oKtHioB.jpg', description: 'Fuze le mannequin' },
    { url: 'https://i.imgur.com/jw1MdGe.jpg', description: 'Fuze chez le photographe' },
    { url: 'https://i.imgur.com/YOS3TMQ.jpg', description: 'Fuze en video' },
    { url: 'https://i.imgur.com/4qgl0gF.jpg', description: 'Fuze ...' },
    { url: 'https://i.imgur.com/QtveWpz.jpg', description: 'Fuze...' },
    { url: 'https://i.imgur.com/WsYU45f.jpg', description: 'Fuze...' },
    { url: 'https://i.imgur.com/JIgAQgn.jpg', description: 'Fuze à un nouveau projet' },
    { url: 'https://i.imgur.com/FQFbz9e.jpg', description: 'Fuze est CEO sur Linkedin' },
    { url: 'https://i.imgur.com/ppw7RKx.jpg', description: 'Fuze va en entretien' },
    { url: 'https://i.imgur.com/EzHqKil.jpg', description: 'Fuze mais il a pris cher' },
    { url: 'https://i.imgur.com/s0utoG6.jpg', description: 'Fuze Steve Jobs' },
    { url: 'https://i.imgur.com/eyYrcmJ.jpg', description: 'Fuze fait un TED Talks' },
    { url: 'https://i.imgur.com/8Ke53Uu.jpg', description: 'Fuze fait une Apple Keynote' },
    { url: 'https://i.imgur.com/ZPYU5XP.jpg', description: 'Fuze monte l\'Everest' },
    { url: 'https://i.imgur.com/v7RGhMW.jpg', description: 'Fuze monte l\'Everest' },
    { url: 'https://i.imgur.com/oeZjtKe.jpg', description: 'Fuze monte l\'Everest' },
    { url: 'https://i.imgur.com/dTbpTrm.jpg', description: 'Fuze monte l\'Everest' },
    { url: 'https://i.imgur.com/vaWSHz0.jpg', description: 'Fuze monte l\'Everest' },
    { url: 'https://i.imgur.com/8nSPXPE.jpg', description: 'Fuze le t-shirt blanc' },
    { url: 'https://i.imgur.com/piTUcLU.jpg', description: 'Fuze regarde son avenir' },
    { url: 'https://i.imgur.com/ZuYEPQe.jpg', description: 'Fuze rigole' },
    { url: 'https://i.imgur.com/otxU1vs.jpg', description: 'Fuze rigole' },
    { url: 'https://i.imgur.com/sB5i78V.jpg', description: 'Fuze pose pour Vogue' }
];

let currentImageSet = fuzeMondeImages;
let lastImage = null;

const randImg = document.getElementById('randImg');
const imageDescription = document.getElementById('imageDescription');
const changeImageBtn = document.getElementById('changeImageBtn');
const fuzeNormalBtn = document.getElementById('fuzeNormalBtn');
const fuzeMondeBtn = document.getElementById('fuzeMondeBtn');

// Fonction de préchargement d'image
function preloadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(url);
    });
}

function getRandomImage(imageSet) {
    let newImage;
    do {
        newImage = imageSet[Math.floor(Math.random() * imageSet.length)];
    } while (newImage.url === lastImage);
    
    lastImage = newImage.url;
    return newImage;
}

async function changeImage() {
    const { url, description } = getRandomImage(currentImageSet);
    
    // Précharger l'image avant de la changer
    await preloadImage(url);
    
    randImg.style.opacity = '0';
    
    setTimeout(() => {
        randImg.src = url;
        imageDescription.textContent = description;
        randImg.style.opacity = '1';
    }, 300);
}

changeImageBtn.addEventListener('click', changeImage);

fuzeNormalBtn.addEventListener('click', () => {
    currentImageSet = fuzeNormalImages;
    lastImage = null; // Réinitialise l'image précédente
    changeImage();
});

fuzeMondeBtn.addEventListener('click', () => {
    currentImageSet = fuzeMondeImages;
    lastImage = null; // Réinitialise l'image précédente
    changeImage();
});

// Charger une image au démarrage
changeImage();
