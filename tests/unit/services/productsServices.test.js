const sinon = require("sinon");
const { expect } = require("chai");
const productsMock = require("../productMocks");
const productServices = require("../../../services/product");
const productsModel = require("../../../models/product");

describe("TESTS PRODUCTS SERVICES", () => {
  describe("#getAllProducts, Testa se retorna uma lista com dados", () => {
    before(() => {
      sinon.stub(productsModel, "getAllProducts").resolves(productsMock.getAll);
    });

    after(() => {
      productsModel.getAllProducts.restore();
    });

    it("Retorna uma lista com todos os produtos", async () => {
      const products = await productServices.getAllProducts();
      expect(products).to.be.deep.equal(productsMock.sucessResponse);
    });
  });

  describe("#getProductsById, Testa se retorna um produto por Id", () => {
    before(() => {
      sinon
        .stub(productsModel, "getProductsById")
        .resolves([productsMock.getId]);
    });

    after(() => {
      productsModel.getProductsById.restore();
    });

    it("Será validado que é possível listar um determinado produto por Id", async () => {
      const productId = await productServices.getProductsById(1);
      expect(productId).to.be.deep.equal(productsMock.sucessResponseId);
    });
  });

  describe("#createProduct, Testa se será adicionado um produto na tabela", () => {
    const createProduct = {
      id: 1,
      name: "Manopla do Thanos",
    };

    before(() => {
      sinon.stub(productsModel, "createProduct").resolves(createProduct);
      sinon
        .stub(productsModel, "getAllProducts")
        .resolves([productsMock.getAll]);
    });

    after(() => {
      productsModel.createProduct.restore();
      productsModel.getAllProducts.restore();
    });

    it("Será validado se um produto foi cadastrado com sucesso", async () => {
      const create = await productServices.createProduct(
        createProduct.name,
        createProduct.quantity
      );
      expect(create).to.be.deep.equal(productsMock.createResponseSucess);
    });
  });

  describe("#deleteProduct, Testa se um produto é deletado da tabela", () => {
    before(() => {
      sinon
        .stub(productsModel, "deleteProduct")
        .resolves(productsMock.insertId);
      sinon
        .stub(productsModel, "getProductsById")
        .resolves([productsMock.getId]);
    });

    after(() => {
      productsModel.deleteProduct.restore();
      productsModel.getProductsById.restore();
    });

    it("Será validado que um produto foi deletado com sucesso", async () => {
      const deleteProduct = await productServices.deleteProduct(1);
      expect(deleteProduct).to.be.deep.equal(productsMock.deleteResponseSucess);
    });
  });
});
