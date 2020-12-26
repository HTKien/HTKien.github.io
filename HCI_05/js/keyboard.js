window.addEventListener('load', _ => {
    captureKeys();
});

function captureKeys() {
    window.addEventListener('keydown', e => {
        e.preventDefault();
        console.log(e.code);
        const key = e.code;
        const keyboardKey = document.querySelector(`.keyboard div[data-key="${key}"`);
        if (keyboardKey) {
            keyboardKey.classList.add('active');
        }
    });
    window.addEventListener('keyup', e => {
        e.preventDefault();
        const key = e.code;
        const keyboardKey = document.querySelector(`div[data-key="${key}"`);
        if (keyboardKey) {
            keyboardKey.classList.remove('active');
        }
    });
}

// hàng 1
document.getElementsByClassName("key-1")[0].onmouseenter = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-1")[0].onmouseleave = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-2")[0].onmouseenter = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-2")[0].onmouseleave = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-3")[0].onmouseenter = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-3")[0].onmouseleave = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-4")[0].onmouseenter = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-4")[0].onmouseleave = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-5")[0].onmouseenter = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-5")[0].onmouseleave = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-6")[0].onmouseenter = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-6")[0].onmouseleave = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-7")[0].onmouseenter = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-7")[0].onmouseleave = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-8")[0].onmouseenter = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-8")[0].onmouseleave = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-9")[0].onmouseenter = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-9")[0].onmouseleave = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-0")[0].onmouseenter = function() {
    document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-0")[0].onmouseleave = function() {
        document.getElementsByClassName("key-first-R")[0].style.backgroundColor = "#333333";
    }
    //hàng 2:
