async function delUser(_id){
    return await fetch('http://127.0.0.1:3000/api/v1/user/'+_id, {
        method: 'DELETE',
    })
    .then(res => getUser())
    .catch(err => console.log(err))
}


async function editUser(_id){
    //só redireciona pro id, nao funciona
    window.location = 'http://127.0.0.1:3000/api/v1/user/'+_id 
}


async function getUser(){
    return await fetch("http://localhost:3000/api/v1/user").then(resposta=>{
        return resposta.json();
    }).then(body =>{
        let tableData = "";
        body.map((values)=>{
            tableData += `  <tr>
                                <td>${values.name}</td>
                                <td>${values.email}</td>
                                <td>${values.country}</td>
                                <td>${values.cpf}</td>
                                <td>${values.address}</td>
                                <td>${values.number}</td>
                                <td>${values.city}</td>
                                <td>${values.state}</td>
                                <td>${values.zipCode}</td>
                                <td><button onclick=editUser('${values._id}')>Editar</button> <button id="delUser" onclick=delUser('${values._id}')>Remover</button></td>
                            </tr>`
        });
        document.getElementById("users-table-content").innerHTML = tableData;
    }).catch(err =>{
        console.log(err)
    }) 
}
getUser();