const sinon = require('sinon');
const { expect } = require('chai');
const productsMock = require('../productMocks');
const productServices = require('../../../services/product');
const productsModel = require('../../../models/product');

describe('TESTS PRODUCTS SERVICES', () => {
  describe('#getAllProducts, Testa se retorna uma lista com dados', () => {
    before(() => {
      sinon.stub(productsModel, 'getAllProducts').resolves(productsMock.getAll);
    })

    after(() => {
      productsModel.getAllProducts.restore();
    })

    it('Retorna uma lista com todos os produtos', async () => {
      const products = await productServices.getAllProducts();
      expect(products).to.be.deep.equal(productsMock.sucessResponse);
    })
  })
})