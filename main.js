const input = document.querySelector('input');
const list = document.querySelector('#list');
let liCount = 0; 

input.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        const inputValue = input.value;
        if (liCount >= 6) {
            return; 
        }
        const li = document.createElement('li');
        li.textContent = inputValue;
        
        const icon = document.createElement('i');
        icon.classList.add('icon'); 
        li.appendChild(icon); 
        list.appendChild(li);
        liCount++; 

        li.addEventListener('click', () => {
            li.classList.toggle('done');
        });

        li.querySelector("i").addEventListener('click', () => {
            list.removeChild(li);
            liCount--; 
        });
    }
});
