import mongoose from "mongoose";

const memberWorkspacesSchema = new mongoose.Schema(
  {
    id: {
        type: String,
        required: true
    },
    fk_id_workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "workspaces",
        required: true
    },
    fk_id_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    role: {
      type: String,
      enum: ["admin", "support", "member"],
      required: true,
    },
  
  }
)

const MemberWorkspaces = mongoose.model("memberWorkspaces", memberWorkspacesSchema);

export default MemberWorkspaces;