document.getElementsByClassName("key-q")[0].onmouseenter = function() {
    document.getElementsByClassName("key-s-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-q")[0].onmouseleave = function() {
    document.getElementsByClassName("key-s-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-w")[0].onmouseenter = function() {
    document.getElementsByClassName("key-k-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-w")[0].onmouseleave = function() {
    document.getElementsByClassName("key-k-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-e")[0].onmouseenter = function() {
    document.getElementsByClassName("key-r-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-e")[0].onmouseleave = function() {
    document.getElementsByClassName("key-r-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-r")[0].onmouseenter = function() {
    document.getElementsByClassName("key-n-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-r")[0].onmouseleave = function() {
    document.getElementsByClassName("key-n-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-t")[0].onmouseenter = function() {
    document.getElementsByClassName("key-h-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-t")[0].onmouseleave = function() {
    document.getElementsByClassName("key-h-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-u")[0].onmouseenter = function() {
    document.getElementsByClassName("key-*-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-u")[0].onmouseleave = function() {
    document.getElementsByClassName("key-*-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-i")[0].onmouseenter = function() {
    document.getElementsByClassName("key-w-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-i")[0].onmouseleave = function() {
    document.getElementsByClassName("key-w-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-o")[0].onmouseenter = function() {
    document.getElementsByClassName("key-j-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-o")[0].onmouseleave = function() {
    document.getElementsByClassName("key-j-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-p")[0].onmouseenter = function() {
    document.getElementsByClassName("key-n-R")[1].style.backgroundColor = "red";
}
document.getElementsByClassName("key-p")[0].onmouseleave = function() {
    document.getElementsByClassName("key-n-R")[1].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-bracket-open")[0].onmouseenter = function() {
    document.getElementsByClassName("key-t-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-bracket-open")[0].onmouseleave = function() {
        document.getElementsByClassName("key-t-R")[0].style.backgroundColor = "#333333";
    }
    //hang 3:
document.getElementsByClassName("key-a")[0].onmouseenter = function() {
    document.getElementsByClassName("key-t-R")[1].style.backgroundColor = "red";
}
document.getElementsByClassName("key-a")[0].onmouseleave = function() {
    document.getElementsByClassName("key-t-R")[1].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-s")[0].onmouseenter = function() {
    document.getElementsByClassName("key-p-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-s")[0].onmouseleave = function() {
    document.getElementsByClassName("key-p-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-d")[0].onmouseenter = function() {
    document.getElementsByClassName("key-h-R")[1].style.backgroundColor = "red";
}
document.getElementsByClassName("key-d")[0].onmouseleave = function() {
    document.getElementsByClassName("key-h-R")[1].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-f")[0].onmouseenter = function() {
    document.getElementsByClassName("key-n-R")[2].style.backgroundColor = "red";
}
document.getElementsByClassName("key-f")[0].onmouseleave = function() {
    document.getElementsByClassName("key-n-R")[2].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-g")[0].onmouseenter = function() {
    document.getElementsByClassName("key-s-R")[1].style.backgroundColor = "red";
}
document.getElementsByClassName("key-g")[0].onmouseleave = function() {
    document.getElementsByClassName("key-s-R")[1].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-j")[0].onmouseenter = function() {
    document.getElementsByClassName("key-i-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-j")[0].onmouseleave = function() {
    document.getElementsByClassName("key-i-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-k")[0].onmouseenter = function() {
    document.getElementsByClassName("key-y-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-k")[0].onmouseleave = function() {
    document.getElementsByClassName("key-y-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-l")[0].onmouseenter = function() {
    document.getElementsByClassName("key-j-R")[1].style.backgroundColor = "red";
}
document.getElementsByClassName("key-l")[0].onmouseleave = function() {
    document.getElementsByClassName("key-j-R")[1].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-punctuation")[0].onmouseenter = function() {
    document.getElementsByClassName("key-g-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-punctuation")[0].onmouseleave = function() {
    document.getElementsByClassName("key-g-R")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-quote")[0].onmouseenter = function() {
    document.getElementsByClassName("key-k-R")[1].style.backgroundColor = "red";
}
document.getElementsByClassName("key-quote")[0].onmouseleave = function() {
    document.getElementsByClassName("key-k-R")[1].style.backgroundColor = "#333333";
}

//hang 4: 
document.getElementsByClassName("key-c")[0].onmouseenter = function() {
    document.getElementsByClassName("key-u-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-c")[0].onmouseleave = function() {
    document.getElementsByClassName("key-u-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-v")[0].onmouseenter = function() {
    document.getElementsByClassName("key-o-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-v")[0].onmouseleave = function() {
    document.getElementsByClassName("key-o-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-n")[0].onmouseenter = function() {
    document.getElementsByClassName("key-e-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-n")[0].onmouseleave = function() {
    document.getElementsByClassName("key-e-R")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-m")[0].onmouseenter = function() {
    document.getElementsByClassName("key-a-R")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-m")[0].onmouseleave = function() {
    document.getElementsByClassName("key-a-R")[0].style.backgroundColor = "#333333";
}

//nguoc lai:
//hang 1:
document.getElementsByClassName("key-first-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-1")[0].style.backgroundColor = "red";
    document.getElementsByClassName("key-2")[0].style.backgroundColor = "red";
    document.getElementsByClassName("key-3")[0].style.backgroundColor = "red";
    document.getElementsByClassName("key-4")[0].style.backgroundColor = "red";
    document.getElementsByClassName("key-5")[0].style.backgroundColor = "red";
    document.getElementsByClassName("key-6")[0].style.backgroundColor = "red";
    document.getElementsByClassName("key-7")[0].style.backgroundColor = "red";
    document.getElementsByClassName("key-8")[0].style.backgroundColor = "red";
    document.getElementsByClassName("key-9")[0].style.backgroundColor = "red";
    document.getElementsByClassName("key-0")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-first-R")[0].onmouseleave = function() {
        document.getElementsByClassName("key-1")[0].style.backgroundColor = "#333333";
        document.getElementsByClassName("key-2")[0].style.backgroundColor = "#333333";
        document.getElementsByClassName("key-3")[0].style.backgroundColor = "#333333";
        document.getElementsByClassName("key-4")[0].style.backgroundColor = "#333333";
        document.getElementsByClassName("key-5")[0].style.backgroundColor = "#333333";
        document.getElementsByClassName("key-6")[0].style.backgroundColor = "#333333";
        document.getElementsByClassName("key-7")[0].style.backgroundColor = "#333333";
        document.getElementsByClassName("key-8")[0].style.backgroundColor = "#333333";
        document.getElementsByClassName("key-9")[0].style.backgroundColor = "#333333";
        document.getElementsByClassName("key-0")[0].style.backgroundColor = "#333333";
    }
    // hang 2:
document.getElementsByClassName("key-s-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-q")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-s-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-q")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-k-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-w")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-k-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-w")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-r-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-e")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-r-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-e")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-n-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-r")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-n-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-r")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-h-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-t")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-h-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-t")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-*-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-u")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-*-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-u")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-w-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-i")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-w-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-i")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-j-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-o")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-j-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-o")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-n-R")[1].onmouseenter = function() {
    document.getElementsByClassName("key-p")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-n-R")[1].onmouseleave = function() {
    document.getElementsByClassName("key-p")[0].style.backgroundColor = "#333333";
}
document.getElementsByClassName("key-t-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-bracket-open")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-t-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-bracket-open")[0].style.backgroundColor = "#333333";
}

//hang 3:
document.getElementsByClassName("key-t-R")[1].onmouseenter = function() {
    document.getElementsByClassName("key-a")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-t-R")[1].onmouseleave = function() {
    document.getElementsByClassName("key-a")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-p-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-s")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-p-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-s")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-h-R")[1].onmouseenter = function() {
    document.getElementsByClassName("key-d")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-h-R")[1].onmouseleave = function() {
    document.getElementsByClassName("key-d")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-n-R")[2].onmouseenter = function() {
    document.getElementsByClassName("key-f")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-n-R")[2].onmouseleave = function() {
    document.getElementsByClassName("key-f")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-s-R")[1].onmouseenter = function() {
    document.getElementsByClassName("key-g")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-s-R")[1].onmouseleave = function() {
    document.getElementsByClassName("key-g")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-i-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-j")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-i-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-j")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-y-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-k")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-y-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-k")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-j-R")[1].onmouseenter = function() {
    document.getElementsByClassName("key-l")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-j-R")[1].onmouseleave = function() {
    document.getElementsByClassName("key-l")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-g-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-punctuation")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-g-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-punctuation")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-k-R")[1].onmouseenter = function() {
    document.getElementsByClassName("key-quote")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-k-R")[1].onmouseleave = function() {
    document.getElementsByClassName("key-quote")[0].style.backgroundColor = "#333333";
}

//hang 4: 
document.getElementsByClassName("key-u-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-c")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-u-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-c")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-o-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-v")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-o-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-v")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-e-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-n")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-e-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-n")[0].style.backgroundColor = "#333333";
}

document.getElementsByClassName("key-a-R")[0].onmouseenter = function() {
    document.getElementsByClassName("key-m")[0].style.backgroundColor = "red";
}
document.getElementsByClassName("key-a-R")[0].onmouseleave = function() {
    document.getElementsByClassName("key-m")[0].style.backgroundColor = "#333333";
}




//Xử lý onclick:
// hàng 1:
//Phím ngã:

$("#fullpage").keydown(function(event) {
    if (event.keyCode === 192) {
        $("#192").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 192) {
        $("#192").css("background-color", "rgb(155, 155, 155)");
    }


});

//Phim so 1:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 49) {
        $("#49").css("background-color", "red");
        $("#49_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 49) {
        $("#49").css("background-color", "#333333");
        $("#49_").css("background-color", "#333333");
    }


});
//Phim so 2:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 50) {
        $("#50").css("background-color", "red");
        $("#49_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 50) {
        $("#50").css("background-color", "#333333");
        $("#49_").css("background-color", "#333333");
    }


});
//Phim so 3:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 51) {
        $("#51").css("background-color", "red");
        $("#49_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 51) {
        $("#51").css("background-color", "#333333");
        $("#49_").css("background-color", "#333333");
    }


});
//Phim so 4:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 52) {
        $("#52").css("background-color", "red");
        $("#49_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 52) {
        $("#52").css("background-color", "#333333");
        $("#49_").css("background-color", "#333333");
    }


});
//Phim so 5:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 53) {
        $("#53").css("background-color", "red");
        $("#49_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 53) {
        $("#53").css("background-color", "#333333");
        $("#49_").css("background-color", "#333333");
    }


});

//Phim so 6:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 54) {
        $("#54").css("background-color", "red");
        $("#49_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 54) {
        $("#54").css("background-color", "#333333");
        $("#49_").css("background-color", "#333333");
    }


});

