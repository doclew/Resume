

const theme = (background, text, accent, bar, hover, scrollbarHover) => ({
    background: background,
    text: text,
    accent: accent,
    bar: bar,
    hover: hover,
    scrollbarHover: scrollbarHover,
})




const lightTheme = theme('#ece9e4', '#263238', '#009688', '#b6c2bb', '#263238','#27bdae',);
const darkTheme = theme('#2C3E50', '#ECF0F1', '#E74C3C', '#d49e98', '#f0bfb9', '#fb796e',);


const btn = document.getElementById("circle");



let isDarkTheme = false;

function toggleTheme() {

    isDarkTheme = !isDarkTheme;

    const selectTheme = isDarkTheme?darkTheme:lightTheme;

    const buttonTheme = document.getElementById("btn");
    buttonTheme.classList.toggle('clicked', isDarkTheme);

    document.documentElement.style.setProperty('--background', selectTheme.background);
    document.documentElement.style.setProperty('--text', selectTheme.text);
    document.documentElement.style.setProperty('--accent', selectTheme.accent);
    document.documentElement.style.setProperty('--bar', selectTheme.bar);
    document.documentElement.style.setProperty('--hover', selectTheme.hover);
    document.documentElement.style.setProperty('--scrollbarHover', selectTheme.scrollbarHover);


}



