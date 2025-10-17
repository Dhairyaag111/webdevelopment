fetch('https://68f0e48f0b966ad5003497eb.mockapi.io/employee',{
    method: 'POST',
    headers : {"content-type" : "application/json"},
    body : JSON.stringify({
        createdAt : "2025-10-15",
        name : 'Image number 16',
        avatar : 'https://ibb.co/LXWhZrd6',
        id: '16'
    })
})
.then(a=>{
    return a.json()
}).then(b=>{
    console.log(b);
    return fetch('https://68f0e48f0b966ad5003497eb.mockapi.io/employee')
}).then(c=>{
    return c.json()
}).then(data => console.log(data))
