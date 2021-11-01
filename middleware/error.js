const errorHandler = (err, req, res) => {
  res.status(500).send({
    success: false,
    error: err.message,
  });
  //   console.log(err.stack.red);
};

module.exports = errorHandler;
