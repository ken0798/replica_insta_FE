import { Avatar, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
function Chat({ e, handleEditComment, handleCloseEditComment, post }) {
  const [editComment, setEditComment] = useState(e.msg);
  return (
    <>
      {e?.isEdit ? (
        <Stack key={e.id} direction={"row"}>
          <textarea
            value={editComment}
            onChange={(e) => setEditComment(e.target.value)}
            style={{ border: "1px solid #ddd", flexGrow: 1 }}
          />
          <IconButton
            onClick={() => {
              handleEditComment(post[0].id, e.id, null, editComment);
              // setEditComment('')
            }}
          >
            <DoneIcon sx={{ width: "12px", height: "12px" }} />
          </IconButton>
          <IconButton
            onClick={() => {
              handleCloseEditComment(post[0].id, e.id, editComment);
            }}
          >
            <CloseIcon sx={{ width: "12px", height: "12px" }} />
          </IconButton>
        </Stack>
      ) : (
        <Stack
          key={e.id}
          gap={"5px"}
          sx={{
            "&:not(:last-child)": { borderBottom: "1px solid #eee" },
            py: "8px",
          }}
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Avatar
            alt={e.author}
            src="/small.png"
            sx={{ width: "20px", height: "20px" }}
          />
          <span
            style={{
              overflowWrap: "anywhere",
              width: "100%",
              maxWidth: "210px",
            }}
          >
            {e.msg}
          </span>
          <Stack gap={"4px"} justifyContent={"space-between"}>
            <IconButton
              onClick={() => {
                setEditComment(e.msg);
                handleEditComment(post[0].id, e.id, "open", e.msg);
              }}
              sx={{ width: "15px", height: "15px" }}
            >
              <CreateIcon sx={{ width: "15px", height: "15px" }} />
            </IconButton>
            <span style={{ fontSize: "8px", color: "#000", fontWeight: 700 }}>
              {e?.createdAt}
            </span>
          </Stack>
        </Stack>
      )}
    </>
  );
}

export default Chat;
