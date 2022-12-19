document.getElementById("s13").addEventListener("touchstart", touchStart);
document.getElementById("s13").addEventListener("touchmove", touchMove);

function touchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
    }

function touchMove(e) {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleGesture();
    }

function handleGesture() {
    document.querySelector('input[class="slide-radio13"]').checked = false;
    if (touchEndX < touchStartX) {
        document.querySelector('input[class="slide-radio14"]').checked = true;
    }
    if (touchEndX > touchStartX) {
        document.querySelector('input[class="slide-radio12"]').checked = true;
    }

}
