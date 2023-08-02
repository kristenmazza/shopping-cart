import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../src/components/header";
import { describe, it, expect } from 'vitest';

describe("Header component", () => {
    it("renders correct heading", () => {
        render(<Header />);
        expect(screen.getByRole("heading").textContent).toMatch(/lumina/i);
    });
});

