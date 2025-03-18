// Címkék kinyerése a táblázat fejléceiből (2. oszloptól kezdődően)
function getTableHeaders() {
    let headers = [];
    document.querySelectorAll("#dataTable thead td").forEach((th, index) => {
        if (index > 1) headers.push(th.textContent.trim());
    });
    return headers;
}
document.querySelectorAll("#dataTable tbody tr").forEach(row => {
    row.addEventListener("click", function() {
        let cvc = document.getElementById("cvc");
        cvc.style.display = "block";
        let cells = this.getElementsByTagName("td");
        let labels = getTableHeaders(); // Fejlécből címkék
        let values = [];
        myChart.data = {
            labels: [],
            datasets: [{
                label: cells[0].textContent+" teljesítményadatai",
                data: [],
                borderWidth: 1
            }]
        };
        for (let i = 1; i < cells.length; i++) {
            values.push(parseFloat(cells[i].textContent) || 0);
        }

        // Frissítés Chart.js-ben
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = values;
        myChart.update();
    });
});