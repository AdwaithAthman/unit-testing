import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe(" <Button /> ", () => {
    it("props", () => {
        render(<Button type="button" title="Submit" />);
        expect(screen.getByRole("button")).toHaveTextContent("Submit");
    })
});