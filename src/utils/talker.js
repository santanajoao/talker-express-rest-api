const path = require('path');
const fs = require('fs').promises;

const FILE_PATH = path.resolve(__dirname, '../talker.json');

async function writeTalkersFile(javaScriptData) {
  const INDENTATION = 2;
  const formattedJSON = JSON.stringify(javaScriptData, null, INDENTATION);
  await fs.writeFile(FILE_PATH, formattedJSON);
}

async function getTalkers() {
  const response = await fs.readFile(FILE_PATH);
  return JSON.parse(response);
}

async function getTalkerById(id) {
  const talkers = await getTalkers();
  const requestedTalker = talkers.find((talker) => talker.id === id);
  return requestedTalker;
}

function getNewId(talkers) {
  const lastIndex = talkers.length - 1;
  const lastTalker = talkers[lastIndex];
  return lastTalker.id + 1;
}

async function addTalker(talker) {
  const talkers = await getTalkers();
  const newId = getNewId(talkers);
  const newTalker = { id: newId, ...talker };
  talkers.push(newTalker);

  await writeTalkersFile(talkers);
  return newTalker;
}

async function updateTalker(id, data) {
  const talkers = await getTalkers();
  const targetTalker = talkers.find((talker) => talker.id === id);
  if (!targetTalker) return null;

  if (data.rate) {
    targetTalker.talk.rate = data.rate;
  } else {
    targetTalker.name = data.name;
    targetTalker.age = data.age;
    targetTalker.talk = data.talk;
  }

  await writeTalkersFile(talkers);
  return targetTalker;
}

async function deleteTalker(id) {
  const talkers = await getTalkers();
  const talkersWithoutDeleted = talkers.filter((talker) => talker.id !== id);

  await writeTalkersFile(talkersWithoutDeleted);
}

async function searchTalkers(query, rate, date) {
  let searchResult = await getTalkers();

  if (query) {
    searchResult = searchResult.filter((talker) => talker.name.includes(query));
  }
  
  if (rate) {
    searchResult = searchResult.filter(({ talk }) => talk.rate === rate);
  }
  
  if (date) {
    searchResult = searchResult.filter(({ talk }) => talk.watchedAt === date);
  }

  return searchResult;
}

module.exports = {
  getTalkers,
  getTalkerById,
  addTalker,
  updateTalker,
  deleteTalker,
  searchTalkers,
};
