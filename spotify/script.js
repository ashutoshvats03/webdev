
var selected = null;
let currentAudio = null;

let folders = []

async function getFolder() {
    let a = await fetch("http://127.0.0.1:3000/spotify/")
    let response = await a.text();
    //console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    for (let i = 0; i < as.length; i++) {
        const element = as[i]
        if (element.href.includes("album")) {
            folders.push(element.href)
        }
    }
    return folders
}


async function getSongs(url) {
    let response = await fetch(`${url}/`); // Ensure proper URL construction with template literals
    let htmlContent = await response.text();

    let div = document.createElement("div");
    div.innerHTML = htmlContent;

    let songs = [];

    // Iterate over anchor elements to find links ending with .mp3
    let as = div.getElementsByTagName("a");
    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }

    console.log(songs); // Log songs array for debugging
    return songs;
}


async function main() {

    let folders = await getFolder()
    console.log(folders);
   
    for (const folder of folders) {
        const albumContainer = document.querySelector(".songList");
        console.log(folder);
        // Create the album elements


        
        let response = await fetch(`${folder}/`); // Ensure proper URL construction with template literals
        let htmlContent = await response.text();

        let div = document.createElement("div");
        div.innerHTML = htmlContent;
        
        let jsonURL = [];
        let data
        let photo=[]
        
        
        // Iterate over anchor elements to find links ending with .mp3
        let as = div.getElementsByTagName("a");
        
        for (let i = 0; i < as.length; i++) {
            const element = as[i];
            
            if (element.href.endsWith(".json")) {
                jsonURL.push(element.href);
                let response = await fetch(`${jsonURL}/`); 
                data = await response.json();
                console.log(data)
            }
            
            if (element.href.endsWith(".jpg")){
                photo.push(element.href);
            }
            
        }

        let albumPhoto = document.createElement("img");
        albumPhoto.src = photo;
        albumPhoto.style.width = "200px";
        albumPhoto.style.height = "200px";

        let albumName = document.createElement("div");
        albumName.className = "albumName";
        albumName.textContent = data.AlbumName

        let albumDescription = document.createElement("div");
        albumDescription.className = "albumDescription";
        albumDescription.textContent = data.Description

        // Create a container for the album
        let album = document.createElement("div");
        album.className = "album";
        album.appendChild(albumPhoto);
        album.appendChild(albumName);
        album.appendChild(albumDescription);

        // Append the album container to the main container
        albumContainer.appendChild(album);

        album.addEventListener("click", async () => {
            document.querySelectorAll(".album").forEach(e => e.style.backgroundColor = "");
            // Set the background color of the clicked song
            album.style.backgroundColor = "rgb(21,21,21)"

            selected = folder

            let songs = await getSongs(selected)
            playMusic(songs[0], true)
            document.querySelector(".duration").innerHTML = "0:00/0.00"

            if (document.querySelector(".song")) {
                document.querySelector(".songs").remove();
            }

            const songList = document.createElement("div");
            songList.className = "songs";

            for (const song of songs) {
                const songN = song.replaceAll("%20", " ").replace("/", "").split("-")[0].split("Telegram/")[1]

                const songA = song.replaceAll("%20", " ").replace("/", "").replace(".mp3", "").split("-")[1]

                const songBlock = document.createElement("div");
                songBlock.className = "song";

                // everytime the song gets added it creats now div for that
                const photoBlock = document.createElement("img");
                photoBlock.className = "photo";
                photoBlock.src = "song.svg"
                photoBlock.style.width = "48px"
                photoBlock.style.height = "48px"
                const infoBlock = document.createElement("div");
                infoBlock.className = "info";
                const songNameDiv = document.createElement("div");
                songNameDiv.textContent = songN;
                const songArtistDiv = document.createElement("div");
                songArtistDiv.textContent = songA;
                infoBlock.appendChild(songNameDiv);
                infoBlock.appendChild(songArtistDiv);

                // Append photo and info blocks to song block
                songBlock.appendChild(photoBlock);
                songBlock.appendChild(infoBlock);


                // Append song block to songs container
                songList.appendChild(songBlock);
                document.querySelector(".down").appendChild(songList)

                songBlock.addEventListener("click", () => {
                    // Reset the background color of all songs

                    document.querySelectorAll(".song").forEach(s => s.style.backgroundColor = "rgb(21,21,21)");
                    // Set the background color of the clicked song
                    songBlock.style.backgroundColor = "#323232";

                    if (currentAudio) {
                        currentAudio.pause();
                        currentAudio.currentTime = 0;
                    }
                    // Play the clicked song
                    playMusic(song, true)
                    currentAudio.play()
                    pause.firstChild.src = "playbtn.svg";

                });
            }

            pause.addEventListener("click", () => {
                if (currentAudio.paused) {
                    currentAudio.play();
                    pause.firstChild.src = "playbtn.svg"; // Update to pause icon when playing
                } else {
                    currentAudio.pause();// Update to play icon when paused 
                    pause.firstChild.src = "pause.svg";
                }
            });
        
            prev.addEventListener("click", () => {
        
                let index = songs.indexOf(currentAudio.src)
                if ((index - 1) === -1) {
                    index = songs.length;
                }
                playMusic(songs[index - 1], false)
            })
            next.addEventListener("click", () => {
        
                let index = songs.indexOf(currentAudio.src)
                playMusic(songs[index + 1], false)
            })
        });
        
   

    hamburger.addEventListener("click", () => {
        document.querySelector('.left').style.left = '0%'
    })

    cross.addEventListener("click", () => {
        document.querySelector('.left').style.left = '-120%'
    })

    document.querySelector(".sliding").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100
        document.querySelector(".ball").style.left = percent + "%"
        currentAudio.currentTime = (percent * currentAudio.duration) / 100
    });
    }



}



function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00/00.00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}


function playMusic(song, flag = false) {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio()
    currentAudio.src = song;
    console.log(currentAudio)

    if (flag === false) {
        currentAudio.play()
    }

    document.querySelector(".songName").lastElementChild.innerHTML = song.replaceAll("%20", " ").replace("/", "").replace(".mp3", "").split("-")[1]
    document.querySelector(".songName").firstElementChild.src = "song.svg"
    document.querySelector(".songName").firstElementChild.style.width = "45px"
    document.querySelector(".songName").firstElementChild.style.height = "45px"


    currentAudio.addEventListener("timeupdate", () => {
        document.querySelector(".duration").innerHTML = formatTime(currentAudio.currentTime) + "/" + formatTime(currentAudio.duration);

        document.querySelector(".ball").style.left = Math.floor((currentAudio.currentTime / currentAudio.duration) * 100) + "%";
    });
}


main()