import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/app/api/userdata/data.json');

async function readUsersFile() {
  const fileContent = await fs.readFile(dataFilePath, 'utf8');
  return JSON.parse(fileContent);
}

async function writeUsersFile(data) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
}

export async function PUT(req) {
  try {
    const userData = await req.json();
    const data = await readUsersFile();
    const index = data.users.findIndex(user => user.id === userData.id);
    
    if (index !== -1) {
      data.users[index] = {
        ...data.users[index],
        ...userData,
        id: data.users[index].id
      };
      
      await writeUsersFile(data);
      return new Response(JSON.stringify(data.users[index]));
    }
    
    return new Response(JSON.stringify({ error: "المستخدم غير موجود" }), { status: 404 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "خطأ في تحديث البيانات" }), { status: 500 });
  }
} 