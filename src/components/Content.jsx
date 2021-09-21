import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { AppContext } from './../App/AppContext';

const sharedStyles = css`
  transition: color 0.5s linear;
  position: relative;
  z-index: 1;
`;

const C = {
  Name: styled.h1`
    ${sharedStyles};
    font-size: 10rem;
    font-weight: 900;
    margin: 0 0 3.5rem;
    color: ${({ theme }) => theme.primaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 3.5rem;
    }
  `,
  Title: styled.h2`
    ${sharedStyles};
    font-size: 3.5rem;
    margin: 4rem 0;
    font-weight: 0;
    color: ${({ theme }) => theme.secondaryTextColor};
    @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
      font-size: 2rem;
    }
  `,
};

export const Content = () => {
  const { theme } = useContext(AppContext);

  return (
    <div>
      <C.Name theme={theme} data-v2='name' aria-label='HananStems Records'>HANANSTEMS RECORDS</C.Name>
      <C.Title theme={theme} data-v2='title' aria-label='Record Label | Music Production Studio'>RECORD LABEL | MUSIC PRODUCTION STUDIO</C.Title>
    </div>
  );
};
