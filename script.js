console.log("welcome to spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
 
let songs = [
    {songName: "Tere Vaaste", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Jhoome Jo Pathaan", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Kesariya (From -Brahmastra-)", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Raatan Lambiyan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Lut Gaye (Feat. Emraan Hashmi) Song (2021)", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Pasoori", filePath: "songs/6.mp3", coverPath: "covers/passori.jpeg"},
    {songName: "Kahani Suno", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Srivalli Song (2021), Srivalli", filePath: "songs/8.mp3", coverPath: "covers/srivalli.jpeg"},
    {songName: "Maan Meri Jaan", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tu Hai To Mujhe Phir Aur Kya Chahiye", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"}

] 

songItems.forEach((element, i)=>{

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    // Update Seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 



const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })
}





Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        if(audioElement.paused || audioElement.currentTime<=0){
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex}.mp3`;
            masterSongName.innerHTML = songs[songIndex-1].songName;
            // audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-pause-circle');
        }
        else{
            // makeAllPlays();
            // songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-circle-play');
            // audioElement.src = `songs/${songIndex}.mp3`;
            // masterSongName.innerHTML = songs[songIndex-1].songName;
            // audioElement.currentTime = 0;
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-circle-play');
        }

 
        
    })
})



 document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex >= 10){
            songIndex = 1;
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerHTML = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })


    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex <= 1){
            songIndex = 1;
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerHTML = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
