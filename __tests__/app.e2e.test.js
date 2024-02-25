const request = require("supertest");
const {app, server, serverPort} = require("../server");

beforeAll(() => {
  server.listen(serverPort);
});

afterAll((done) => {
  server.close(done);
});

// describe("Health check", () => {
//   it("responds with a 200 status code", async () => {
//     const response = await request(app).get("/health");
//     expect(response.statusCode).toBe(200);
//   });
// });


describe("should calculate", () => {
  it("response will give me a result of a mathematical excercise", async () => {
    const loginResponse = await request(app)
      .post("/login")
      .send({ username: "Almog", password: "Almog123!@#" });
      console.log(loginResponse.header)
    const response = await request(app)
      .post("/calculate")
      .send({ first_num: 5, second_num: 10 })
      .set( "X-Calculation-Method", "*" )
      .set('Cookie', [`${loginResponse.header['set-cookie'][0]}`])
      console.log(response.body)
    expect(response.body.result).toBe(50)
    expect(response.statusCode).toBe(200);
  });
});
