import { UserModel } from "../models/user.model.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found with this mail",
        success: false,
      });
    }
    return res.status(200).send({
      status: true,
      message: "user login successfully",
    });
  } catch (error) {
    console.log(error.toString());
  }
};
