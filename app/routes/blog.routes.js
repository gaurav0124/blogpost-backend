const { authJwt } = require("../middleware");
module.exports = app => {
  const blogController = require("../controllers/blog.controller.js");

  var router = require("express").Router();
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Create a new Blog
  router.post("/", [authJwt.verifyToken], blogController.create);

  // Retrieve all Blogs
  router.get("/", blogController.findAll);

  // Retrieve all published Blogs
  router.get(
    "/published",
    [authJwt.verifyToken],
    blogController.findAllPublished
  );

  // Retrieve a single Blog with id
  router.get("/:id", [authJwt.verifyToken], blogController.findOne);

  // Update a Blog with id
  router.put("/:id", [authJwt.verifyToken], blogController.update);

  // Delete a Blog with id
  router.delete("/:id", [authJwt.verifyToken], blogController.delete);

  // Delete all Blogs
  router.delete("/", [authJwt.verifyToken], blogController.deleteAll);

  app.use("/api/blogs", router);
};
