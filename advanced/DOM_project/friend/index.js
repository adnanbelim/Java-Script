let relation = document.getElementById('relation');
let add = document.getElementById('add');
// let remove = document.getElementById('remove');

// function friend(){
//     relation.innerHTML = "Friend";
//     relation.style.color = "green";
// }


let flag = 0;
add.addEventListener("click", () => {
    if (flag == 0) {
        relation.innerHTML = "Friends";
        relation.style.color = 'green';
        add.innerHTML = "Remove Friend";
        add.style.backgroundColor = "red";
        flag = 1;
    } else  {
        relation.innerHTML = "Stranger";
        relation.style.color = "red";
        add.innerHTML = "add Friend";
        add.style.backgroundColor = "blue";
        flag = 0;
    }
});