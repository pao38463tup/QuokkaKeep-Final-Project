/* ========================================
   QUOKKAKEEP JAVASCRIPT
======================================== */


/* ---------- Add Record Form ---------- */

function showForm() {
    const form = document.getElementById("recordForm");

    if (form) {
        form.style.display = "block";
        form.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function hideForm() {
    const form = document.getElementById("recordForm");

    if (form) {
        form.style.display = "none";
    }
}


/* ---------- Add Record ---------- */

function addRecord(event) {

    event.preventDefault();

    const itemName =
        document.getElementById("itemName").value;

    const category =
        document.getElementById("category").value;

    const type =
        document.getElementById("type").value;

    const person =
        document.getElementById("person").value;

    const borrowDate =
        document.getElementById("borrowDate").value;

    const returnDate =
        document.getElementById("returnDate").value;


    const newRecord = {
        itemName: itemName,
        category: category,
        type: type,
        person: person,
        borrowDate: borrowDate,
        returnDate: returnDate,
        status: "Active"
    };


    console.log("New QuokkaKeep record:");
    console.log(newRecord);


    alert(
        "🐹 Record saved!\n\n" +
        itemName +
        " has been added to QuokkaKeep."
    );


    document.querySelector("form").reset();
}


/* ---------- Search Records ---------- */

function searchRecords() {

    const input =
        document.getElementById("searchInput");

    if (!input) {
        return;
    }

    const searchText =
        input.value.toLowerCase();

    const cards =
        document.querySelectorAll(".record-card");


    cards.forEach(function(card) {

        const text =
            card.textContent.toLowerCase();

        if (text.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


/* ---------- Calculate Status ---------- */

function calculateStatus(returnDate, completed) {

    if (completed) {
        return "Completed";
    }

    const today = new Date();
    const dueDate = new Date(returnDate);

    const difference =
        dueDate - today;

    const days =
        difference / (1000 * 60 * 60 * 24);


    if (dueDate < today) {
        return "Overdue";
    }

    if (days <= 3) {
        return "Due Soon";
    }

    return "Active";
}


/* ---------- Demo ---------- */

console.log("🐹 QuokkaKeep loaded!");
console.log("Hi! I'm Koko. Let's keep everything organized!");

/* ---------- Mark Record as Done ---------- */

function markDone(button) {

    const card = button.closest(".record-card");

    const status = card.querySelector(".status");

    status.textContent = "Completed";
    status.className = "status completed";

    button.textContent = "✓ Completed";
    button.disabled = true;

    card.style.borderColor = "#76b982";

    alert("🐹 Great job! This record has been completed!");
}


/* ---------- Remove Record ---------- */

function removeRecord(button) {

    const card = button.closest(".record-card");

    const itemName =
        card.querySelector("h3").textContent;

    const confirmDelete =
        confirm(
            "Are you sure you want to remove " +
            itemName +
            "?"
        );

    if (confirmDelete) {
        card.remove();

        alert(
            "🗑️ " +
            itemName +
            " has been removed."
        );
    }
}


/* ---------- Edit Record ---------- */

function editRecord(button) {

    const card = button.closest(".record-card");

    const itemName =
        card.querySelector("h3").textContent;

    const newName =
        prompt(
            "Edit the item name:",
            itemName
        );

    if (newName !== null && newName.trim() !== "") {

        card.querySelector("h3").textContent =
            newName.trim();

        alert("✏️ Record updated!");
    }
}