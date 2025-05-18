import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import navigation

const AddJob = () => {
  const navigate = useNavigate(); // Navigation hook

  const [jobPost, setJobPost] = useState({
    postId: "",
    postProfile: "",
    postDesc: "",
    reqExperience: "",
    postTechStack: "",
  });

  const handleChange = (e) => {
    setJobPost({
      ...jobPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/jobpost", {
        ...jobPost,
        postTechStack: jobPost.postTechStack.split(","), // Convert to list
      });

      alert("Job added successfully!");

      // Clear fields after submission
      setJobPost({
        postId: "",
        postProfile: "",
        postDesc: "",
        reqExperience: "",
        postTechStack: "",
      });

      // Navigate back to Search page
      navigate("/");
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", marginTop: "2%" }}>
        <Typography variant="h4">Add Job</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Post ID"
          name="postId"
          type="number"
          value={jobPost.postId}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Job Profile"
          name="postProfile"
          value={jobPost.postProfile}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="postDesc"
          value={jobPost.postDesc}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Required Experience"
          name="reqExperience"
          type="number"
          value={jobPost.reqExperience}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Tech Stack (comma-separated)"
          name="postTechStack"
          value={jobPost.postTechStack}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Job
        </Button>
      </form>
    </Container>
  );
};

export default AddJob;
