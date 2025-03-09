const Usuario = require('../model/Usuario');
const Produto = require('../model/Produto');
const Pedido = require('../model/Pedido');

const resolvers = {
  Query: {
    usuarios: async () => await Usuario.find(),
    usuario: async (_, { id }) => await Usuario.findById(id),
    produtos: async () => await Produto.find(),
    produto: async (_, { id }) => await Produto.findById(id),
    pedidos: async () => await Pedido.find().populate('usuario').populate('produtos.produto'),
  },

  Mutation: {
    registrar: async (_, { nome, email, senha }) => {
      const novoUsuario = new Usuario({ nome, email, senha });
      await novoUsuario.save();
      return novoUsuario;
    },

    criarProduto: async (_, { nome, descricao, preco, categoria, estoque }) => {
      const novoProduto = new Produto({ nome, descricao, preco, categoria, estoque });
      await novoProduto.save();
      return novoProduto;
    },

    criarPedido: async (_, { usuarioId, produtos }) => {
      let total = 0;

      for (const item of produtos) {
        const produto = await Produto.findById(item.produtoId);
        if (produto) {
          total += produto.preco * item.quantidade;
        }
      }

      const pedido = new Pedido({
        usuario: usuarioId,
        produtos: produtos.map(p => ({
          produto: p.produtoId,
          quantidade: p.quantidade
        })),
        total,
        status: 'pendente'
      });

      await pedido.save();
      return pedido;
    },
  },
};

module.exports = resolvers;
