var menupontok = [
    {
        link: "index.html",
        szoveg: "Kezdőoldal",
        title:"Kezdőoldal"
    },
    {
        link: "crud.html",
        szoveg: "Táblázat",
        title:"Crud"
    },
    {
        link: "html5_mod.html",
        szoveg: "HTML5",
        title:"HTML5 elemei"
    },
    {
        link: "chartjs.html",
        szoveg: "ChartJS",
        title:"ChartJS"
    },
    {
        link: "ajax2.html",
        szoveg: "Ajax",
        title:"Ajax"
    },
    {
        link: "oojs.html",
        szoveg: "OOJS",
        title:"Objektum Orientált JavaScript"
    },
    {
        link: "react.html",
        szoveg: "React",
        title:"React oldal"
    }
   
];



var menu = new MenuGenerator(menupontok);
menu.run();
menu.logo("fa-brands fa-html5");
/*
document.getElementById("nav").innerHTML = `
    <li class="nav-item"><a class="nav-link" href="#" onclick="loadCalculator()">Számológép</a></li>
    <li class="nav-item"><a class="nav-link" href="#" onclick="loadTicTacToe()">Tic Tac Toe</a></li>
`;*/