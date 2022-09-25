const getJoke = require("./test");
const core = require("@actions/core");

async function run() {
  const test = await startTests();
  console.log(test);
  core.setOutput("test-output", test);
}

run();
