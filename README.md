# YouTube Catcher / Baixar Vídeo Rápido

Um projeto simples em Node.js que permite baixar vídeos do YouTube através de uma interface web.

## 🚀 Visão Geral

O servidor expõe uma API que utiliza o `yt-dlp` para realizar o download de vídeos do YouTube. Há uma pequena interface web em `public/` para o usuário inserir a URL do vídeo e iniciar o processo.

### 📁 Estrutura do Projeto

```
package.json
server.js
public/
    download.js
    index.html
    style.css
vercel.json
servidorVideo.bat
.gitignore
README.md
```

- **server.js**: servidor Express que recebe requisições de download.
- **public/**: arquivos estáticos da interface front-end.
- **servidorVideo.bat**: arquivo de atalho para iniciar o servidor no Windows.

## 🛠️ Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14.x recomendada conforme `package.json`)
- `yt-dlp` instalado e disponível no PATH (https://github.com/yt-dlp/yt-dlp)

> ⚠️ O servidor apenas chama o comando `yt-dlp` no host. Certifique-se de que funciona localmente antes de iniciar a aplicação.

## 📦 Instalação

1. Clone ou extraia o projeto:
   ```sh
   cd c:\Users\curso\Downloads\baixa-video
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```

## ▶️ Executando o servidor

- Via npm:
  ```sh
  npm run start
  ```
  ou
  ```sh
  node server.js
  ```

- No Windows você pode usar o atalho `servidorVideo.bat` (ajuste o caminho se necessário).

O servidor ficará escutando na porta `5500` (variável `process.env.port` ou porta padrão). A interface web está disponível em `http://localhost:5500/public/index.html` ou simplesmente `http://localhost:5500/`.

## 🧑‍💻 Uso

1. Abra o navegador e acesse `http://localhost:5500/`.
2. Cole a URL do vídeo do YouTube no campo.
3. Clique em **Download**.
4. O vídeo será baixado no diretório onde o comando `yt-dlp` grava por padrão (geralmente o diretório atual de execução).

Mensagens de sucesso ou erro serão exibidas na página.

## 🧩 Personalizações

- A interface está em `public/index.html` e `public/download.js`.
- Para mudar a porta, defina a variável de ambiente `port` antes de iniciar o servidor.
- É possível gerar um executável autônomo usando [pkg](https://www.npmjs.com/package/pkg):
  ```sh
  pkg server.js --targets node18-win-x64
  ```

## 📄 Licença

Este projeto está licenciado sob a [ISC License](LICENSE). (ou personalize conforme necessário)

## 📬 Contato

Qualquer dúvida ou sugestão, fique à vontade para modificar o repositório ou entrar em contato.

---

*Documentação gerada automaticamente.*