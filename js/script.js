if (window.SimpleAnime) {
new SimpleAnime();
}

if (window.SimpleSlide) {
new SimpleSlide({
  slide: 'principal', // nome do atributo data-slide="principal"
  auto: true, // se o slide deve passar automaticamente
  time: 6000, // tempo de transição dos slides
  pauseOnHover: true, // pausa a transição automática
})
new SimpleSlide({
  slide: 'mobile', // nome do atributo data-slide="principal"
  auto: true, // se o slide deve passar automaticamente
  time: 3000, // tempo de transição dos slides
  pauseOnHover: true, // pausa a transição automática
});
}

new SimpleSlide({
  slide: 'sobre', // nome do atributo data-slide="principal"
  auto: true, // se o slide deve passar automaticamente
  time: 5000, // tempo de transição dos slides
  pauseOnHover: true, // pausa a transição automática
});
