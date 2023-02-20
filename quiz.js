let input = document.querySelector('.entered-question')
let addBtn = document.querySelector('.add-question')
let task = document.querySelector('.quiz-output')

// add btn disabled

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
})

// add new questions

addBtn.addEventListener('click', () => {
    if (input.value.trim() !=0){
        let newItem = document.createElement('div');
        newItem.classList.add('output');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="output-buttons">
            <i class="fa-solid fa-circle-xmark"></i>  
        </div>
        `
        task.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a Question')
    }
})

// delete question

task.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-circle-xmark')) {
        e.target.parentElement.parentElement.remove();
    }
})
