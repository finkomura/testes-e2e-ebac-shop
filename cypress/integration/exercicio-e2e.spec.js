/// <reference types="cypress" />
import EnderecoFaturamento from "../support/page_objects/EnderecoFaturamento"
const dadosEndereco = require("../fixtures/dadosEndereco.json")
const produtos = require("../fixtures/produtos.json")

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('produtos/page/17')
        //escolhi essa pagina de produto de acordo com a disponibilidade dos seus itens
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //utilizando o comando personalizado e a lista criada no fixtures, conseguimos aceder aos 4 produtos
        cy.addProdutos(
            produtos[0].codigo,
            produtos[0].tamanho,
            produtos[0].cor,
            produtos[0].quantidade
        )
        cy.addProdutos(
            produtos[1].codigo,
            produtos[1].tamanho,
            produtos[1].cor,
            produtos[1].quantidade
        )
        cy.addProdutos(
            produtos[2].codigo,
            produtos[2].tamanho,
            produtos[2].cor,
            produtos[2].quantidade
        )
        cy.addProdutos(
            produtos[3].codigo,
            produtos[3].tamanho,
            produtos[3].cor,
            produtos[3].quantidade
        )

            //caso nao utilizasse a personalizacao dos comandos, ficaria assim:
        //cy.get('.post-2858 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        //cy.get('.button-variable-item-XS').click()
        //cy.get('.button-variable-item-Black').click()
        //cy.get('.input-text').clear().type(2)
        //cy.get('.single_add_to_cart_button').click()

        //cy.visit('produtos/page/17')

        //cy.get('.post-2913 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        //cy.get('.button-variable-item-33').click()
        //cy.get('.button-variable-item-Gray').click()
        //cy.get('.input-text').clear().type(3)
        //cy.get('.single_add_to_cart_button').click()

        //cy.visit('produtos/page/17')

        //cy.get('.post-3641 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        //cy.get('.button-variable-item-S').click()
        //cy.get('.button-variable-item-Black').click()
        //cy.get('.input-text').clear().type(3)
        //cy.get('.single_add_to_cart_button').click()

        //cy.visit('produtos/page/17')

        //cy.get('.post-3019 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        //cy.get('.button-variable-item-34').click()
        //cy.get('.button-variable-item-Green').click()
        //cy.get('.input-text').clear().type(1)
        //cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        // dessa forma acedemos ao checkout. Agora, preencheremos com as informacoes.
        // para esse fim, foi criado o EnderecoFaturamento, que vai buscar itens da lista dadosEndereco criada nos fixtures
        EnderecoFaturamento.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].Estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        //por fim, confirmamos que aceitamos os termos e completamos a compra
        cy.get('#terms').click()
        cy.get('#place_order').click()
        //verificamos se foi concluida com sucesso
        cy.get('.woocommerce-notice').should('contain', 'Obrigado')

    });


})
    