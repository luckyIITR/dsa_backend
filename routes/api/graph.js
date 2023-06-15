const express = require("express");

const router = express.Router();
const { body, validationResult } = require("express-validator");

const Graph = require("../../models/Graph");

// @route   GET api/graphs
// @desc    Test route
// @access  Public
router.get("/", async (req, res) => {
  try {
    const graph_que = await Graph.find();
    res.json(graph_que);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/graphs
// @desc    Test route
// @access  Public
router.post(
  "/",
  [
    body("title", "title is required").not().isEmpty(),
    body("link", "link is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, link } = req.body;

    try {
      graph_que = new Graph({
        title,
        link,
      });
      await graph_que.save();

      res.status(201).json({ message: "Graph Question Added" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   DELETE api/graphs/:id
// @desc    Delete a graph question by ID
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    await Graph.findByIdAndRemove(req.params.id);

    res.json({ msg: "Question deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
