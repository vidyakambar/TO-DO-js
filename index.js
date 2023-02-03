function addTask() {
    let popup = document.querySelector(".popup")
    popup.style.display = "flex"

}

function add2pop() {
    let popup123 = document.querySelector(".popup1");
    popup123.style.display = "flex";
}

const taskList = []
function add() {
    let name = document.getElementById("name").value
    if (taskList.length == 0) {
        const exstingElement12 = document.getElementsByClassName("no");
        exstingElement12[0].innerText = "";
    }
    const tempObj = {
        id: Date.now(),
        taskname: name
    }

    taskList.push(tempObj)
    // console.log(taskList)
    if (name.length == 0) {
        alert("Add Content")
        let popup = document.querySelector(".popup")
        popup.style.display = "none"
    }
    else {
        addTaskOnScreen()
    }


    function addTaskOnScreen() {
        let element = document.createElement("div")
        element.setAttribute("id", "child")
        // console.log(element)
        let existingElement = document.getElementById("parent")
        existingElement.appendChild(element)
        element.innerText = taskList[taskList.length - 1].taskname
        let line = document.createElement("hr")
        line.setAttribute("width", "100%")
        // line.setAttribute("align","left")
        element.appendChild(line)

        let plus = document.createElement("img")
        plus.setAttribute("src", "./circle-plus-solid.svg")
        element.appendChild(plus).addEventListener('click', plusIn)
        function plusIn() {
            let popup12 = document.querySelector(".popup1")
            popup12.style.display = "flex";
            add2pop();
        }


        let trashIcon = document.createElement("img")
        trashIcon.setAttribute("src", "./trash-can-solid.svg")
        element.appendChild(trashIcon).addEventListener('click', () => {
            existingElement.removeChild(element)
        })


        const content = document.createElement("div");
        content.style.display = "inline-block"
        content.setAttribute("id", "innerbox");
        element.appendChild(content);
        const btn = document.getElementById('btn');
        const name2 = document.getElementById("name2");

        addbtn2.addEventListener('click', function () {
            let text = document.createElement('div');
            // text.classList.add('paragraph-styling');
            text.style.display = "inline"
            text.style.color = "black";
            content.appendChild(text);
            text.innerText = name2.value;
            name2.value = "";

            let mark = document.createElement('button');
            mark.setAttribute('id', 'mark');
            mark.innerHTML = "Mark Done";
            content.appendChild(mark);

            mark.addEventListener('click', function () {
                text.style.color = 'blue';
                text.style.textDecoration = "line-through";
                text.style.textAlign = "center"
                mark.style.visibility = "hidden";

            })

        })
        let popup = document.querySelector(".popup")
        popup.style.display = "none"
        let addIn = document.getElementsByClassName("add1")
        addIn[0].addEventListener('click', () => {
            let popup1 = document.querySelector(".popup1")
            popup1.style.display = "none"

        })

    }
}
function close() {
    let popup = document.querySelector(".popup")
    popup.style.display = "none"
    let popup1 = document.querySelector(".popup1")
    popup1.style.display = "none"
}
