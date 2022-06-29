const form = document.getElementById("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const prePayload = new FormData(form);
    const payload = new URLSearchParams(prePayload);

    console.log([...payload]);

    fetch('http://127.0.0.1:3000/api/v1/task', {
        method: 'POST',
        body: payload
    })
    .then(res => res.json())
    .then(err => alertMessage(err.message))
    .catch(err => console.log(err))
})

function alertMessage(a){
    if (typeof a === 'string') {
        alert(a);    
    }else{
        window.location = 'index.html'; 
    }
}
async function populateSelect(){
    return await fetch("http://localhost:3000/api/v1/user").then(resposta=>{
        return resposta.json();
    }).then(body =>{
        let selectData = "";
        body.map((values)=>{
            selectData += `<option id="user" value=${values._id}>${values.name}</option>`
        });
        console.log(selectData);
        document.getElementById("user").innerHTML = selectData;
    }).catch(err =>{
        console.log(err)
    }) 
}
populateSelect();