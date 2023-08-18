import { writeFile } from "fs";
import { prisma } from "./client";

export const getAllProjects = async () => {
    const projects = await prisma.project.findMany();
    return projects;
}

export const getFeaturedProjects = async () => {
    const projects = await prisma.project.findMany({
        where: {
            featured: true
        }
    })
    return projects;
}

export const getProject = async (id) => {
    const project = await prisma.project.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return project;
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

    return "project-images/img.png";
}

export const editProject = async (
    id: number | any,
    title: string,
    description: string,
    github_url: string,
    live_url: string,
    tags: string[],
    main_photo: string,
    photos?: File[]
) => {
    const result = await prisma.project.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title,
            description,
            github_url,
            live_url,
            tags,
            main_photo
        }
    })
    return result;
}

export const createDefaultProjects = async () => {
    console.log("Creating default projects.")
    const resp = await fetch('http://localhost:3000/backup.json');
    const data = await resp.json();
    const projects = data.projects;
    for (let i = 0; i < projects.length; i++) {
        const proj = projects[i];
        const result = await prisma.project.upsert({
            where: {
                title: proj.title
            },
            update: {
                title: proj.title,
                description: proj.description,
                github_url: proj.github_url,
                live_url: proj.live_url,
                main_photo: proj.main_photo,
                tags: proj.tags,
                featured: proj.featured
            },
            create: {
                title: proj.title,
                description: proj.description,
                github_url: proj.github_url,
                live_url: proj.live_url,
                main_photo: proj.main_photo,
                tags: proj.tags,
                featured: proj.featured
            }
        })
        console.log(result);
    }
}

export const deleteProject = async (id: number) => {
    await prisma.project.delete({
        where: {
            title: "Lessons With A Native"
        }
    })
}