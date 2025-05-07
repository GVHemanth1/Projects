package com.example.RestJobApp.service;


import com.example.RestJobApp.model.JobPost;
import com.example.RestJobApp.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepo jobRepo;


    public List<JobPost> getAlljobs(){

        return jobRepo.getAllJobs();
    }
}
