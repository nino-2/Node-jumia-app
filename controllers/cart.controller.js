const mongoose = require("mongoose");
const cartModel = require("../models/cart.model");

const addCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity } = req.body;
    let cart = await cartModel.findOne({ user: userId });
    if (!cart) {
      cart = new cartModel({
        user: userId,
        items: [{ product: productId, quantity }],
      });
    } else {
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    await cart.populate("items.product");
    res.status(200).json(cart);
  } catch (error) {
    res.status(501).json({ error: error.message });
  }
  // const userId = req.user._id;
  // const { productId, quantity } = req.body;

  // cartModel
  //   .findOne({ user: userId })
  //   .then((cart) => {
  //     if (!cart) {
  //       const newCart = new cartModel({
  //         user: userId,
  //         items: [{ productId, quantity }],
  //       });

  //       newCart
  //         .save()
  //         .then(() => {
  //           return res
  //             .status(200)
  //             .json({ message: "product added to cart successfully" });
  //         })
  //         .catch((error) => {
  //           return res
  //             .status(501)
  //             .json({ message: "Failed to add product", error });
  //         });
  //     }

  //     // // If cart exists, update or push new item logic should go here
  //     // // For now, we'll just save the same cart
  //     // return cart.save().then((savedCart) => {
  //     //   res.status(200).json(savedCart);
  //     // });
  //   })
  //   .catch((err) => {
  //     console.log("not working");
  //     res.status(500).json({ error: err.message });
  //   });
};

const getCart = async (req, res) => {
  try {
    const userId = req.user.id;
    let cart = await cartModel
      .findOne({ user: userId })
      .populate("items.product");
    if (!cart) {
      return res.status(200).json({ items: [] });
    }
    return res.status(200).json({ cart: cart.items });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

  // cartModel
  //   .findOne({ user: userId })
  //   .populate("items.product")
  //   .then((cart) => {
  //     if (!cart) {
  //       return res.status(404).json({ message: "Cart not found" });
  //     }
  //     res.json(cart);
  //   })
  //   .catch((err) => {
  //     return res.status(500).json({ error: err.message });
  //   });
};
const updateCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.params.id;
    const { quantity } = req.body;

    let cart = await cartModel.findOne({ user: userId });
    if (!cart) {
      return res.status(500).json({ message: "Cart item cannot be updated" });
    }
    const item = cart.items.find((item) => item._id.toString() === itemId);

    if (!item) {
      return res.status(404).json({ message: "Product not found" });
    }
    item.quantity = quantity;
    await cart.save();
    return res
      .status(200)
      .json({ message: "Cart item updated successfully", cart });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

  // cartModel
  //   .findByIdAndUpdate(
  //     cartId,
  //     {
  //       productId,
  //       quantity,
  //     },
  //     { new: true }
  //   )
  //   .then((cart) => {
  //     if (!cart) {
  //       return res.status(500).json({ message: "Cart item cannot be updated" });
  //     }
  //   });

  // cartModel
  //   .findById(id)
  //   .then((cart) => {
  //     if (!cart) {
  //       return res.status(404).json({ message: "Cart item not found" });
  //     }
  //     const itemIndex = cart.items.findIndex(
  //       (item) => item.product.toString() === productId
  //     );

  //     if (itemIndex === -1) {
  //       return res.status(404).json({ message: "Product not found in cart" });
  //     }

  //     // Update the quantity of the product
  //     cart.items[itemIndex].quantity = quantity;

  //     // Save the cart with the updated item
  //     return cart.save().then((updatedCart) => {
  //       res.status(200).json({ message: "Cart item updated", updatedCart });
  //     });
  //   })
  //   .catch((err) => {
  //     return res.status(500).json({ error: err.message });
  //   });
  // console.log("product updated successfully");
  // return res.status(200).json({ message: "Cart item updated", updatedItem });
};
const removeCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const itemId = req.params.id;

    let cart = await cartModel.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart item cannot be found" });
    }
    cart.items = cart.items.filter((item) => item._id.toString() !== itemId);
    await cart.save();
    res.status(200).json(cart.items);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  // const cartId = req.params.id;
  // cartModel
  //   .findById(cartId)
  //   .then((cartItem) => {
  //     if (!cartItem) {
  //       res.status(404).json({ message: "Cart item not found" });
  //     }
  //     return res.status(200).json({ message: "product removed successfully" });
  //   })
  //   .catch((err) => {
  //     return res.status(500).json({ error: err.message });
  //   });

  // cartModel
  //   .findByIdAndDelete(cartId)
  //   .then((deletedItem) => {
  //     if (!deletedItem) {
  //       res.status(404).json({ message: "Item not found" });
  //     }
  //     return res.status(200).json({ message: "Item deleted" });
  //   })
  //   .catch((err) => {
  //     return res.status(500).json({ error: err.message });
  //   });

  //   const id = req.params.id;
  //   cartModel
  //     .findByIdAndDelete(id)
  //     .then((deletedItem) => {
  //       if (!deletedItem) {
  //         return res.status(404).json({ message: "Cart item not found" });
  //       }
  //       console.log("product removed successfully");
  //       return res
  //         .status(200)
  //         .json({ message: "Cart item removed", deletedItem });
  //     })
  //     .catch((err) => {
  //       return res.status(500).json({ error: err.message });
  //     });
};

module.exports = { addCart, getCart, updateCart, removeCart };
