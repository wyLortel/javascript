const button = document.querySelector(`button`);
const removeButton = document.querySelector(".remove")
button.addEventListener(`clock`);

function handler(event) {
    console.log("사랑해용")
}

function removeHandler(event) {
    button.removeEventListener('click', handler)
    console.log("이벤트 삭제")
}

button.addEventListener(`click` , handler);
removeButton.addEventListener(`click` , removeHandler);