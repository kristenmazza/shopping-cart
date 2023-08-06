import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../src/components/Header";
import { describe, it, expect } from 'vitest';
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer';
import ProductList from "../src/components/ProductList";
import axios from "axios";
import { GlobalContext } from "../src/App";

describe("Header component", () => {
    it("renders correct title", () => {
        render(<MemoryRouter><Header /></MemoryRouter>);
        expect(screen.getByRole("heading").textContent).toMatch(/lumina/i);
    });

    it("tests that clicking the heading navigates to the homepage", () => {
        const header = TestRenderer.create(<MemoryRouter><Header /></MemoryRouter>).toJSON();

        expect(header.children[1].children[0].children[0].type).toBe('a');
        expect(header.children[1].children[0].children[0].props.href).toBe('/');
    });

    it("tests that clicking the cart button child inside the header component navigates to the cart", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const button = screen.getByRole('button', { name: /cart/i });

        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(window.location.pathname).toBe('/cart')
    });
});

describe('Cart in header', () => {
    it("tests that cart quantity appears in header cart button", async () => {
        vi.mock('axios');

        const productMock = [
            {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            }
        ];

        axios.get.mockResolvedValue({
            data: productMock,
        })

        // Mock global context values
        const cart = [];
        const setCart = [];
        const setCartQuantity = null;
        const total = null;
        const setTotal = null;
        const cartQuantity = 0;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <Header />
                    <ProductList />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        const cartBtn = screen.getByRole('button', { name: /cart/i });
        expect(cartBtn.children.item(1).textContent).toBe('0');
    })
})