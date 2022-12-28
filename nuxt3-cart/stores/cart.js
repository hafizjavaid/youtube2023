import { defineStore } from "pinia";

import products from "~~/data";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartContent: {},
    theme: "light",
  }),
  getters: {
    formattedCart() {
      return Object.keys(this.cartContent).map((productId) => {
        const product = this.cartContent[productId];

        return {
          id: product.productId,
          image: products.find((p) => p.id === product.productId).image,
          name: products.find((p) => p.id === product.productId).name,
          price: products.find((p) => p.id === product.productId).price,
          quantity: product.quantity,
          cost:
            product.quantity *
            products.find((p) => p.id === product.productId).price,
        };
      });
    },
    total() {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        const product = products.find((p) => p.id === id);
        if (product) {
          return acc + product.price * this.cartContent[id].quantity;
        }
        return acc + 0;
      }, 0);
    },
    productsTotal() {
      return Object.keys(this.cartContent).reduce((acc, id) => {
        return acc + this.cartContent[id].quantity;
      }, 0);
    },
    getTheme() {
      return this.theme;
    },
  },
  actions: {
    add(productId) {
      if (this.cartContent.hasOwnProperty(productId)) {
        this.cartContent[productId] = {
          productId,
          quantity: this.cartContent[productId].quantity + 1,
        };
      } else {
        this.cartContent[productId] = {
          productId,
          quantity: 1,
        };
      }
    },
    remove(productId) {
      if (!this.cartContent[productId]) {
        return;
      }
      this.cartContent[productId].quantity -= 1;

      if (this.cartContent[productId].quantity === 0) {
        delete this.cartContent[productId];
      }
    },
    removeProduct(productId) {
      delete this.cartContent[productId];
    },
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
});
