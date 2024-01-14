export default function cleanSet(set, startString) {
  let returnOutput = '';
  const strLen = startString.length;
  let check = false;
  if (!startString || !strLen) return '';

  for (const item of set) {
    if (startString === item.slice(0, strLen)) {
      if (check) {
        returnOutput += '-';
      } else check = true;

      if (item !== startString) returnOutput += item.slice(strLen);
    }
  }
  return returnOutput;
}