//Phim so 7:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 55) {
        $("#55").css("background-color", "red");
        $("#49_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 55) {
        $("#55").css("background-color", "#333333");
        $("#49_").css("background-color", "#333333");
    }


});

//Phim so 8:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 56) {
        $("#56").css("background-color", "red");
        $("#49_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 56) {
        $("#56").css("background-color", "#333333");
        $("#49_").css("background-color", "#333333");
    }


});
//Phim so 9:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 57) {
        $("#57").css("background-color", "red");
        $("#49_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 57) {
        $("#57").css("background-color", "#333333");
        $("#49_").css("background-color", "#333333");
    }


});
//Phim so 0:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 48) {
        $("#48").css("background-color", "red");
        $("#49_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 48) {
        $("#48").css("background-color", "#333333");
        $("#49_").css("background-color", "#333333");
    }


});

//Phim dau -
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 189) {
        $("#189").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 189) {
        $("#189").css("background-color", " rgb(155, 155, 155)");
    }
});

//Phim dau +
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 187) {
        $("#187").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 187) {
        $("#187").css("background-color", " rgb(155, 155, 155)");
    }
});

//Phim xoa:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 8) {
        $("#8").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 8) {
        $("#8").css("background-color", " rgb(155, 155, 155)");
    }
});
//hang 2:
//Phim tab
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 9) {
        $("#9").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 9) {
        $("#9").css("background-color", " rgb(155, 155, 155)");
    }
});

