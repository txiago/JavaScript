var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Banner', 'Scott Lang']
        
function listaVingadores(){
    console.log(avengers)
    
    var ul = document.getElementById('avengers')
    ul.innerHTML = ''

    avengers.forEach(function(a){
        var li = document.createElement('li')
        var text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)
    })
}