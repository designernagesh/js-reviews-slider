let reviews = [
    {
        id: 1,
        img: '../images/user_img1.jpg',
        name: 'Quas Totam Nostrum',
        designation: 'Web Developer',
        text: 'Qquia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto.' 
    },
    {
        id: 2,
        img: '../images/user_img2.jpg',
        name: 'Possimus Qui',
        designation: 'Web Designer',
        text: 'Est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla.' 
    },
    {
        id: 3,
        img: '../images/user_img3.jpg',
        name: 'Adipisci Sitamet',
        designation: 'Graphic Designer',
        text: 'Ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit.' 
    },
    {
        id: 4,
        img: '../images/user_img4.jpg',
        name: 'Sequi Mollitia',
        designation: 'Java Architect',
        text: 'Uut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae.' 
    },
    {
        id: 5,
        img: '../images/user_img5.jpg',
        name: 'Corrupti Reiciendis',
        designation: 'Front End Developer',
        text: 'Aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam.' 
    }
]

let reviewBox = document.querySelector('.reviewBox'),
image = document.querySelector('.img-container img'),
name = document.querySelector('.name'),
designation = document.querySelector('.designation'),
text = document.querySelector('.text'),

btnNext = document.querySelector('.btnNext'),
btnPrevious = document.querySelector('.btnPrevious'),
btnRandom = document.querySelector('.btnRandom');

let currentItem = 0;

let showReview = () => {
    image.src = reviews[currentItem].img;
    name.textContent = reviews[currentItem].name;
    designation.textContent = reviews[currentItem].designation;
    text.textContent = reviews[currentItem].text;
}

window.addEventListener('DOMContentLoaded', () => {
    showReview();
})

btnNext.addEventListener('click', () => {
    currentItem++;
    if(currentItem >= reviews.length){
        currentItem = 0;
    }
    showReview();
})

btnPrevious.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    showReview();
})

btnRandom.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviews.length);    
    showReview();
})