// test.index.js
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("should handle empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("should handle already uppercased string", () => {
    expect(capitalize("HELLO")).toBe("HELLO");
  });

  test("should handle mixed-case string", () => {
    expect(capitalize("HeLlO WoRlD")).toBe("HeLlO WoRlD");
  });
});

// @ FilterOddNumber
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });

  it("should handle empty array", () => {
    expect(filterOddNumber([])).toEqual([]);
  });

  it("should handle single even number", () => {
    expect(filterOddNumber([4])).toEqual([4]);
  });
});

// @ EpochDateToUTC
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    expect(epochDateToUTC(0)).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });
  
  it("should handle a large epoch", () => {
    expect(epochDateToUTC(253402300799)).toBe("Fri, 31 Dec 9999 23:59:59 GMT");
  });

  it("should handle a negative epoch", () => {
    expect(epochDateToUTC(-3600)).toBe("Wed, 31 Dec 1969 23:00:00 GMT");
  });

  it("should handle a large epoch", () => {
    expect(epochDateToUTC(253402300799)).toBe("Fri, 31 Dec 9999 23:59:59 GMT");
  });
});
