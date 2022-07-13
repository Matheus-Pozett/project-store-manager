module.exports = {
  empty: [],

  getAll: [
    {
      id: 1,
      name: "Manopla do Thanos",
      quantity: 10,
    },
    {
      id: 2,
      name: "Capa do Dr. Estranho",
      quantity: 1,
    },
    {
      id: 3,
      name: "Joias do infinito",
      quantity: 99999,
    },
  ],

  getId: {
    id: 1,
    name: "Manopla do Thanos",
    quantity: 10,
  },
  insertId: [{ insertId: 1 }],

  sucessResponse: {
    status: 200,
    result: [
      {
        id: 1,
        name: "Manopla do Thanos",
        quantity: 10,
      },
      {
        id: 2,
        name: "Capa do Dr. Estranho",
        quantity: 1,
      },
      {
        id: 3,
        name: "Joias do infinito",
        quantity: 99999,
      },
    ],
  },
  sucessResponseId: {
    status: 200,
    result: {
      id: 1,
      name: "Manopla do Thanos",
      quantity: 10,
    },
  },
  unsuccessfulResponse: {
    code: 404,
    data: { message: "Product not found" },
  },

  createResponseSucess: {
    status: 201,
    result: {
      id: 1,
      name: "Manopla do Thanos",
      quantity: 10,
    },
  },

  deleteResponseSucess: {
    status: 204,
    result: "No content",
  },
};
