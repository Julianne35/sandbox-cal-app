const mongoose = require("mongoose");
const CalData = mongoose.model("calander");

// get all
exports.getData = async (req, res) => {
  const data = await CalData
    // .find({ company: "Company Title 2" }); filters db by certin value
    .find(req.query);
  res.json(data);
};

//create info
exports.postData = (req, res) => {
  // console.log(req.body);
  let CalD = new CalData({
    event: req.body.event,
    details: req.body.details,
    contactname: req.body.contactname,
    contactphone: req.body.contactphone,
    contactemail: req.body.contactemail,
    eventaddress: req.body.eventaddress,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    // eventtime: req.body.eventtime,
    // eventdate: req.body.eventdate,
    // eventdescription: req.body.eventdescription,
    // eventimage: req.body.eventimage,
    // image: req.body.image,
    // refid: req.body.refid,
    // isliked: req.body.isliked,
    // isoverlaped: req.body.isoverlaped,
    // isapproved: req.body.isapproved,
    // eventlink: req.body.eventlink,
  });
  console.log("created-snapshot:", CalD);
  CalD.save((err, data) => {
    if (err) {
      console.log("DATA", CalD);
      res.status(500).json({
        message: "error data was not created, check if all data fields are being called",
      });
    } else {
      console.log("DATA-", data);
      res.status(200).json({
        message: "Created" + CalD + "successfuly! from local",
        data,
      });
    }
  });
};

//get post by id
//NOTE: removed await - caused error in cloned query (in updated mongdb version)
// query: http://localhost:3001/getid/637d99b47f1c7878ad6f8679
exports.getCalId = (req, res) => {
  let getUniqueId = req.params.calId;
  CalData.findById({ _id: getUniqueId }, (err, data) => {
    if (err) {
      console.log(data);
      res.status(500).json({
        message: "Profile not found",
      });
    } else {
      console.log(data);
      res.status(200).json({
        message: "Post found",
        data,
      });
    }
  });
};

//update post
//NOTE: make sure on Postman you select JSON not text
//http://localhost:3001/update/637d99b47f1c7878ad6f8679
exports.updatePost = (req, res) => {
  CalData.findOneAndUpdate(
    { _id: req.params.calId },
    { $set: req.body },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "error data was not updated",
        });
      } else {
        res.status(200).json({
          message: "Post Updated",
          data,
        });
      }
    }
  );
};

//update event details
exports.updateDetails = (req, res) => {
  CalData.findOneAndUpdate(
    {
      _id: req.params.calId,
      details: { $elemMatch: { _id: req.params.detailsId } },
    }, // FILTER
    {
      $set: {
        "details.$.contactname": req.body.contactname, // UPDATE `-V
        "details.$.contactphone": req.body.contactphone,
        "details.$.contactemail": req.body.contactemail,
        "details.$.eventaddress.$.street": req.body.street,
        "details.$.eventaddress.$.city": req.body.city,
        "details.$.eventaddress.$.state": req.body.state,
        "details.$.eventaddress.$.zipcode": req.body.zipcode,
        "details.$.eventtime": req.body.eventtime,
        "details.$.eventdate": req.body.eventdate,
        "details.$.eventdescription": req.body.eventdescription,
        "details.$.eventimage.$.image": req.body.image,
        "details.$.eventimage.$.refid": req.body.refid,
        "details.$.eventlink": req.body.eventlink,
      },
    },
    { new: true, safe: true, upsert: true },
    (err, data) => {
      if (err) {
        res.status(500).json({
          message: "update not created",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "Post Updated",
        });
      }
    }
  );
};

//delete post
exports.deletePost = (req, res) => {
  let infoID = req.params.calId;
   CalData.deleteOne({ _id: infoID }, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "error data was not deleted",
      });
    } else {
      res.status(200).json({
        message: "Post deleted.",
        data,
      });
    }
  });
};  