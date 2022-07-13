function showHideCode() {
    var input_thing = document.getElementById('input-password-wrapper');
    input_thing.style.display = 'none';

    var input = document.getElementById('password');
    var input_text = input.value;
    console.log(input_text);
    if (input_text === "itmustbedeath") {

        var codeToShow = document.getElementById('code');
        var displaySetting = codeToShow.style.display;

        if (displaySetting == 'block') {
            codeToShow.style.display = 'none';
        }
        else {
            codeToShow.style.display = 'block';
        }
    }
}

function showInput() {
    var inputToShow = document.getElementById('input-password-wrapper');

    inputToShow.style.display = 'block';
}