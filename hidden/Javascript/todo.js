function showTodo(button, inputId) {
    var id = button.id;
    var inputText = document.getElementById(inputId).value;

    if (id === "A" && inputText === "Ilinx") {
        var element = document.getElementById("todo-list-A-wrapper");
        if (element.hasChildNodes()) {
            button.innerHTML = "Look at todo list";
            while(element.firstChild) {
                element.removeChild(element.firstChild);
            }
        } else {
            button.innerHTML = "Hide todo list";

            var list = document.createElement("ul");
            list.setAttribute("id", "todo-list-A");

            var item1 = document.createElement('li');
            item1.appendChild(document.createTextNode('Plan more sleepovers'));
            
            list.appendChild(item1);
            
            element.appendChild(list);
        }
    } else if (id === "P" && inputText === "Amae") {
        var element = document.getElementById("todo-list-P-wrapper");
        if (element.hasChildNodes()) {
            button.innerHTML = "Look at todo list";
            while(element.firstChild) {
                element.removeChild(element.firstChild);
            }
        } else {
            button.innerHTML = "Hide todo list";

            var list = document.createElement("ul");
            list.setAttribute("id", "todo-list-P");

            var item1 = document.createElement('li');
            item1.appendChild(document.createTextNode('Think up plots'));
            
            list.appendChild(item1);
            
            element.appendChild(list);
        }
    } else if (id === "C" && inputText === "L'appell") {
        
        var element = document.getElementById("todo-list-C-wrapper");
        if (element.hasChildNodes()) {
            button.innerHTML = "Look at todo list";
            while(element.firstChild) {
                element.removeChild(element.firstChild);
            }
        } else {
            button.innerHTML = "Hide todo list";

            var list = document.createElement("ul");
            list.setAttribute("id", "todo-list-C");

            var item1 = document.createElement('li');
            item1.appendChild(document.createTextNode('Think up plots'));
            
            list.appendChild(item1);
            
            element.appendChild(list);
        }
    } else {
        console.log("Incorrect id: " + id);
    }
}

function showInput(id, button) {
    if (document.getElementById(id).style.display === "none") {
        document.getElementById(id).style.display = "block";
        button.innerHTML = "Hide input";
    } else {
        document.getElementById(id).style.display = "none";
        button.innerHTML = "Look at todo list";
    }
}