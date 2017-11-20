'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {

    console.log('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    let publisherId = event.queryStringParameters.publisherId || event.headers.referrer;

    if (!publisherId) {
        return done({message: "No publisher ID"});
    }

    // console.log('Event: ', event);
    // console.log('Context: ', context);
    console.log(event.queryStringParameters);
    done();

    // switch (event.httpMethod) {
    //     case 'DELETE':
    //         console.log('DELETE');
    //         // dynamo.deleteItem(JSON.parse(event.body), done);
    //         break;
    //     case 'GET':
    //         console.log('GET');
    //         // dynamo.scan({ TableName: event.queryStringParameters.TableName }, done);
    //         break;
    //     case 'POST':
    //         // dynamo.putItem(JSON.parse(event.body), done);
    //         break;
    //     case 'PUT':
    //         // dynamo.updateItem(JSON.parse(event.body), done);
    //         break;
    //     default:
    //         done(new Error(`Unsupported method "${event.httpMethod}"`));
    // }
};
