function downloadVideo() {
    const urlInput = document.getElementById("urlInput");
    const message = document.getElementById("message");
    
    if (!urlInput.value) {
        message.textContent = "Por favor, insira uma URL do YouTube";
        return;
    }

    message.textContent = "Iniciando download...";
    
    fetch('https://baixa-video-k1nfy0mw7-josesilva84s-projects.vercel.app/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: urlInput.value })
    })
    .then(response => response.json())
    .then(data => {
        message.textContent = data.message || 'Download concluído com sucesso!';
    })
    .catch(error => {
        message.textContent = `Erro: ${error.message}`;
    });
}
//     fetch('http://localhost:5500/api/download', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ url: urlInput.value })
//     })
//     .then(response => response.json())
//     .then(data => {
//         message.textContent = data.message || 'Download concluído com sucesso!';
//     })
//     .catch(error => {
//         message.textContent = `Erro: ${error.message}`;
//     });
// }