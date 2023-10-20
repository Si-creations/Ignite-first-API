import React from "react";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const GenresList = ({name, games_count, image_background}) => {
  return (
    <StyledGenres>
      <h3>{name}</h3>
      <p>{games_count}</p>
      <img src={image_background} alt={name} />
    </StyledGenres>
  );
};


const StyledGenres = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  `;
  
  export default GenresList;