//Phim Q
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 81) {
        $("#81").css("background-color", "red");
        $("#81_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 81) {
        $("#81").css("background-color", "#333333");
        $("#81_").css("background-color", "#333333");
    }


});

//Phim W
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 87) {
        $("#87").css("background-color", "red");
        $("#87_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 87) {
        $("#87").css("background-color", "#333333");
        $("#87_").css("background-color", "#333333");
    }


});

//Phim E
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 69) {
        $("#69").css("background-color", "red");
        $("#69_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 69) {
        $("#69").css("background-color", "#333333");
        $("#69_").css("background-color", "#333333");
    }


});
//Phim R
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 82) {
        $("#82").css("background-color", "red");
        $("#82_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 82) {
        $("#82").css("background-color", "#333333");
        $("#82_").css("background-color", "#333333");
    }


});
//Phim T
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 84) {
        $("#84").css("background-color", "red");
        $("#84_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 84) {
        $("#84").css("background-color", "#333333");
        $("#84_").css("background-color", "#333333");
    }


});

//phim U
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 85) {
        $("#85").css("background-color", "red");
        $("#85_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 85) {
        $("#85").css("background-color", "#333333");
        $("#85_").css("background-color", "#333333");
    }


});

//Phim I
// $("#fullpage").keydown(function(event) {
//     if (event.keyCode === 73) {
//         $("#73").css("background-color", "red");
//         $("#73_").css("background-color", "red");
//     }


// });
// $("#fullpage").keyup(function(event) {
//     if (event.keyCode === 73) {
//         $("#73").css("background-color", "#333333");
//         $("#73_").css("background-color", "#333333");
//     }


