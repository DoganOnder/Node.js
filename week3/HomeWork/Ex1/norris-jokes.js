const fetchNorris = require('node-fetch');

fetchNorris('http://api.icndb.com/jokes/random')
    .then(res => res.json())
    .then(body => console.log(body.value.joke));

    async function f() {

  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // catches errors both in fetch and response.json
    alert(err);
  }
}