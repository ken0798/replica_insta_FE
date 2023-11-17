import { connect } from "react-redux";
import { useState } from "react";
import Header from "./components/header";
import { v4 as uuid } from "uuid";
import moment from "moment";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  styled,
  Container,
  Grid,
  IconButton,
  Stack,
  CardActions,
  Collapse,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import Chat from "./components/chat";
import PostModal from "./components/postModal";
import MoreVertIcon from '@mui/icons-material/MoreVert';


const postList = [
  {
    id: uuid(),
    imgUrl:
      "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "hima",
    comments: [
      {
        id: uuid(),
        author: "ken",
        msg: "hey thats cool",
        isEdit: false,
        createdAt: moment().subtract(3, "day").format("LT"),
      },
      {
        id: uuid(),
        author: "denmark",
        msg: "hey thats awesome adsadsadasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsadsad",
        isEdit: false,
        createdAt: moment().subtract(7, "day").format("LT"),
      },
      {
        id: uuid(),
        author: "ken",
        msg: "hey thats cool",
        isEdit: false,
        createdAt: moment().subtract(3, "day").format("LT"),
      },
      {
        id: uuid(),
        author: "denmark",
        msg: "hey thats awesome adsadsadasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsadsad",
        isEdit: false,
        createdAt: moment().subtract(7, "day").format("LT"),
      },
      {
        id: uuid(),
        author: "ken",
        msg: "hey thats cool",
        isEdit: false,
        createdAt: moment().subtract(3, "day").format("LT"),
      },
      {
        id: uuid(),
        author: "denmark",
        msg: "hey thats awesome adsadsadasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadsadsad",
        isEdit: false,
        createdAt: moment().subtract(7, "day").format("LT"),
      },
    ],
    title:'Pickachu',
    isLike:false,
    createdAt: moment().subtract(1, "month").format("ll"),
  },
  {
    id: uuid(),
    imgUrl:
      "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "hima",
    comments: [
      {
        id: uuid(),
        author: "ken",
        msg: "hey thats cool",
        isEdit: false,
        createdAt: moment().subtract(3, "day").format("LT"),
      },
      {
        id: uuid(),
        author: "denmark",
        msg: "hey thats awesome",
        isEdit: false,
        createdAt: moment().subtract(7, "day").format("LT"),
      },
    ],
    title:'Squirlte',
    isLike:false,
    createdAt: moment().subtract(2, "month").format("ll"),
  },
  {
    id: uuid(),
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "hima",
    comments: [
      {
        id: uuid(),
        author: "ken",
        msg: "hey thats cool",
        isEdit: false,
        createdAt: moment().subtract(3, "day").format("LT"),
      },
      {
        id: uuid(),
        author: "denmark",
        msg: "hey thats awesome",
        isEdit: false,
        createdAt: moment().subtract(7, "day").format("LT"),
      },
    ],
    title:'Bulbusar',
    isLike:false,
    createdAt: moment().subtract(3, "month").format("ll"),
  },
  {
    id: uuid(),
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "hima",
    comments: [
      {
        id: uuid(),
        author: "ken",
        isEdit: false,
        msg: "hey thats cool",
        createdAt: moment().subtract(3, "day").format("LT"),
      },
      {
        id: uuid(),
        author: "denmark",
        msg: "hey thats awesome",
        isEdit: false,
        createdAt: moment().subtract(7, "day").format("LT"),
      },
    ],
    title:'Charlizard',
    isLike:false,
    createdAt: moment().subtract(1, "month").format("ll"),
  },
  {
    id: uuid(),
    imgUrl:
      "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "hima",
    comments: [
      {
        id: uuid(),
        author: "ken",
        msg: "hey thats cool",
        isEdit: false,
        createdAt: moment().subtract(3, "day").format("LT"),
      },
      {
        id: uuid(),
        author: "denmark",
        msg: "hey thats awesome",
        isEdit: false,
        createdAt: moment().subtract(7, "day").format("LT"),
      },
    ],
    title:'Lucario',
    isLike:false,
    createdAt: moment().subtract(1, "year").format("ll"),
  },
  {
    id: uuid(),
    imgUrl:
      "https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "hima",
    comments: [
      {
        id: uuid(),
        author: "ken",
        msg: "hey thats cool",
        isEdit: false,
        createdAt: moment().subtract(3, "day").format("LT"),
      },
      {
        id: uuid(),
        author: "denmark",
        msg: "hey thats awesome",
        isEdit: false,
        createdAt: moment().subtract(7, "day").format("LT"),
      },
    ],
    title:'Pidgeot',
    isLike:false,
    createdAt: moment().subtract(5, "year").format("ll"),
  },
];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function App(props) {
  const [post, setPosts] = useState([...postList]);
  const [comment, setComment] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [viewAddPost, setViewAddPost] = useState(false);
  const [activePost,setActivePost] = useState(null)
  function handleAddComment(postId) {
    setPosts((pre) =>
      pre.map((e) => {
        if (e.id === postId) {
          e.comments.push({
            id: uuid(),
            author: props?.user?.userName,
            msg: comment,
            isEdit: false,
            createdAt: moment().format("LT"),
          });
          const sortedArray = e.comments.reverse();
          return {
            ...e,
            comments: sortedArray,
          };
        }
        return {
          ...e,
        };
      })
    );
    setComment("");
  }

  function handleEditComment(postId, commentId, type, text) {
    setPosts((pre) =>
      pre.map((e) => {
        if (e.id === postId) {
          const updatedComments = e.comments.map((cmt) => {
            if (cmt.id === commentId) {
              return {
                ...cmt,
                isEdit: type === "open",
                msg: text,
                createdAt: moment().format("LT"),
              };
            }
            return {
              ...cmt,
            };
          });
          return {
            ...e,
            comments: updatedComments,
          };
        }
        return {
          ...e,
        };
      })
    );
  }

  function handleCloseEditComment(postId, commentId, text) {
    setPosts((pre) =>
      pre.map((e) => {
        if (e.id === postId) {
          const updatedComments = e.comments.map((cmt) => {
            if (cmt.id === commentId) {
              return {
                ...cmt,
                msg: text,
                isEdit: false,
              };
            }
            return {
              ...cmt,
            };
          });
          return {
            ...e,
            comments: updatedComments,
          };
        }
        return {
          ...e,
        };
      })
    );
  }

  function handleAddPost(title, imgUrl) {
    setPosts((pre) => [
      {
        id: uuid(),
        imgUrl,          
        author: "hima",
        comments: [],
        createdAt: moment().format("ll"),
        title,
      },
      ...pre
    ])
  }
  function handleEditPost(title, imgUrl, postId) {
    setPosts((pre) => pre.map((e)=>{
      if (e.id === postId) {
        return {
          ...e,
          title,
          imgUrl
        }
      }
      return {
        ...e
      }
    }))
  }

  function handleLikePost(postId) {
    setPosts((pre) => pre.map((e)=>{
      if (e.id === postId) {
        return {
          ...e,
          isLike: !e.isLike
        }
      }
      return {
        ...e
      }
    }))
  }
  return (
    <div className="App">
      <Header props={props} setViewAddPost={setViewAddPost} setActivePost={setActivePost} />
      <Container sx={{ my: "40px" }}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {post?.map((post) => (
            <Grid key={post.id} item xs={12} sm={6} md={4}>
              <Card>
                <CardHeader
                  avatar={<Avatar />}
                  title={post?.title ||"loremipsum"}
                  subheader={post?.createdAt}
                  action={
                    <IconButton onClick={() => {
                      setViewAddPost(true)
                      setActivePost(post)
                    }} aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Box sx={{height:'200px'}}>
                    <img
                      alt="/"
                      src={post.imgUrl}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    onClick={()=>handleLikePost(post.id)}
                    sx={{ "& path": { fill: post.isLike ? "red" : "#bdbdbd" } }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded === post.id}
                    onClick={()=>setExpanded((pre)=> pre === post.id ?null : post.id )}
                    aria-expanded={expanded === post.id}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded === post.id} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Box
                      sx={{
                        border: "1px solid #bdbdbd",
                        p: "4px",
                        borderRadius: "12px",
                      }}
                    >
                      <div style={{ height: "200px", overflowY: "scroll" }}>
                        {post.comments.length ? post.comments?.map((e) => (
                          <Chat
                            key={e.id}
                            e={e}
                            post={post}
                            handleCloseEditComment={handleCloseEditComment}
                            handleEditComment={handleEditComment}
                          />
                        )): <span>No comments Found</span>}
                      </div>
                      <Stack direction={"row"}>
                        <textarea
                          onChange={(e) => setComment(e.target.value)}
                          value={comment}
                          placeholder="Enter comment"
                          style={{ border: "1px solid #ddd", flexGrow: 1 }}
                        />
                        {comment.trim().length ? (
                          <>
                            <IconButton
                              onClick={handleAddComment.bind(null, post.id)}
                            >
                              <DoneIcon
                                sx={{ width: "12px", height: "12px" }}
                              />
                            </IconButton>
                            <IconButton onClick={() => setComment("")}>
                              <CloseIcon
                                sx={{ width: "12px", height: "12px" }}
                              />
                            </IconButton>
                          </>
                        ) : null}
                      </Stack>
                    </Box>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <PostModal postData={activePost} handleEditPost={handleEditPost} handleAddPost={handleAddPost} viewAddPost={viewAddPost} setViewAddPost={setViewAddPost} />
    </div>
  );
}

function mapProps(state) {
  return {
    user: state.user.logData,
  };
}

export default connect(mapProps)(App);
