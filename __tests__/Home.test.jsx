import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../src/components/Home";
import { describe, it, expect } from 'vitest';
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Home component", () => {
    it("renders correct heading", () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(/everydayessentials/i);
    });

    it("renders shop button", () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        expect(screen.getByRole('button').textContent).toMatch(/shop/i);
    })

    it("tests that shop button navigates to shop", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
        const button = screen.getByRole('button', { name: /shop/i });

        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(window.location.pathname).toBe('/shop')
    })
});
