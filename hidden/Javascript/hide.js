function showHideCode() {
    var input_thing = document.getElementById('input-password-wrapper');
    input_thing.style.display = 'none';

    var input = document.getElementById('password');
    var input_text = input.value;
    console.log(input_text);
    if (input_text === "itmustbedeath") {

        var codeToShow = document.getElementById('code');
        var insideStuff = codeToShow.innerHTML;

        if (insideStuff == '') {
            var codeHeader = document.createElement("h3");
            var text = document.createTextNode("This is the code.");
            codeHeader.appendChild(text);

            var para1 = document.createElement("p");
            var text2 = document.createTextNode("You should know our code names. You also obviously know the secret password. You better not bea hacker or something. If you are, then WE DON'T ACTUALLY DO BAD THINGS. Just for your information. The others pretend we do, but we don't.");
            para1.appendChild(text2);

            var para2 = document.createElement("p");
            var text3 = document.createTextNode("Now, on to the actual code. I'm sorry if you had to read that, ladies. That was just in case someone hacked on. So, first of all, 'The Base' means Grandma's house. Just to confuse people. For Cherelle's house, we can use 'The Castle' and for our house we can use 'The Pacific Abode'. People will get very confused on that second one. We could say 'otes' to mean outside and 'ites' to mean inside.");
            para2.appendChild(text3);

            var para3 = document.createElement("p");
            var text4 = document.createTextNode("If you think of anything else we should add, contact me!");
            para3.appendChild(text4);

            var closing = document.createElement("p");
            var text5 = document.createTextNode("Best Regards, The Lady Anastasia");
            closing.appendChild(text5);

            var element = document.getElementById("code");
            element.appendChild(codeHeader);
            element.appendChild(para1);
            element.appendChild(para2);
            element.appendChild(para3);
            element.appendChild(closing);
        }
        else {
            var element = document.getElementById("code");
            element.innerHTML = "";
        }
    }
}

function showInput() {
    var inputToShow = document.getElementById('input-password-wrapper');

    inputToShow.style.display = 'block';
}

{/* <div class="code-header">
<h3>This is the code. </h3>
</div>
<div class="code">
    <div class="paragraph-code">
        You should know our code names. You also obviously know the secret password. You better not be
        a hacker or something. If you are, then WE DON'T ACTUALLY DO BAD THINGS. Just for your 
        information. The others pretend we do, but we don't.
    </div>
    <div class="paragraph-code">
        Now, on to the actual code. I'm sorry if you had to read that, ladies. That was just in case 
        someone hacked on. So, first of all, 'The Base' means Grandma's house. Just to confuse people. 
        For Cherelle's house, we can use 'The Castle' and for our house we can use 'The Pacific Abode'. 
        People will get very confused on that second one. We could say 'otes' to mean outside and 'ites' 
        to mean inside.
    </div>
    <div class="paragraph-code">
        If you think of anything else we should add, contact me!
    </div>
    <div class="paragraph-code">
        Best Regards,
        <br/>
        The Lady Anastasia
    </div>
</div> */}