const express = require("express");
const router = express.Router();
// const authController = require("../controllers/mainController");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, done) {
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return cb(err, user);
      //   });
      //   console.log(profile);

      // Using the profile to create an object so it can be seeded into the db if the user hasn't registered

      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        profileImage: profile.photos[0].value,
      };
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (user) {
          done(null, user);
        } else {
          user = await User.create(newUser);
        }
      } catch (error) {
        console.log(error);
      }
    }
  )
);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login-failure",
    successRedirect: "/dashboard",
  })
  //   function (req, res) {
  //     // Successful authentication, redirect home.
  //     res.redirect("/");
  //   }
);

// Destroy session
router.get("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log("Logout Error!");
    } else {
      res.redirect("/");
    }
  });
});

router.get("/login-failure", (req, res) => {
  res.send("Something went wrong");
});

// router.get("/", (req, res) => {
//   const locals = {
//     title: "Noteefaiz",
//     description: "Note-taking App",
//   };
//   res.render("index", locals);
// });
// router.get("/", authController.homepage);
// router.get("/about", mainController.about);

// Persist user data after successful authentication
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// Retrieve user data from session
// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// Retrieve user data from session
passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

module.exports = router;
