async function delTask(_id){
    return await fetch('http://127.0.0.1:3000/api/v1/task/'+_id, {
        method: 'DELETE',
    })
    .then(res => getTask())
    .catch(err => console.log(err))
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
                                <td><button onclick=openFormEdit('${values._id}','${values.description}','${values.date}','${validaNome(values.user)}')>Editar</button> <button id='delTask' onclick=delTask('${values._id}')>Remover</button></td>
                            </tr>`
        });
        document.getElementById("tasks-table-content").innerHTML = tableData;
    }).catch(err =>{
        console.log(err)
    }) 
}
function validaNome(nome) {
    if (nome != null) {
        console.log(nome.name);
        return nome.name
    }else{
        return 'User_Deleted'
    }
}
getTask();

async function openFormEdit(_id, desc, data,user){

    let popup = document.getElementById('popup');
    let main = document.getElementById('main');
    popup.classList.add('visible');
    main.classList.add('hidden');

    document.getElementById('user').value=user;
    document.getElementById('description').value=desc;
    document.getElementById('date').value=data;
    document.getElementById('id').value=_id;


    console.log(_id);
    console.log(desc);
    console.log(data);
    console.log(user);
    

}