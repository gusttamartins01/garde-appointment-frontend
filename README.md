# Garde Appointment Frontend

Frontend web para agendamento de consultas. A aplicação permite selecionar uma data, consultar os horários disponíveis, escolher um horário e confirmar o agendamento por meio de uma API REST.

O frontend foi construído com React, TypeScript, Vite, Tailwind CSS e Lucide React. As regras de negócio e a persistência dos agendamentos ficam sob responsabilidade do backend.

## Funcionalidades

- Seleção de data e consulta de horários disponíveis
- Seleção de horário e criação de agendamento
- Confirmação visual do agendamento
- Tratamento de carregamento, erros e dias sem atendimento
- Interface responsiva em tema escuro

## Tecnologias

- React 19 e TypeScript 6
- Vite 8
- Tailwind CSS 4
- Lucide React
- ESLint

## Pré-requisitos

Instale o Node.js e o npm. O backend da aplicação também deve estar em execução e permitir requisições do frontend via CORS.

Confira as versões instaladas:

```bash
node --version
npm --version
```

## Instalação

Clone o repositório e entre na pasta do projeto:

```bash
git clone <URL_DO_REPOSITORIO>
cd garde-appointment-frontend
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo de ambiente local.

No Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

No macOS ou Linux:

```bash
cp .env.example .env
```

## Configuração da API

Abra o arquivo `.env` e informe a URL do backend:

```env
VITE_API_URL=http://localhost:3000
```

Use o endereço e a porta reais do seu backend. A variável precisa começar com `VITE_` para ser disponibilizada pelo Vite no frontend.

Depois de alterar o `.env`, reinicie o servidor de desenvolvimento.

O backend deve disponibilizar estes endpoints:

```text
GET  /available?date=YYYY-MM-DD
POST /appointments
GET  /appointments
```

Também deve aceitar a origem do frontend, normalmente `http://localhost:5173`, por meio de CORS.

## Executando o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador a URL exibida pelo Vite, normalmente:

```text
http://localhost:5173
```

### Passo a passo do uso

1. Inicie o backend.
2. Configure `VITE_API_URL` no arquivo `.env`.
3. Inicie o frontend com `npm run dev`.
4. Escolha uma data no calendário.
5. Aguarde os horários disponíveis.
6. Selecione um horário.
7. Clique em `Confirmar agendamento`.
8. Confira a confirmação exibida na tela.

## Scripts disponíveis

| Comando           | Descrição                                        |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Inicia o servidor de desenvolvimento.            |
| `npm run build`   | Executa o type-check e gera a build de produção. |
| `npm run lint`    | Verifica problemas de lint.                      |
| `npm run preview` | Serve a build de produção localmente.            |

Antes de abrir um pull request, execute:

```bash
npm run lint
npm run build
```

## Contrato da API

### Buscar horários disponíveis

```http
GET /available?date=YYYY-MM-DD
```

Resposta esperada:

```json
["09:00", "10:00", "14:30"]
```

### Criar agendamento

```http
POST /appointments
Content-Type: application/json
```

Corpo enviado:

```json
{
  "date": "2026-09-14",
  "time": "09:00"
}
```

Resposta esperada:

```json
{
  "id": 1,
  "dateTime": "2026-09-14T09:00:00.000Z",
  "createdAt": "2026-09-13T18:00:00.000Z"
}
```

Quando a API retorna uma propriedade `message` em uma resposta de erro, o frontend exibe essa mensagem. Caso contrário, uma mensagem padrão é apresentada.

### Listar agendamentos

```http
GET /appointments
```

Esse endpoint já está disponível no serviço para futuras telas de consulta ou administração.

## Como o sistema funciona

```text
Usuário seleciona uma data
        |
        v
Frontend solicita /available?date=...
        |
        v
API retorna os horários livres
        |
        v
Usuário seleciona um horário
        |
        v
Frontend envia POST /appointments
        |
        v
API salva e retorna o agendamento criado
        |
        v
Frontend exibe a confirmação
```

O hook `useAppointments` centraliza o estado de data, horários, carregamento, erros, criação do agendamento e reinício do fluxo.

## Estrutura do projeto

```text
src/
├── components/                  # Componentes da interface
├── hooks/                       # Estado e lógica reutilizável
├── pages/Home/                  # Tela principal
├── schemas/                     # Schemas de validação
├── services/                    # Comunicação com a API
├── types/                       # Tipos TypeScript
├── utils/                       # Funções auxiliares
├── App.tsx                      # Componente raiz
├── index.css                    # Importação do Tailwind
└── main.tsx                     # Ponto de entrada
```

## Solução de problemas

### Os horários não aparecem

Confira se o backend está ligado, se `VITE_API_URL` está correta e se `GET /available?date=YYYY-MM-DD` responde. Verifique também se o backend permite a origem `http://localhost:5173` via CORS.

### Erro de CORS

Configure o backend para aceitar a origem exibida pelo Vite. Em desenvolvimento, normalmente é `http://localhost:5173`.

### A API aparece como indefinida

O arquivo deve se chamar `.env` e conter uma variável com o prefixo `VITE_`:

```env
VITE_API_URL=http://localhost:3000
```

Reinicie o Vite depois de salvar o arquivo.

### O build falha

Leia primeiro a mensagem original do erro. Se houver problema de instalação, reinstale as dependências e tente novamente:

```bash
npm install
npm run build
```

## Roadmap

- [x] Fluxo de seleção de data e horário
- [x] Consulta de horários na API
- [x] Criação de agendamento
- [x] Estados de carregamento e erro
- [x] Confirmação visual
- [x] Tema escuro responsivo
- [x] Ícones com Lucide React
- [ ] Testes unitários para hooks e serviços
- [ ] Testes de integração do fluxo completo
- [ ] Tela para listar agendamentos
- [ ] Melhorias de acessibilidade
- [ ] Pipeline de CI para lint e build

## Contribuição

1. Crie uma branch para sua alteração.
2. Faça mudanças pequenas e focadas.
3. Execute `npm run lint` e `npm run build`.
4. Use mensagens de commit convencionais, como `feat: adicionar lista de agendamentos`.
5. Abra um pull request descrevendo a alteração e como validá-la.

## Licença

Este projeto ainda não possui uma licença definida no repositório.
