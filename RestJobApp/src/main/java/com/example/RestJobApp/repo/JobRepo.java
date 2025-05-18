package com.example.RestJobApp.repo;


import com.example.RestJobApp.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public interface JobRepo extends JpaRepository<JobPost,Integer> {


    List<JobPost> findByPostProfileContainingOrPostDescContaining(String postProfile, String postDesc);
//@Query("SELECT jp FROM JobPost jp JOIN jp.postTechStack pt WHERE jp.postProfile LIKE %:keyword% OR jp.postDesc LIKE %:keyword% OR pt LIKE %:keyword%")
//List<JobPost> search(@Param("keyword") String keyword);

}

//
//// arrayList to store store JobPost objects
//List<JobPost> jobs = new ArrayList<>();
//
//// ****************************************************************************
//
//// constructor->injecting objects into ArrayList defined above.
//public JobRepo() {
//
//    // Java Developer Job Post
//    jobs.add(new JobPost(1, "Java Developer", "Must have good experience in core Java and advanced Java", 2,
//            List.of("Core Java", "J2EE", "Spring Boot", "Hibernate")));
//
//    // Frontend Developer Job Post
//    jobs.add(
//            new JobPost(2, "Frontend Developer", "Experience in building responsive web applications using React",
//                    3, List.of("HTML", "CSS", "JavaScript", "React")));
//
//    // Data Scientist Job Post
//    jobs.add(new JobPost(3, "Data Scientist", "Strong background in machine learning and data analysis", 4,
//            List.of("Python", "Machine Learning", "Data Analysis")));
//
//    // Network Engineer Job Post
//    jobs.add(new JobPost(4, "Network Engineer",
//            "Design and implement computer networks for efficient data communication", 5,
//            List.of("Networking", "Cisco", "Routing", "Switching")));
//
//    // Mobile App Developer Job Post
//    jobs.add(new JobPost(5, "Mobile App Developer", "Experience in mobile app development for iOS and Android",
//            3, List.of("iOS Development", "Android Development", "Mobile App")));
//
//    jobs.add(new JobPost(6, "UI/UX Developer", "Experience in UI development ",
//            6, List.of("HTML", "CSS", "React","JS")));
//
//
//
//}
//
//// ****************************************************************************
//
//// method to return all JobPosts
//public List<JobPost> getAllJobs() {
//    return jobs;
//}
//
//// method to save a job post object into arrayList
//public void addJobPost(JobPost job) {
//    jobs.add(job);
//
//}
//
//// Get a particular job post based on postid
//
//public JobPost getJob(int postid) {
//    for (JobPost job : jobs )
//    {
//        if (job.getPostId() == postid)
//            return job;
//    }
//    return null;
//}
//
//
//
//// Method to update a job post field
//
//public void updateJob(JobPost jobPost) {
//    for (JobPost jobPost1 : jobs){
//        if (jobPost1.getPostId() == jobPost.getPostId()){
//            jobPost1.setPostProfile(jobPost.getPostProfile());
//            jobPost1.setPostDesc(jobPost.getPostDesc());
//            jobPost1.setReqExperience(jobPost.getReqExperience());
//            jobPost1.setPostTechStack(jobPost.getPostTechStack());
//        }
//
//    }
//}
//// Delete a job post
//public void deleteJob(int postId) {
//
//    try
//    {
//
//
//        for (JobPost jobPost :  jobs){
//            if (jobPost.getPostId() == postId) {
//
//                jobs.remove(jobPost);
//                System.out.println(jobPost + " Deleted");
//            }
//        }
//
//    } catch (Exception e) {
//        System.out.println(e);
//    }
//
//}