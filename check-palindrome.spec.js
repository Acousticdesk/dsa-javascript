const { checkPalindrome } = require("./check-palindrome");

describe("given checkPalindrome", () => {
  it("should return true if a string is a palindrome", () => {
    expect(checkPalindrome("tenet")).toBe(true);
    expect(checkPalindrome("carrac")).toBe(true);
  });
  it("should return false if a string is not a palindrome", () => {
    expect(checkPalindrome("notapalindrome")).toBe(false);
  });
});
