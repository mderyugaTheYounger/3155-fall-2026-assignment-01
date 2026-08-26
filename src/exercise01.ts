export function formatName(
  firstName: string,
  lastName: string,
  middleName?: string | null,
): string {
  let ret = lastName + ', ' + firstName;
  if(middleName){
    ret += ' ' + middleName[0] + '.';
  }

  return ret; 
}
