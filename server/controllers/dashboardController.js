const mongoose = require("mongoose");
const Note = require("../models/Notes");

exports.dashboard = async (req, res) => {
  // async function insertDummyCategoryData() {
  //   try {
  //     await Note.insertMany([
  //       {
  //         user: "662cbd3c11ebce8e7f1c6f17",
  //         title: "Hello Notes",
  //         body: "Notes with Nodes",
  //       },
  //       {
  //         user: "662cbd3c11ebce8e7f1c6f17",
  //         title: "Hello Notes 2",
  //         body: "Notes with Nodes 2",
  //       },
  //       {
  //         user: "662cbd3c11ebce8e7f1c6f17",
  //         title: "Hello Notes3",
  //         body: "Notes with Nodes 3",
  //       },
  //     ]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // insertDummyCategoryData();

  const locals = {
    title: "Dashboard",
    description: "Note-taking App",
  };

  try {
    const notes = await Note.find({});
    // console.log(notes);

    res.render("dashboard/index", {
      userName: req.user.firstName,
      locals,
      notes,
      layout: "../views/layouts/dashboard",
    });
  } catch (error) {
    console.log(error);
  }
};
