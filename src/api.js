const list = document.querySelector('.scores');

export const display = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1WjHZNMPhymXrSt0JsIP/scores/'
  )
    .then((response) => response.json())
    .then((json) => {
      list.innerHTML = ` `;
      for (let i = 0; i < json.result.length; i += 1) {
        const item = document.createElement('li');
        item.classList.add('users');
        item.textContent = `${json.result[i].user} : ${json.result[i].score}`;
        list.appendChild(item);
      }
    });
};

export const addList = async () => {
  const user = document.getElementById('user').value;
  const score = document.getElementById('score').value;
  if (user === '' || score === '') {
    const error = document.getElementById('error');
    error.textContent = 'Please add user and score';
  } else {
    error.innerHTML = '';
    await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1WjHZNMPhymXrSt0JsIP/scores/',
      {
        method: 'POST',
        body: JSON.stringify({
          user,
          score: score,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    ).then((response) => response.json());

    display();
    document.getElementById('user').value = '';
    document.getElementById('score').value = '';
  }
};

export const refresh = () => {
  list.innerHTML = '';
  display();
};
