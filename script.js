const input = document.querySelector('.form-control')
const buttonSub = document.querySelector('.buttonSub')
const body = document.querySelector('body')

if (body.clientWidth < 600) {
    function buttonChange() {
        input.classList.add('w-100')
        input.classList.add('rounded')
        buttonSub.classList.add('rounded')
    }
    buttonChange()
}