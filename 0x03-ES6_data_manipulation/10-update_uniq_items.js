export default function updateUniqueItems(mapArg) {
  if (mapArg instanceof Map) {
    for (const [key, value] of mapArg) {
      if (value === 1) mapArg.set(key, 100);
    }
  } else {
    throw new Error('Cannot process');
  }
}
