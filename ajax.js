const apiUrl = "http://localhost:3000/api"; // Az API URL-je

// Adatok lekérése és megjelenítése
function fetchData() {
    $.get(`${apiUrl}/data`, function (data) {
        let display = "<ul>";
        let totalHeight = 0;
        let maxHeight = 0;

        data.forEach(item => {
            display += `<li>ID: ${item.id}, Név: ${item.name}, Magasság: ${item.height} cm</li>`;
            totalHeight += item.height;
            if (item.height > maxHeight) maxHeight = item.height;
        });

        display += "</ul>";
        $("#dataDisplay").html(display);

        const avgHeight = (data.length > 0) ? (totalHeight / data.length).toFixed(2) : 0;
        $("#statistics").html(`
            <p>Összmagasság: ${totalHeight} cm</p>
            <p>Átlagmagasság: ${avgHeight} cm</p>
            <p>Legnagyobb magasság: ${maxHeight} cm</p>
        `);
    });
}

// Új adat hozzáadása
$("#createForm").on("submit", function (e) {
    e.preventDefault();
    const name = $("#name").val();
    const height = $("#height").val();

    $.post(`${apiUrl}/data`, { name, height }, function () {
        alert("Adat sikeresen hozzáadva!");
        fetchData();
    });
});

// Adatok betöltése ID alapján
$("#getDataForId").on("click", function () {
    const id = $("#updateId").val();
    $.get(`${apiUrl}/data/${id}`, function (data) {
        $("#updateName").val(data.name);
        $("#updateHeight").val(data.height);
    });
});

// Adat módosítása
$("#updateForm").on("submit", function (e) {
    e.preventDefault();
    const id = $("#updateId").val();
    const name = $("#updateName").val();
    const height = $("#updateHeight").val();

    $.ajax({
        url: `${apiUrl}/data/${id}`,
        method: "PUT",
        data: { name, height },
        success: function () {
            alert("Adat sikeresen módosítva!");
            fetchData();
        }
    });
});

// Adat törlése
$("#deleteData").on("click", function () {
    const id = $("#deleteId").val();

    $.ajax({
        url: `${apiUrl}/data/${id}`,
        method: "DELETE",
        success: function () {
            alert("Adat sikeresen törölve!");
            fetchData();
        }
    });
});

// Oldal betöltésekor adatok lekérése
$(document).ready(function () {
    fetchData();
});