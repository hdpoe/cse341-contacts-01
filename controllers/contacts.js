const mongo = require('../db/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  console.log("HERE!")
  const result = await mongo.getDatabase().db().collection('contacts').find();
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  });
};

const getContact = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongo.getDatabase().db().collection('contacts').find({_id: userId });
  result.toArray().then((contacts) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts[0]);
  });
}

module.exports = {
  getAll,
  getContact
}
