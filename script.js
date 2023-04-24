var presentBox = document.getElementById("present-box");
var message = document.getElementById("message");
var video = document.getElementById("video");

presentBox.addEventListener("click", function() {
    presentBox.classList.add("open");
    presentBox.style.display = "none";
    message.style.display = "none";
    video.classList.add("show");
});
