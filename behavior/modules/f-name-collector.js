function fNameCollector() {

    window.addEventListener('load', () => {
    
        localStorage.removeItem('FIRST-NAME')
    
    })

    function fNameGetSet() {

        let fName = document.getElementById('f-name-input')

        if(fName.value.indexOf(' ') >= 0) {
            // document.getElementById('next-step-btn').href= 'step3.html'
            document.getElementById('f-name-form').action= 'step4.html'
            alert(`You have to provide only your first name, it also can't contain spaces.`);
        }

        localStorage.setItem('FIRST-NAME', fName.value)

    }

    // binding the return/enter key to the next-step button
    
    document.querySelector("#f-name-input").addEventListener("keyup", event => {

        if(event.key !== "Enter") return;

        document.querySelector("#next-step-btn").click();
        event.preventDefault();

    })

    document.getElementById('next-step-btn').addEventListener('click', fNameGetSet)

}

export { fNameCollector }