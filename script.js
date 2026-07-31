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

// Tombol hadiah
const giftButton = document.getElementById("giftButton");

giftButton.addEventListener("click", () => {

    alert("🎂 Selamat Ulang Tahun ke-17, Eya! 🤍\n\nIni baru permulaan. Di update berikutnya, hadiah sesungguhnya akan terbuka.");

    giftButton.innerHTML = "🤍 Thank You";
    giftButton.style.background = "#7c3aed";

});
