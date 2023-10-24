import React from "react";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

const GenresList = ({name, count, image, children}) => {
  return (
    <StyledGenres>
      <h3>{name}</h3>
      <p>{count}</p>
      <img src={image} alt={name} />
      {children}
    </StyledGenres>
  );
};


const StyledGenres = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  `;
  
  export default GenresList;