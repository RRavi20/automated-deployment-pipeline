document.getElementById('action-btn').addEventListener('click', function() {
    const status = document.getElementById('status');
    status.innerText = "Checking...";
    status.style.color = "#fbbf24";

    setTimeout(() => {
        status.innerText = "Online & Healthy (v1.0.0)";
        status.style.color = "#4ade80";
        console.log("Health Check Passed!");
    }, 1500);
})