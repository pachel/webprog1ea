var menupontok = [
    {
        link: "index.html",
        szoveg: "Kezdőoldal",
        title:"Kezdőoldal"
    },
    {
        link: "crud.html",
        szoveg: "Táblázat",
        title:"Kezdőoldal"
    },
    {
        link: "html5_mod.html",
        szoveg: "HTML5",
        title:"Kezdőoldal"
    },
    {
        link: "chartjs.html",
        szoveg: "ChartJS",
        title:"Kezdőoldal"
    },
    {
        link: "ajax2.html",
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
menu.logo("fa-brands fa-html5");

document.getElementById("nav").innerHTML = `
    <li class="nav-item"><a class="nav-link" href="#" onclick="loadCalculator()">Számológép</a></li>
    <li class="nav-item"><a class="nav-link" href="#" onclick="loadTicTacToe()">Tic Tac Toe</a></li>
`;