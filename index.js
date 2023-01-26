const app = require('express')()
const { MongoClient } = require('mongodb')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://admin:admin@mongodb:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'myProject'

app.listen(3001, () => {
  console.log('App is listening')
})

async function main() {
  // Use connect method to connect to the server
  await client.connect()
  console.log('Connected successfully to server')
  const db = client.db(dbName)
  const collection = db.collection('documents')

  // the following code examples can be pasted here...

  return 'done.'
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close())
