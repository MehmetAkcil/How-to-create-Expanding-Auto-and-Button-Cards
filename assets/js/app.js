const panels = document.querySelectorAll( '.panel' )
const backBtn = document.querySelector( '.back-btn' )
const nextBtn = document.querySelector( '.next-btn' )
const autoDelay = document.querySelector( '[auto-delay]' )
var delayInterval;


let delayFunction = () => {
    if(autoDelay)
    {
        let delay = autoDelay.getAttribute('auto-delay')

        delayInterval = setInterval(() => {
            nextBtnFunction()
        }, parseInt(delay))

    }
}
delayFunction()

if(backBtn){
    backBtn.addEventListener('click', () => {
        clearInterval(delayInterval);
        backBtnFunction();
        delayFunction()
    })
}

if(nextBtn){
    nextBtn.addEventListener('click', () => {

        clearInterval(delayInterval);
        nextBtnFunction()
        delayFunction()
    })
}

if ( panels ) {
    panels.forEach( panel => {
        panel.addEventListener( 'click', () => {
            clearInterval(delayInterval);
            classRemove(panels);
            panel.classList.add('active')
            delayFunction()
        } )
    } )
}

function nextBtnFunction()
{
    let indexNumber = indexNumberCheck(panels)
    classRemove(panels)
    indexNumber++;
    indexNumber = indexNumber % panels.length;
    panels[indexNumber].classList.add('active')
}
function backBtnFunction()
{
    let indexNumber = indexNumberCheck(panels)
    classRemove(panels)

    indexNumber--;

    indexNumber = (indexNumber + panels.length) % panels.length;

    panels[indexNumber].classList.add('active')
}

function classRemove(items) {
    items.forEach( item => {
        item.classList.remove( 'active' )
    } )
    return true;
}

function indexNumberCheck(panels)
{
    let indexNumber = null;
    panels.forEach((panel, index) => {
        if(panel.classList.contains('active')){
            indexNumber = index;
        }
    })

    return indexNumber;

}