// });

//Phim O
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 79) {
        $("#79").css("background-color", "red");
        $("#79_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 79) {
        $("#79").css("background-color", "#333333");
        $("#79_").css("background-color", "#333333");
    }


});

//Phim P
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 80) {
        $("#80").css("background-color", "red");
        $("#80_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 80) {
        $("#80").css("background-color", "#333333");
        $("#80_").css("background-color", "#333333");
    }


});
//Phim [
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 219) {
        $("#219").css("background-color", "red");
        $("#219_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 219) {
        $("#219").css("background-color", "#333333");
        $("#219_").css("background-color", "#333333");
    }


});
//Phim Y
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 89) {
        $("#89").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 89) {
        $("#89").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim }
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 221) {
        $("#221").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 221) {
        $("#221").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim \
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 220) {
        $("#220").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 220) {
        $("#220").css("background-color", " rgb(155, 155, 155)");
    }
});

//hang 3:
//Phim caplock
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 20) {
        $("#20").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 20) {
        $("#20").css("background-color", " rgb(155, 155, 155)");
    }
});

//Phim A
// $("#fullpage").keydown(function(event) {
//     if (event.keyCode === 65) {
//         $("#65").css("background-color", "red");
//         $("#65_").css("background-color", "red");
//     }


// });
// $("#fullpage").keyup(function(event) {
//     if (event.keyCode === 65) {
//         $("#65").css("background-color", "#333333");
//         $("#65_").css("background-color", "#333333");
//     }


// });
//phim S
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 83) {
        $("#83").css("background-color", "red");
        $("#83_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 83) {
        $("#83").css("background-color", "#333333");
        $("#83_").css("background-color", "#333333");
    }


});

//Phim D
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 68) {
        $("#68").css("background-color", "red");
        $("#68_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 68) {
        $("#68").css("background-color", "#333333");
        $("#68_").css("background-color", "#333333");
    }


});
//Phim F
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 70) {
        $("#70").css("background-color", "red");
        $("#70_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 70) {
        $("#70").css("background-color", "#333333");
        $("#70_").css("background-color", "#333333");
    }


});

//Phim G
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 71) {
        $("#71").css("background-color", "red");
        $("#71_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 71) {
        $("#71").css("background-color", "#333333");
        $("#71_").css("background-color", "#333333");
    }


});
//Phim J
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 74) {
        $("#74").css("background-color", "red");
        $("#74_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 74) {
        $("#74").css("background-color", "#333333");
        $("#74_").css("background-color", "#333333");
    }


});
//Phim K
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 75) {
        $("#75").css("background-color", "red");
        $("#75_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 75) {
        $("#75").css("background-color", "#333333");
        $("#75_").css("background-color", "#333333");
    }


});

//Phim L
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 76) {
        $("#76").css("background-color", "red");
        $("#76_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 76) {
        $("#76").css("background-color", "#333333");
        $("#76_").css("background-color", "#333333");
    }


});

//Phim ;
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 186) {
        $("#186").css("background-color", "red");
        $("#186_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 186) {
        $("#186").css("background-color", "#333333");
        $("#186_").css("background-color", "#333333");
    }


});
//Phim '
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 222) {
        $("#222").css("background-color", "red");
        $("#222_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 222) {
        $("#222").css("background-color", "#333333");
        $("#222_").css("background-color", "#333333");
    }


});
//Phim H
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 72) {
        $("#72").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 72) {
        $("#72").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim enter:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 13) {
        $("#13").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#13").css("background-color", " rgb(155, 155, 155)");
    }
});

//hang 4:
//Phim Shift left:
$("#fullpage").keydown(function(e) {

    if (e.shiftKey) {
        if (event.location == 1) {
            $("#16").css("background-color", "red");
        }
    }

});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 16) {
        $("#16").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim Z
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 90) {
        $("#90").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 90) {
        $("#90").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim X
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 88) {
        $("#88").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 88) {
        $("#88").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim B
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 66) {
        $("#66").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 66) {
        $("#66").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim ,
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 188) {
        $("#188").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 188) {
        $("#188").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim .
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 190) {
        $("#190").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 190) {
        $("#190").css("background-color", " rgb(155, 155, 155)");
    }
});

