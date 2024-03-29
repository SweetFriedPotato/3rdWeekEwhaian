const h1 = document.querySelector("div.hello:first-chile h1");

function handleTitleClick(){
    h1.className = "active"; //자바스크립트가 css에 직접 대화하지 않음
}

h1.addEventListener("click", handleTitleClick);