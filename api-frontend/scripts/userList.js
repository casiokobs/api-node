async function delUser(_id){
    return await fetch('http://127.0.0.1:3000/api/v1/user/'+_id, {
        method: 'DELETE',
    })
    .then(res => getUser())
    .catch(err => console.log(err));
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
                                <td><button class="button-table" onclick=editUser('${values._id}')>Edit</button> <button class="button-table" id="delUser" onclick=delUser('${values._id}')>Remove</button></td>
                            </tr>`
        });
        document.getElementById("users-table-content").innerHTML = tableData;
    }).catch(err =>{
        console.log(err)
    }) 
    
}
getUser();

function search(){
    const userSearch = document.getElementById('userSearch');
    document.getElementById('users-table-search').classList.remove('hidden');
    console.log(getUserByID(userSearch.value).lenght);
}

async function getUserByID(id){
    return await fetch("http://localhost:3000/api/v1/user/"+id).then(resposta=>{
        return resposta.json();
    }).then(body =>{
        let tableData = "";
            tableData += `<tr>
                                <td>${body.name}</td>
                                <td>${body.email}</td>
                                <td>${body.country}</td>
                                <td>${body.cpf}</td>
                                <td>${body.address}</td>
                                <td>${body.number}</td>
                                <td>${body.city}</td>
                                <td>${body.state}</td>
                                <td>${body.zipCode}</td>
                                
                            </tr>`;
                            if(body.name == undefined){
                                document.getElementById("table-search-content").innerHTML = alert('User not found');
                            } else {
                            document.getElementById("table-search-content").innerHTML = tableData;
                            }
    }).then(res =>{
        console.log(res)
    }) 
}