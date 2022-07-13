module.exports = {
  empty: [],

  getAll: [
    {
      id: 1,
      name: "Manopla do Thanos",
    },
    {
      id: 2,
      name: "Capa do Dr. Estranho",
    },
    {
      id: 3,
      name: "Joias do infinito",
    },
  ],

  getId: {
    id: 1,
    name: "Manopla do Thanos",
  },

  insertId: [{ insertId: 1 }],

  sucessResponse: {
    status: 200,
    result: [
      {
        id: 1,
        name: "Manopla do Thanos",
      },
      {
        id: 2,
        name: "Capa do Dr. Estranho",
      },
      {
        id: 3,
        name: "Joias do infinito",
      },
    ],
  },
  sucessResponseId: {
    status: 200,
    result: {
      id: 1,
      name: "Manopla do Thanos",
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
    },
  },

  deleteResponseSucess: {
    status: 204,
    result: "No content",
  },
};
