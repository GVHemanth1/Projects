// Search.jsx

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Card,
  Grid,
  Typography,
  TextField,
  Button,
  Switch,
  Chip,
  Skeleton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Tooltip,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Search as SearchIcon,
  WorkOutline,
  Brightness4,
  AddCircleOutline,
  Edit,
  Delete,
} from "@mui/icons-material";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPost, setJobPost] = useState({
    postId: "",
    postProfile: "",
    postDesc: "",
    reqExperience: "",
    postTechStack: "",
  });

  const navigate = useNavigate();

  const fetchInitialPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:8081/jobposts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching job posts:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialPosts();
  }, []);

  const handleSearch = async (searchKeyword) => {
    if (!searchKeyword.trim()) {
      fetchInitialPosts();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8081/jobpost/search/${searchKeyword}`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setPosts([]);
    }
    setLoading(false);
  };

  const handleOpenDialog = (post = null) => {
    if (post) {
      setJobPost({
        postId: post.postId,
        postProfile: post.postProfile,
        postDesc: post.postDesc,
        reqExperience: post.reqExperience,
        postTechStack: post.postTechStack.join(","),
      });
    } else {
      setJobPost({
        postId: "",
        postProfile: "",
        postDesc: "",
        reqExperience: "",
        postTechStack: "",
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  const handleChange = (e) => {
    setJobPost({
      ...jobPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitJob = async () => {
    try {
      await axios.post("http://localhost:8081/jobpost", {
        ...jobPost,
        postTechStack: jobPost.postTechStack.split(","),
      });
      alert("Job submitted successfully!");
      handleCloseDialog();
      fetchInitialPosts();
    } catch (error) {
      console.error("Error adding/updating job:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job post?")) {
      try {
        await axios.delete(`http://localhost:8081/jobpost/${id}`);
        alert("Job deleted successfully!");
        fetchInitialPosts();
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    }
  };

  return (
    <Grid container spacing={2} sx={{ padding: 3, fontFamily: "'Poppins', sans-serif" }}>
      {/* Navbar */}
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <AppBar position="static" sx={{ backgroundColor: "#1976d2", borderRadius: 2 }}>
          <Toolbar>
            <WorkOutline sx={{ marginRight: 2 }} />
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600 }}>
              Tech Jobs Hub 🚀
            </Typography>
            <Button
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "30px",
                px: 3,
                py: 1,
                background: "#fff",
                color: "#1976d2",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                "&:hover": {
                  background: "#e3f2fd",
                },
              }}
              onClick={() => handleOpenDialog()}
              startIcon={<AddCircleOutline />}
            >
              Add Job
            </Button>
            <Brightness4 sx={{ marginLeft: 2 }} />
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          </Toolbar>
        </AppBar>
      </Box>

      {/* Search Bar */}
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          fullWidth
          label="Search by job profile, skills, experience..."
          InputProps={{
            startAdornment: <SearchIcon sx={{ marginRight: 1 }} />,
          }}
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            handleSearch(e.target.value);
          }}
        />
      </Grid>

      {/* Job Listings */}
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height={200} />
      ) : posts.length > 0 ? (
        posts.map((p) => (
          <Grid key={p.postId} item xs={12} md={6} lg={4}>
            <Card
              sx={{
                padding: 2,
                borderRadius: 2,
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                backgroundColor: darkMode ? "#1e1e1e" : "#fff",
                color: darkMode ? "#fff" : "#000",
                position: "relative",
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  🚀 {p.postProfile}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  <b>Post ID:</b> {p.postId}
                </Typography>
                <Typography variant="body2" sx={{ my: 1 }}>
                  {p.postDesc}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <b>Experience:</b> {p.reqExperience} years
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                  Skills:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {p.postTechStack.map((s, i) => (
                    <Chip label={s} key={i} color="primary" variant="outlined" />
                  ))}
                </Box>
              </Box>

              {/* Action Icons */}
              <Box sx={{ position: "absolute", top: 10, right: 10 }}>
                <Tooltip title="Edit">
                  <IconButton onClick={() => handleOpenDialog(p)}>
                    <Edit color="primary" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton onClick={() => handleDelete(p.postId)}>
                    <Delete color="error" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography sx={{ margin: "auto", mt: 4, fontSize: 18 }}>
          No matching job posts found.
        </Typography>
      )}

      {/* Add/Edit Job Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: 600 }}>
          {jobPost.postId ? "Edit Job Post" : "Add New Job"}
        </DialogTitle>
        <DialogContent>
          <TextField label="Post ID" name="postId" type="number" fullWidth margin="normal" onChange={handleChange} value={jobPost.postId} />
          <TextField label="Job Profile" name="postProfile" fullWidth margin="normal" onChange={handleChange} value={jobPost.postProfile} />
          <TextField label="Description" name="postDesc" fullWidth margin="normal" onChange={handleChange} value={jobPost.postDesc} />
          <TextField label="Required Experience" name="reqExperience" type="number" fullWidth margin="normal" onChange={handleChange} value={jobPost.reqExperience} />
          <TextField label="Tech Stack (comma-separated)" name="postTechStack" fullWidth margin="normal" onChange={handleChange} value={jobPost.postTechStack} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">Cancel</Button>
          <Button onClick={handleSubmitJob} color="primary">{jobPost.postId ? "Update" : "Add"} Job</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Search;
