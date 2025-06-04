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

export async function GET() {
  try {
    const data = await readUsersFile();
    return new Response(JSON.stringify(data.users));
  } catch (error) {
    return new Response(JSON.stringify({ error: "خطأ في قراءة البيانات" }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const user = await req.json();
    const data = await readUsersFile();
    
    const newUser = {
      id: data.users.length + 1,
      name: user.name,
      email: user.email,
      phone: user.phone
    };
    
    data.users.push(newUser);
    await writeUsersFile(data);

    return new Response(JSON.stringify(newUser));
  } catch (error) {
    return new Response(JSON.stringify({ error: "خطأ في حفظ البيانات" }), { status: 500 });
  }
} 