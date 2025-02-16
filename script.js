document.addEventListener('DOMContentLoaded', function() {

    // Countdown Timer (until his birthday)
    const birthday = new Date("2024-05-03T00:00:00"); // Replace with his birthday! YYYY-MM-DD
    const countdownEl = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();
        const diff = birthday - now;

        if (diff <= 0) {
            countdownEl.innerHTML = "Happy Birthday!";
            document.getElementById('clue1').classList.add('unlocked');
             document.getElementById('clue1').style.cursor = 'pointer';
             document.getElementById('clue1').addEventListener('click', function() {
                    document.getElementById('clue1-content').style.display = 'block';
                });
        } else {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    updateCountdown(); // Initial call
    setInterval(updateCountdown, 1000); // Update every second


   // Clue 1
    const clue1Submit = document.getElementById('clue1-submit');
    if (clue1Submit) {
        clue1Submit.addEventListener('click', function() {
            const answer = document.getElementById('clue1-answer').value.toLowerCase();
            if (answer === "guess") {  // Replace with the correct answer for Clue 1
                document.getElementById('clue2').classList.add('unlocked');
                document.getElementById('clue1-content').style.display = 'none';
                document.getElementById('clue2').style.cursor = 'pointer';
                document.getElementById('clue2').addEventListener('click', function() {
                    document.getElementById('clue2-content').style.display = 'block';
            });
           } else {
               alert("Try again!");
           }
        });
    }
    // Clue 2
    const clue2Submit = document.getElementById('clue2-submit');
    if (clue2Submit) {
        clue2Submit.addEventListener('click', function() {
            const answer = document.getElementById('clue2-answer').value.toLowerCase();
            if (answer === "guess") {  // Replace with the correct answer for Clue 1
            document.getElementById('clue3').classList.add('unlocked');
            document.getElementById('clue2-content').style.display = 'none';
            document.getElementById('clue3').style.cursor = 'pointer';
            document.getElementById('clue3').addEventListener('click', function() {
                document.getElementById('clue3-content').style.display = 'block';
            });
           } else {
             alert("Try again!");
           }
        });
    }


    // Clue 3
    const clue3Submit = document.getElementById('clue3-submit');
    clue3Submit.addEventListener('click', function() {
        const answer = document.getElementById('clue3-answer').value.toLowerCase();
        if (answer === "corfu") { // Correct answer for Clue 3
            document.getElementById('clue4').classList.add('unlocked');
            document.getElementById('clue3-content').style.display = 'none';
             document.getElementById('clue4').style.cursor = 'pointer';
            document.getElementById('clue4').addEventListener('click', function() {
                document.getElementById('clue4-content').style.display = 'block';
            });
        } else {
            alert("Try again!");
        }
    });

    // Clue 4
    const clue4Submit = document.getElementById('clue4-submit');
    clue4Submit.addEventListener('click', function() {
        const answer = document.getElementById('clue4-answer').value.toLowerCase();
        if (answer === "albania") { // Correct answer for Clue 4
            document.getElementById('final-reveal').classList.add('unlocked');
            document.getElementById('clue4-content').style.display = 'none';
             document.getElementById('final-reveal').style.cursor = 'pointer';
            document.getElementById('final-reveal').addEventListener('click', function() {
                document.getElementById('final-reveal-content').style.display = 'block';
            });
        } else {
            alert("Try again!");
        }
    });

});