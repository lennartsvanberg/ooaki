function updateSofaOptions() {
    const sofaSelect = document.getElementById('sofa-select');
    const sofaModelSelect = document.getElementById('sofa-model-select');
    
    const options = {
        dux: ["Dux Fredrik", "Dux Johan"],
        eilersen: ["Eilersen Ash", "Eilersen Lift"],
        fogia: ["Fogia Duni", "Fogia Morris"],
        "annan-soffa": ["Jag har en 3-sits soffa", "Jag har en 2-sits soffa"]
    };

    const selectedSofa = sofaSelect.value;

    if (selectedSofa && options[selectedSofa]) {
        sofaModelSelect.innerHTML = "";
        options[selectedSofa].forEach(model => {
            const option = document.createElement('option');
            option.value = model.toLowerCase().replace(/ /g, '-');
            option.textContent = model;
            sofaModelSelect.appendChild(option);
        });
        sofaModelSelect.style.display = "block";
    } else {
        sofaModelSelect.style.display = "none";
    }
}
