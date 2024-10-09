const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["http://192.168.0.102:9092"]
});

async function Infinity() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Admin Connection Success....");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2
      }
    ]
  });
}
