import React from "react";
import Navbar from "../src/components/Navbar";
import { describe, it, expect } from 'vitest';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";

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

    it("will create a snapshot", () => {
        const navbar = TestRenderer.create(<MemoryRouter><Navbar /></MemoryRouter>).toJSON();
        expect(navbar).toMatchSnapshot();
    })
});
