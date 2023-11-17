import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

function PostModal({
  viewAddPost,
  setViewAddPost,
  handleAddPost,
  handleEditPost,
  postData,
}) {
  const [fields, setFields] = useState({
    title: "",
    file: null,
    fileUrl: null,
  });
  useEffect(() => {
    if (postData?.id) {
      setFields({
        title: postData?.title || "",
        file: null,
        fileUrl: postData?.imgUrl || null,
      });
    }
    return () => {
      setFields({
        title: "",
        file: null,
        fileUrl: null,
      });
    };
  }, [postData?.id]);
  const imgRef = useRef(null);
  function handleFile() {
    imgRef.current.click();
  }
  function onSubmit() {
    const { title, fileUrl } = fields;
    if (!Boolean(title.trim()) || !Boolean(fileUrl)) {
      alert("Enter All fields");
      return;
    }
    if (!postData?.id) {
      handleAddPost(title, fileUrl);
      setViewAddPost(false);
      return;
    }
    handleEditPost(title, fileUrl, postData?.id);
    setViewAddPost(false);
  }
  function onClear() {
    if (!postData?.id) {
      setFields({
        title: "",
        file: null,
        fileUrl: null,
      });
      setViewAddPost(false);
      return;
    }
    setViewAddPost(false);
  }
  return (
    <Dialog open={viewAddPost} onClose={onClear}>
      <DialogTitle>Create a Post</DialogTitle>
      <DialogContent>
        <TextField
          required
          autoFocus
          margin="dense"
          id="name"
          label="Title"
          value={fields.title}
          fullWidth
          onChange={(e) =>
            setFields((pre) => ({ ...pre, title: e.target.value }))
          }
        />
        <Button onClick={handleFile}>
          {!postData?.id ? "Add" : "Edit"} File
        </Button>
        <input
          ref={imgRef}
          hidden
          onChange={(e) => {
            const fileUrl = URL.createObjectURL(e.target.files[0]);
            setFields((pre) => ({
              ...pre,
              file: e.target.files[0],
              fileUrl,
            }));
          }}
          type="file"
          accept="image/png, image/gif, image/jpeg"
        />
        {fields.fileUrl ? (
          <Box sx={{ width: "400px", height: "250px" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "12px",
              }}
              alt="/"
              src={fields.fileUrl}
            />
          </Box>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClear}>Cancel</Button>
        <Button onClick={onSubmit}>{postData?.id ? "Update" : "Add"}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default PostModal;
