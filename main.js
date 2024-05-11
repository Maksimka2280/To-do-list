const input = document.querySelector('input');
const list = document.querySelector('ul');
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

        li.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            list.removeChild(li);
            liCount--; 
        });
    }
});
