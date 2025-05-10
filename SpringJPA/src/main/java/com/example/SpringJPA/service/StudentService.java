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
}
