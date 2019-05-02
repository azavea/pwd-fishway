import React from "react";
import { connect } from "react-redux";
import { func } from "prop-types";
import { hideScreensaver } from "./actions";
import styled from "styled-components";
import { Flex, Box, Heading, Button } from "rebass";

const StyledScreensaver = styled(Flex)`
  text-align: center;
`;

const Screensaver = props => {
  const { dispatch } = props;

  return (
    <StyledScreensaver
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className="screensaver"
      onClick={() => dispatch(hideScreensaver())}
    >
      <Box width={1 / 2}>
        <Heading as="h1" fontSize="3" mb="4">
          Learn how the fish ladder helps fish populations and whether you have
          what it takes to be an aquatic biologist.
        </Heading>
        <Button className="screensaver__button">Let's go!</Button>
      </Box>
    </StyledScreensaver>
  );
};

Screensaver.propTypes = {
  dispatch: func.isRequired
};

function mapStateToProps(state) {
  return {
    dispatch: state.dispatch
  };
}
export default connect(mapStateToProps)(Screensaver);
