import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "../src/components/ProductList";
import { describe, it, expect, vi } from 'vitest';
import axios from 'axios'
import { MemoryRouter } from "react-router-dom";

describe("Product List component", () => {
    it('makes a GET request to fetch product data', async () => {
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
            },
            {
                "id": 2,
                "title": "Mens Casual Premium Slim Fit T-Shirts ",
                "price": 22.3,
                "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "rating": {
                    "rate": 4.1,
                    "count": 259
                }
            }
        ];

        axios.get.mockResolvedValue({
            data: productMock,
        })

        const { findByText } = render(<ProductList />);
        expect(await findByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument();
    })
})

describe('Product display', () => {
    it("renders add to cart button", async () => {
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

        render(<MemoryRouter> <ProductList /></MemoryRouter >);
        await screen.findByRole('button', { name: /add to cart/i })
        expect(screen.getByRole('button', { name: /add to cart/i }).textContent).toMatch(/add to cart/i);
    })

    it("renders input field", async () => {
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

        render(<MemoryRouter> <ProductList /></MemoryRouter >);
        await screen.findByRole('textbox')
        expect(screen.getByRole('textbox').value).toMatch('1');
    })

    it("renders decrement button", async () => {
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

        render(<MemoryRouter> <ProductList /></MemoryRouter >);
        await screen.findByRole('button', { name: /subtract one/i })
        const subtractButton = screen.getByRole('button', { name: /subtract one/i });
        expect(subtractButton).toBeInTheDocument();
    })

    it("renders increment button", async () => {
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

        render(<MemoryRouter> <ProductList /></MemoryRouter >);
        await screen.findByRole('button', { name: /add one/i })
        const subtractButton = screen.getByRole('button', { name: /add one/i });
        expect(subtractButton).toBeInTheDocument();
    })

    it("renders image", async () => {
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

        render(<MemoryRouter> <ProductList /></MemoryRouter >);
        await screen.findByRole('img');
        expect(screen.getByRole('img')).toBeInTheDocument();
    })

    it("renders product name", async () => {
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

        render(<MemoryRouter> <ProductList /></MemoryRouter >);
        await screen.findByRole('heading', { level: 2 });
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    })

    it("renders price", async () => {
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

        render(<MemoryRouter> <ProductList /></MemoryRouter >);
        await screen.findByText('$109.95');
        expect(screen.getByText('$109.95')).toBeInTheDocument();
    })
})