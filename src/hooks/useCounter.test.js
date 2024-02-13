import { useCounter } from "./useCounter";
import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";

describe("useCounter", () => {
    it("Render default count", () => {
        const { result } = renderHook(useCounter);
        expect(result.current.count).toBe(0)
    })
    it("Render initial count", () => {
        const { result } = renderHook(() => useCounter(10));
        expect(result.current.count).toBe(10)
    })
    it("Increment", () => {
        //Arrange, Act, Assert

        //Arrange
        const { result } = renderHook(useCounter);

        //Act
        act(() => {
            result.current.onIncrement();
        })

        //Assert
        expect(result.current.count).toBe(1)
    })

    it("Decrement", () => {
        const { result } = renderHook(useCounter);
        act(() => {
            result.current.onDecrement();
        })
        expect(result.current.count).toBe(-1)
    })
});