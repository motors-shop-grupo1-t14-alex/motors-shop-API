# motors-shop-API

Para inciar este projeto, é necessário instalar as dependências. Portanto utilize o comando abaixo para instalar tais dependências:
# caso use yarn
yarn

Após instalar as dependências, é necessário criar um banco de dados Postgresql em sua máquina, criar um arquivo .env na raiz do projeto baseado em .env.example e preencher com os dados de conexão em DATABASE_URL. Utilize o comando abaixo para inicializar o servidor e fazer a conexão com banco de dados:

yarn dev

Utilize o comando abaixo para rodar as migrações:

yarn typeorm migration:run -d ./src/data-source
