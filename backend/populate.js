const { MongoClient } = require('mongodb'); // Using native MongoDB driver
const dotenv = require('dotenv');
const godowns = require('./data/godowns'); // Import your godown data
const items = require('./data/items');     // Import your item data

dotenv.config();

async function populateDatabase() {
  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Get the database and collections
    const database = client.db('godown_inventory'); // Ensure the database name is correct
    const godownCollection = database.collection('godowns');
    const itemCollection = database.collection('items');

    // Clear existing collections
    await godownCollection.deleteMany({});
    await itemCollection.deleteMany({});

    // Insert new data
    await godownCollection.insertMany(godowns);
    console.log('Godowns populated successfully.');

    await itemCollection.insertMany(items);
    console.log('Items populated successfully.');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    // Close the connection
    await client.close();
  }
}

// Run the function
populateDatabase();
