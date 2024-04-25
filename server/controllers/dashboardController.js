exports.dashboard = async (req, res) => {
  // router.get("/", (req, res) => {
  const locals = {
    title: "Dashboard",
    description: "Note-taking App",
  };
  res.render("dashboard/index", {
    locals,
    layout: "../views/layouts/dashboard",
  });
};
