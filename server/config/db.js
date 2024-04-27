const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Database connected successfully: ${connection.connection.host}`
    );
  } catch (error) {
    consolelog(error);
  }
};

module.exports = connectDB;
