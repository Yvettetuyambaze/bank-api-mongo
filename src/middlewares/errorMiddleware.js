const errorMiddleware = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  };
  
  module.exports = errorMiddleware;
  