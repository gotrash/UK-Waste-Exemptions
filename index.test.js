const exemptions = require("./waste-exemptions.json");
const stringifyJson = () => JSON.stringify(exemptions);
const parseJson = () => JSON.parse(stringifyJson());

it("Is a valid JS object", () => {
  expect(stringifyJson).not.toThrow();
});

it("Can produces valid JSON", () => {
  expect(parseJson).not.toThrow();
});
