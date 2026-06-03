const mongoose = require("mongoose");
const addressModel = require("../models/address.model");

// Add Address
const addAddress = async (req, res) => {
  try {
    const userId = req.user?.id;
    const {
      firstname,
      lastname,
      phonenumber,
      addphonenum,
      deliveryadd,
      addinfo,
      state,
      city,
      isDefault,
    } = req.body;

    if (isDefault) {
      await addressModel.updateMany(
        { user: userId },
        { $set: { isDefault: false } }
      );
    }
    const form = new addressModel({
      user: userId,
      firstname,
      lastname,
      phonenumber,
      addphonenum,
      deliveryadd,
      addinfo,
      state,
      city,
      isDefault: !!isDefault,
    });
    await form.save();

    return res
      .status(200)
      .json({ status: true, message: "Address saved successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "Address failed to save" });
  }
};

//Get All Address
const getAddress = async (req, res) => {
  try {
    const userId = req.user.id;
    let addresses = await addressModel.find({ user: userId });
    return res.status(200).json({ status: true, addresses });
  } catch (error) {
    return res.status(500).json({ status: false, message: "not found" });
  }
};

//Get Default Address
const getDefaultAddress = async (req, res) => {
  try {
    const userId = req.user.id;
    const address = await addressModel.findOne({
      user: userId,
      isDefault: true,
    });

    if (!address) {
      return res.status(404).json({
        status: false,
        message: "No default address set",
      });
    }

    res.status(200).json({ status: true, data: address });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Server error",
      error: error.message,
    });
  }
};

//Get Address By Id
const getAddressById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    let address = await addressModel.findOne({ _id: id, user: userId });
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }
    return res.status(200).json({
      status: true,
      data: address,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Server error", error: error.message });
  }
};

//Update Address
const updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    let address = await addressModel.findOne({ _id: id, user: userId });
    if (!address) {
      return res
        .status(404)
        .json({ status: false, message: "Address not found" });
    }

    //Extract the document
    const {
      firstname,
      lastname,
      phonenumber,
      addphonenum,
      deliveryadd,
      addinfo,
      state,
      city,
    } = req.body;

    // update the address accordingly
    const updated = await addressModel.findByIdAndUpdate(
      id,
      {
        firstname,
        lastname,
        phonenumber,
        addphonenum,
        deliveryadd,
        addinfo,
        state,
        city,
      },
      { new: true }
    );
    res.json({ status: true, data: updated });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Server error", error: error.message });
  }
};

//Delete Address
const removeAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const deleted = await addressModel.findByIdAndDelete({
      _id: id,
      user: userId,
    });
    if (!deleted) {
      return res
        .status(404)
        .json({ status: false, message: "Address not found" });
    }
    res.status(200).json({ status: true, message: "Address deleted" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Server error" });
  }
};

// Default Address
const defaultAddress = async (req, res) => {
  try {
    const userId = req.user.id;
    const id = req.params.id;

    await addressModel.updateMany(
      { user: userId },
      { $set: { isDefault: false } }
    );
    const updated = await addressModel.findByIdAndUpdate(
      id,
      { $set: { isDefault: true } },
      { new: true }
    );

    res.status(200).json({
      status: true,
      message: "default address updated",
      data: updated,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Failed to set default address" });
  }
};

module.exports = {
  addAddress,
  getAddress,
  getDefaultAddress,
  getAddressById,
  updateAddress,
  removeAddress,
  defaultAddress,
};
