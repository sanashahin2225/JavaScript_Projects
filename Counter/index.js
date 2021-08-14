let count = 0
function myFunction(x){
    
    if(x == 'reset'){
        document.getElementById('counter').style.color = 'white';
        document.getElementById('counter').innerHTML = 0;
    }
    else if(x == 'incr'){
        let y = document.getElementById('counter').innerHTML
        count = y
        count++
        document.getElementById('counter').style.color = 'green';
        document.getElementById('counter').innerHTML = count;
    }
    else{
        let y = document.getElementById('counter').innerHTML
        count = y
        count--;
        document.getElementById('counter').style.color = 'red';
        document.getElementById('counter').innerHTML = count;
    }

    if(count > 0){
        document.getElementById('counter').style.color = 'green';
    }
    else if(count < 0){
        document.getElementById('counter').style.color = 'red';
    }
    else{
        document.getElementById('counter').style.color = 'white';
    }
}
