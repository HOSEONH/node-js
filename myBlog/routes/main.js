const express = require("express");
const router = express.Router();
const mainLayout = "../views/layouts/main.ejs";
const Post = require("../models/Post");
const asyncHandler = require("express-async-handler");

router.get(["/", "/home"], asyncHandler(async(req, res) => {
  const locals = {
    title: "Home"
  }
  const data = await Post.find();
  res.render("index", { locals, data, layout: mainLayout });
}));

router.get("/about", (req, res) => {
  const locals = {
    title: "About"
  }
  res.render("about", { locals, layout: mainLayout });
})

/**
 * 게시글 상세 보기
 * GET /post/:id
 */
router.get(
  "/post/:id",
  asyncHandler(async (req, res) => {
    const data = await Post.findOne({ _id: req.params.id });
    res.render("post", { data, layout: mainLayout });
  })
)

module.exports = router;

Post.insertMany([
  // {
  //   title: "제목 1",
  //   body: "내용 1 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  // },
  // {
  //   title: "제목 2",
  //   body: "내용 2 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  // },
  // {
  //   title: "제목 3",
  //   body: "내용 3 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  // },
  // {
  //   title: "제목 4",
  //   body: "내용 4 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  // },
  // {
  //   title: "제목 5",
  //   body: "내용 5 - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  // }
]);
