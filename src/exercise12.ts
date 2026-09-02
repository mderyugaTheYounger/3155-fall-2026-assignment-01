type RemoteUser = {
  id: number;
  name: string;
  email: string;
};

export async function fetchUserEmails(): Promise<string[]> {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: RemoteUser[] = await data.json();
  return users.map((user) => user.email);
}
