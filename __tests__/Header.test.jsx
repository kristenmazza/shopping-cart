import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/header";
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";

describe("Header component", () => {
    it("renders correct heading", () => {
        render(<MemoryRouter><Header /></MemoryRouter>);
        expect(screen.getByRole("heading").textContent).toMatch(/lumina/i);
    });
});

