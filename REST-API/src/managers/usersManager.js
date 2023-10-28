
const utils = require("../utils/utils");
const userModel = require("../models/userModel");
const offersModel = require("../models/offersModel");
const bcrypt = require("bcrypt");
exports.getUserInfo=async(id)=>{
  return userModel.findById(id)
}
exports.userProfileInfo=async(id)=>{
  let user = await  userModel.findById(id)
   user = user.toObject({ getters: true, virtuals: true });
  const userOffers = await offersModel.find({ownerId:user._id})
  user.offers = userOffers
  return user
}
exports.getUserInfo = async (id) => {
  return userModel.findById(id);
};
exports.getPurchasedOffers = async (userId) => {
  return offersModel.find({
    purchasedBy: {
      $elemMatch: { $eq: userId }
    }
  });
};
exports.register = async (
  email,
  companyName,
  password,
  repeatedPassword,
  userType,
  lastName,
  firstName
) => {
  console.log(
    email,
    companyName,
    password,
    repeatedPassword,
    userType,
    lastName,
    firstName
  );
  if (!email || !password || !repeatedPassword) {
    console.log(email, password, repeatedPassword);
    throw new Error("All fields are required");
  }
  const user = await userModel.findOne({ email });
  if (user) {
    throw new Error("User with same email already exists");
  }
  const newUser = await userModel.create({
    email,
    userType,
    lastName,
    firstName,
    password,
    repeatedPassword,
    companyName,
  });


  return login(email, password);
};
exports.getAllBusinessman = async () => {
  return userModel.find({ userType: "businessman" });
};
const login = async (email, password) => {
  const user = await userModel.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error("Email or password is incorrect");
  }

  const isPasswordMatching = await bcrypt.compare(password, user.password);
  console.log(isPasswordMatching);
  if (!isPasswordMatching) {
    throw new Error("Email or password is incorrect");
  }

  return {
    token: await utils.sign({ email, _id: user._id }, utils.secret),
    userRole: user.userType,
    userId: user._id,
  };
};
exports.login = login;
