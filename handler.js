module.exports.hello = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello Serverless !!!'
        })
    };
    return callback(null, response);
};

module.exports.item = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Your item id is ${event.pathParameters && event.pathParameters.id}.`
        })
    };
    return callback(null, response);
};
