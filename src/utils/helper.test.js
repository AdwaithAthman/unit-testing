import { describe, it, expect } from "vitest";
import { add, firstUser, languages, reverseString, USER_API, userObj, isAuthenticated } from "./helper";

describe("add()", () => {
  it(" returns 1 + 1 = 2", () => {
    expect(add(1, 1)).toBe(2);
  });
  it("returns 500 + 500 = 1000", () => {
    expect(add(500, 500)).toBe(1000);
  });
  it("check for strings", () => {
    expect(add("1", "1")).toBe(0);
  });
});

describe("reverseString()", () => {
  it("returns reverse of string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
});

describe("USER_API URL", () => {
  it("check if url is correct", () => {
    expect(USER_API).toBe("https://api.com/user");
  });
});

describe("languages array", () => {
  it("check if array is correct", () => {
    expect(languages).toEqual(["JavaScript", "Python", "Java", "C++", "C#"]);
  });
});

describe("userObj", () => {
  it("check if object has 2 properties", () => {
    expect(userObj).toHaveProperty("name");
    expect(userObj).toHaveProperty("age");
  });
});

describe("firstUser()", () => {
   it("Check if api returns data", async () => {
    const data = await firstUser();
    expect(data).toHaveProperty("id");
    expect(data).toHaveProperty("title");
   }, 10000) 
});

describe("isAuthenticated()", () => {
  it("check if user is logged in", () => {
    expect(isAuthenticated(true)).toBeTruthy();
  });
  it("check if user is not logged in", () => {
    expect(() => isAuthenticated(false)).toThrow("User is not logged in");
  });
});