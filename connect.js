const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();

    console.log("Connected to MongoDB Atlas");

    const db = client.db("mern-auth");
    const collection = db.collection("testUsers");

    const sampleUser = {
      name: "Test User",
      email: "testuser@example.com",
      status: "Inserted via Node.js script"
    };

    const result = await collection.insertOne(sampleUser);
    console.log("Document inserted with ID:", result.insertedId);

    await client.close();
  } catch (err) {
    console.error("Error:", err.message);
  }
}

run();
