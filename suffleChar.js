var arr = ['F', 'T', 'S', 'k','O','A','N','M'];

var same = document.querySelectorAll('.same');

var btn = document.querySelector('#btn');



btn.addEventListener('click', () => {


    var b = [];
    for (let i = 0; i < arr.length; i++) {

        while(b.length < 9){
        var random = Math.floor(Math.random() * arr.length);

        if (!(b.includes(arr[random]))) {
            b[i] = arr[random];
            break;
        }
    }
       same[i].innerHTML = b[i]
       console.log(b);
    }

})
