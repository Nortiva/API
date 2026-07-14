const API = "/api/dashboard";

async function loadDashboard(){

    try{

        const response = await fetch(API);

        const data = await response.json();

        document.getElementById("company").textContent = data.company;

        document.getElementById("projects").textContent = data.projects;

        document.getElementById("users").textContent = data.users;

        document.getElementById("version").textContent = data.version;

        document.getElementById("apiStatus").textContent = data.status;

        document.getElementById("time").textContent =
        new Date().toLocaleTimeString("pt-BR");

    }

    catch(error){

        document.getElementById("apiStatus").textContent="Offline";

        document.querySelector(".dot").style.background="#ef4444";

        document.querySelector(".dot").style.boxShadow="0 0 10px #ef4444";

    }

}

loadDashboard();

setInterval(loadDashboard,5000);
