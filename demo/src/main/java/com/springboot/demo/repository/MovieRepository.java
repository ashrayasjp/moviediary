package com.springboot.demo.repository;

import com.springboot.demo.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findByStatus(String status);

    void deleteByStatus(String status);

}
