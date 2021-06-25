var arr = [".num-1", ".num-2", ".num-3"];

function add1(num) {
    var x = document.querySelector(arr[num]);
    var y = document.querySelector(arr[num]).innerHTML;
    var z = parseInt(y);

    x.innerText = z + 1;
} 