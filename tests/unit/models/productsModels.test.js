const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../../models/connection");
const productsModel = require("../../../models/product");
const productsMock = require("../productMocks");

describe("TESTS PRODUCTS MODELS", () => {
  describe("#getAllProducts, Testa se retorna uma lista vazia", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([productsMock.empty]);
    });

    after(() => {
      connection.execute.restore();
    });
    it("Retorna uma lista sem produtos", async () => {
      const products = await productsModel.getAllProducts();
      expect(products).to.be.deep.equal(productsMock.empty);
    });
  });

  describe("#getAllProducts, Testa se retorna uma lista com dados", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([productsMock.getAll]);
    });

    after(() => {
      connection.execute.restore();
    });

    it("Retorna uma lista com todos os produtos", async () => {
      const products = await productsModel.getAllProducts();
      expect(products).to.be.deep.equal(productsMock.getAll);
    });
  });

  describe("#getProductsById, Testa se retorna um produto por Id", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([productsMock.getId]);
    });

    after(() => {
      connection.execute.restore();
    });

    it("Será validado que é possível listar um determinado produto por Id", async () => {
      const productId = await productsModel.getProductsById(1);
      expect(productId).to.be.deep.equal(productsMock.getId);
    });
  });

  describe("#createProduct, Testa se adiciona um produto na tabela", () => {
    const exampleMock = {
      id: 1,
      name: "Loki",
    };

    before(() => {
      sinon.stub(connection, "execute").resolves(productsMock.insertId);
    });

    after(() => {
      connection.execute.restore();
    });

    it("Será validado que um produto foi cadastrado com sucesso", async () => {
      const create = await productsModel.createProduct(
        exampleMock.name,
        exampleMock.quantity
      );
      expect(create).to.be.deep.equal(exampleMock);
    });
  });

  // describe("#updateProduct, Testa se atualiza um produto", () => {
  //   const exampleMock = {
  //     id: 1,
  //     name: "Wanda",
  //   };
  //   before(() => {
  //     sinon.stub(connection, "execute").resolves(productsMock.insertId);
  //   });

  //   after(() => {
  //     connection.execute.restore();
  //   });

  //   it("Será validado que um produto foi atualizado com sucesso", async () => {
  //     const update = await productsModel.updateProduct(
  //       exampleMock.id,
  //       exampleMock.name
  //     );
  //     expect(update).to.be.deep.equal(exampleMock);
  //   });
  // });

  describe("#deleteProduct, Testa se deleta um produto ", () => {
    const exampleMock = {
      id: 1,
      name: "Wanda",
    };

    before(() => {
      sinon.stub(connection, "execute").resolves(productsMock.insertId);
    });

    after(() => {
      connection.execute.restore();
    });

    it("Será validado que um produto foi deletado com sucesso", async () => {
      const deletedProduct = await productsModel.deleteProduct(
        exampleMock.id,
        exampleMock.name,
        exampleMock.quantity
      );
      expect(deletedProduct).to.be.deep.equal(undefined);
    });
  });
});