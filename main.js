var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

var birthdayObject = "";

function new_image() {
    fabric.Image.fromURL('BirthdayImage.jpg', function(img) {
        birthdayObject = img;
        birthdayObject.scaleToWidth(700);
        birthdayObject.scaleToHeight(500);
        birthdayObject.set({ top: 0, left: 0 });
        canvas.add(birthdayObject);
    });
}

function playSound() {
    x.play();
}