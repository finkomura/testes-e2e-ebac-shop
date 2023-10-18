/// <reference types="cypress" />

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
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.get('.post-2858 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()

        cy.visit('produtos/page/17')

        cy.get('.post-2913 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Gray').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()

        cy.visit('produtos/page/17')

        cy.get('.post-3641 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(3)
        cy.get('.single_add_to_cart_button').click()

        cy.visit('produtos/page/17')

        cy.get('.post-3019 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-34').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        

    });


})
    