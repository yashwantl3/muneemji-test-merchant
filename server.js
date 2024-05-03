exports.handler = async (event) => {
  // Access POST data (if applicable)
  const postData = JSON.parse(event.body);

  // Process the POST data here (e.g., store it in a database)

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      status: "CAPTURE_SUCCESSFUL",
    }),
  };
  return response;
};
