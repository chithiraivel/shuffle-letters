var arr = ['F', 'T', 'S', 'k', 'O', 'A', 'N', 'M'];

var same = document.querySelectorAll('.same');

var btn = document.querySelector('#btn');

var tires=0;

btn.addEventListener('click', () => {


    var b = [];
    for (let i = 0; i < arr.length; i++) {

        while (b.length < 9) {
            var random = Math.floor(Math.random() * arr.length);

            if (!(b.includes(arr[random]))) {
                
                b[i] = arr[random];
                break;
            }
        }
        same[i].innerHTML = b[i]
        console.log(b);
    }
    tires+=1;
})

var array = ['tom', 'fat', 'sam', 'man','mass',''];

var btn2 = document.querySelector('.btn2');
var show = document.querySelector('#show');
var score = document.querySelector('#score');

var lab = document.querySelector('#lab');
var score1 = 0;
var b = [];
btn2.addEventListener('click', () => {

    

    for (let i = 0; i < array.length; i++) {

        if (!(b.includes(array[i]))) {
            if (array[i] == lab.value) {
                score1 += 1
                show.innerHTML += lab.value + "<br>";
                score.innerHTML = " SCORE : " + score1;
                b.push(array[i]);
            }
        }
      
    }
    lab.value = "";
})


var btn3 = document.querySelector('.btn3');
var tires1 = document.querySelector('.tires1');
var tires2 = document.querySelector('.tires2');


btn3.addEventListener('click', () => {

    show.innerHTML= ''
    score.innerHTML=''
    tires1.innerHTML = " Tires : " + tires;
    tires2.innerHTML = " Score : " + score1;


})