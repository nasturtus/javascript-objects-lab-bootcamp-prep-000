var recipes = {
  
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({}, object);
  newObjectject[key] = value;
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

function destructivelyDeleteFromObjectByKey(object, key, value) {
  delete object[key];
  return object;
}