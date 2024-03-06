export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate a successful API response
    resolve({
      status: 200,
      body: 'Response from API',
    });
  });
}
