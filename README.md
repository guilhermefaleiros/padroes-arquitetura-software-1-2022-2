### P-Avatar

Essa implementação consiste em fazer uma simulação de um P-Avatar, simulando seus sinais vitais e informações físicas sobre o paciente

### Como executar a aplicação localmente?

Pré-requisitos:

- Node.js versão 16.x.x (runtime para rodar ambas as aplicações)
- Docker e docker-compose instalados (executar o banco de dados)

### Rodando o back-end

```
cd avatar-api
```

É necessário subir o banco de dados, é possível fazer através de:

```
docker-compose up -d
```

Em seguida, para executar o microsserviço, é preciso instalar as dependências:

```
npm install
```

Rodar as migrations para criação das tabelas no banco:

```
npx typeorm-ts-node-esm migration:run -d ./src/adapter/database/pg-data-source.ts
```

Executar a aplicação:

```
npm run api:dev
```

### Rodando o front-end

```
cd avatar-web
```

É preciso instalar as dependências:

```
npm install
```

Após isso, é necessário executar a aplicação:

```
npm start
```

É possível acessar a aplicação através da URL:

```
http://localhost:3000/paciente?id=1
```
