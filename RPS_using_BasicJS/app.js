let user = 0;
let comp = 0;

const data = ['Rock', 'Paper', 'Scissor'];

function randomString(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function updateUserState(user_val, comp_val) {
    user++;
    document.getElementById('user').textContent = `${user}`;
    document.getElementById('status').textContent =  `${user_val} ` + "beats " + `${comp_val}`;
}

function updateComputerState(user_val, comp_val) {
    comp++;
    document.getElementById('computer').textContent = `${comp}`;
    document.getElementById('status').textContent =  `${comp_val} ` + "beats " + `${user_val}`;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener("click", (e) =>{
        let comp_val = randomString(data);
        let user_val = e.target.textContent;
        let userWins = ((user_val === 'Rock' && comp_val === 'Scissor') ||
                        (user_val === 'Paper' && comp_val === 'Rock') ||
                        (user_val === 'Scissor' && comp_val === 'Paper'));
        comp_val === user_val ? document.getElementById('status').textContent = "Its a Draw" :
            userWins ?  updateUserState(user_val, comp_val) : updateComputerState(user_val, comp_val)
    });
})
