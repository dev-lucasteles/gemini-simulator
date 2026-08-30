# Gemini Simulator

Uma aplicação Full-Stack que simula a interface de um chat com IA. O projeto conecta um frontend construído em React com a API do Google Gemini através de um backend em Node.js e Express.

---

## Arquitetura e Estrutura de Pastas

O projeto adota uma arquitetura *Client-Server* separada em dois ambientes distintos. É fundamental respeitar essa divisão ao executar comandos no terminal:

*   **`/server`**: Backend em Node.js + Express. Responsável por receber os prompts, conectar-se à API do Google Generative AI e retornar as respostas. A lógica principal está contida em `/server/src/`.
*   **`/web`**: Frontend em React. Interface de usuário que gerencia o estado, o histórico do chat e se comunica com o backend via requisições HTTP (Axios).

---

## Configurando as Variáveis de Ambiente (.env)

O backend precisa de uma chave de API para se comunicar com o Google. Para manter essa chave segura e fora do código-fonte, utilizamos um arquivo `.env`.


**Passo a Passo para configurar o `.env`:**
1.  Acesse o [Google AI Studio](https://aistudio.google.com/) com a sua conta Google.
2.  Gere uma nova **API Key**.
3.  No seu computador, abra a pasta raiz do backend: **`/server`**.
4.  Crie um arquivo chamado **exatamente** `.env` (sem nenhum nome antes do ponto).
5.  Dentro do arquivo, cole as configurações abaixo, substituindo o texto pela sua chave real (não use aspas ou espaços ao redor do sinal de igual):

```env
GEMINI_API_KEY=ASuaChaveGeradaNoGoogleAqui
PORT=3000
```

---

## Configurando o Frontend e o Backend

Antes de iniciar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina. Você precisará instalar as dependências de cada pasta separadamente.

**1. Preparando o Backend:**
Abra o terminal, navegue até a pasta do servidor e instale os pacotes:

```bash
cd server
npm install
```

**2. Preparando o Frontend:**
Em um *novo* terminal, navegue até a pasta da interface web e instale os pacotes:

```bash
cd web
npm install
```

---

## Como Rodar a Aplicação

A aplicação exige que os dois servidores (Backend e Frontend) estejam rodando simultaneamente em **terminais separados**.

**Terminal 1 (Rodando o Backend):**

```bash
cd server
npm run start
```

*O servidor iniciará na porta 3000.*

**Terminal 2 (Rodando o Frontend):**

```bash
cd web
npm start
```

*O React identificará que a porta 3000 já está sendo usada pelo seu backend e perguntará se você deseja rodar a aplicação em outra porta (geralmente a `3001`). Pressione `Y` (Sim) para aceitar e o navegador abrirá o chat automaticamente.*

---

## Troubleshooting e Solução de Problemas

Caso você encontre erros durante a execução da aplicação, consulte as soluções abaixo:

*   **Erro 503 (Service Unavailable):** Os servidores do Google Gemini estão lidando com um pico de alta demanda. Este é um engarrafamento temporário na nuvem do Google. Aguarde 1 a 2 minutos e tente enviar a mensagem novamente.
*   **Erro 404 (Not Found) no navegador:** Significa que o frontend (React) não conseguiu encontrar a rota do backend (Node.js). Verifique se o terminal do backend está rodando sem erros e se a URL configurada no Axios (no arquivo `api.js` do frontend) aponta exatamente para `http://localhost:3000/api/prompt`.
*   **Erro 500 (Internal Server Error) na requisição:** Geralmente indica uma falha na sua API Key. O seu arquivo `.env` pode estar salvo na pasta errada (ele deve ficar solto dentro de `/server`), a chave de API pode estar inválida, ou o pacote `dotenv` não foi carregado corretamente no início do seu arquivo `app.js`.
*   **Erro "Cannot find module":** Significa que você executou o comando `npm start` na pasta errada ou que a estrutura de importação dos seus arquivos está com caminhos incorretos (ex: tentar ler `./server.js` estando dentro da pasta `src`). Lembre-se sempre de navegar para a pasta correta (`cd server` ou `cd web`) antes de iniciar os servidores.