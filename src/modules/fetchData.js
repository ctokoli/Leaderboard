const fetchData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0NQTLDwUKNdVrHNcQcSN/scores';
  let result = '';
  try {
    const data = await fetch(url);
    const response = await data.json();
    result = response;
  } catch (error) {
    return error;
  }

  return result;
};

export default fetchData;