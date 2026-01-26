test("test", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");

  console.log(response);
  expect(response.status).toBe(200);
});
