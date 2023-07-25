import { writeFile } from "fs";
import { prisma } from "./client";

export const getAllProjects = async () => {
    const projects = await prisma.project.findMany();
    return projects;
}

function getBufferFromBytes(imageBytes: number[]): Buffer {

    let imageBuffer = new Buffer(imageBytes.length)
    for (let b = 0; b < imageBytes.length; b++) {
        imageBuffer[b] = imageBytes[b]
    }
    return imageBuffer
}
export const createProject = async (
    title: string,
    description: string,
    github_url: string,
    tags: string[],
    main_photo: NodeJS.ArrayBufferView,
    photos: File[]
) => {
    writeFile(`project-images/img.png`, main_photo, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log("Saved image file.")
    })

    // await prisma.recipe.create({
    //     data: {
    //         title,
    //         description,
    //         github_url,
    //         tags,
    //     }
    // })
    return "project-images/img.png";
}

export const createDefaultProjects = async () => {
    console.log("Creating default projects.")
    const title = "PigsCanFly"
    const description = (
        "A small, e-commerce store for buying books and other products. Integrates with Stripe for payment processing.\r\n\r\nI custom-built this for a client so the product types are locked into their requirements, but everything else can easily be reused in a different project.\r\n\r\nTo get this working, you'll only need to add your own Stripe API key in settings.py, apply migrations, and run the project."
        )
    const github_url = "https://github.com/hassanaziz0012/pigscanfly"
    const main_photo = "pigscanfly.png"
    const tags = ["Django", "Stripe", "Ecommerce"]
    await prisma.project.create({
        data: {
            title,
            description,
            github_url,
            main_photo,
            tags
        }
    })
}

export const deleteProject = async (id: number) => {
    await prisma.project.delete({
        where: {
            title: "Lessons With A Native"
        }
    })
}