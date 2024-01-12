let listen=document.querySelector("#listen");
let area=document.querySelector(".area");
let recognition=new webkitSpeechRecognition();

listen.addEventListener("click",()=>{
    // recognition.interimResults=true;
    recognition.addEventListener("result",e=>{
        const transcript=Array.from(e.results)
         .map(result=>result[0])
         .map(result=>result.transcript)
         .join(" ");

        area.innerHTML=transcript;
    })
   recognition.start();

})