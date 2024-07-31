const typingEffect = document.querySelectorAll('.typingEffect');
typingEffect.innerHTML = "";
const text = "Web Developer.";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    typingEffect.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 200);
  } else {
    index = 0;
    typingEffect.innerHTML = '';
    setTimeout(typeWriter, 200);
  }
}
typeWriter();