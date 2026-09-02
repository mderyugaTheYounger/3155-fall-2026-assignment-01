import fs from 'fs';
export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  const addition = statusMessage.split('\n').map(line => line + new Date().toISOString()).join('\n') + '\n';
  await fs.appendFile(filePath, addition, 'utf-8', function(err, data){});
}
