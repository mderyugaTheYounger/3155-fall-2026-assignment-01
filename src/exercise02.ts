import { CustomError } from 'ts-custom-error'

export function transcribeDNA(dna: string): string {
  const complements: Record<char, char> = {
    'A': 'U',
    'T':'A',
    'C':'G',
    'G':'C'
  }
  let ret = '';
  for(const c of dna){
    if (c in complements){
      ret += complements[c];
    }
    else{
      throw new TypeError();
    }
  }
  return ret;
}
