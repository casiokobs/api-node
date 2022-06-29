async function delTask(_id){
    return await fetch('http://127.0.0.1:3000/api/v1/task/'+_id, {
        method: 'DELETE',
    })
    .then(res => getTask())
    .catch(err => console.log(err))
}


async function editTask(_id){
    //só redireciona pro id, nao funciona
    window.location = 'http://127.0.0.1:3000/api/v1/task/'+_id 
}


async function getTask(){
    return await fetch("http://localhost:3000/api/v1/task").then(resposta=>{
        return resposta.json();
    }).then(body =>{
        let tableData = "";
        body.map((values)=>{
            tableData += `  <tr>
                                <td>${values.description}</td>
                                <td>${values.date}</td>
                                <td>${validaNome(values.user)}</td>
                                <td><button onclick=editTask('${values._id}')>Editar</button> <button id="delTask" onclick=delTask('${values._id}')>Remover</button></td>
                            </tr>`
        });
        document.getElementById("tasks-table-content").innerHTML = tableData;
    }).catch(err =>{
        console.log(err)
    }) 
}
function validaNome(nome) {
    if (nome != null) {
        return nome.name
    }else{
        return 'User deleted'
    }
}
getTask();