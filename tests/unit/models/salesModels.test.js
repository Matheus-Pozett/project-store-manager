const sinon = require("sinon");
const { expect } = require("chai");
const connection = require("../../../models/connection");
const salesModel = require("../../../models/sales");
const salesMock = require("../saleMocks");

describe("TESTS SALES MODELS", () => {
  describe("#getAllSales, Testa se retorna uma Lista com todas as vendas", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([salesMock.getAll]);
    });

    after(() => {
      connection.execute.restore();
    });

    it("Será validado se retorna uma lista com todas as vendas", async () => {
      const salesAll = await salesModel.getAllSales();
      expect(salesAll).to.be.deep.equal(salesMock.getAll);
    });
  });

  describe("#getSalesById, Testa se retorna uma venda por Id", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([salesMock.getId]);
    });

    after(() => {
      connection.execute.restore();
    });
    it("Será validado se retorna uma venda", async () => {
      const salesById = await salesModel.getSalesById();
      expect(salesById).to.be.deep.equal(salesMock.getId);
    });
  });

  describe("#createSalesProduct, Testa se adiciona um produto na tabela", () => {
    before(() => {
      sinon.stub(connection, "execute").resolves([salesMock.insertId]);
    });

    after(() => {
      connection.execute.restore();
    });

    it("Será validado que uma venda foi cadastrada com sucesso", async () => {
      const create = await salesModel.createSales([
        {
          productId: 1,
          quantity: 10,
        },
      ]);
      expect(create).to.be.deep.equal({
        id: undefined,
        itemsSold: [
          {
            productId: 1,
            quantity: 10,
          },
        ],
      });
    });
  });
});
