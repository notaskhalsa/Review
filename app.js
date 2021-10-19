const reviews = [
    {
        id:0,
        name: "Michael Fassbender",
        job: "UI Designer",
        img:"user2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste, vel ullam voluptatibus quae modi aliquam doloribus eius commodi reprehenderit."
    },
    {
        id:1,
        name: "Susan Smith",
        job: "web dev",
        img:"user4.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste, vel ullam voluptatibus quae modi aliquam doloribus eius commodi reprehenderit."
    },
    {
        id:2,
        name: "Alex Botez",
        job: "chess master",
        img:"user3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste, vel ullam voluptatibus quae modi aliquam doloribus eius commodi reprehenderit."
    },
    {
        id:3,
        name: "Tom Hardy",
        job: "Actor",
        img:"user1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste, vel ullam voluptatibus quae modi aliquam doloribus eius commodi reprehenderit."
    },
    {
        id:4,
        name: "Gordon Lightfoot",
        job: "Singer",
        img:"user5.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste, vel ullam voluptatibus quae modi aliquam doloribus eius commodi reprehenderit."
    },
   
];

const img = document.getElementById("person");
const author =document.getElementById("author");
const job =document.getElementById("job");
const info =document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const random = document.querySelector(".random-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson[currentItem];
});

function showPerson(user)
{
    const item = reviews[user];
    img.src = item.img;
    author.innerHTML= item.name;
    job.innerText = item.job;
    info.innerText = item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem>=reviews.length)
    {
        currentItem=0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem<0)
    {
        currentItem=reviews.length -1;
    }
    showPerson(currentItem);
});

random.addEventListener('click', function(){
    const x = Math.floor(Math.random()*reviews.length)
    showPerson(x);
});

