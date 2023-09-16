const express = require("express");
const postsRouter = express.Router();

const {
  postsIndex,
  postsShow,
  postsCreate,
  postsUpdate,
  postsDelete,
} = require("../controllers/posts");

postsRouter.get("/", postsIndex);
postsRouter.get("/:id", postsShow);
postsRouter.post("/", postsCreate);
postsRouter.put("/:id", postsUpdate);
postsRouter.delete("/:id", postsDelete);

module.exports = postsRouter;
