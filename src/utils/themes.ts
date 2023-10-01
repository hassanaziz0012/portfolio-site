export const multiToggle = (elements: NodeListOf<Element>, classes: string[]) => {
    elements.forEach(elem => {
        classes.forEach(cls => {
            elem.classList.toggle(cls);
        });
    })
}
export const changeToLight = () => {
    const body = document.querySelector("body");
    const faThemeIcon = document.getElementById("faThemeIcon");

    body?.classList.remove('dark');
    faThemeIcon?.classList.remove("fa-moon");
    faThemeIcon?.classList.add("fa-sun");
    multiToggle(document.querySelectorAll('.primary-link'), ['primary-link', 'secondary-link']);
    localStorage.setItem("theme", "light");
}

export const changeToDark = () => {
    const body = document.querySelector("body");
    const faThemeIcon = document.getElementById("faThemeIcon");

    body?.classList.add('dark');
    faThemeIcon?.classList.remove("fa-sun");
    faThemeIcon?.classList.add("fa-moon");
    multiToggle(document.querySelectorAll('.secondary-link'), ['primary-link', 'secondary-link']);
    localStorage.setItem("theme", "dark");
}

export const handleThemeChange = () => {
    const faThemeIcon = document.getElementById("faThemeIcon");

    if (faThemeIcon?.classList.contains("fa-moon")) {
        changeToLight();
    }
    else {
        changeToDark();
    }
}

export const setInitialTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        changeToLight();
    } else {
        changeToDark();
    }
}