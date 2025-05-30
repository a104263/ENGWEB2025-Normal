As alterações que apliquei ao dataset foram colocar as edições numa lista em vez de um objeto, colocar o campo id dentro do objeto da edição em vez de o usar como chave, e renomear o campo id para _id.

Para importar o dataset para o mongo, os comandos são os seguintes:
Colocar o docker a correr
> docker cp dataset.json (nome do docker):/tmp
> docker exec -it mongoEW sh
> mongoimport -d eurovisao -c edicoes /tmp/dataset.json --jsonArray

Para executar a API de dados:
> cd ex1
> npm i
> npm start

Para executar o servidor da interface:
> cd ex2
> npm i
> npm start