//Phim /
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 191) {
        $("#191").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 191) {
        $("#191").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim C
// $("#fullpage").keydown(function(event) {
//     if (event.keyCode === 67) {
//         $("#67").css("background-color", "red");
//         $("#67_").css("background-color", "red");
//     }


// });
// $("#fullpage").keyup(function(event) {
//     if (event.keyCode === 67) {
//         $("#67").css("background-color", "#333333");
//         $("#67_").css("background-color", "#333333");
//     }


// });
//Phim V
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 86) {
        $("#86").css("background-color", "red");
        $("#86_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 86) {
        $("#86").css("background-color", "#333333");
        $("#86_").css("background-color", "#333333");
    }


});
//Phim N
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 78) {
        $("#78").css("background-color", "red");
        $("#78_").css("background-color", "red");
    }


});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 78) {
        $("#78").css("background-color", "#333333");
        $("#78_").css("background-color", "#333333");
    }


});
//Phim M
// $("#fullpage").keydown(function(event) {
//     if (event.keyCode === 77) {
//         $("#77").css("background-color", "red");
//         $("#77_").css("background-color", "red");
//     }


// });
// $("#fullpage").keyup(function(event) {
//     if (event.keyCode === 77) {
//         $("#77").css("background-color", "#333333");
//         $("#77_").css("background-color", "#333333");
//     }


// });
//Phim Shift right:
$("#fullpage").keydown(function(e) {

    if (e.shiftKey) {
        if (event.location == 2) {
            $("#16_R").css("background-color", "red");
        }
    }

});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 16) {
        $("#16_R").css("background-color", " rgb(155, 155, 155)");
    }
});
//hang 5:
//Phim Ctrl Left:
$("#fullpage").keydown(function(e) {
    if (e.ctrlKey) {
        if (event.location == 1) {
            $("#17").css("background-color", "red");
        }
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 17) {
        $("#17").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim Ctrl Right:
$("#fullpage").keydown(function(e) {
    if (e.ctrlKey) {
        if (event.location == 2) {
            $("#17_R").css("background-color", "red");
        }
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 17) {
        $("#17_R").css("background-color", " rgb(155, 155, 155)");
    }
});


//Phim window left:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 91) {
        $("#91").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 91) {
        $("#91").css("background-color", " rgb(155, 155, 155)");
    }
});

//PHim window right:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 92) {
        $("#92").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 92) {
        $("#92").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim sontext menu:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 93) {
        $("#93").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 93) {
        $("#93").css("background-color", " rgb(155, 155, 155)");
    }
});
//Phim space:
$("#fullpage").keydown(function(event) {
    if (event.keyCode === 32) {
        $("#32").css("background-color", "red");
    }
});
$("#fullpage").keyup(function(event) {
    if (event.keyCode === 32) {
        $("#32").css("background-color", " rgb(155, 155, 155)");
    }
});


//LỊCH SỬ GÕ:
// $("#fullpage").keydown(function(event) {
//     if ((event.keyCode === 81) && (event.keyCode === 87)) {
//         var a;
//         a = "S K";

