const contacts = require("./contacts");

const getAll = async () => {
  const allContacts = await contacts.listContacts();
  return console.log(allContacts);
};

getAll();
