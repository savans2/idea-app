/**
 * Chops obj in chunks
 * @param {obj} obj 
 * @param {integer} size
 * @returns {array} 
 */
export function chunkObj(obj, size) {
  const tempArray = [];
  let chunk = [];

  if (obj) {
    Object.keys(obj).forEach((key, i) => {
      if (chunk.length === size) {
        tempArray.push(chunk)
        chunk = []
      }
      chunk.push(obj[key]);
    })

    if (chunk.length !== 0) {
      tempArray.push(chunk);
    }
  }


  return tempArray;
}