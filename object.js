class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    console.log(`User ${this.name} created`);
  }
  login() {
    console.log(this.email, "just logged in");
    return this;
  }

  logout() {
    console.log(this.email, "just logged out");
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter(u => {
      return u.email != user.email;
    });
  }
}

var userOne = new User("ryu@ninjas.com", "Ryu");
var userTwo = new User("yoshi@ninjas.com", "Yoshi");
var admin = new Admin("shaun@ninjas.com", "shaun");

var users = [userOne, userTwo, admin];

console.log("User before", users);

admin.deleteUser(userTwo);

console.log("Users after", users);
