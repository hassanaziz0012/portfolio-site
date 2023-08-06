import { readFile, writeFile } from "fs";
import { prisma } from "../../../../prisma/db/client";

const toArrayBuffer = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
})

export async function POST(request: Request) {
    const formdata = await request.formData()
    
    const mainPhoto = toArrayBuffer(formdata.get("main_photo"));
    console.log(mainPhoto);
    // if (mainPhoto) {
    //     writeFile("photo.png", , (err) => {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         console.log("File saved.")
    //     })
    
    //     // const project = await prisma.project.create({
    //     //     data: {
    //     //         title: data.title,
    //     //         description: data.description,
    //     //         github_url: data.github_url,
    //     //         live_url: data.live_url,
    //     //         featured: data.featured,
    //     //     }
    //     // })
    // }
    return new Response(JSON.stringify({'status': true}))
}