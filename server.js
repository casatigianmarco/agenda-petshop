const { GraphQLServer } = require('graphql-yoga')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')

conexao.connect(erro => {
  if (erro) {
    console.log(erro)
  }

  console.log('conectou no banco')

  Tabelas.init(conexao)
})

const resolvers = {
  Query: {
    status: () =>  "Server running..."
  }
}

const server = new GraphQLServer({
  resolvers,
  typeDefs: './schema.graphql'
})

server.start(() => console.log("server listening..."))
