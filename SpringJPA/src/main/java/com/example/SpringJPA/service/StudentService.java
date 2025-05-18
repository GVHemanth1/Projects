package com.example.SpringJPA.service;

import com.example.SpringJPA.model.Student;
import com.example.SpringJPA.repo.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    
    @Autowired
    StudentRepo studentRepo;

    public List<Student> getStudents() {

        return (List<Student>) studentRepo.findAll();
    }

    public void addStudent(Student student) {

        studentRepo.save(student);
    }

    public Optional<Student> getStudent(int id) {

        return studentRepo.findById(id);
    }


    public List<Student> findByName(String name) {

        return studentRepo.findByName(name);
    }

    public List<Student> findByMarks(int marks) {

        return studentRepo.findByMarksGreaterThan(marks);
    }

    public Student updateStudent(Student student) {

        return studentRepo.save(student);
    }

    // Delete the existing student
    public void deleteStudent(int id) {
        Optional<Student> student = studentRepo.findById(id);
        if (student.isPresent()) {
            studentRepo.delete(student.get());
        }
        else {
            // Handle non-existing student case
            throw new RuntimeException("Student with ID " + id + " not found");
        }
    }

}
