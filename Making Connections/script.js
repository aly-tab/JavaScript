function showMe() {
    var box = document.getElementById("change-name-popup");
    box.style.display = "block";  
}

function hideMe() {
    var box = document.getElementById("change-name-popup");
    box.style.display = "none";
}

function changeName() {
    var newName = document.getElementById("inputName").value;
    document.querySelector('.profile-name').innerHTML = newName;
    hideMe();
}

var requestClassNames = ['.req-1', '.req-2'];

function acceptRequest(i) {
    var getCNum = document.querySelector('.connectionsNum');
    var updateCNum = document.querySelector('.connectionsNum').innerText;
    var cNumParse = parseInt(updateCNum);
    getCNum.innerText = cNumParse + 1;
    hideRequests(i);
    requestCounter();
}

function denyRequest(i) {
    var getCNum = document.querySelector('.connectionsNum');
    var updateCNum = document.querySelector('.connectionsNum').innerText;
    var cNumParse = parseInt(updateCNum);
    getCNum.innerText = cNumParse - 1;
    hideRequests();
    requestCounter();
}

function hideRequests(i) {
    var reqBox = document.querySelector(requestClassNames[i]);
    reqBox.style.display = "none";
}

function requestCounter() {
    var getRNum = document.querySelector('.requestsNum');
    var updateRNum = document.querySelector('.requestsNum').innerText;
    var rNumParse = parseInt(updateRNum);
    getRNum.innerText = rNumParse - 1;
}