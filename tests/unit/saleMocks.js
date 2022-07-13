module.exports = {
  getAll: [
    {
      saleId: 1,
      date: "2022-03-10T02:45:09.000Z",
      productId: 1,
      quantity: 5,
    },
    {
      saleId: 1,
      date: "2022-03-10T02:45:09.000Z",
      productId: 2,
      quantity: 10,
    },
    {
      saleId: 2,
      date: "2022-03-10T02:45:09.000Z",
      productId: 3,
      quantity: 15,
    },
  ],
  getId: [
    {
      date: "2022-03-09T19:34:48.000Z",
      productId: 1,
      quantity: 5,
    },
    {
      date: "2022-03-09T19:34:48.000Z",
      productId: 2,
      quantity: 10,
    },
  ],
  sucessResponse: {
    status: 200,
    result: [
      {
        saleId: 1,
        date: "2022-03-10T02:45:09.000Z",
        productId: 1,
        quantity: 5,
      },
      {
        saleId: 1,
        date: "2022-03-10T02:45:09.000Z",
        productId: 2,
        quantity: 10,
      },
      {
        saleId: 2,
        date: "2022-03-10T02:45:09.000Z",
        productId: 3,
        quantity: 15,
      },
    ],
  },
  sucessResponseId: {
    status: 200,
    result: [
      {
        date: "2022-03-09T19:34:48.000Z",
        productId: 1,
        quantity: 5,
      },
      {
        date: "2022-03-09T19:34:48.000Z",
        productId: 2,
        quantity: 10,
      },
    ],
  },

  createResponseSucess: {
    status: 201,
    result: {
      id: 1,
      itemsSold: [
        {
          productId: 1,
          quantity: 10,
        },
      ],
    },
  },

  updateResponseSucess: {
    status: 200,
    result: {
      saleId: 1,
      itemUpdated: [
        {
          productId: 1,
          quantity: 10,
        },
      ],
    },
  },

  insertId: [{ insertId: 1 }],
};
