const postData = () => {
  const form = document.getElementById('form');
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0NQTLDwUKNdVrHNcQcSN/scores';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    score.value = '';
    name.value = '';
  });
};

export default postData;