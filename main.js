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
        "author"     : "Steve Roger",
        "profileImg" : "https://unsplash.it/300/300?image=13",
        "date"       : "3 mesi fa",
        "text"       : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "img"        : "https://unsplash.it/600/300?image=170",
        "likesNumb"  : "70"
    },

    {
        "author"     : "Tony Stark",
        "profileImg" : "https://unsplash.it/300/300?image=10",
        "date"       : "2 mesi fa",
        "text"       : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "img"        : "",
        "likesNumb"  : "60"
    },

    {
        "author"     : "Bruce Banner",
        "profileImg" : "https://unsplash.it/300/300?image=9",
        "date"       : "1 mese fa",
        "text"       : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "img"        : "https://unsplash.it/600/300?image=165",
        "likesNumb"  : "100"
    }
]
// ciclo
for (i = 0; i < post.length; i++) {
    // html
    let postDiv = document.createElement("div");
    postDiv.classList.add("post");

    let postHead = document.createElement("div");
    postHead.classList.add("post__header");

    let postMt = document.createElement("div");
    postMt.classList.add("post-meta");

    let postIcon = document.createElement("div");
    postIcon.classList.add("post-meta__icon");
    postIcon.innerHTML += `
    <img 
        class="profile-pic" 
        src="${post[i].profileImg} " 
        alt="Phil Mangione"
    >`;

    let postData = document.createElement("div");
    postData.classList.add("post-meta__data");
    postData.innerHTML += `
    <div class="post-meta__author">
        ${post[i].author}
    </div>`;
    postData.innerHTML += `
    <div class="post-meta__time">
        ${post[i].date}
    </div>`;

    let postText = document.createElement("div");
    postText.classList.add("post__text");
    postText.innerText += `
        ${post[i].text}
    `;

    let postImg = document.createElement("div");
    postImg.classList.add("post__image");
    postImg.innerHTML += `
    <img 
        src="${post[i].img}" 
        alt=""
    >`;

    let postFoot = document.createElement("div");
    postFoot.classList.add("post__footer");

    let postLike = document.createElement("div");
    postLike.classList.add("likes");
    postLike.classList.add("js-likes");

    let postCta = document.createElement("div");
    postCta.classList.add("likes__cta");
    postCta.innerHTML +=`
    <a class="like-button  js-like-button" href="#" data-postid="1">
        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
        <span class="like-button__label">Mi Piace</span>
    </a>
    `;

    let postCounter = document.createElement("div");
    postCounter.classList.add("likes__counter");
    postImg.innerHTML += `
    Piace a 
        <b id="like-counter-1" class="js-likes-counter">
            ${post[i].likesNumb}
        </b> 
    persone`;
    
    postDiv.appendChild(postHead);
    postDiv.appendChild(postText);

    postHead.appendChild(postMt);

    postMt.appendChild(postIcon);
    postMt.appendChild(postData);

    postDiv.appendChild(postImg);
    postDiv.appendChild(postFoot);

    postFoot.appendChild(postCounter);
    postFoot.appendChild(postLike);

    postLike.appendChild(postCta);

    postCont.appendChild(postDiv);
}

// button
const likeButton = document.querySelector(".js-like-button");

likeButton.addEventListener(`click`,
    function () {
        
    }
)