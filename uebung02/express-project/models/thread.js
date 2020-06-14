"use strict";

import { Schema, model } from "mongoose";
import user from "./users";

var MessageSchema = new Schema(
  {
    users: {
      type: user,
      required: [true, "participients needed"],
      ref: "User",
    },

    messages: [
      {
        message: String,
        minlength: 1,
        maxlength: 1000,
        meta: [
          {
            user: {
             
              ref: "User",
            },
            delivered: Boolean
          },
        ],
      },
    ],
    group_name: {
      type: String,
    },
    created_by: {
      type: ObjectId,
      ref: "User",
    },

    image_url: {
      type: String,
    },
  },
);

export default mongoose.model("MsgThread", MsgThreadSchema);
