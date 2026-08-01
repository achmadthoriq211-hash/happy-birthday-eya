const start = document.getElementById("opening");
const container = document.getElementById("container");
const musik = new Audio('./music/musik.mp3');
let isMusicPlaying = false;
start.addEventListener("click", () => {
    if (isMusicPlaying) return;
    musik.play();
    isMusicPlaying = true;
    container.style.display = "block";
});



const playMusic = document.getElementById("playMusic");

playMusic.addEventListener("click", () => {
    if (isMusicPlaying) return;
    musik.play();
    isMusicPlaying = true;

});

// Loading screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            document.getElementById("main").style.display = "block";
        }, 1000);

    }, 2500);
});

// Transition quotes
const transitionQuotes = document.querySelectorAll("#transition .quote");

if (transitionQuotes.length > 0) {
    let currentQuoteIndex = 0;
    const quoteVisibleDuration = 3200;
    const quoteFadeDuration = 800;
    const quotePauseDuration = 500;

    const rotateQuotes = () => {
        const currentQuote = transitionQuotes[currentQuoteIndex];
        const nextQuoteIndex = (currentQuoteIndex + 1) % transitionQuotes.length;
        const nextQuote = transitionQuotes[nextQuoteIndex];

        currentQuote.classList.remove("active");
        currentQuote.classList.add("exit");

        setTimeout(() => {
            currentQuote.classList.remove("exit");
            nextQuote.classList.add("active");
            currentQuoteIndex = nextQuoteIndex;
        }, quoteFadeDuration + quotePauseDuration);
    };

    setInterval(rotateQuotes, quoteVisibleDuration);
}

// Tombol hadiah
const giftButton = document.getElementById("giftButton");

giftButton.addEventListener("click", () => {

    alert("🎂 Selamat Ulang Tahun ke-17, Eya! 🤍\n\nIni baru permulaan. Di update berikutnya, hadiah sesungguhnya akan terbuka.");

    giftButton.innerHTML = "🤍 Thank You";
    giftButton.style.background = "#7c3aed";

});
