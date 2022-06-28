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
    .then(data => console.log(data))
    .catch(err => console.log(err))
})