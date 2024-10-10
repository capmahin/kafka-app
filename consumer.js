const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });
  await consumer.connect();

  await consumer.subscribe({ topics: ["rider-updates"] });
}
