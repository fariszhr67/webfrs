document.addEventListener("DOMContentLoaded", function() {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbzldJW1ciSK-fdE8Wr4MkjBifPEL1et-vuU62UhhqnrhC2lwB5TOp2DFQp2u0eRi20w/exec';
    const displayElement = document.getElementById('bilangan-peserta');

    if (displayElement) {
        displayElement.innerText = "...";
        fetch(scriptUrl)
            .then(response => response.json())
            .then(data => {
                displayElement.innerText = data.jumlah;
            })
            .catch(error => {
                displayElement.innerText = "Ralat";
            });
    }

    const countDownDate = new Date("Aug 15, 2026 08:00:00").getTime();
    const timerDisplay = document.getElementById("timer-display");

    if (timerDisplay) {
        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            if (distance < 0) {
                clearInterval(x);
                timerDisplay.innerHTML = "<p style='color: #ffffff; padding-top: 15px; font-weight: bold;'>PERTANDINGAN BERMULA!</p>";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timerDisplay.innerHTML = `<p style="color: #ffffff; padding-top: 15px; font-size: 1.1rem;">${days} Hari : ${hours} Jam ${minutes} Minit : ${seconds} Saat</p>`;
        }, 1000);
    }
});
