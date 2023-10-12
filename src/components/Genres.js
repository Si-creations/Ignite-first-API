import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGenres } from "../actions/genresAction";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Genres = () => {
  //FETCH GENRES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGenres());
  }, [dispatch]);
  //Get that data back + deconstruct it a bit
  const { genres } = useSelector((state) => state.genres);

  return (
    <div>
      <h3>Genres</h3>
      <Display>
        {genres.map((genre) => (
          <Genre name={genre.name} key={genre.id} />
        ))}
      </Display>
    </div>
  );
};

export default Genres;

const Genre = styled.h3`
  color: black;
`;

const Display = styled.div`
  color: black;
  background: blue;
  font-size: 1rem;
`;
