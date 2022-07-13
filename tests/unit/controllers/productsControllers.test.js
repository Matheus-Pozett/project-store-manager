const sinon = require("sinon");
const { expect } = require("chai");
const productServices = require("../../../services/product");
const productControllers = require('../../../controllers/product');
const productsMock = require("../productMocks");

describe("TESTS PRODUCTS CONTROLLER", () => {
  describe('#update', () => {
    describe("Será validado que é possível alterar um produto com sucesso", async () => {
      const req = {};
      const res = {};

      before(() => {
        req.params = 1;
        req.body = { name: "test name" };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(productServices, "updateProduct").resolves(productsMock.sucessResponseId);
      });
      after(() => {
        productServices.updateProduct.restore();
      });

      it("Retorna status 200", async () => {
        await productControllers.update(req, res);

        expect(res.status.calledWith(200)).to.be.true;
      });
    })
  })
})
