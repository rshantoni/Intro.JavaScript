function changeImage() {
    var image = document.getElementById("smiley"); // Change "image" to "smiley"
    var currentSrc = image.getAttribute("src");
    
    if (currentSrc === "https://pngimg.com/uploads/smiley/smiley_PNG1.png") { // Update the source URL
        image.src = "https://wowjohn.com/wp-content/uploads/2022/05/Sad-Emoji-PNG-Clipart.png"; // Change to the sad image URL
        document.body.style.backgroundColor = "lightcoral";
    } else {
        image.src = "https://pngimg.com/uploads/smiley/smiley_PNG1.png"; // Change to the original smiley image URL
        document.body.style.backgroundColor = "lightblue";
    }
}
