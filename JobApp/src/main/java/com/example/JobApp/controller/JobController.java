package com.example.JobApp.controller;


import com.example.JobApp.model.JobPost;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class JobController {

    JobPost jobPost;

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

        return "success";
    }

    @GetMapping("viewalljobs")
    public String viewAllJobs(){

        return "viewalljobs";
    }
}
