// Add your code here


function submitData (name, email) {
    const sentData = {
        name: `${name}`,
        email: `${email}`
    }

    const theFetch =fetch(`http://localhost:3000/users`, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(sentData)
    })
    .then(response => response.json())
    .then(data => {
        const p = document.createElement("p");
        p.textContent = data.id;
        document.body.appendChild(p);
    })
    .catch(error => {
      const p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
return theFetch;
}

