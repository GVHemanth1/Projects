package com.example.JobApp.controller;

import com.example.JobApp.model.JobPost;
import com.example.JobApp.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//@Controller
public class JobController {

//    JobPost jobPost;

    @Autowired
    JobService jobService;

    @GetMapping({"/", "home"})
    public String home(){

        return "home";
    }

    @GetMapping("addjob")
    public String addJob(){

        return "addjob";
    }

    @PostMapping("handleForm")
    public String handleForm(JobPost jobPost){

        jobService.addJob(jobPost);


        return "successa";
    }

    @GetMapping("viewalljobs")
    public String viewAllJobs(Model model){
//    public List<JobPost> viewAllJobs(Model model){
        List<JobPost> jobs = jobService.getAlljobs();
        model.addAttribute("jobPosts", jobs);
        return "viewalljobs";
//        return jobs;
    }
}
