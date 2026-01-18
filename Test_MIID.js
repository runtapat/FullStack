function updateInventory(current, newIn) {
  for (const n of newIn) {
    const c = current.find(x => x.name === n.name)
    console.log("dss",n);
    

    if (c) {
      c.quantity += n.quantity
    } else {
      current.push(n)
    }
  }
  return current
}
const currentInventory = [
  { name: 'item1', quantity: 10 },
  { name: 'item2', quantity: 5 },
  { name: 'item3', quantity: 8 }
];

const newInventory = [
  { name: 'item1', quantity: 5 },
  { name: 'item4', quantity: 7 },
  { name: 'item2', quantity: 10 }
];

console.log(updateInventory(currentInventory, newInventory));
// -> [
