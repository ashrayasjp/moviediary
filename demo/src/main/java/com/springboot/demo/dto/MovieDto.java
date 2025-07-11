package com.springboot.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MovieDto {
    public String tmdbId;
    public String overview;
    public String movieTitle;
    public String posterUrl;
    public String status;
    public String addedDate;

}
