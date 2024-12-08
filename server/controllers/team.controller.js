import { TeamModel } from "../models/team.model.js";

export const createTeam = async (req, res) => {
  try {
    const data = req.body;
    await TeamModel.create(data);
    return res.status(201).send({
      status: true,
      message: "Team created successfully",
    });
  } catch (error) {
    console.log(error.toString());
  }
};

export const showTeams = async (req, res) => {
  try {
    const team = await TeamModel.find({}, { versionKey: 0 });
    return res.status(200).send({
      status: true,
      message: "Teams found successfully",
      team,
    });
  } catch (error) {
    console.log(error.toString());
  }
};

export const deleteTeam = async (req, res) => {
  try {
    const id = req.params.id;
    const team = await TeamModel.findByIdAndDelete(id);
    if (!team) {
      return res.status(404).send({
        status: false,
        message: "Team not found ",
      });
    }
    return res.status(200).send({
      status: true,
      message: "Team deleted successfully",
    });
  } catch (error) {
    console.log(error.toString());
  }
};

export const updateTeam = async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const updatedTeam = await TeamModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true }
    );

    return res.status(200).send({
      status: true,
      message: "Team updated successfully",
      updatedTeam,
    });
  } catch (error) {
    console.log(error.toString());
  }
};
