document.getElementById("s17").addEventListener("touchstart", touchStart);
document.getElementById("s17").addEventListener("touchmove", touchMove);

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
    document.querySelector('input[class="slide-radio17"]').checked = false;
    if (touchEndX < touchStartX) {
        document.querySelector('input[class="slide-radio1"]').checked = true;
    }
    if (touchEndX > touchStartX) {
        document.querySelector('input[class="slide-radio16"]').checked = true;
    }

}
