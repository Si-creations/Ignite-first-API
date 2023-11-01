import React from "react";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadup } from "../Animations";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  console.log(`this is game id${stringPathId}`);
  //Load details Handler
  const dispatch = useDispatch();
  const lodadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={loadup}
      initial="hidden"
      animate="show"
      layoutid={stringPathId}
      onClick={lodadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  background: white;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;

//NOTES:

// 1> adding document.body.style.overflow= 'hidden' to loadDetailHandler is for stopping the whole page to scroll oeven more when you get to the end of "Detail" page > BUT than you can't scroll the whole page when you close the "Detail" so you need to add >>
//Exit Detail
// const navigate = useNavigate();
// const exitDetailHandler = (e) => {
//   const element = e.target;
//   if (element.classList.contains("shaddow")) {
//     document.body.style.overflow = "auto";
//     navigate("/");
//   }
// };
// Thats to get OUT of the "Detail" and to be able to scroll the page again
