export function calculateSubjectAverage(subject: string): number {
  const fs = require('fs');
  const data = JSON.parse(fs.readFileSync('./data/gradebook.json'));
  let avg : number = 0;
  let sum : number = 0;
  for(let entry in data){
    if(data[entry].hasOwnProperty(subject)){
      sum += data[entry][subject];
      avg += 1;
    }
  }
  avg = sum / avg;
  if(isNaN(avg)){return 0};
  return avg;
}
