import { editProject, getProject } from "../../../../../prisma/db/project";

export async function GET(request: Request, { params }) {
    const project = await getProject(params.id)
    return new Response(JSON.stringify(project))
}

export async function POST(request: Request) {
    const data = await request.json()
    const result = await editProject(data.id, data.title, data.description, data.github_url, data.live_url, data.tags, data.main_photo)
    return new Response(JSON.stringify({"result": result}))
}