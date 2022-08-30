function choice(items) {
  const rand = Math.floor(Math.random() * items.length);
  return items[rand];
}

function remove(items, item) {
  return items.filter((i) => i !== item);
}

export { choice, remove };
