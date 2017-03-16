'use strict';

var fs = require('fs');

module.exports.search = (event, context, callback) => {
  fs.readFile('result.json', 'utf8', function(err, contents) {
    //console.log(contents);
    callback(null,{
      statusCode: 200,
      body: JSON.stringify({
        message: contents,
        input: event,
      }),
    });
  });


//
// }),
// };
//
//   callback(null, response);
//
//});



  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
