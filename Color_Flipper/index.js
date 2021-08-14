function myFunction(){
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    document.getElementById('container').style.backgroundColor = 'rgb(' + [x,y,z].join(',') + ')';

    document.getElementById('colorName').innerHTML = 'Background Color: rgb(' + x + ',' + y + ',' + z + ')';
  
}
