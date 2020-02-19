const functions = require("./functions");

// toBe
test("adds 2+ 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test("adds 2+ 2 to equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual
test("User should be ao cattleya", () => {
  expect(functions.createUser()).toEqual({
    firstName: "cattleya",
    lastName: "ao"
  });
});

// LESS than and greater then
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrrays
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});
