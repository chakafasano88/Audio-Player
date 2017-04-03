var playButton = document.getElementById('play');
var stopButton = document.getElementById('stop');
var pauseButton = document.getElementById('pause');
var nextButton = document.getElementById('next');
var backButton = document.getElementById('back');
var i = 0

//Function contains song file path, and song name, and stores them in the arrays.
function Jukebox(){
  this.song = [];
}

var track = "/tracks/210910118";
var mattjb = new Jukebox()

SC.initialize({client_id: 'fd4e76fc67798bfa742089ed619084a6'})

var stream = new SC.stream(track)

  Jukebox.prototype.play = function() {
    stream.then(function(player){
     // streams the track
     player.play();
   });
 }

 Jukebox.prototype.pause = function() {
   stream.then(function(player){
    // streams the track
    player.pause();
  });
}

play.addEventListener("click", function(event){
  event.preventDefault();
  mattjb.play();
})

pause.addEventListener("click", function(event){
  event.preventDefault();
  mattjb.pause();
})

SC.get(track).then(function(response){
  console.log(response);

  var myDiv = document.getElementById("myDiv")
  document.getElementById("username").innerHTML=[response.user.username]
  document.getElementById("username").setAttribute("href", response.user.permalink_url)
  document.getElementById("title").innerHTML=[response.title]
  document.getElementById("description").innerHTML=[response.description]
  document.getElementById("t").innerHTML=[response.artwork_url]
  document.getElementById("t").setAttribute("href", response.artwork_url)
  console.log("/tracks/210910118");
});
