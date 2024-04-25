exports.homepage = async (req, res) => {
  // router.get("/", (req, res) => {
  const locals = {
    title: "Noteefaiz",
    description: "Note-taking App",
  };
  res.render("index", { locals, layout: "../views/layouts/front-page" });
};

exports.about = async (req, res) => {
  // router.get("/", (req, res) => {
  const locals = {
    title: "About - Noteefaiz",
    description: "About - Note-taking App",
  };
  res.render("about", locals);
};
