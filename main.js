let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span class="typewriter">TODO AQUELLO QUE LA MENTE HUMANA PUEDA CONCEBIR Y CREER...SE PUEDE ALCANZAR </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
