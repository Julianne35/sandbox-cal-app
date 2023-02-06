const mongoose = require("mongoose");

const eventDataSchema = new mongoose.Schema(
  {
    event: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    details: [
      {
        contactname: {
          type: String,
          required: true,
          trim: true,
          default: "",
        },

        contactphone: {
          type: Number,
          required: true,
          trim: true,
          default: "",
        },
        contactemail: {
          type: String,
          required: true,
          trim: true,
          default: "",
        },
        eventaddress: [
          {
            street: { type: String, required: true, trim: true, default: "" },
            city: { type: String, required: true, trim: true, default: "" },
            state: { type: String, required: true, trim: true, default: "" },
            zipcode: { type: Number, required: true },
          },
        ],
        // eventtime: {
        //   type: Number,
        //   required: true,
        //   trim: true,
        //   default: "",
        // },
        // eventdate: {
        //   type: Date,
        //   required: true,
        //   trim: true,
        //   default: "",
        // },
        // eventdescription: {
        //   type: String,
        //   required: true,
        //   trim: true,
        //   default: "",
        // },
        // eventimage: [
        //   {
        //     image: { type: String, required: false },
        //     refid: { type: mongoose.Types.ObjectId, required: false },
        //   },
        // ],
        // isliked: {
        //   type: Boolean,
        //   required: false,
        // },
        // isoverlaped: {
        //   type: Boolean,
        //   required: false,
        // },
        // isapproved: {
        //   type: Boolean,
        //   required: false,
        // },
        // eventlink: {
        //   type: String,
        //   required: false,
        //   trim: true,
        //   default: "",
        // },
      },
    ],
  },
  { collection: "Calander" }
);

module.exports = mongoose.model("calander", eventDataSchema);
