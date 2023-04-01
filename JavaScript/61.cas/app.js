const getVideos = () => {
    fetch("")
    .then((response)=> response.json())
    .then((response) => {
        const videos = response.Video;
        localStorage.setItem("videos", JSON.stringify(videos));
        const playerId = response.Player.id;
        console.log(videos)
    })
    .catch((err)=> console.log(err));
}

getVideos();

const videos = localStorage.getItem("videos");
jsonVideos = JSON.parse(videos);
const secondVideoImage = jsonVideos[1].image;
image = document.querySelector("#image");
//image.src = secondVideoImage
image.setAttribute("src", secondVideoImage);