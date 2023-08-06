import React from "react";
import Navbar from "../src/components/Navbar";
import { describe, it, expect } from 'vitest';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";
import mediaQuery from 'css-mediaquery';
import { fireEvent, render, screen } from "@testing-library/react";

describe("Navbar component", () => {

    it("tests the children inside Navbar component", () => {
        const navbar = TestRenderer.create(<MemoryRouter><Navbar /></MemoryRouter>).toJSON();

        // Shop route
        expect(navbar.children[1].children[0].children[0].children[0].type).toBe('a');
        expect(navbar.children[1].children[0].children[0].children[0].props.href).toBe('/');

        // About route
        expect(navbar.children[1].children[0].children[1].children[0].type).toBe('a');
        expect(navbar.children[1].children[0].children[1].children[0].props.href).toBe('/shop');
    });

    it("tests that the hamburger menu button exists", async () => {
        render(<MemoryRouter><Navbar /></MemoryRouter>);
        const button = screen.getByRole('button');

        expect(button).toBeInTheDocument();
    })

    it("tests that clicking the hamburger menu button expands the dropdown menu", async () => {
        const createMatchMedia = (width) => (query) => ({
            matches: mediaQuery.match(query, { width }),
            addListener: () => { },
            removeListener: () => { }
        });

        window.matchMedia = createMatchMedia(300);
        render(<MemoryRouter><Navbar /></MemoryRouter>);
        const hamburgerButton = screen.getByRole('button');

        fireEvent.click(hamburgerButton);

        const nav = screen.getByTestId('nav');
        expect(nav.className).toBe('navigationMenu expanded')
    })

    it("will create a snapshot", () => {
        const navbar = TestRenderer.create(<MemoryRouter><Navbar /></MemoryRouter>).toJSON();
        expect(navbar).toMatchSnapshot();
    })

});
