const FAVOURITE_FOOD = process.env.FAVOURITE_FOOD;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log("Containers rule!");
    await sleep(5000);
  }
}

console.log(`My favourite food is ${FAVOURITE_FOOD}`);

main();
