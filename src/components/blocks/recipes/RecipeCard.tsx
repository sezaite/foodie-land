import React, {useState} from "react";
import styled from "styled-components/macro";
import { Box } from "components/wrappers/Box";
import { theme } from "styles/theme";
import { FlexWrapper } from "components/wrappers/FlexWrapper";


const RecipeCard: React.FC = () => {
  return (
    <FlexWrapper flexDirection="column" padding={theme.space.s20} backgroundColor="teal" borderRadius={theme.radii.radius60}>

    </FlexWrapper>
  )
}

export default RecipeCard