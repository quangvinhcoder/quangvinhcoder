const express = require("express");
const contacts = require("../controllers/contact.controller");

const router = express.Router();

// Create a new contact
router
  .route("/")
  .post(contacts.create)
  .get(contacts.findAll)
  .delete(contacts.deleteAll);

// Retrieve a single contact with id
router
  .route("/:id")
  .get(contacts.findOne)
  .put(contacts.update)
  .delete(contacts.delete);

// Retrieve all favorite contacts
router.route("/favorite").get(contacts.findAllFavorite);

module.exports = router;
