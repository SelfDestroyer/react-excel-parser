import { classNames } from "shared/lib/classNames/classNames";

describe("Testing classNames helper function", () => {
  test('Test with first argument "cls"', () => {
    const expectedString = "app";

    expect(classNames("app")).toBe(expectedString);
  });

  test('Test with two arguments "cls and mods"', () => {
    const cls = "app";
    const expectedString = "app closed";

    expect(
      classNames(cls, {
        closed: true,
        open: false
      })
    ).toBe(expectedString);
  });

  test('Test with three arguments "cls, mods and additional"', () => {
    const expectedString = "app light open top";

    expect(
      classNames(
        "app",
        {
          open: true,
          top: true,
          scrollable: false,
          bottom: false
        },
        ["light"]
      )
    ).toBe(expectedString);
  });

  test("Test with mods undefined", () => {
    const expectedString = "app open";

    expect(
      classNames(
        "app",
        {
          open: true,
          top: true
        },
        ["light"]
      )
    ).not.toBe(expectedString);
  });

  test("Test on fail", () => {
    const expectedString = "app open";

    expect(
      classNames(
        "app",
        {
          open: true,
          top: true
        },
        ["light"]
      )
    ).not.toBe(expectedString);
  });
});
