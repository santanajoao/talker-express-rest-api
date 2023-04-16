const path = require('path');
const fs = require('fs').promises;

const FILE_PATH = path.resolve(__dirname, '../talker.json');

function JSONfy(data) {
  const INDENTATION = 2;
  return JSON.stringify(data, null, INDENTATION);
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

  await fs.writeFile(FILE_PATH, JSONfy(talkers));
  return newTalker;
}

module.exports = { getTalkers, getTalkerById, addTalker };
