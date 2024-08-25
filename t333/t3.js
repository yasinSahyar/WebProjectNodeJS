document.addEventListener('DOMContentLoaded', () => {
  const kohede = document.querySelector('#target');

  const sivu1 = +prompt('syöta eka sivu');
  const sivu2 = +prompt('syöta toka sivu');
  const sivu3 = +prompt('syöta kolmas sivu');

  console.log((sivu1 === sivu2) === sivu3);

  if ((sivu1 === sivu2) === sivu3) {
      // tasasivuinen
      kohede.innerHTML = 'kolmio on tasasivuinen';
  } else if ((sivu1 !== sivu2) !== sivu3) {
      // epäsäännöllinen
      kohede.innerHTML = 'kolmio on epäsäännöllinen';
  } else {
      kohede.innerHTML = 'kolmio on tasakylkinen';
  }
});
