const { generatePassPhrase } = require("./index");

it("Should return 5 words as default if length is empty", () => {
  expect(generatePassPhrase().length).toBe(5);
});

it("Should return total number of words based on selected length", () => {
  expect(generatePassPhrase(5).length).toBe(5);
});

it("Should return length words that starts with letter a based on selected length", () => {
  expect(generatePassPhrase(5, "a").length).toBe(5);
});

it("Should return true if all words start with letter a", () => {
  const words = generatePassPhrase(10, "a");
  // expect to be true at first
  let result = true;
  words.forEach((d) => {
    if (!d.startsWith("a")) {
      return (result = false);
    }
  });
  expect(result).toBe(true);
});

it("Should return true for array result", () => {
  const arrayData = Array.isArray(generatePassPhrase(5));
  expect(arrayData).toEqual(true);
});
