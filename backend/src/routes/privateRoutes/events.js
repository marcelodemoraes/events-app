const router = require("express").Router();
const Event = require("../../model/Event"); //mongodb events model
const verify = require("../verifyToken");
const { eventValidation } = require("../../validation"); //input validation

//create a new event
router.post("/create", verify, async (req, res) => {
  const { error } = eventValidation(req.body);
  if (error) return res.status(400).send(error);

  const event = new Event({
    text: req.body.text,
    start: req.body.start,
    end: req.body.end,
    user_id: req.user._id
  });

  try {
    //adding a new event to bd
    const createdEvent = await event.save();
    res.send(createdEvent);
  } catch (err) {
    res.status(400).send(err);
  }
});

//listing all events
router.get("/list", verify, async (req, res) => {
  const events = await Event.find({ user_id: req.user._id }).sort({ start: 1 });
  if (!events) return res.send("Empty");
  res.json(events);
});

//delete an event
router.post("/delete", verify, async (req, res) => {
  try {
    const deletedEvent = await Event.deleteOne({ _id: req.body.id });
    res.send(deletedEvent);
  } catch (err) {
    res.status(400).send(err);
  }
});

//updates an event information
router.post("/update", verify, async (req, res) => {
  try {
    const updatatedEvent = await Event.updateOne(
      {
        _id: req.body.id
      },
      {
        $set: {
          text: req.body.text,
          start: req.body.start,
          end: req.body.end
        }
      }
    );
    res.send(updatatedEvent);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
