const router = require("express").Router();
const auth = require("../middleware/requireAuth");
let Blog = require("../models/blog.model");

//get all blogs
router.get("/all", (req, res) => {
  Blog.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id",(req, res) => {
    Blog.findById(req.params.id)
        .then((post) => res.json(post))
        .catch((err) => res.status(400).json("Error: " + err));
});
//create a new blog
router.post("/create", auth, (req, res) => {
  const { title, body, img } = req.body; //author pending update db;
  const date = Date.parse(req.body.date) || Date.now();
  const comments =[];
  const likes = [];
  if(!title || !body || !img){
    return  res.status(422).json({error:"Plase add all the fields"})
  }
  const newBlog = new Blog({
    title,
    body,
    img,
    date,
    comments,
    likes,
    author:req.user
  });

  newBlog
    .save()
    .then((result) => res.status(200).json("Blog Created!"))
    .catch((err) => console.log(err));
});

//Update blog by ID
router.post("/edit/:id", auth, (req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => {
      blog.title = req.body.title;
      blog.body = req.body.body;
      // blog.author = req.body.author;
      blog.date = Date.parse(req.body.date);
      blog
        .save()
        .then(() => {
          res.json("Post Edited");
        })
        .catch((err) => {
          res.json("Error: " + err);
        });
    })
    .catch((err) => res.json("Err: " + err));
});

router.put("/comment", auth, (req, res) => {
  const comment = {
    text: req.body.text,
    author: req.user._id,
  };
  Post.findByIdAndUpdate(
    req.body.blogId,
    {
      $push: { comments: comment },
    },
    {
      new: true,
    }
  )
    .populate("comments.author", "_id")
    .populate("author", "_id")
    .exec((err, result) => {
      if (err) {
        return res.status(422).json({ error: err });
      } else {
        res.json(result);
      }
    });
});

//Delete by ID
router.delete("/:id", auth, (req, res) => {
  Blog.findOne({ _id: req.params.id })
    .populate("author", "_id")
    .exec((err, blog) => {
      if (err || !blog) {
        return res.json({ error: err });
      }
      if (blog.author._id.toString() === req.user._id.toString()) {
        blog
          .remove()
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .then(() => res.json(`Blog ID: ${req.params.id} deleted`))
    .catch((err) => res.json("Error: " + err));
});

module.exports = router;
