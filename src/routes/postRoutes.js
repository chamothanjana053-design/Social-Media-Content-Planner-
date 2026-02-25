const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const post = require("../controllers/postController");

router.use(auth);
router.post("/", post.createPost);
router.get("/", post.getPosts);

module.exports = router;
