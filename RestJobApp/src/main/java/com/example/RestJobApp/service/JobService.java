package com.example.RestJobApp.service;


import com.example.RestJobApp.model.JobPost;
import com.example.RestJobApp.repo.JobRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class JobService {


    @Autowired
    private JobRepo jobRepo;


    public List<JobPost> getAlljobs(){

        return jobRepo.findAll();
    }

    public JobPost getjob(int postid) {

        return jobRepo.findById(postid).orElse(new JobPost());
    }

    public void addJob(JobPost jobPost) {

        jobRepo.save(jobPost);
    }

    public void updateJob(JobPost jobPost) {
        jobRepo.save(jobPost);
    }

    public void deleteJob(int postId) {
        jobRepo.deleteById(postId);
    }

    @Transactional
    public void load() {
        // arrayList to store  JobPost objects
//        List<JobPost> jobs =
//                new ArrayList<>(List.of(
//                        new JobPost(1, "Software Engineer", "Exciting opportunity for a skilled software engineer.", 3, List.of("Java", "Spring", "SQL")),
//                        new JobPost(2, "Data Scientist", "Join our data science team and work on cutting-edge projects.", 5, List.of("Python", "Machine Learning", "TensorFlow")),
//                        new JobPost(3, "Frontend Developer", "Create amazing user interfaces with our talented frontend team.", 2, List.of("JavaScript", "React", "CSS")),
//                        new JobPost(4, "Network Engineer", "Design and maintain our robust network infrastructure.", 4, List.of("Cisco", "Routing", "Firewalls")),
//                        new JobPost(5, "UX Designer", "Shape the user experience with your creative design skills.", 3, List.of("UI/UX Design", "Adobe XD", "Prototyping"))
//
//                ));

        List<JobPost> jobs = new ArrayList<>();
        jobs.add(new JobPost(1, "Java Developer", "Must have good experience in core Java and advanced Java", 2,
            List.of("Core Java", "J2EE", "Spring Boot", "Hibernate")));

    // Frontend Developer Job Post
    jobs.add(
            new JobPost(2, "Frontend Developer", "Experience in building responsive web applications using React",
                    3, List.of("HTML", "CSS", "JavaScript", "React")));

    // Data Scientist Job Post
    jobs.add(new JobPost(3, "Data Scientist", "Strong background in machine learning and data analysis", 4,
            List.of("Python", "Machine Learning", "Data Analysis")));

    // Network Engineer Job Post
    jobs.add(new JobPost(4, "Network Engineer",
            "Design and implement computer networks for efficient data communication", 5,
            List.of("Networking", "Cisco", "Routing", "Switching")));

    // Mobile App Developer Job Post
    jobs.add(new JobPost(5, "Mobile App Developer", "Experience in mobile app development for iOS and Android",
            3, List.of("iOS Development", "Android Development", "Mobile App")));

    jobs.add(new JobPost(6, "UI/UX Developer", "Experience in UI development ",
            6, List.of("HTML", "CSS", "React","JS")));



        jobRepo.saveAll(jobs);

    }

    public List<JobPost> search(String keyword) {

//        List<JobPost> result = jobRepo.findByPostProfileContainingOrPostDescContaining(keyword, keyword);
//
//        return Optional.ofNullable(result).filter(list -> !list.isEmpty())
//                .orElseThrow(() -> new RuntimeException("No matching words found...!!!"));
        return jobRepo.findByPostProfileContainingOrPostDescContaining(keyword, keyword);
//            return jobRepo.search(keyword);

        }



}
