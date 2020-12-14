var myGamePiece;

function startGame(b) {
    b = b + 340;
    myGamePiece = new component(40, 40, "/img/smiley.gif", 110, b, "image");
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 260;
        this.canvas.height = 380;
        this.context = this.canvas.getContext("2d");
        //document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        document.getElementById("game").insertBefore(this.canvas, document.getElementById("game").childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

function move(dir) {
    myGamePiece.image.src = "/img/angry.gif";
    if (dir == "up") {
        myGamePiece.speedY = -5;
    }
    if (dir == "down") { myGamePiece.speedY = 1; }
    if (dir == "left") { myGamePiece.speedX = -1; }
    if (dir == "right") { myGamePiece.speedX = 1; }
}

function clearmove() {
    myGamePiece.image.src = "/img/smiley.gif";
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
}
startGame(0);

// $("#fullpage").keydown(function(event) {
//     if (event.keyCode === 81) {
//         $("#btn-up").mousedown();
//     }
// });
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 81) {
        startGame(-50);
        document.getElementsByClassName("game1")[0].textContent = "Âm đầu t";
        document.getElementsByClassName("game3")[0].textContent = "Phím gợi ý A";
        $("#fullpage").keyup(function(event) {
            if (event.keyCode === 65) {
                startGame(-100);
                document.getElementsByClassName("game1")[0].textContent = "Âm đầu k";
                document.getElementsByClassName("game3")[0].textContent = "Phím gợi ý W";

                $("#fullpage").keyup(function(event) {
                    if (event.keyCode === 87) {
                        startGame(-150);
                        document.getElementsByClassName("game1")[0].textContent = "Âm đầu c";
                        document.getElementsByClassName("game3")[0].textContent = "Phím gợi ý W";
                        $("#fullpage").keyup(function(event) {
                            if (event.keyCode === 87) {
                                startGame(-200);
                                document.getElementsByClassName("game1")[0].textContent = "Âm đầu h";
                                document.getElementsByClassName("game3")[0].textContent = "Phím gợi ý T";

                                $("#fullpage").keyup(function(event) {
                                    if (event.keyCode === 84) {
                                        startGame(-250);
                                        document.getElementsByClassName("game1")[0].textContent = "Âm đầu r";
                                        document.getElementsByClassName("game3")[0].textContent = "Phím gợi ý E";

                                        $("#fullpage").keyup(function(event) {
                                            if (event.keyCode === 69) {
                                                startGame(-300);
                                                document.getElementsByClassName("game1")[0].textContent = "Âm đầu b";
                                                document.getElementsByClassName("game3")[0].textContent = "Phím gợi ý S";

                                                $("#fullpage").keyup(function(event) {
                                                    if (event.keyCode === 83) {
                                                        startGame(-340);
                                                        document.getElementsByClassName("game1")[0].textContent = "Âm đầu b";
                                                        document.getElementsByClassName("game3")[0].textContent = "Phím gợi ý S";
                                                        $("#btn-next-game").click();

                                                    }
                                                });

                                            }
                                        });

                                    }
                                });

                            }
                        });

                    }
                });

            }
        });


    }

});