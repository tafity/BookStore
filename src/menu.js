//menu
export function menu () {
    const parent = document.querySelector('.genresUl');
    var btns = parent.getElementsByClassName('genre');
     
        parent.addEventListener ('click', (e)=> {
        var targetItem = e.target;
        if (targetItem.closest('.genre')) {
            const lastPushed = document.getElementsByClassName('_active')
            for(var i = 0; i < lastPushed.length ; i++) {
            lastPushed[0].className = 'genre'
            targetItem.classList.add('_active')
            
            }
        }
    })
}