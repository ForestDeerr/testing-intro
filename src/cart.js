function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError("Количество должно быть больше нуля");
  }

  if (cart.length === 0) {
    if (quantity > product.stock) {
      throw new RangeError("Недостаточно товара на складе");
    }
    cart.push({ ...product, quantity: quantity });
    return cart;
  }

  cart = cart.map((item) =>
    item.id === product.id
      ? { ...item, quantity: item.quantity + quantity }
      : item,
  );

  return cart;
}

function changeQuantity(cart, productId, quantity) {
  const product = cart.find((item) => item.id === productId);
  if (!product) {
    return cart;
  }

  if (quantity <= 0) {
    throw new RangeError("Количество должно быть больше нуля");
  }

  cart.map((item) => {
    if (item.id === productId) {
      if (quantity > item.stock) {
        throw new RangeError("Недостаточно товара на складе");
      }
      item.quantity = quantity;
    }
  });

  return cart;
}

function removeFromCart(cart, productId) {
  return cart.filter((item) => item.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateOrderTotal(cart, promo) {
  const subtotal = calculateCartSubtotal(cart);
  const discount = 0;
  const delivery = 30000;
  const total = subtotal - discount + delivery;

  return {
    subtotal,
    discount,
    delivery,
    total,
  };
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
