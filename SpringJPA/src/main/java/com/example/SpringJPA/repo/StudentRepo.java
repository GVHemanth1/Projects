package com.example.SpringJPA.repo;

import com.example.SpringJPA.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepo extends CrudRepository<Student,Integer>{


    List<Student> findByName(String name);

    List<Student> findByMarksGreaterThan(int marks);
}