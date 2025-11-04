import express from 'express';
import { exec } from 'child_process';
import cors from 'cors';

const app = express();

app.use(cors()); // Adiciona suporte a CORS
app.use(express.json());
app.use(express.static('./'));

app.post('/api/download', (req, res) => {
    const { url } = req.body;
    const command = `yt-dlp --no-playlist "${url}"`;
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            res.json({ message: `Erro ao baixar o vídeo: ${error.message}` });
            return;
        }
        res.json({ message: 'Download concluído com sucesso!' });
    });
});

app.listen(5500, () => {
    console.log('Servidor rodando na porta 5500');
});