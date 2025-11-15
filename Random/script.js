const characters = [
    {
        name: "Iron Man",
        desc: "Genius billionaire Tony Stark who fights evil in his powered armor.",
        img: "./ironman.gif",
        back: "https://i.pinimg.com/1200x/98/2c/16/982c161acd2b4248b481e156067c62ae.jpg"
    },
    {
        name: "Captain America",
        desc: "Super-soldier Steve Rogers stands for justice and freedom.",
        img: "./cap.gif",
        back:"https://i.pinimg.com/1200x/99/02/04/990204acf33005ecb22176025633c9e7.jpg"
    },
    {
        name: "Thor",
        desc: "The God of Thunder who wields the mighty hammer Mjolnir.",
        img: "./thor.gif",
        back:"https://i.pinimg.com/1200x/66/10/69/6610692a2c791be79ebad31cc9468aad.jpg"

    },
    {
        name: "Hulk",
        desc: "Bruce Banner transforms into a giant green powerhouse.",
        img: "./hulk.gif",
        back:"https://i.pinimg.com/736x/b7/92/24/b79224444e7cb726f3aba0e4e27beb23.jpg"
    },
    {
        name: "Spider-Man",
        desc: "Peter Parker swings through the city protecting the innocent.",
        img: "./spiderman.gif",
        back:"https://i.pinimg.com/736x/ad/1e/99/ad1e99bd78f135a5cf3e7a5964dc15d3.jpg"

    },
    {
        name:"Moon Knight",
        desc: "Marc Spector, a former mercenary, becomes the avatar of the Egyptian moon god Khonshu.",
        img: "./moonknight.gif",
        back:"https://i.pinimg.com/1200x/aa/51/c6/aa51c681185bd315de14b02ceb4578e2.jpg"
    }
];

document.getElementById("generateBtn").addEventListener("click", () => {
    const random = characters[Math.floor(Math.random() * characters.length)];

    document.getElementById("charName").innerText = random.name;
    document.getElementById("charDesc").innerText = random.desc;
    document.getElementById("charImg").src = random.img;
    document.getElementById("bg").style.backgroundImage = `url(${random.back})`;

});
