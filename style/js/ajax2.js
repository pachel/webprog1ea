const apiUrl = "http://gamf.nhely.hu/ajax2/"; // Az API URL-je
const apiKey = "P91Q2XaDY145";
var data = [];

// Adatok lekérése és megjelenítése




function fetchData() {
    $.post(`${apiUrl}`, {
        code: apiKey,
        op: "read"
    }, function (fromNJE) {
        data = fromNJE.list;
        setTimeout(function (){
            refreshTable();
        },500);
    },"json");
}
function refreshTable() {
    let tbody = $("#dataTable tbody");
    tbody.text(" ");
    data.forEach((item, index) => {
        tbody.append(`<tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.height}</td>
                    <td>${item.weight}</td>                    
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editRow(${index})">Szerkesztés</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteRow(${item.id})">Törlés</button>
                    </td>
                </tr>`);
    });
}

$("#Add").on("click", function (event) {
    let g = this;
    event.preventDefault();
    let name = $("#name").val();
    let height = $("#height").val();
    let weight = $("#weight").val();

    $.post(`${apiUrl}`, {
        code: apiKey,
        op: "create",
        name: name,
        height: height,
        weight: weight,
        code: apiKey,
    }, function () {
        document.getElementById("editForm").reset();
        fetchData();
        g.reset();
    });
});

function editRow(index) {
    let id = data[index].id;
    let name = prompt("Új név:", data[index].name);
    let height = prompt("Új Magasság:", data[index].height);
    let weight = prompt("Új Súly:", data[index].weight);

    $.post(`${apiUrl}`, {
        code: apiKey,
        op: "update",
        name: name,
        id: id,
        height: height,
        weight: weight,
        code: apiKey,
    }, function () {
        fetchData();
    });
}

function deleteRow(index) {
    if (confirm("Biztos törölni szeretné?")) {
        $.post(`${apiUrl}`, {
            code: apiKey,
            op: "delete",
            id: index,
            code: apiKey
        }, function () {
            fetchData();
        });
    }
}

function sortTable(column) {
    data.sort((a, b) => {
        let valA = Object.values(a)[column];
        let valB = Object.values(b)[column];
        return valA > valB ? 1 : -1;
    });
    refreshTable();
}

$("#search").on("input", function () {
    let value = $(this).val().toLowerCase();
    $("#dataTable tbody tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});

$(document).ready(function () {
    fetchData();

});