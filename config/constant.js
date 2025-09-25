const restApi = {
  STATUSCODE: {
    ok: 200,
    created: 201,
    notFound: 404,
    internalServerError: 500,
  },
};

const messageTypes = {
  stockGetError: "Error retrieving stocks",
  stockCreateError: "Error creating stock",
  stockUpdateError: "Error updating stock",
  stockDeleteError: "Error deleting stock",
  stockDeleteSuccess: "Stock deleted successfully",
};

const errorTypes = {
  stockNotFound: "Stock not found",
};

module.exports = { restApi, messageTypes, errorTypes };
