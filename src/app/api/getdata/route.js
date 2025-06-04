import { users } from "../userdata/data";

export async function GET() {
    return new Response(JSON.stringify(users));
}

