const { kafka } = require("./client");

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  await producer.send({
    topic: ""
  });
}
