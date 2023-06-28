import fetchData from './fetchData.js';

const renderData = async () => {
  const refresh = document.querySelector('.refresh');
  const data = await fetchData();
  const table = document.querySelector('.table');
  table.innerHTML = '';
  let placeholder = '';
  data.forEach((score) => {
    placeholder += `
        <tr>
            <td>${score.user}: ${score.score}</td>
        </tr>
        `;
  });

  table.innerHTML = placeholder;

  refresh.addEventListener('click', () => {
    renderData();
  });
};

export default renderData;