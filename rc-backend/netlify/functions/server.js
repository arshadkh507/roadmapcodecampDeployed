const app = require("./index");

exports.handler = async (event, context) => {
  // Ensure Express app is ready before handling requests
  await app.ready();

  // Call the serverless function
  const result = await app.handler(event, context);

  // Return the result
  return result;
};
