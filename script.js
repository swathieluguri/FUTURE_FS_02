// Get saved leads from localStorage
let leads = JSON.parse(localStorage.getItem("leads")) || [];


// Display all leads
function loadLeads() {

    const list = document.getElementById("leadList");

    list.innerHTML = "";

    leads.forEach((lead, index) => {

        list.innerHTML += `
            <tr>
                <td>${lead.name}</td>

                <td>${lead.email}</td>

                <td>${lead.source}</td>

                <td>${lead.status}</td>

                <td>${lead.notes}</td>

                <td>
                    <button
                        class="delete"
                        onclick="deleteLead(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}


// Add new lead
function addLead() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const source = document.getElementById("source").value.trim();
    const status = document.getElementById("status").value;
    const notes = document.getElementById("notes").value.trim();


    // Check required fields
    if (name === "" || email === "") {

        alert("Please enter Client Name and Email");

        return;
    }


    // Create new lead
    const lead = {
        name: name,
        email: email,
        source: source,
        status: status,
        notes: notes
    };


    // Add lead to array
    leads.push(lead);


    // Save to localStorage
    localStorage.setItem("leads", JSON.stringify(leads));


    // Clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("source").value = "";
    document.getElementById("status").value = "New";
    document.getElementById("notes").value = "";


    // Display updated list
    loadLeads();
}


// Delete lead
function deleteLead(index) {

    if (confirm("Are you sure you want to delete this lead?")) {

        leads.splice(index, 1);

        localStorage.setItem("leads", JSON.stringify(leads));

        loadLeads();
    }
}


// Load leads when page opens
loadLeads();