const connection = require('./connection');

function formatResult(resultArray) {
  return resultArray.map((talker) => ({
    id: talker.id,
    age: talker.age,
    name: talker.name,
    talk: {
      watchedAt: talker.talk_watched_at,
      rate: talker.talk_rate,
    },
  }));
}

async function getAllTalkers() {
  const [result] = await connection.execute('SELECT * FROM talkers');
  const formatedResult = formatResult(result);
  return formatedResult;
}

module.exports = { getAllTalkers };
