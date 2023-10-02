import socialLinks from "./socialLinks";

const emailUrl = socialLinks.filter((link) => link.name === "Email")[0].url;

const navLinks = {
    links: [
        {
            name: "Home",
            url: "/",
            type: "link"
        },
        {
            name: "Contact",
            url: emailUrl,
            type: "link"
        },
        {
            name: "Projects",
            url: "/projects",
            type: "link",
            sublinks: [
                {
                    name: "Lessons With A Native",
                    url: "/projects/lessons-with-a-native",
                    type: "link",
                }
            ]
        },
        {
            name: "Resume",
            url: "/resume.pdf",
            type: "download"
        }
    ]
}

export default navLinks;