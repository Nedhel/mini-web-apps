window.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screen.width * 0.9);
    canvas.setAttribute("height", screen.height * 0.6);
    let ctx = canvas.getContext("2d");
    ctx.lineWidth = 1;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "black";
    let initialX, initialY;

    const mouseDown = (event) => {
        if (event.which === 1) {
            initialX = event.offsetX;
            initialY = event.offsetY;
            draw(initialX, initialY);
            canvas.addEventListener("mousemove", mouseMove);
        }
    };
    const draw = (cursorX, cursorY) => {
        ctx.beginPath();
        ctx.moveTo(initialX, initialY);
        ctx.lineTo(cursorX, cursorY);
        ctx.stroke();

        initialX = cursorX;
        initialY = cursorY;
    };
    const mouseMove = (event) => {
        draw(event.offsetX, event.offsetY);
    };
    const mouseUp = () => {
        canvas.removeEventListener("mousemove", mouseMove);
    };

    function changeColor(color) {
        let current = document.getElementById("current");
        current.style.backgroundColor = color;
        if (
            document.getElementById("pen").classList.contains("tool-selected")
        ) {
            ctx.strokeStyle = color;
        }
    }

    function changeSize() {
        switch (this.id) {
            case "size1":
                ctx.lineWidth = 1;
                this.classList.add("tool-selected");
                document
                    .getElementById("size2")
                    .classList.remove("tool-selected");
                document
                    .getElementById("size3")
                    .classList.remove("tool-selected");
                document
                    .getElementById("size4")
                    .classList.remove("tool-selected");
                break;
            case "size2":
                ctx.lineWidth = 3;
                this.classList.add("tool-selected");
                document
                    .getElementById("size1")
                    .classList.remove("tool-selected");
                document
                    .getElementById("size3")
                    .classList.remove("tool-selected");
                document
                    .getElementById("size4")
                    .classList.remove("tool-selected");
                break;
            case "size3":
                ctx.lineWidth = 5;
                this.classList.add("tool-selected");
                document
                    .getElementById("size1")
                    .classList.remove("tool-selected");
                document
                    .getElementById("size2")
                    .classList.remove("tool-selected");
                document
                    .getElementById("size4")
                    .classList.remove("tool-selected");
                break;
            case "size4":
                ctx.lineWidth = 10;
                this.classList.add("tool-selected");
                document
                    .getElementById("size1")
                    .classList.remove("tool-selected");
                document
                    .getElementById("size2")
                    .classList.remove("tool-selected");
                document
                    .getElementById("size3")
                    .classList.remove("tool-selected");
                break;
            default:
                break;
        }
    }

    canvas.addEventListener("mousedown", mouseDown);
    canvas.addEventListener("mouseup", mouseUp);
    canvas.addEventListener("mouseleave", () => {
        canvas.removeEventListener("mousemove", mouseMove);
    });
    canvas.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });
    document.getElementById("eraser").addEventListener("click", () => {
        ctx.strokeStyle = "white";
        document.getElementById("pen").classList.remove("tool-selected");
        document.getElementById("eraser").classList.add("tool-selected");
    });
    document.getElementById("pen").addEventListener("click", () => {
        ctx.strokeStyle =
            document.getElementById("current").style.backgroundColor;
        document.getElementById("pen").classList.add("tool-selected");
        document.getElementById("eraser").classList.remove("tool-selected");
    });

    document.getElementById("selec-color").addEventListener("change", (e) => {
        changeColor(e.target.value);
    });

    let colors = document.getElementsByClassName("color");
    for (const i of colors) {
        let color = i.classList;
        i.addEventListener("click", () => {
            changeColor(color[1]);
        });
    }
    let size = document.getElementsByClassName("size");
    for (const i of size) {
        i.addEventListener("click", changeSize);
    }
});
