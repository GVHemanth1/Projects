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
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Search as SearchIcon,
  WorkOutline,
  Brightness4,
  AddCircleOutline,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);
  const [jobPost, setJobPost] = useState({
    postId: "",
    postProfile: "",
    postDesc: "",
    reqExperience: "",
    postTechStack: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchInitialPosts();
  }, []);

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

  const handleSearch = async (searchKeyword) => {
    if (!searchKeyword.trim()) {
      fetchInitialPosts();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8081/jobpost/search/${searchKeyword}`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setPosts([]);
    }
    setLoading(false);
  };

  const handleOpenDialog = () => setOpenDialog(true);

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditMode(false);
    setJobPost({
      postId: "",
      postProfile: "",
      postDesc: "",
      reqExperience: "",
      postTechStack: "",
    });
  };

  const handleChange = (e) => {
    setJobPost({
      ...jobPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitJob = async () => {
    try {
      const payload = {
        ...jobPost,
        postTechStack: jobPost.postTechStack.split(","),
      };

      if (editMode) {
        await axios.put("http://localhost:8081/jobpost", payload);
        alert("Job updated successfully!");
      } else {
        await axios.post("http://localhost:8081/jobpost", payload);
        alert("Job added successfully!");
      }

      handleCloseDialog();
      fetchInitialPosts();
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  return (
    <Grid container spacing={2} className="page-container">
      {/* Navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="navbar">
          <Toolbar>
            <WorkOutline sx={{ marginRight: 2 }} />
            <Typography variant="h6" className="title">
              Tech Jobs Hub 🚀
            </Typography>
            <Button
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
                borderRadius: "30px",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0px 0px 12px rgba(0, 123, 255, 0.2)",
                transition: "0.3s",
                "&:hover": {
                  boxShadow: "0px 0px 18px rgba(0, 123, 255, 0.8)",
                  transform: "scale(1.05)",
                },
                color: "#fff",
              }}
              onClick={handleOpenDialog}
            >
              <AddCircleOutline sx={{ color: "#fff", fontSize: "2rem" }} />
              Add Job
            </Button>
            <Brightness4 sx={{ marginLeft: 2 }} />
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Toolbar>
        </AppBar>
      </Box>

      {/* Search Bar */}
      <Grid item xs={12} className="search-container">
        <TextField
          variant="outlined"
          label="Search Jobs..."
          InputProps={{
            startAdornment: <SearchIcon className="search-icon" />,
          }}
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            handleSearch(e.target.value);
          }}
          className="search-input"
        />
      </Grid>

      {/* Job Listings */}
      {loading ? (
        <Skeleton variant="rectangular" width="100%" height={200} />
      ) : posts.length > 0 ? (
        posts.map((p) => (
          <Grid key={p.postId} item xs={12} md={6} lg={4}>
            <Card className={`job-card ${darkMode ? "dark-mode" : ""}`}>
              <Typography variant="h5" className="job-title">
                {p.postProfile}
              </Typography>
              <Typography className="job-id">Post ID: {p.postId}</Typography>
              <Typography className="job-desc">{p.postDesc}</Typography>
              <Typography variant="h6">
                Experience: {p.reqExperience} years
              </Typography>
              <Typography gutterBottom>Skills:</Typography>
              {p.postTechStack.map((s, i) => (
                <Chip label={s} className="skill-chip" key={i} />
              ))}
              <Box display="flex" justifyContent="flex-end" gap={1} mt={2}>
                <EditIcon
                  sx={{ cursor: "pointer", color: "blue" }}
                  onClick={() => {
                    setJobPost({
                      ...p,
                      postTechStack: p.postTechStack.join(","),
                    });
                    setEditMode(true);
                    setOpenDialog(true);
                  }}
                />
                <DeleteIcon
                  sx={{ cursor: "pointer", color: "red" }}
                  onClick={() => {
                    setJobToDelete(p.postId);
                    setConfirmDeleteDialog(true);
                  }}
                />
              </Box>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography className="no-results">
          No matching job posts found.
        </Typography>
      )}

      {/* Add/Edit Job Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog} className="job-popup">
        <DialogTitle>{editMode ? "Edit Job" : "Add New Job"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Post ID"
            name="postId"
            type="number"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={jobPost.postId}
            disabled={editMode}
          />
          <TextField
            label="Job Profile"
            name="postProfile"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={jobPost.postProfile}
          />
          <TextField
            label="Description"
            name="postDesc"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={jobPost.postDesc}
          />
          <TextField
            label="Required Experience"
            name="reqExperience"
            type="number"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={jobPost.reqExperience}
          />
          <TextField
            label="Tech Stack (comma-separated)"
            name="postTechStack"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={jobPost.postTechStack}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmitJob} color="primary">
            {editMode ? "Update Job" : "Add Job"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Confirm Delete Dialog */}
      <Dialog
        open={confirmDeleteDialog}
        onClose={() => setConfirmDeleteDialog(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete this job post?</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setConfirmDeleteDialog(false)}
            color="secondary"
          >
            Cancel
          </Button>
          <Button
            onClick={async () => {
              try {
                await axios.delete(
                  `http://localhost:8081/jobpost/${jobToDelete}`
                );
                alert("Job deleted successfully!");
                setConfirmDeleteDialog(false);
                fetchInitialPosts();
              } catch (error) {
                console.error("Error deleting job:", error);
              }
            }}
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Search;
