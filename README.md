# Motors Shop API

A API de anúncios e venda de carros em Node.js é um sistema robusto para gerenciar anúncios de carros, permitindo o cadastramento de usuários, veículos e comentários. Ela foi desenvolvida usando Node.js, um ambiente de tempo de execução JavaScript do lado do servidor, que oferece um desempenho escalável e eficiente para lidar com as operações da API.

Recursos principais da API:

Autenticação de Usuários: A API permite o cadastro de usuários, fornecendo recursos para registrar novas contas e autenticar usuários existentes. A autenticação é essencial para garantir a segurança das operações e restringir o acesso a recursos específicos apenas aos usuários autorizados.

Anúncios de Carros: Os usuários registrados podem cadastrar seus veículos para venda. A API fornece endpoints para criar, visualizar, atualizar e excluir informações sobre os carros. As informações do carro podem incluir detalhes como marca, modelo, ano, quilometragem, preço e descrição.

Comentários nos Anúncios: Os usuários podem adicionar comentários aos anúncios dos carros. Esses comentários podem conter perguntas, avaliações ou qualquer outra informação relevante sobre o veículo. Os comentários são vinculados aos anúncios específicos e podem ser lidos e respondidos por outros usuários.

Pesquisa e Filtros: A API oferece recursos de pesquisa e filtros para permitir que os usuários encontrem carros específicos com base em critérios como marca, modelo, ano, etc. Esses recursos facilitam a navegação pelos anúncios de carros e ajudam os usuários a encontrar veículos que atendam às suas necessidades.

Para inciar este projeto, é necessário instalar as dependências e configurar o arquivo de variáves de ambiente. Portanto utilize o comando abaixo para instalar tais dependências:

## Caso use yarn

`yarn` Para instalar todas as dependências

Após instalar as dependências, é necessário:

Criar um banco de dados Postgresql em sua máquina
<br/>
Criar um arquivo `.env` na raiz do projeto baseado em `.env.example` e preencher com os dados de conexão em DATABASE_URL.

`yarn typeorm migration:run -d ./src/data-source` Para rodar todas as migrações necessárias

`yarn dev` Para rodar a API localmente

## Caso use npm

`npm install` Para instalar todas as dependências

Criar um banco de dados Postgresql em sua máquina
<br/>
Criar um arquivo `.env` na raiz do projeto baseado em `.env.example` e preencher com os dados de conexão em DATABASE_URL.

`npm run dev` Para rodar a aplicação localmente
