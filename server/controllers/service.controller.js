import { ServiceModel } from "../models/service.model.js";

export const createServices = async (req, res) => {
  try {
    const data = req.body;
    await ServiceModel.create(data);
    return res.status(201).send({
      status: true,
      message: "service created successfully",
    });
  } catch (error) {
    console.log(error.toString());
  }
};

export const showServices = async (req, res) => {
  try {
    const services = await ServiceModel.find({}, { versionKey: 0 });
    return res.status(200).send({
      status: true,
      message: "services found successfully",
      services,
    });
  } catch (error) {
    console.log(error.toString());
  }
};

export const deleteServices = async (req, res) => {
  try {
    const id = req.params.id;
    const service = await ServiceModel.findByIdAndDelete(id);
    if (!service) {
      return res.status(404).send({
        status: false,
        message: "service not found ",
      });
    }
    return res.status(200).send({
      status: true,
      message: "service deleted successfully",
    });
  } catch (error) {
    console.log(error.toString());
  }
};

export const updateServices = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const updatedService = await ServiceModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    return res.status(200).send({
      status: true,
      message: "services updated successfully",
      updatedService,
    });
  } catch (error) {
    console.log(error.toString());
  }
};
