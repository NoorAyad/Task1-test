let helper = require("./helper");

let list = helper.getAllUser();
//console.log(list);

//helper.getFirstUser(list)
//helper.getLast(list)
//helper.getUserByID(list,8)
//helper.getUserByCompanyName(list,"Considine-Lockman")
//helper.deleteUserById(list,1)
//helper.addNewUser(list,{id:11,name:"noor"})
//helper.getUsersByCity(list,"Gwenborough")
//helper.getStreet(list,1);
helper.updateUser(list,8)

