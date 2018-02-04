var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key, value) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject
}