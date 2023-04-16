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

module.exports = { getTalkers };