//         var node = document.createElement("LI");
//         var textnode = document.createTextNode(a);
//         node.appendChild(textnode);
//         document.getElementById("log-press").appendChild(node);
//     }
// });
var checkCtrl = false
$('#go').keydown(function(e) {
    if (e.keyCode == '86') {
        checkCtrl = true
    }
}).keyup(function(ev) {
    if (ev.keyCode == '86') {
        checkCtrl = false;
        document.getElementById('73').style.backgroundColor = "#333333";
        document.getElementById('73_').style.backgroundColor = "#333333";
    }
}).keydown(function(event) {
    if (checkCtrl) {
        if (event.keyCode == '73') {
            document.getElementById('73').style.backgroundColor = "#43E36F";
            document.getElementById('73_').style.backgroundColor = "#43E36F";
            //$("#go").append("ê ");
            document.getElementById("go").value += " ê";
            //ghi log
            var today = new Date();
            var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            var a;
            a = date + " " + time + " " + "OE";

            var node = document.createElement("LI");
            var textnode = document.createTextNode(a);
            node.appendChild(textnode);


            document.getElementById("log-press").appendChild(node);
            checkCtrl = false
        }
    }
});



//Tổ hợp phím thường T M -> Tốc ký: H A -> Kết quả: ha

$('#go').keydown(function(e) {
    if (e.keyCode == '84') {
        checkCtrl = true
    }
}).keyup(function(ev) {
    if (ev.keyCode == '84') {
        checkCtrl = false
        document.getElementById('77').style.backgroundColor = "#333333";
        document.getElementById('77_').style.backgroundColor = "#333333";
    }
}).keydown(function(event) {
    if (checkCtrl) {
        if (event.keyCode == '77') {
            document.getElementById('77').style.backgroundColor = "#43E36F";
            document.getElementById('77_').style.backgroundColor = "#43E36F";
            // $("#go").append("ha ");
            document.getElementById("go").value += " ha";


            //ghi log
            var today = new Date();
            var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            var a;
            a = date + " " + time + " " + "HA";

            var node = document.createElement("LI");
            var textnode = document.createTextNode(a);
            node.appendChild(textnode);


            document.getElementById("log-press").appendChild(node);
            checkCtrl = false
        }
    }
});


//Tổ hợp phím thường Q A  -> Kết quả: xoay

$('#go').keydown(function(e) {
    if (e.keyCode == '81') {
        checkCtrl = true
    }
}).keyup(function(ev) {
    if (ev.keyCode == '81') {
        checkCtrl = false;
        document.getElementById('65').style.backgroundColor = "#333333";
        document.getElementById('65_').style.backgroundColor = "#333333";
        document.getElementById('67').style.backgroundColor = "#333333";
        document.getElementById('67_').style.backgroundColor = "#333333";
        document.getElementById('79').style.backgroundColor = "#333333";
        document.getElementById('79_').style.backgroundColor = "#333333";
        document.getElementById('80').style.backgroundColor = "#333333";
        document.getElementById('80_').style.backgroundColor = "#333333";
        document.getElementById('76').style.backgroundColor = "#333333";
        document.getElementById('76_').style.backgroundColor = "#333333";
    }
}).keydown(function(event) {
    if (checkCtrl) {
        if (event.keyCode == '65') {
            document.getElementById('65').style.backgroundColor = "#0084F3";
            document.getElementById('65_').style.backgroundColor = "#0084F3";
            document.getElementById('67').style.backgroundColor = "#F6C23E";
            document.getElementById('67_').style.backgroundColor = "#F6C23E";
            document.getElementById('79').style.backgroundColor = "#F200DA";
            document.getElementById('79_').style.backgroundColor = "#F200DA";
            document.getElementById('80').style.backgroundColor = "#00FBFF";
            document.getElementById('80_').style.backgroundColor = "#00FBFF";
            document.getElementById('76').style.backgroundColor = "#43E36F";
            document.getElementById('76_').style.backgroundColor = "#43E36F";
            // $("#go").append("ha ");
            document.getElementById("go").value += " xoay";


            //ghi log
            var today = new Date();
            var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            var a;
            a = date + " " + time + " " + "ST-U-JN";

            var node = document.createElement("LI");
            var textnode = document.createTextNode(a);
            node.appendChild(textnode);


            document.getElementById("log-press").appendChild(node);
            checkCtrl = false
        }
    }
});

window.setInterval(function() {
    var elem = document.getElementById('ma');
    elem.scrollTop = elem.scrollHeight;
}, 0);