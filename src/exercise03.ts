export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  let a = inventory.filter(num => num[1] > 5);
  if(a.length === 0){
    return 0;
  }
  console.log(a);
  return a.reduce((x, y) => x + y[1]*y[2], 0);
}
