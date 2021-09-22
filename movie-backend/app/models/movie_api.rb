class MovieApi < ApplicationRecord

    def self.fetch
        body  = JSON.parse(HTTP.get("https://api.themoviedb.org/3/movie/popular?api_key=09e6a620ac7883cad951562880764439&language=en-US&page=2").to_s)
        body['results'].each do |data|
          Movie.create(title: data['original_title'], overview: data['overview'],
          release_date: data["release_date"], rating: data["vote_average"], image: "https://image.tmdb.org/t/p/w400#{data["poster_path"]}")
        end
        
    end
end