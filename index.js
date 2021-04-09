import MongoClient from 'mongodb';

const URL = 'mongodb+srv://mmckenzie:pUfx7uJ13xFvvPul@cluster0.oewwc.mongodb.net/';

MongoClient.connect(URL, {useUnifiedTopology: true})
.then(async connection => {
  const database = connection.db('sample_airbnb')
  const collection = database.collection('listingsAndReviews')
  const cursor = collection.find({
    price: {
      $lte: 200
    },
    review_scores: {
      $gte : 99 
    },
    beds: {
      $gte : 5
    }
  })

  if ((await cursor.count()) === 0) {
    console.log("No documents found!");
    connection.close()
  } else {
    cursor.forEach(document => console.log(document.name), () => connection.close())
  }

})
.catch(err => console.log(err))
