// Berechne die Datenbank kapazität
function calculation() {
    // Hole Wert aus Textfield "Input"
    let inputValue = document.getElementById('textAreaInput').value;

    // Berechne Datenbank kapazität
    let sum = inputValue * 1024;

    // Hole Wert aus Auswahlbox => Toleranz
    let toleranz = document.getElementById('comboboxToleranz').value;

    // Ziehe von der Summe die Toleranz ab
    let sumfinal = sum - toleranz;

    // Schreibe das Ergebnis sum in das Textfield "Ausgabe"
    let outputField = document.getElementById('textAreaOutput').value += sum;
    // Schreibe das Ergebnis sumfinal in das Textfield "Ausgabe+Toleranz"
    let outputFieldTolerant = document.getElementById('textAreaOutputToleranz').value += sumfinal;
}

// Setze alle Felder zurück
function reset() {
    let inputValue = document.getElementById('textAreaInput').value = "";
    let outputField = document.getElementById('textAreaOutput').value = "";
    let outputFieldTolerant = document.getElementById('textAreaOutputToleranz').value = "";
    let toleranz = document.getElementById('comboboxToleranz').value = "";
    let checkboxToleranz = document.getElementById('checkboxToleranz').checked = false;   
}

// Feature: Add Output Value to Clip to Clipboard
function copytoclipboardOut() {
    // Hole Wert von Ausgabe
    let copyText = document.getElementById('textAreaOutput');

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices


    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
     // Alert the copied text
}

function copytoclipboardOutT() {
    // Hole Wert von Ausgabe
    let copyText = document.getElementById('textAreaOutputToleranz');

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices


    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
     // Alert the copied text
}