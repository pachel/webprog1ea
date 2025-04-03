// Web Storage példa
$("#saveStorage").on("click", function () {
    const value = $("#storageInput").val();
    localStorage.setItem("example", value);
    alert("Adat mentve!");
});

$("#loadStorage").on("click", function () {
    const value = localStorage.getItem("example");
    $("#storageOutput").text(value ? `Mentett adat: ${value}` : "Nincs mentett adat.");
});

// Web Workers példa
let worker;
$("#startWorker").on("click", function () {
    if (typeof Worker !== "undefined") {
        if (!worker) {
            worker = new Worker("worker.js");
            worker.onmessage = function (event) {
                $("#workerOutput").text(event.data);
            };
        }
        worker.postMessage("Start");
    } else {
        alert("A böngésző nem támogatja a Web Workereket.");
    }
});

// Server-Sent Events példa
if (typeof EventSource !== "undefined") {
    const sse = new EventSource("sse.php");
    sse.onmessage = function (event) {
        $("#sseOutput").text(event.data);
    };
} else {
    $("#sseOutput").text("A böngésző nem támogatja a Server-Sent Events-t.");
}

// Geolocation API példa
// Geolocation API példa
$("#getLocation").on("click", function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                $("#locationOutput").text(`Szélesség: ${latitude}, Hosszúság: ${longitude}`);
            },
            function (error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        $("#locationOutput").text("A helyadatok megosztása megtagadva.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        $("#locationOutput").text("A helyadatok nem érhetők el.");
                        break;
                    case error.TIMEOUT:
                        $("#locationOutput").text("A helyadatok lekérése időtúllépés miatt sikertelen.");
                        break;
                    default:
                        $("#locationOutput").text("Ismeretlen hiba történt.");
                }
            }
        );
    } else {
        $("#locationOutput").text("A böngésző nem támogatja a Geolocation API-t.");
    }
});


// Drag and Drop példa
$("#dragBox").on("dragstart", function (event) {
    event.originalEvent.dataTransfer.setData("text", "dragged");
});

$("#dropZone").on("dragover", function (event) {
    event.preventDefault(); // Engedélyezi a dobást
});

$("#dropZone").on("drop", function (event) {
    event.preventDefault();
    $(this).text("Elem eldobva!");
    $(this).css("background-color", "#d4edda"); // Háttérszín változtatása
});


// Canvas példa
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Téglalap rajzolása
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 150, 100);

// Kör rajzolása
ctx.beginPath();
ctx.arc(250, 100, 50, 0, 2 * Math.PI); // Kör középpontja (250, 100), sugara 50
ctx.fillStyle = "blue";
ctx.fill();
ctx.stroke();

// Navigációs menü működése
$(".nav-link").on("click", function (e) {
    e.preventDefault();
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    $(".example-section").hide();
    $($(this).data("target")).show();
});

// Alapértelmezett szekció megjelenítése
$("#webStorage").show();