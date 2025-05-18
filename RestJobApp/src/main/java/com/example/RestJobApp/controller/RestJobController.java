package com.example.RestJobApp.controller;


import com.example.RestJobApp.model.JobPost;
import com.example.RestJobApp.repo.JobRepo;
import com.example.RestJobApp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@Controller
//@RequestMapping("hello")
@CrossOrigin(origins = "http://localhost:3000/")
public class RestJobController {

    @Autowired
    private JobService jobService;

    @GetMapping("jobposts")
    public List<JobPost> getAllJobs(){
        return jobService.getAlljobs();
    }

    @GetMapping("jobpost/{postid}")
    public JobPost getJob(@PathVariable int postid){

        return jobService.getjob(postid);

    }


    @PostMapping("jobpost")
    public JobPost addJob(@RequestBody JobPost jobPost){

        jobService.addJob(jobPost);
        return jobService.getjob(jobPost.getPostId());
    }

    @PutMapping("jobpost")
    public JobPost upateJob(@RequestBody JobPost jobPost){
        jobService.updateJob(jobPost);

        return jobService.getjob(jobPost.getPostId());
    }

    @DeleteMapping("jobpost/{postId}")
    public String deleteJob(@PathVariable int postId ){
        jobService.deleteJob(postId);
        return postId+" Deleted";
    }

    @GetMapping("loaddata")
    public String loadData(){
        jobService.load();

        return "Data loaded successfully";
    }

    @GetMapping("jobpost/search/{keyword}")
    public List<JobPost> searchByKeyword(@PathVariable("keyword") String keyword ){
        return jobService.search(keyword);

    }
}
