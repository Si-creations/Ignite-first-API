import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGenres } from "../actions/genresAction";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import GenresList from "./GenresList";

const Genres = () => {
  //FETCH GENRES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGenres());
  }, [dispatch]);
  //Get that data back
  const { genres } = useSelector((state) => state.genresboi); // genres are in {} so i dont need to write genres.genres.map >> it's extracting from reducer
  const isLogged = useSelector((store) => store.isLogged);

  return (
    <GenresListStyle>
      {/* <button onClick={() => dispatch({ type: "IS_LOGGED" })}>
        See genres
      </button>
      {isLogged && <h3>Genres:</h3>} */}
      <h3>Genres:</h3>
      
      
      <StyledGenre>
        {genres.map((genre) => (
          <GenresList
            name={genre.name}
            count={genre.games_count}
            id={genre.id}
            image={genre.image_background}
            key={genre.id}
          />
        ))}
      </StyledGenre>
    </GenresListStyle>
  );
};

const GenresListStyle = styled(motion.div)`
  padding: 0rem 5rem;
  h2{
    padding: 5rem 0rem;
  }
`;



const StyledGenre = styled(motion.div)`
    min-height: 80vh;
    display: grid ;
    grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 4rem;
`;

export default Genres;