fetch("http://localhost:3000/api/v1/task").then(resposta=>{
    return resposta.json();
}).then(body =>{
    let tableData = "";
    body.map((values)=>{
        tableData += `  <tr>
                            <td>${values.description}</td>
                            <td>${values.date}</td>
                            <td>${values.user}</td>
                            <td><button onclick="location.href='https://google.com'">Editar</button></td>
                            <td><button onclick="location.href='https://google.com'">Remover</button></td>
                        </tr>`
    });
    document.getElementById("table-content").innerHTML = tableData;
}).catch(err =>{
    console.log(err)
}) 