import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/components/Home";
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";

describe("Home component", () => {
    it("renders correct heading", () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        expect(screen.getByRole("heading").textContent).toMatch(/everydayessentials/i);
    });

    it("renders shop button", () => {
        render(<MemoryRouter><Home /></MemoryRouter>);
        expect(screen.getByRole('button').textContent).toMatch(/shop/i);
    })
});
