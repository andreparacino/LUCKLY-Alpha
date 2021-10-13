function luckyNumCollector() {

    window.addEventListener('load', () => {
    
        localStorage.removeItem('LUCKY-NUM')
        localStorage.removeItem('LUCKY-WORD')
        localStorage.removeItem('FIRST-NAME')
    
    })
    
    function luckyNumGetSet() {
    
        let luckyNum = document.getElementById('lucky-num-input')

        localStorage.setItem('LUCKY-NUM', luckyNum.value)
        luckyNum = parseInt(luckyNum.value)


        if (luckyNum < 1 || luckyNum > 20) {

            localStorage.removeItem('LUCKY-NUM')
            
        }

    }
    
    
    // binding the return/enter key to the next-step button
    
    document.querySelector("#lucky-num-input").addEventListener("keyup", event => {

        if(event.key !== "Enter") return;

        document.querySelector("#next-step-btn").click();
        event.preventDefault();

    })
    
    document.getElementById('next-step-btn').addEventListener('click', luckyNumGetSet)

}

export { luckyNumCollector }
