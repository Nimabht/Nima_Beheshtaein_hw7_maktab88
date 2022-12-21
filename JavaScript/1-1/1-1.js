function mergeAddtionalData(personData, additionalPersonData) {
  let userData = [];
  for (const person of personData) {
    userData.push({
      ...person,
      ...additionalPersonData.find((data) => data.uid === person.uid),
    });
  }
  return userData;
}
