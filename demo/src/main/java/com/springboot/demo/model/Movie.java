package com.springboot.demo.model;

import java.time.LocalDate;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "movies")
@Getter
@Setter
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String tmdbId;
    private String movieTitle;
    @Column(name = "added_date")
    private LocalDate addedDate;
    @Column(columnDefinition = "TEXT")
    public String overview;
    @Column(length = 500)
    public String posterUrl;
    @Column(name = "status")
    private String status;
}
