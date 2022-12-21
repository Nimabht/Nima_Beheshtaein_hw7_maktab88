let personData = [
  {
    uid: 1,
    firstName: "Ali",
    lastName: "Mahdavi",
  },
  {
    uid: 2,
    firstName: "Reza",
    lastName: "Shahmardan",
  },
  {
    uid: 3,
    firstName: "Hassan",
    lastName: "Qolami",
  },
  {
    uid: 4,
    firstName: "Morteza",
    lastName: "Hamedani",
  },
  {
    uid: 5,
    firstName: "Sina",
    lastName: "Hejazi",
  },
  {
    uid: 6,
    firstName: "Hadi",
    lastName: "Sadri",
  },
];

let additionalPersonData = [
  {
    uid: 3,
    position: "UI Designer",
    city: "Biarjmand",
  },
  {
    uid: 1,
    position: "Back-End Develope",
    city: "Taleqan",
  },
  {
    uid: 2,
    position: "Front-End Developer",
    city: "Behbahan",
  },
  {
    uid: 4,
    position: "Devops",
    city: "Shiraz",
  },
  {
    uid: 6,
    position: "Server Admin",
    city: "Tehran",
  },
  {
    uid: 5,
    position: "Product Manager",
    city: "Hamedan",
  },
];

let userData = mergeAddtionalData(personData, additionalPersonData);

function getPersonData() {
  return personData;
}
function getAdditionalPersonData() {
  return additionalPersonData;
}

function read() {
  console.table(userData);
}
function create(user) {
  if (typeof user != "object" || Array.isArray(user)) {
    console.log("Creating new user failed! (Invalid input)");
    return;
  }
  //uid is Primary Key
  if (userData.find((person) => person.uid === user.uid)) {
    let flag = prompt("User with this uid exists. generate new id?(Y/N)");
    if (flag === "Y") {
      user.uid = userData.at(-1).uid + 1;
      userData.push(user);
      console.log("New user added!");
      return;
    } else {
      console.log("Adding new user failed!!");
      return;
    }
  }
  userData.push(user);
  console.log("New user added!");
}
function update(selectedUser) {
  if (typeof user != "object" || Array.isArray(user)) {
    console.log("Updating user failed! (Invalid input)");
    return;
  }
  if (!userData.find((person) => person.uid === selectedUser.uid)) {
    console.log("User not found!!");
    return;
  }
  let newUserData = [...userData];
  let indexOfUser = newUserData.findIndex(
    (user) => user.uid === selectedUser.uid
  );
  newUserData[indexOfUser] = selectedUser;
  userData = newUserData;
  console.log("User updated!!");
}
function remove(uid) {
  if (typeof uid != "number") {
    console.log("Removig user failed! (Invalid input)");
    return;
  }
  let newUserData = [...userData];
  newUserData = newUserData.filter((user) => user.uid !== uid);
  userData.length === newUserData.length
    ? console.log("Removing Failed ! (User not found)")
    : console.log("User removed !");

  userData = newUserData;
}
