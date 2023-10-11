let button = document.querySelector("#listen");
let area = document.querySelector(".area");
let recognition = new webkitSpeechRecognition();

button.addEventListener("click", () => {
    recognition.interimResults = true;

    recognition.addEventListener("result", e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join(' '); // Join the array of transcriptions into a single string

        area.innerHTML = transcript;
    });

    recognition.start();
});

// Code By - Datta Kale 

