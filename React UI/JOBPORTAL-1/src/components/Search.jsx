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
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Search as SearchIcon, WorkOutline, Brightness4 } from "@mui/icons-material";

const Search = () => {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
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

  return (
    <Grid container spacing={2} className="page-container">
      {/* Navbar with Theme Toggle */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="navbar">
          <Toolbar>
            <WorkOutline sx={{ marginRight: 2 }} />
            <Typography variant="h6" className="title">
              Tech Jobs Hub 🚀
            </Typography>
            <Button className="add-job-btn" onClick={() => navigate("/add-job")}>
              Add Job
            </Button>
            <Brightness4 sx={{ marginLeft: 2 }} />
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
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
              <Typography variant="h6">Experience: {p.reqExperience} years</Typography>
              <Typography gutterBottom>Skills:</Typography>
              {p.postTechStack.map((s, i) => (
                <Chip label={s} className="skill-chip" key={i} />
              ))}
            </Card>
          </Grid>
        ))
      ) : (
        <Typography className="no-results">No matching job posts found.</Typography>
      )}
    </Grid>
  );
};

export default Search;
