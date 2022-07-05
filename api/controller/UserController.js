const { User, validate } = require("../model/UserModel");
const bcrypt = require("bcrypt");
const express = require("express");
const SALT = 10;

exports.PostUser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = new User(req.body);

    const salt = await bcrypt.genSalt(Number(SALT));
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.send("An error occured");
  }
};

exports.Me = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password -__v");
    res.send(user);
  } catch (error) {
    console.log(error);
    res.send("An error occured");
  }
};
exports.UpdateAvatar = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const UpdateAvatar = {
    name: req.body.name,
    avatar:  url + "/public/" + req.file.filename,
  };
  User.findByIdAndUpdate(
    { _id: req.params._id },
    UpdateAvatar,
    function (err, response) {
      if (err) {
        res.status(201).json({
          code: 201,
          message: "Error Update Data",
        });
      } else {
        res.status(200).json({
          code: 200,
          message: "Update Data Successfully!",
          data: response,
        });
      }
    }
  );
};