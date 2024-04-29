const mongoose = require("mongoose");
const Note = require("../models/Notes");

// exports.dashboard = async (req, res) => {
//   let perPage = 12;
//   let page = req.query.page || 1;

//   // async function insertDummyCategoryData() {
//   //   try {
//   //     await Note.insertMany([
//   //       {
//   //         user: "662cbd3c11ebce8e7f1c6f17",
//   //         title: "Hello Notes",
//   //         body: "Notes with Nodes",
//   //       },
//   //       {
//   //         user: "662cbd3c11ebce8e7f1c6f17",
//   //         title: "Hello Notes 2",
//   //         body: "Notes with Nodes 2",
//   //       },
//   //       {
//   //         user: "662cbd3c11ebce8e7f1c6f17",
//   //         title: "Hello Notes3",
//   //         body: "Notes with Nodes 3",
//   //       },
//   //     ]);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }

//   // insertDummyCategoryData();

//   const locals = {
//     title: "Dashboard",
//     description: "Note-taking App",
//   };

//   try {
//     Note.aggregate([
//       {
//         $sort: { createdt: -1 },
//       },
//       { $match: { user: mongoose.Types.ObjectId(req.user._id) } },
//       {
//         $project: {
//           title: { $substr: ["$title", 0, 30] },
//           body: { $substr: ["$body", 0, 100] },
//         },
//       },
//     ])
//       .skip(perPage * page - perPage)
//       .limit(perPage)
//       .exec(function (err, notes) {
//         // Note.count().exec(function (err, count) {
//         // if (err) return next(err);
//         if (err) {
//           console.error(err);
//           return res.status(500).send("Internal Server Error");
//         }

//         Note.countDocuments({
//           user: mongoose.Types.ObjectId(req.user._id),
//         }).exec(function (err, count) {
//           // Correct usage of countDocuments
//           if (err) {
//             console.error(err);
//             return res.status(500).send("Internal Server Error");
//           }

//           res.render("dashboard/index", {
//             userName: req.user.firstName,
//             locals,
//             notes,
//             layout: "../views/layouts/dashboard",
//             current: page,
//             pages: Math.ceil(count / perPage),
//           });
//         });
//       });
//     // const notes = await Note.find({});
//     // console.log(notes);
//   } catch (error) {
//     console.log(error);
//   }
// };
///////////////////////////////////////////////////////////////////////////////////////////
// const mongoose = require("mongoose");
// const Note = require("../models/Notes");

// exports.dashboard = async (req, res) => {
//   try {
//     const perPage = 12;
//     const page = req.query.page || 1;
//     const userId = req.user.id; // Assuming req.user._id holds the user's ObjectId

//     const locals = {
//       title: "Dashboard",
//       description: "Note-taking App",
//     };

//     const pipeline = [
//       {
//         $match: { user: mongoose.Types.ObjectId(userId) },
//       },
//       {
//         $sort: { createdt: -1 },
//       },
//       {
//         $project: {
//           title: { $substr: ["$title", 0, 30] },
//           body: { $substr: ["$body", 0, 100] },
//         },
//       },
//       {
//         $skip: perPage * (page - 1),
//       },
//       {
//         $limit: perPage,
//       },
//     ];

//     const notes = await Note.aggregate(pipeline);

//     const count = await Note.countDocuments({ user: userId });

//     res.render("dashboard/index", {
//       userName: req.user.firstName,
//       locals,
//       notes,
//       layout: "../views/layouts/dashboard",
//       current: page,
//       pages: Math.ceil(count / perPage),
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// };
/////////////////////////////////////////////////////////
// const mongoose = require("mongoose");
// const Note = require("../models/Notes");

