let result = document.body.querySelector("#result");
let id = document.body.querySelector("#id");
let inputs = document.body.querySelector("#inputs");
let outputs = document.body.querySelector("#outputs");

function OnTextChanged() {
    result.innerHTML = Generate(id.value, inputs.value, outputs.value);
}

function Generate(id, in_n, out_n) {
    id = id.replace(" ", "_");
    let markup = `<div id="${id}_container">`;
    markup += `<label id="${id}_label">`;
    
    markup += `/br ${id} ( `;
    for (let i = 0; i < in_n; i++) {
        markup += `<input type="text" onchange="OnTextChanged()" id="${id}_input${i + 1}" style="width: 50px">,`;
    }
    markup += " )/br";
    markup += `</label>`;
    markup += `<div id="${id}_results">`;
    for (let i = 0; i < out_n; i++) {
        markup += `Result${i + 1}: <span id="${id}_output${i + 1}"></span>, `;
    }
    markup += "</div>";
    markup += "</div>";
    markup = markup.replaceAll(">", "&gt");
    markup = markup.replaceAll("<", "<br/>&lt");
    markup = markup.replaceAll("/br", "<br/>");
    return markup;
}

function GetInOuts(id, in_n, out_n) {
    let inputs = [];
    for (let i = 0; i < in_n; i++) {
        inputs.push(document.body.querySelector(`#${id}_input${i + 1}`));
    }
    
    let outputs = [];
    for (let i = 0; i < out_n; i++) {
        outputs.push(document.body.querySelector(`#${id}_output${i + 1}`));
    }
    return {inputs: inputs, outputs: outputs};
}