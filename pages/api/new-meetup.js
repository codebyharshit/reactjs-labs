// import { MongoClient } from "mongodb";

// async function handler(req, res) {
//     if (req.method === 'POST') {
//         const data = req.body;
//         // const {title, image, address, description} = data;

//         const client = await MongoClient.connect('mongodb+srv://harshitagarwal:harshit@cluster0.grkmhpt.mongodb.net/meetups?retryWrites=true&w=majority');
//         const db = client.db();
//         const meetupsCollection = await db.collection('meetups');
//         const result = await meetupsCollection.insertOne(data);
//         console.log(result);
//         client.close();
//         res.status(201).json({ message: 'Meetup inserted!'});
//     }
// }

// export default handler;


import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://maximilian:arlAapzPqFyo4xUk@cluster0.ntrwp.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;