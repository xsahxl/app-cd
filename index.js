const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function run(params) {
  await delay(1500);
  console.log(`just a run function: ${JSON.stringify(params)}`);
}

module.exports.default = run;
