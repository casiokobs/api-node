const form = document.getElementById("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload);

    console.log([...payload]);

    fetch('http://127.0.0.1:3000/api/v1/user', {
        method: 'POST',
        body: payload
    })
    .then(res => res.json())
    .then(err => alertMessage(err.message))
    .catch(err => alert(err))
})

function alertMessage(a){
    if (typeof a === 'string') {
        alert(a);    
    }else{
        window.location = 'file:///home/desv/testes/v2/api-node/api-frontend/views/index.html'; 
    }
    
}