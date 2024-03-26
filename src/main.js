function inviaForm() {
    console.log('Bottone cliccato')

    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;
    var nome = document.getElementById('nomeInput').value;
    var cognome = document.getElementById('cognomeInput').value;
    var ruolo = document.getElementById('Ruolo').value;


    var userData = {
        username: username,
        password: password,
        nome: nome,
        cognome: cognome,
        ruolo: ruolo
    };
    inviaAlBackend(userData);

    function inviaAlBackend(userData) {
        // Simulazione di invio dei dati al backend (mostra i dati nella console)
        console.log("Dati inviati al backend:", userData);
        alert("Dati inviati con successo!");
        // Potresti inserire qui la logica per inviare i dati a un server backend locale usando AJAX o fetch
    }

    fetch('/http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Errore nella richiesta');
        }
        return response.json();
    })
    .then(data => {
     
         document.getElementById('Username').value = '';
         document.getElementById('Password').value = '';
         document.getElementById('nomeInput').value = '';
         document.getElementById('cognomeInput').value = '';
         document.getElementById('Ruolo').value = '';
 
         // Puoi gestire la risposta qui
         console.log('Risposta:', data);
    })
    .catch(error => {
        console.error('Errore:', error);
    });
}