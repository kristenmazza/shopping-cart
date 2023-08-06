import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from "react-router-dom";
import ShoppingCart from "../src/components/ShoppingCart";
import { GlobalContext } from "../src/App";

describe('Cart component', () => {
    it("renders empty cart", () => {
        // Mock global context values
        const cart = [];
        const setCart = [];
        const setCartQuantity = 0;
        const total = 0;
        const setTotal = 0;
        const cartQuantity = 0;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        screen.findByRole('heading', { level: 1 });
        expect(screen.getByRole('heading', { level: 1 }).textContent).toBe("Your cart is empty");
    });

    it("renders cart that contains items", async () => {
        // Mock global context values
        const cart = [
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
                "price": 22.30,
                "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "rating": {
                    "rate": 4.1,
                    "count": 259
                }
            }
        ];

        const setCart = [
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
                "price": 22.30,
                "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "rating": {
                    "rate": 4.1,
                    "count": 259
                }
            }
        ];

        const setCartQuantity = 2;
        const total = 132.25;
        const setTotal = 132.25;
        const cartQuantity = 2;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        await screen.findByRole('heading', { level: 1 });
        expect(screen.getByRole('heading', { level: 1 }).textContent).toBe("Your Cart");
    })
})

describe('Cart item card', () => {
    it("renders name of item", async () => {
        // Mock global context values
        const cart = [
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

        const setCart = [
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

        const setCartQuantity = 1;
        const total = 109.95;
        const setTotal = 109.95;
        const cartQuantity = 1;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        await screen.findByRole('heading', { level: 2 });
        expect(screen.getByRole('heading', { level: 2 }).textContent).toBe("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
    })

    it("renders image of item", async () => {
        // Mock global context values
        const cart = [
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

        const setCart = [
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

        const setCartQuantity = 1;
        const total = 109.95;
        const setTotal = 109.95;
        const cartQuantity = 1;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        await screen.findByRole('img');
        expect(screen.getByRole('img')).toBeInTheDocument();
    })

    it("renders price of item", async () => {
        // Mock global context values
        const cart = [
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
                },
                "quantity": 2
            }
        ];

        const setCart = [
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
                },
                "quantity": 2
            }
        ];

        const setCartQuantity = 2;
        const total = 219.90;
        const setTotal = 219.90;
        const cartQuantity = 2;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        await screen.findByText('$109.95');
        expect(screen.getByText('$109.95')).toBeInTheDocument();
    })

    it("renders remove button", async () => {
        // Mock global context values
        const cart = [
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

        const setCart = [
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

        const setCartQuantity = 1;
        const total = 109.95;
        const setTotal = 109.95;
        const cartQuantity = 1;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        await screen.findByRole('button', { name: "remove" });
        expect(screen.getByRole('button', { name: "remove" })).toBeInTheDocument();
    })

    it("renders input field", async () => {
        // Mock global context values
        const cart = [
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

        const setCart = [
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

        const setCartQuantity = 1;
        const total = 109.95;
        const setTotal = 109.95;
        const cartQuantity = 1;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        await screen.findByRole('textbox');
        expect(screen.getByRole('textbox').value).toMatch('1');
    })

    it("renders increment button", async () => {
        // Mock global context values
        const cart = [
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

        const setCart = [
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

        const setCartQuantity = 1;
        const total = 109.95;
        const setTotal = 109.95;
        const cartQuantity = 1;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        const addButton = screen.getByRole('button', { name: /add one/i });
        expect(addButton).toBeInTheDocument();
    })

    it("renders decrement button", async () => {
        // Mock global context values
        const cart = [
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

        const setCart = [
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

        const setCartQuantity = 1;
        const total = 109.95;
        const setTotal = 109.95;
        const cartQuantity = 1;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        const subtractButton = screen.getByRole('button', { name: /subtract one/i });
        expect(subtractButton).toBeInTheDocument();
    })
})

describe('Cart summary', () => {
    it("renders heading", async () => {
        // Mock global context values
        const cart = [
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

        const setCart = [
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

        const setCartQuantity = 1;
        const total = 109.95;
        const setTotal = 109.95;
        const cartQuantity = 1;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        await screen.findByRole('heading', { level: 3 });
        expect(screen.getByRole('heading', { level: 3 }).textContent).toBe("Order Summary");
    })

    it("renders estimated total", async () => {
        // Mock global context values
        const cart = [
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
                },
                "quantity": 2
            }
        ];

        const setCart = [
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
                },
                "quantity": 2
            }
        ];

        const setCartQuantity = 2;
        const total = 219.90;
        const setTotal = 219.90;
        const cartQuantity = 2;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        await screen.findByText(/estimated total/i);
        expect(screen.getByText(/estimated total/i)).toBeInTheDocument();
        expect(screen.getByText('$219.90')).toBeInTheDocument();
    })

    it("renders checkout button", async () => {
        // Mock global context values
        const cart = [
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

        const setCart = [
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

        const setCartQuantity = 1;
        const total = 109.95;
        const setTotal = 109.95;
        const cartQuantity = 1;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        await screen.findByRole('button', { name: "checkout" });
        expect(screen.getByRole('button', { name: "checkout" })).toBeInTheDocument();
    })

    it("renders continue shopping link", async () => {
        // Mock global context values
        const cart = [
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

        const setCart = [
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

        const setCartQuantity = 1;
        const total = 109.95;
        const setTotal = 109.95;
        const cartQuantity = 1;

        render(
            <MemoryRouter>
                <GlobalContext.Provider value={{ cart, setCart, cartQuantity, setCartQuantity, total, setTotal }}>
                    <ShoppingCart />
                </GlobalContext.Provider>
            </MemoryRouter >
        );

        await screen.findByRole('link');
        const shopLink = screen.getByRole('link');
        expect(shopLink).toBeInTheDocument();
        expect(shopLink).toHaveAttribute('href', '/shop');
    })
});