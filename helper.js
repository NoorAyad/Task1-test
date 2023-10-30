const getAllUser = () => {
  //TODO: Read file and return users here
  let fs = require("fs");
  let temp = fs.readFileSync("./users.json", "UTF-8")
  let AllUser = JSON.parse(temp);
  return AllUser;
};

const getFirstUser = (list) => {
  //TODO: get first user of list
  console.log(list[0]);
};

const getLast = (list) => {
  //TODO: get last user of list

  console.log(list[list.length - 1]);
};

const getUserByID = (list, userID) => {
  //TODO: get user object by id
  console.log(list.find(el => el.id == userID));
};

const getUserByCompanyName = (list, companyName) => {
  //TODO: get user object by company name
  console.log(list.find(el => el.company.name == companyName));

};

const getUsersByCity = (list, cit) => {
  //TODO: get users that live in this city
  console.log(list.find(el => el.city == cit));
};

const getStreet = (list, userID) => {
  //TODO: get street name by userID
  let st =list.find(el => el.id == userID);
  console.log(st.street);
};

const addNewUser = (list, userObject) => {
  //TODO: add new user to the list
  let NewUser = list
  NewUser.push(userObject)
  console.log(NewUser);
};

const updateUser = (list, userID) => {
  //TODO: update email when id === userID
  let Updlist = list;
  let user = Updlist.find(el => el.id === userID);
  user.email = GenerateEmail();
  let userindex = Updlist.findIndex(el => el == userID);
  Updlist[userindex] = user;
  return Updlist;


};

const deleteUserById = (list, userID) => {
  //TODO: remove user when id === userID
  let NewList = list.filter(el => el.id != userID);
  list = NewList;
  console.log(list);
};

//................something I have just learned & want to add (not required)......... //
const GenerateEmail = () => {
  let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  let string = '';
  for (let ii = 0; ii < 15; ii++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  return string + "@gmail.com";
}

module.exports = {
  getAllUser,
  getFirstUser,
  getLast,
  getUserByID,
  getUserByCompanyName,
  getUsersByCity,
  getStreet,
  addNewUser,
  updateUser,
  deleteUserById,
  GenerateEmail,
};
