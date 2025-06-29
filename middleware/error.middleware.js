const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };

    error.message = err.message;

    console.error(err);

    // Mongoose bad ObjectId error
    if (err.name === "CastError") {
      const message = `Resource not found. Invalid: ${err.path}`;
      error = new Error(message);
      error.StatusCode = 404;
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
      const message = `Duplicate field value entered`;
      error = new Error(message);
      error.StatusCode = 400;
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      error = new Error(message);
      error.StatusCode = 400;
    }

    res.status(error.StatusCode || 500).json({
      success: false,
      error: error.message || "Server Error",
    });
  } catch (error) {
    next(error);
  }
};
export default errorMiddleware;
