const mongoose = require("mongoose");

exports.mongodbConfig = () => {
  mongoose.connect("mongodb://localhost:27017/fest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
