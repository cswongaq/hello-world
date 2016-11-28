(function(){
    console.log('index.js test');
    var btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener('click', e => {
        console.log('hihi');
        window.location.href = "dummy.html";
    });
}());