// exports.dashboard = async (req, res) => {
//   // async function insertDummyCategoryData() {
//   //   try {
//   //     await Note.insertMany([
//   //       {
//   //         user: "662cbd3c11ebce8e7f1c6f17",
//   //         title: "Hello Notes",
//   //         body: "Notes with Nodes",
//   //       },
//   //       {
//   //         user: "662cbd3c11ebce8e7f1c6f17",
//   //         title: "Hello Notes 2",
//   //         body: "Notes with Nodes 2",
//   //       },
//   //       {
//   //         user: "662cbd3c11ebce8e7f1c6f17",
//   //         title: "Hello Notes3",
//   //         body: "Notes with Nodes 3",
//   //       },
//   //     ]);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }

//   // insertDummyCategoryData();

//   const locals = {
//     title: "Dashboard",
//     description: "Note-taking App",
//   };

//   try {
//     const notes = await Note.find({});
//     // console.log(notes);

//     res.render("dashboard/index", {
//       userName: req.user.firstName,
//       locals,
//       notes,
//       layout: "../views/layouts/dashboard",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
////////////////////////////////////////////////////////

// exports.dashboard = async (req, res) => {
//   let perPage = 12;
//   let page = req.query.page || 1;

//   const locals = {
//     title: "Dashboard",
//     description: "Free NodeJS Notes App.",
//   };

//   try {
//     // Mongoose "^7.0.0 Update
//     const notes = await Note.aggregate([
//       { $sort: { updatedAt: -1 } },
//       { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
//       {
//         $project: {
//           title: { $substr: ["$title", 0, 30] },
//           body: { $substr: ["$body", 0, 100] },
//         },
//       },
//     ])
//       .skip(perPage * page - perPage)
//       .limit(perPage)
//       .exec();

//     const count = await Note.count();

//     res.render("dashboard/index", {
//       userName: req.user.firstName,
//       locals,
//       notes,
//       layout: "../views/layouts/dashboard",
//       current: page,
//       pages: Math.ceil(count / perPage),
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.dashboard = async (req, res) => {
  let perPage = 8;
  let page = req.query.page || 1;

  const locals = {
    title: "Dashboard",
    description: "Free NodeJS Notes App.",
  };

  try {
    // Mongoose "^7.0.0 Update
    const notes = await Note.aggregate([
      { $sort: { createdAt: -1 } },
      { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
      {
        $project: {
          title: { $substr: ["$title", 0, 30] },
          body: { $substr: ["$body", 0, 200] },
        },
      },
    ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    const count = await Note.countDocuments({ user: req.user.id }); // Using countDocuments() instead of count()

    res.render("dashboard/index", {
      userName: req.user.firstName,
      locals,
      notes,
      layout: "../views/layouts/dashboard",
      current: page,
      pages: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardViewNote = async (req, res) => {
  const note = await Note.findById({ _id: req.params.id })
    .where({ user: req.user.id })
    .lean();

  if (note) {
    res.render("dashboard/view-note", {
      noteID: req.params.id,
      note,
      layout: "../views/layouts/dashboard",
    });
  } else {
    res.send("Something went wrong");
  }
};

exports.dashboardUpdateNote = async (req, res) => {
  try {
    await Note.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, body: req.body.body, createdAt: Date.now() }
    ).where({ user: req.user.id });
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardDeleteNote = async (req, res) => {
  try {
    await Note.deleteOne({ _id: req.params.id }).where({
      user: req.user.id,
    });
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardAddNote = async (req, res) => {
  res.render("dashboard/add", {
    layout: "../views/layouts/dashboard",
  });
};

exports.dashboardSubmitNote = async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Note.create(req.body);
    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardSearch = async (req, res) => {
  try {
    res.render("dashboard/search", {
      searchResults: "",
      layout: "../views/layouts/dashboard",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.dashboardSearchSubmit = async (req, res) => {
  try {
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChars = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const searchResults = await Note.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChars, "i") } },
        { body: { $regex: new RegExp(searchNoSpecialChars, "i") } },
      ],
    }).where({ user: req.user.id });

    res.render("dashboard/search", {
      searchResults,
      layout: "../views/layouts/dashboard",
    });
  } catch (error) {
    console.log(error);
  }
};
