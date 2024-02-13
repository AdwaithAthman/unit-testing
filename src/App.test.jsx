import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe(" <App /> ", () => {
   it("checking if headers exists inside the component", () => {
    render(<App />);
    const pageHeader = screen.getByRole("heading", {
        name: "Hello 1"
    })
    const pageHeader2 = screen.getByRole("heading", {
        name: "Hello 2"
    })
    expect(pageHeader).toBeInTheDocument();
    expect(pageHeader2).toBeInTheDocument();
   }) 

   it("checking if span exists inside the component", () => {
    expect(screen.getByTestId("span")).toBeInTheDocument();
   })

   it("user interaction", async () => {
    userEvent.setup();
    const beforeIncrement = screen.getByTestId("p");
    expect(beforeIncrement).toHaveTextContent(0);

    const submitButton = screen.getByRole("button");
    await userEvent.click(submitButton);
    const afterIncrement = screen.getByTestId("p");
    expect(afterIncrement).toHaveTextContent(1);

    const input = screen.getByRole("textbox");
    await userEvent.type(input,"10");
    expect(input).toHaveValue();
   })
})