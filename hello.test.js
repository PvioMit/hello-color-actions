const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello, mundo, desde Espagna, Saludos Patricio Vio");
  });
});
