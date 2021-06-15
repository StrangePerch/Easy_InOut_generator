let result = document.body.querySelector("#result");
let id = document.body.querySelector("#id");
let inputs = document.body.querySelector("#inputs");
let outputs = document.body.querySelector("#outputs");

function OnTextChanged() {
    result.innerHTML = Generate(id.value, inputs.value, outputs.value);
}

function Generate(id, in_n, out_n) {
    let id_no_spaces = id.replaceAll(" ", "_");
    let markup = `<div id="${id}_container">`;
    markup += `<label id="${id_no_spaces}_label">`;
    
    markup += `/br ${id} ( `;
    for (let i = 0; i < in_n; i++) {
        markup += `value${i + 1}: <input type="text" onchange="OnTextChanged()" id="${id_no_spaces}_input${i + 1}" style="width: 50px">`;
        if(i !== in_n - 1) markup += ", ";
    }
    markup += " )/br";
    markup += `</label>`;
    if(out_n > 0) {
        markup += `<div id="${id_no_spaces}_results">`;
        for (let i = 0; i < out_n; i++) {
            markup += `Result${i + 1}: <span id="${id_no_spaces}_output${i + 1}"></span>`;
            if(i !== out_n - 1) markup += ", ";
        }
        markup += "</div>";
    }
    markup += "</div>";
    markup = markup.replaceAll("<", "&lt");
    markup = markup.replaceAll(">", "&gt<br/>");
    markup = markup.replaceAll("/br", "<br/>");
    return markup;
}

function GetInOuts(id, in_n, out_n) {
    id = id.replaceAll(" ", "_");

    let inputs = [];
    for (let i = 0; i < in_n; i++) {
        inputs.push(document.body.querySelector(`#${id}_input${i + 1}`));
    }
    
    if(out_n === 0) return inputs;
    
    let outputs = [];
    for (let i = 0; i < out_n; i++) {
        outputs.push(document.body.querySelector(`#${id}_output${i + 1}`));
    }
    return {inputs: inputs, outputs: outputs};
}