const bookModel = require("../models/bookModel.js");
const mongoose = require("mongoose");
const authorModel = require("../models/authorModel.js");
const publishermodel = require("../models/publishermodel.js");

const createBook = async function (req, res) {
  const data = req.body;
  let getauthor = req.body.author
  let getpublisher = req.body.publisher
  let publisherbyreq = await publishermodel.findById(getpublisher)
  let authorfromreq = await authorModel.findById(getauthor)
  if(authorfromreq && publisherbyreq){
  let savedBook = await bookModel.create(data);
  res.send({ data : savedBook });
  }
  else
  {
      res.send("the author is not valid ")
  }
};

const getBooks = async function (req, res) {
  let allBooks = await bookModel.find().populate('author').populate('publisher');
  res.send({ msg: allBooks });
};

/*const getBook = async function (req, res) {
  let book = await bookModel.findOne (  {sales: {$gt: 5000000} });
//   if (book.length != 0 ) {
    if (book ) { // any value present (except falsey) gets evaluated as true... null, 0  automatically defaults to false
      console.log("HI I FOUND A BOOK")
  }
  else console.log("NO BOOK FOUND")
  res.send( book );
};
*/


module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
//module.exports.getBook = getBook;

