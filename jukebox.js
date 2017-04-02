

var playButton = document.getElementById('play');
var stopButton = document.getElementById('stop');
var pauseButton = document.getElementById('pause');
var nextButton = document.getElementById('next');
var backButton = document.getElementById('back');
var audio = document.getElementById('audio')
var i = 0

//Function contains song file path, and song name, and stores them in the arrays.
function Jukebox(){
  this.songs = [];
}

//Adds the song filepath
Jukebox.prototype.addSong = function(song){
  this.songs.push(song);
}
  //Juke Box
  var mattjb = new Jukebox()
   mattjb.addSong("radiohead/01 Everything In Its Right Place.m4a");
   mattjb.addSong("radiohead/02 Kid A.m4a");
   mattjb.addSong("radiohead/03 The National Anthem.m4a");

   Jukebox.prototype.play = function() {
     audio.play();
   }

   Jukebox.prototype.pause = function(){
     audio.pause();
   }

   audio.src = mattjb.songs[i];

   Jukebox.prototype.next = function (){
      i ++
      if(i < mattjb.songs.length){
        audio.pause()
        audio.src = mattjb.songs[i]
        audio.play()
      }else {
        i = 0;
        audio.pause()
        audio.src = mattjb.songs[i]
        audio.play()
      }
   };
   Jukebox.prototype.back = function(){
     i --
     if (i >= 0 ){
       audio.pause()
       audio.src = mattjb.songs[i]
       audio.play()
   }else {
     i = mattjb.songs.length -1;
     audio.pause()
       audio.src = mattjb.songs[i]
       audio.play()

     }
   };


   playButton.addEventListener("click", function(event){
  event.preventDefault();
  mattjb.play();
})

pauseButton.addEventListener("click", function(event){
  event.preventDefault();
  mattjb.pause();
})

nextButton.addEventListener("click", function(event){
  event.preventDefault();
  mattjb.next();
})

backButton.addEventListener("click", function(event){
  event.preventDefault();
  mattjb.back();
})

stopButton.addEventListener("click", function stopAudio(event){
  audio.pause();
  audio.currentTime = 0;

})
