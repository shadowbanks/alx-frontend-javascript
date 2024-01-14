export default function cleanSet(set, startString) {
  let returnOutput = '';
  let check = false;
  for (const item of set) {
    const strLen = startString.length;
    if (startString === item.slice(0, strLen) && startString) {
      if (check) {
        returnOutput += '-';
      } else check = true;
      returnOutput += item.slice(strLen);
    }
  }
  return returnOutput;
}
