class MenuGenerator{
    menupontok;
    template;
    constructor(menupontokP) {
        this.menupontok = menupontokP;
        this.template = $("#alap").clone();
        this.template.css("visibility","visible");
        this.template.removeAttr("id","none");
    }
    logo(fontawe){
        var l = document.getElementById("logo");
        l.className = fontawe;
    }
    run(){
        let url = document.location.pathname;
        let filename = url.substring(url.lastIndexOf('/')+1);
        if(filename == ""){
            filename = "index.html";
        }
        let nav = document.getElementById("nav");
        for(var elem in this.menupontok){
            let li = document.createElement("li");
            let a = document.createElement("a");
            li.className = "nav-item";
            a.className = "nav-link";
            if(this.menupontok[elem].link == filename){
                //this.template.addClass("active");
                a.className += " active";
                document.title =this.menupontok[elem].title;
            }

            a.innerText = this.menupontok[elem].szoveg;
            a.href = this.menupontok[elem].link;
            li.appendChild(a);
            nav.appendChild(li);
            //$("#nav").append(this.template);

        }
    }
}