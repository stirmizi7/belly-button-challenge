document.getElementById("loadDataButton").addEventListener("click", function() {
    fetch("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
        .then(response => response.json())
        .then(data => {
            const dataDisplay = document.getElementById("dataDisplay");
            dataDisplay.innerHTML = "";
            if (data && data.length > 0) {
                data.forEach(item => {
                    const p = document.createElement("p");
                    p.textContent = `Test Subject ID: ${item.id}, Test Subject Age: ${item.age}`;
                    dataDisplay.appendChild(p);
                });
            } else {
                const p = document.createElement("p");
                p.textContent = "No data available";
                dataDisplay.appendChild(p);
            }
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
});
