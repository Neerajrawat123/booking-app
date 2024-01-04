const ApiError = require("../../utils/apiError");


function errorHandler (err, req, res, next) {
    let statusCode = 500;
    let message = "Internal Server Error";

    if(err instanceof ApiError ){

        statusCode = err.statusCode;
        message = err.message;
    }else{
        if (process.env.NODE_ENV !== "production") {
            // since in JavaScript you can also
            // directly throw strings
            if (typeof err === "string") {
              message = err;
            } else if (err instanceof Error) {
              message = err.message;
            }
          }
    }



    res.status(statusCode).send({
        error: {
          statusCode:statusCode,
          message: message,
          isSuccess:false
          
        },
      });

      return next(err)
    
}

module.exports = errorHandler