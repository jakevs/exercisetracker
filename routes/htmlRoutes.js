const path = require("path");

const router = require("express").Router();

router.get("/", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/index.html"));
});

router.get("/exercise", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
});

module.exports = router;