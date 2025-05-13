package com.example.SpringJPA.controller;

import com.example.SpringJPA.model.Student;
import com.example.SpringJPA.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {

    @Autowired
    StudentService studentService;

//    Retrieve all students details
    @GetMapping("student")
    public List<Student> getStudents(){

        return studentService.getStudents();
    }

//    Add a student
    @PostMapping("add")
    public void addStudent(@RequestBody Student student){
        studentService.addStudent(student);

    }

//    Find student details based on Id
    @GetMapping("student/{id}")
    public Optional<Student> getStudent(@PathVariable int id){
        return studentService.getStudent(id);
    }

}
