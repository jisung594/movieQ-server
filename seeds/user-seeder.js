const User = require('../models/user.js')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieDatabase')
const db = mongoose.connection
db.collection('users').remove({})

let usersData = [
  {
    id: 1,
    first_name: "Jonathan",
    last_name: "Choi",
    username: "jisung594",
    queue: []
  }
]

let users = usersData.map(userObj => {
  return new User({
    id: userObj["id"],
    first_name: userObj["first_name"],
    last_name: userObj["last_name"],
    username: userObj["username"],
    queue: userObj["queue"]
  })
})

let done = 0;
for (let i = 0; i < users.length; i++) {
  users[i].save(function(err, result) {
      done++;
      if (done === users.length) {
          exit();
      }
  });
}

function exit() {
  mongoose.disconnect()
}
