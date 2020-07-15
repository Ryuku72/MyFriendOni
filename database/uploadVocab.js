// const fs = require('fs');
// const path = require('path')
// const mongoose = require("mongoose");
// const { quiz } = require('../model')

// function vocabList() {
//     const vocab = fs.readFileSync(path.join(__dirname,"/Book1.csv"))

//     console.log(vocab.toString().split('\n'));
    
//     const vocabArray = (vocab.toString().split('\n')).slice(1);
//     const example = vocabArray[2].split(',')
//     const exampleId = example.slice(0, 1)
//     const exampleJ = example.slice(1, 2)
//     const exampleE = example.slice(2, 3)

//     console.log(exampleId)
//     console.log(exampleJ)
//     console.log(exampleE)

//     for (let index = 0; index < vocabArray.length; index++) {
//         const row = vocabArray[index].split(',')
//         vocabList[index] = {
//         row: row.slice(0, 1),
//         english: row.slice(1, 2),
//         japanese: row.slice(2, 3)
//         }
//     }
// }

// console.log(vocabList)

// mongoose.connect("mongodb://localhost/japanesevocab", {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Database Connected!'))
// .catch(err => {
// console.log(`DataBase Connection Error: ${err.message}`);
// });;

// quiz.findOne({})
//     .then(() => quiz.collection.insertMany([vocabList]))
//     .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);   
//     })
//     .catch(err => {
//     console.error(err);
//     process.exit(1);
// });

"mongoimport --type csv -d quiz -c vocablist --headerline  Book1.csv"
