function findOrAdd(array, obj) {
  const match = array.find(o => o.type == obj.type);
  if (!match) {
    array.push(obj);
  }
};

export default findOrAdd;