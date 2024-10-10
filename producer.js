const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async function (line) {
    const [riderName, location] = line.split(" ");
  });

  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        partition: 0,
        key: "location-update",
        value: JSON.stringify({
          name: "Tony Stark",
          loc: "SOUTH"
        })
      }
    ]
  });

  await producer.disconnect();
}

init();
