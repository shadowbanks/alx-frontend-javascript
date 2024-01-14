export default function iterateThroughObject(reportWithIterator) {
  let names = '';
  let checkFirst = false;
  for (const name of reportWithIterator) {
    if (checkFirst) {
      names += ' | ';
    } else {
      checkFirst = true;
    }
    names += name;
  }
  return names;
}
