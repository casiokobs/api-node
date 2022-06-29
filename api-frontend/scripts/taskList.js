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
                                <td><button class="button-table" onclick=openFormEdit('${values._id}','${values.date}','${verificaID(values.user)}','${(values.description).replace(/['" ]/gi, '|')}')>Edit</button> <button class="button-table" id='delTask' onclick=delTask('${values._id}')>Remove</button></td>
                            </tr>`
        });
        document.getElementById("tasks-table-content").innerHTML = tableData;
    }).catch(err =>{
        console.log(err)
    }) 
}
function validaNome(nome) {
    if (nome != null) {
        console.log(nome);
        return (nome.name)
    }else{
        return 'User_Deleted'
    }
}
getTask();

async function openFormEdit(_id, data,user,desc){

    let popup = document.getElementById('popup');
    let main = document.getElementById('main');
    popup.classList.add('visible');
    main.classList.add('hidden');

    document.getElementById('user').value = user.replace(/[|]/gi, ' ');
    document.getElementById('description').value = desc.replace(/[|]/gi, ' ');
    document.getElementById('date').value = data;
    document.getElementById('id').value = _id; 
    document.getElementById('edit-Task').value = _id;
}
async function clickEdit(){
    let id = document.getElementById('id').value;
    let  edit = await fetch("http://localhost:3000/api/v1/task/"+id,
    {
        method:'PUT',
        body: JSON.stringify({
            description: document.getElementById('description').value,
            date:document.getElementById('date').value,
            user:document.getElementById('user').value,
        }),
        headers: new Headers({
            'Content-Type': 'Application/Json'
        })
    })
    .then(err => alertMessage(err.message))
return edit;
}

function verificaID(user){
    if (user != null) {
        return user._id;
    }else{
        return 'User_Deleted';
    }
}

function alertMessage(a){
    if (typeof a === 'string') {
        alert(a);    
    }else{
        window.location = 'index.html'; 
    }
}
    