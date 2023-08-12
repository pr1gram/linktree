<style>
.head-text {
    margin: auto;
    text-align: center;
    color: white;
    padding: 10px;
    font-size: 60px;
  }
.sub-text {
    margin: auto;
    text-align: center;
    color: white;
    padding: 10px;
    font-size: 30px;
  }
.background {
background: rgb(214,191,134);
background: linear-gradient(0deg, rgba(214,191,134,1) 0%, rgba(255,202,188,1) 100%);
position: fixed; 
top: 0px; 
left: 0px; 
width: 100%; 
height: 100%;
z-index: -1;
}
.profile {
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  image-rendering: auto;
  width: 100px;
  display: block ;
}

.center{
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.up-center{
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.button{    
  cursor: pointer;  
  font-size: 30px;  
  border-radius: 20px;
  width: 70%;    
  background-color: white; 
  margin: 0;
  position: absolute;
  left: 50%;
  -ms-transform: translate(-50%,);
  transform: translate(-50%);
  padding-top: 10px;
  padding-bottom: 10px;
  border: solid;
  border-width: 2px;
  border-color: rgb(255, 255, 255);
  transition: 0.3s;
  z-index: 2;
  text-align: center;
}
.button:hover{
  background-color: rgba(255, 255, 255, 0);
}

.icon{
  width: 40px;
  position: absolute;
  left: 10%;
  top: 15%;
}
@media (max-width: 767px) {
        .hidden-mobile {
          display: none;
          
        }
      }

a {
    text-decoration:none;
    font-family:Arial;
    display: block;
    color: black;
    text-align: center;
}


</style>

<div class="background"></div>
<img class="profile"  src={profile} alt="My profile">

<p class="head-text">@pr_gram</p>
<p class="sub-text">welcome to my linktree</p>
<div class="up-center">
  <button class="button" >
    <img src={igIcon} alt="igIcon" class="icon hidden-mobile"> 
    <a href="https://www.instagram.com/program_na" target="_blank"> Instagram</a>
  </button>
</div>
<div class="center">
  <button class="button">
    <img src={spotifyIcon} alt="igIcon" class="icon hidden-mobile"> 
    <a href="https://open.spotify.com/playlist/4UM1jeGGaljaejbiIz2NDH?si=df70e4ef8447420e" target="_blank"> Spotify Playlist</a>
  </button>
</div>
<div class="center">
  <button class="button">
    <img src={youtubeIcon} alt="igIcon" class="icon hidden-mobile"> 
    <a href="https://www.youtube.com/@pr_gram" target="_blank"> Youtube</a>
  </button>
</div>
<div class="center">
  <button class="button">
    <img src={twitchIcon} alt="igIcon" class="icon hidden-mobile"> 
    <a href="https://www.twitch.tv/pr_gram" target="_blank"> Twitch</a>
  </button>
</div>
<div class="center">
  <button class="button">
    <a href="https://program-shitpost.vercel.app" target="_blank"> shit post</a>
  </button>
</div>
<script>
  import profile from '$lib/img/eevee-sylvy.png';
  import igIcon from '$lib/img/Instagram-Icon.png';
  import spotifyIcon from '$lib/img/spotify-icon.png';
  import youtubeIcon from '$lib/img/youtube-icon.png';
  import twitchIcon from '$lib/img/twitch-icon.png';
</script>    