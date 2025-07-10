package com.springboot.demo.model;

import jakarta.persistence.*;
import lombok.Setter;
import lombok.Getter;

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
    @Column(columnDefinition = "TEXT")
    public String overview;
    @Column(length = 500)
    public String posterUrl;
    @Column(name = "status")
    private String status;

}
