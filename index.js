const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  await delay(1500);
  console.log("just a run function");
}

module.exports = run;
