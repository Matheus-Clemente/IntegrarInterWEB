# IntegrarInterWEB
Projeto Fase 1 Da disciplina Integrar interfaces Web  
Descrição da primeira Fase

Projeto de Desenvolvimento de Backend para Aplicação Web

Neste projeto, o objetivo é desenvolver o backend de uma aplicação web completa,
utilizando duas abordagens principais: RESTful e GraphQL. A aplicação deverá ser robusta,
envolvendo validação de dados, segurança com JSON Web Token (JWT), e o uso de um
banco de dados para implementar o relacionamento entre as entidades.
A primeira etapa envolve o desenvolvimento de uma API RESTful, onde deverá ser criado
endpoints para realizar operações CRUD (Create, Read, Update, Delete) sobre as
entidades do sistema. Além disso, o sistema deve ter segurança implementada com
autenticação via JWT para garantir que apenas usuários autorizados possam acessar
certas funcionalidades da aplicação.
Após a implementação da API RESTful, a segunda etapa consiste em simplificar a
aplicação utilizando GraphQL. A simplificação deverá ser feita com base na API RESTful já
criada, mas utilizando as vantagens do GraphQL, como a flexibilidade na consulta de
dados. Pelo menos uma entidade deve ser criada e exposta via GraphQL, demonstrando
como integrar as funcionalidades do sistema com este novo paradigma de consulta.

O projeto será avaliado em três principais critérios, com a seguinte divisão de pontos:

Critério Descrição Pontuação
Implementação RESTful Desenvolvimento da API RESTful completa, com endpoints para operações CRUD, validação de dados,
relacionamento entre entidades e autenticação via JWT.
1,5 pontos

Implementação de Segurança

Implementação de segurança usando JWT para autenticação e autorização dos usuários.
Apenas usuários autenticados devem poder acessar recursos restritos.
0,5 pontos

Simplificação com GraphQL Implementação simplificada de uma parte do sistema usando GraphQL. Pelo
menos uma entidade deve ser criada e exposta viaGraphQL. A transição de RESTful para GraphQLdeve ser feita de maneira clara e funcional.
1 ponto
