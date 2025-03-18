var menupontok = [
    {
        link: "index.html",
        szoveg: "Kezdőoldal",
        title:"Kezdőoldal"
    },
    {
        link: "tablazat.html",
        szoveg: "Táblázat",
        title:"Kezdőoldal"
    },
    {
        link: "html5.html",
        szoveg: "HTML5",
        title:"Kezdőoldal"
    },
    {
        link: "chartjs.html",
        szoveg: "ChartJS",
        title:"Kezdőoldal"
    },
    {
        link: "ajax.html",
        szoveg: "Ajax",
        title:"Kezdőoldal"
    },
    {
        link: "oojs.html",
        szoveg: "OOJS",
        title:"Kezdőoldal"
    },
    {
        link: "react.html",
        szoveg: "React",
        title:"Kezdőoldal"
    }
];

var menu = new MenuGenerator(menupontok);
menu.run();
menu.logo("fa-solid fa-graduation-cap");