const title = document.querySelector(`h2`);
title.innerText = "안녕하세요!";
title.style.color = `blue`;

const body = document.querySelector(`body`)

const title1 = document.createElement('h1');
title.innerText = "새로운 친구에여"
title.style.color = `red`

body.appendChild(title)