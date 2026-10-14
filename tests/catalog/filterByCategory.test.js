const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = "all";
    expect(
      filterByCategory(products, category).map((product) => product.id),
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = undefined;
    expect(
      filterByCategory(products, category).map((product) => product.id),
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = "";
    expect(
      filterByCategory(products, category).map((product) => product.id),
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const category = "electronics";
    expect(
      filterByCategory(products, category).map((product) => product.id),
    ).toEqual([1, 2]);
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    const category = "books";
    expect(
      filterByCategory(products, category).map((product) => product.id),
    ).toEqual([3, 6]);
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    const category = "home";
    expect(
      filterByCategory(products, category).map((product) => product.id),
    ).toEqual([4, 5]);
  });
  test.todo("'clothes' возвращает пустой массив");
  test.todo("'toys' возвращает пустой массив");
  test.todo("'sports' возвращает пустой массив");
});
