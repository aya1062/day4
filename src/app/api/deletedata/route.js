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

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    const data = await readUsersFile();
    const index = data.users.findIndex(user => user.id === id);
    
    if (index !== -1) {
      data.users.splice(index, 1);
      await writeUsersFile(data);
      return new Response(JSON.stringify({ message: "تم حذف المستخدم بنجاح" }));
    }
    
    return new Response(JSON.stringify({ error: "المستخدم غير موجود" }), { status: 404 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "خطأ في حذف البيانات" }), { status: 500 });
  }
} 