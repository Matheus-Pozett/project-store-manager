const sinon = require("sinon");
const { expect } = require("chai");
const saleMocks = require("../saleMocks");
const saleServices = require("../../../services/sales");
const salesModels = require("../../../models/sales");

describe("TESTS SALES SERVICES", () => {
  describe("#getAllSales, Testa se retorna uma lista com produtos", () => {
    before(() => {
      sinon.stub(salesModels, "getAllSales").resolves(saleMocks.getAll);
    });

    after(() => {
      salesModels.getAllSales.restore();
    });

    it("Será validado se retorna uma lista com todas as vendas", async () => {
      const salesAll = await saleServices.getAllSales();
      expect(salesAll).to.be.deep.equal(saleMocks.sucessResponse);
    });
  });

  describe("#getSalesById, Testa se retorna uma venda por Id", () => {
    before(() => {
      sinon.stub(salesModels, "getSalesById").resolves(saleMocks.getId);
    });

    after(() => {
      salesModels.getSalesById.restore();
    });

    it("Será validado se retorna uma lista com uma venda", async () => {
      const salesId = await saleServices.getSaleById(1);
      expect(salesId).to.be.deep.equal(saleMocks.sucessResponseId);
    });
  });

  describe("#createSales, Testa se será adicionado uma venda na tabela", () => {
    const createSalesMock = {
      id: 1,
      itemsSold: [
        {
          productId: 1,
          quantity: 10,
        },
      ],
    };

    before(() => {
      sinon.stub(salesModels, "createSales").resolves(createSalesMock);
    });

    after(() => {
      salesModels.createSales.restore();
    });

    it("Será validado se uma venda foi cadastrada com sucesso", async () => {
      const create = await saleServices.createSales([
        { productId: 1, quantity: 10 },
      ]);
      expect(create).to.be.deep.equal(saleMocks.createResponseSucess);
    });
  });
});
