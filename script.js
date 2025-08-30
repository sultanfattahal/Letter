const message = `I didn't even know you'd read this.\nBut if you do… I just want you to know, I still think about you sometimes.\n\nWe both know that. But the universe never gave us enough space to be "us".\n\nWho knows, maybe one day the universe will give us a second chance... or maybe that's just my own thoughts hahaha.\n\nAnyway, I hope you're okay, although honestly, every little thing that reminds me of you, it feels like it's never over.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);

}