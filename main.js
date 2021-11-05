// 1. creiamo un array di oggetti per i post
// 2. ricreiamo su js la struttura html per tutti i post
    // 2.1 prima lo facciamo per uno
    // 2.2 poi creiamo un ciclo per riprodurre ogni oggetto
// 3. abilitiamo il tasto dei "mi piace" per aumentrne il conteggio

// container
const postCont = document.getElementById("container");

// array
const post = [
    {
        "author"     : "Phil Mangione",
        "profileImg" : "https://unsplash.it/300/300?image=15",
        "date"       : "4 mesi fa",
        "text"       : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "img"        : "https://unsplash.it/600/300?image=171",
        "likesNumb"  : "80"
    },

    {
        "author"     : "",
        "profileImg" : "",
        "date"       : "",
        "text"       : "",
        "img"        : "",
        "likesNumb"  : ""
    },

    {
        "author"     : "",
        "profileImg" : "",
        "date"       : "",
        "text"       : "",
        "img"        : "",
        "likesNumb"  : ""
    },

    {
        "author"     : "",
        "profileImg" : "",
        "date"       : "",
        "text"       : "",
        "img"        : "",
        "likesNumb"  : ""
    }
]

// html
let postDiv = document.createElement("div");
postDiv.classList.add("post");

let postHead = document.createElement("div");
postHead.classList.add("post__header");

let postMt = document.createElement("div");
postMt.classList.add("post-meta");

let postIcon = document.createElement("div");
postIcon.classList.add("post-meta__icon");
postIcon.innerHTML = `
<img 
    class="profile-pic" 
    src="${post.profileImg} " 
    alt="Phil Mangione"
>`;

let postData = document.createElement("div");
postData.classList.add("post-meta__data");
postData.innerHTML = `
<div class="post-meta__author">
    ${post.author}
</div>`;
postData.innerHTML += `
<div class="post-meta__time">
    ${post.date}
</div>`;

let postText = document.createElement("div");
postText.classList.add("post__text");
postText.innerText = `
    ${post.text}
`;

let postImg = document.createElement("div");
postImg.classList.add("post__image");
postImg.innerHTML = `
<img 
    src="${post.img}" 
    alt=""
>`;

let postFoot = document.createElement("div");
postFoot.classList.add("post__footer");

let postLike = document.createElement("div");
postLike.classList.add("likes");

let postCta = document.createElement("div");
postCta.classList.add("likes__cta");
postCta.innerHTML =`
<a class="like-button  js-like-button" href="#" data-postid="1">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">Mi Piace</span>
</a>
`;

// let postButton = document.createElement("a");
// postButton.classList.add("like-button");

let postCounter = document.createElement("div");
postCounter.classList.add("likes__counter");
postImg.innerHTML = `
Piace a 
    <b id="like-counter-1" class="js-likes-counter">
        ${post.likesNumb}
    </b> 
persone`;

postLike.appendChild(postCta);

postFoot.appendChild(postCounter);
postFoot.appendChild(postLike);

postMt.appendChild(postData);
postMt.appendChild(postIcon);

postHead.appendChild(postMt);

postDiv.appendChild(postFoot);
postDiv.appendChild(postImg);
postDiv.appendChild(postText);
postDiv.appendChild(postHead);

postCont.appendChild(postDiv);