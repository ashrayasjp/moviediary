package com.springboot.demo.controller;

import com.springboot.demo.model.Movie;
import com.springboot.demo.repository.MovieRepository;
import com.springboot.demo.dto.MovieDto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import java.time.LocalDate;

@RestController
@RequestMapping("/api")

@CrossOrigin(origins = "http://localhost:5173")
public class DiaryController {

    @Autowired
    private MovieRepository movieRepository;

    @PostMapping
    public ResponseEntity<String> addMovie(@RequestBody MovieDto dto) {
        Movie movie = new Movie();
        movie.setTmdbId(dto.getTmdbId());
        movie.setMovieTitle(dto.getMovieTitle());
        movie.setOverview(dto.getOverview());
        movie.setPosterUrl(dto.getPosterUrl());
        movie.setStatus(dto.getStatus());
        if (dto.getAddedDate() != null) {
            movie.setAddedDate(LocalDate.parse(dto.getAddedDate()));
        } else {
            movie.setAddedDate(LocalDate.now());
        }
        movieRepository.save(movie);

        return ResponseEntity.ok("Movie saved successfully");
    }

    @GetMapping("/{status}")
    public List<Movie> getMovieByStatus(@PathVariable("status") String status) {
        return movieRepository.findByStatus(status);
    }

    @DeleteMapping("/{status}")
    public ResponseEntity<String> deleteMoviesByStatus(@PathVariable("status") String status) {
        movieRepository.deleteAll();
        return ResponseEntity.ok("All movies with status '" + status + "' deleted");
    }

}
