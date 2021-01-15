window.onload = function () {
    document.querySelector(".wrapper").style.backgroundImage = "url(images/pollback.png)";
};



const pollquestion = document.querySelector(".pollquestion");
const pollprogr = document.querySelector(".poll-progress");
const topprogress = document.querySelector(".poll-top-progressbar");

const lanswer = document.querySelector(".poll-left");
const ranswer = document.querySelector(".poll-right");

const limg = document.querySelector(".poll-left-img");
const rimg = document.querySelector(".poll-right-img");

const ltext = document.querySelector(".poll-left-text");
const rtext = document.querySelector(".poll-right-text");

const questions = [
    `Do you believe we need less guns, aka "Gun Control"?`,
    'Should shooting ranges be age restricted?',
    'Do good guys with guns stop bad guys with guns?',
    'Should we De-Fund the Police?',
    'Should Concealed Carry Permits be legal in all 50 states?',
    'Do you think the country is headed in the right direction now that Joe Biden has won?',
    'Our Torch Flashlights are LIMITED in supply and are meant as a gift ONLY to Pro-2A Families. Do you support the 2nd Amendment?'
];
const leftimgs = [
    "https://media3.giphy.com/media/gnE4FFhtFoLKM/giphy.gif?cid=646febc5jn4epfcu8h8id2o7es4j3wtxtory44581py1upmb&rid=giphy.gif",
    "https://media1.giphy.com/media/JtLrtaN4VPoKXJRKGB/giphy.gif?cid=646febc5b990kqjvckixh31magt0wzfq4mgaqnfk3qyk0cr7&rid=giphy.gif",
    "https://media4.giphy.com/media/3o6UB3VhArvomJHtdK/giphy.gif?cid=646febc5iualkdfuasl2wquj7w7xq5maptpbolbao94z11g3&rid=giphy.gif",
    "https://media1.giphy.com/media/KB2DGt1hu38JgKzXNk/giphy.gif?cid=646febc5no44j4fmjeokfwel6zw0fiy4wakljp11awmyhtbc&rid=giphy.gif",
    "https://media1.giphy.com/media/lnOG1o6Cdc3kKjuray/giphy-downsized.gif?cid=646febc5iualkdfuasl2wquj7w7xq5maptpbolbao94z11g3&rid=giphy-downsized.gif",
    "https://media1.giphy.com/media/kbiM96ZuOSBHm83rJZ/giphy-downsized.gif?cid=646febc5qf2wl857yve3sqhdwlerqnnuth3wpz2kx8nya6q4&rid=giphy-downsized.gif",
    "https://media1.giphy.com/media/ieVltwVIuYQxUV537y/giphy.gif?cid=646febc5qf2wl857yve3sqhdwlerqnnuth3wpz2kx8nya6q4&rid=giphy.gif"
];

const rightimgs = [
    "https://media3.giphy.com/media/J336VCs1JC42zGRhjH/giphy.gif?cid=646febc5iualkdfuasl2wquj7w7xq5maptpbolbao94z11g3&rid=giphy.gif",
    "https://media1.giphy.com/media/f6VfCFyOL5KmiICskp/giphy.gif?cid=646febc5iualkdfuasl2wquj7w7xq5maptpbolbao94z11g3&rid=giphy.gif",
    "https://media4.giphy.com/media/d2ZcfODrNWlA5Gg0/giphy.gif?cid=646febc5jn4epfcu8h8id2o7es4j3wtxtory44581py1upmb&rid=giphy.gif",
    "https://media0.giphy.com/media/HOxMgcCBiCAYo/giphy.gif?cid=646febc5luu5bpjai7l6go7vmh8dulb3v6wd9x8gyxaug3p5&rid=giphy.gif",
    "https://media1.giphy.com/media/26tPlltsuA89RwYww/giphy.gif?cid=646febc5jn4epfcu8h8id2o7es4j3wtxtory44581py1upmb&rid=giphy.gif",
    "https://media1.giphy.com/media/5t04Gq8VNgvdyXJE6b/giphy-downsized.gif?cid=646febc5no44j4fmjeokfwel6zw0fiy4wakljp11awmyhtbc&rid=giphy-downsized.gif",
    "https://media0.giphy.com/media/HOxMgcCBiCAYo/giphy.gif?cid=646febc5luu5bpjai7l6go7vmh8dulb3v6wd9x8gyxaug3p5&rid=giphy.gif"
];

const lefttext = [
    'Absolutely NOT',
    'Absolutely not!',
    'YES!',
    'Absolutely Not!',
    'YES',
    'Yes',
    'Absolutely'
];

const righttext = [
    'yes',
    'yes',
    "No, that's not true",
    'Yes, Defund the Police',
    'No',
    "No, it isn't",
    'No, I do not support the 2nd Amendment'
];

const maxnubmers = 7;

function changetext(li , ri , lt , rt , question , number ) {
    pollquestion.innerText = question;
    // limg.style.backgroundImage = "url('" +  li + "')";
    limg.src = li;
   
    // rimg.style.backgroundImage = "url('"+ ri + "')";
    rimg.src = ri;
    ltext.innerText = lt;
    rtext.innerText = rt;

    pollprogr.innerText = number + " / " + maxnubmers;

}
let ipoll = 0;

function gettext() {

    if (ipoll < 6) {
        ipoll++;
        changetext(leftimgs[ipoll], rightimgs[ipoll], lefttext[ipoll], righttext[ipoll], questions[ipoll], (ipoll + 1));
        topprogress.style.right = (100 - 100 / (7 / (ipoll + 1))) + "%";
    } else {
        document.querySelector(".poll-first").style.display = "none";
        document.querySelector(".calmgift").style.display = "block";
    }


}


lanswer.addEventListener("click", gettext);
ranswer.addEventListener("click", gettext);