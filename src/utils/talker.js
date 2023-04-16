const path = require('path');
const fs = require('fs').promises;

const FILE_PATH = path.resolve(__dirname, '../talker.json');

function JSONfy(data) {
  const INDENTATION = 2;
  return JSON.stringify(data, null, INDENTATION);
}

async function writeTalkersFile(javaScriptData) {
  await fs.writeFile(FILE_PATH, JSONfy(javaScriptData));
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
  const talkerIndex = talkers.findIndex((talker) => talker.id === id);
  if (talkerIndex === -1) {
    return null;
  }

  const newTalker = { ...data, id };
  talkers[talkerIndex] = newTalker;
  await writeTalkersFile(talkers);

  return newTalker;
}

async function deleteTalker(id) {
  const talkers = await getTalkers();
  const talkersWithoutDeleted = talkers.filter((talker) => talker.id !== id);

  await writeTalkersFile(talkersWithoutDeleted);
}

async function filterByRate(talkers, rate) {
  const filterResult = talkers.filter(({ talk }) => talk.rate === rate);
  return filterResult;
}

async function filterByName(talkers, name) {
  const filterResult = talkers.filter((talker) => talker.name.includes(name));
  return filterResult;
}

async function searchTalkers(query, rate) {
  let searchResult = await getTalkers();

  if (query) {
    searchResult = await filterByName(searchResult, query);
  }
  
  if (rate) {
    searchResult = await filterByRate(searchResult, Number(rate));
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
