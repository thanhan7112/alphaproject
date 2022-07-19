const mongoose = require("mongoose");
const Data = require("../model/DataUserModel");
exports.GetData = async (req, res) =>{
  try {
      const data = await Data.find();
      res.json(data);
  } catch (err) {
      res.json({ message: err });
  }
};

exports.CreateData = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const data = new Data({
    _id: new mongoose.Types.ObjectId(),
    Wallet: req.body.Wallet,
    emailUser: req.body.emailUser,
    idUser: req.body.idUser,
    UserName: req.body.UserName,
    avatar: url + "/public/" + req.file.filename,
  });
  try {
    const savedData = await data.save().then((result) => {
      res.status(201).json({
        message: "User data registered successfully!",
        userCreated: {
          _id: result._id,
          avatar: result.avatar,
          emailUser: result.emailUser,
          Wallet: result.Wallet,
          idUser: result.idUser,
          UserName: result.UserName,
        },
      });
    });
    res.json(savedData);
  } catch (err) {
    res.json({ message: err });
  }
};

exports.GetDataById = async(req, res) => {
  try {
    const data = await Data.findById(req.params._id);
    res.json(data);
} catch (err) {
    res.json({ message: err });
}
};

exports.DeleteData = (req, res) => {
  Data.remove({ _id: req.params._id }, function (err, response) {
    if (err) {
      res.status(201).json({
        code: 201,
        message: "Error From DeleteData",
      });
    } else {
      res.status(200).json({
        code: 200,
        message: "DeleteData Successfully!",
        data: response,
      });
    }
  });
};

exports.UpdateData = async (req, res) => {
  const url = req.protocol + "://" + req.get("host");
  const UpdateData = {
    UserName: req.body.UserName,
    idUser: req.body.idUser,
    Wallet: req.body.Wallet,
    emailUser: req.body.emailUser,
    avatar:  url + "/public/" + req.file.filename,
  };
  Data.findByIdAndUpdate(
    { _id: req.params._id },
    UpdateData,
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