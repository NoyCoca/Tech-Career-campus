const eventModel = require("../models/eventModel");
const { ObjectId } = require("mongodb");

async function getAllEventPost(req, res) {
  try {
    await eventModel.find({}, (error, result) => {
      if (error) throw error;
      res.status(200).json({ massage: "get event post success", data: result });
    });
  } catch (err) {
    res.status(500).json({ massage: "get event post field", error: err });
  }
}

async function getEventById(req, res) {
  try {
    await eventModel.findById(
      { _id: ObjectId(req.body._id) },
      (error, result) => {
        if (error) throw error;
        res
          .status(200)
          .json({ massage: "get event by id succses", data: result });
      }
    );
  } catch (error) {
    res
      .status(500)
      .json({ massage: "get event by id field  ", error: error });
  }
}

async function PostnewEvent(req, res) {
  try {
    await eventModel.insertMany(req.body, (error, result) => {
      if (error) throw error;
      res.status(200).json({
        massage: "post added successfully, success",
        data: result,
      });
    });
  } catch (err) {
    res.status(500).json({ massage: "post added field ", error: err });
  }
}

async function deleteEventPost(req, res) {
  try {
    await eventModel.findOneAndDelete(
      { _id: ObjectId(req.body._id) },
      (error, result) => {
        if (error) throw error;
        res
          .status(200)
          .json({ massage: "deleted event success", data: result });
      }
    );
  } catch (error) {
    res.status(500).json({ massage: "deleted event field", error: error });
  }
}

async function updateEventPost(req, res) {
  try {
    eventModel.findByIdAndUpdate(
      { _id: ObjectId(req.params._id) },
      { $set: req.body },
      (error, result) => {
        if (error) throw error;
        res.status(200).json({ massage: "update event success", data: result });
      }
    );
  } catch (error) {
    res.status(500).json({ massage: "update event field", error: error });
  }
}
module.exports = {
  getAllEventPost,
  getEventById,
  PostnewEvent,
  deleteEventPost,
  updateEventPost,
};