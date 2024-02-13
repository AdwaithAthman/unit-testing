import axios from "axios";

export const add = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") return 0;
  return num1 + num2;
};

export const reverseString = (str) => {
    return str.split("").reverse().join("");
}

export const USER_API = "https://api.com/user"

export const languages = ["JavaScript", "Python", "Java", "C++", "C#"]

export const userObj = {
    name: "John",
    age: 20,
}

export const firstUser = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/todos/1")
    return res.data
}

export const isAuthenticated  = (isLoggedIn = false) => {
    if(isLoggedIn) return "User is logged in";
    throw new Error("User is not logged in");
}