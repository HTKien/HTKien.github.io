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