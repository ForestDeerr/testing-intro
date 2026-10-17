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

function calculateCartSubtotal() {
  return notImplemented();
}
function calculateOrderTotal() {
  return notImplemented();
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
