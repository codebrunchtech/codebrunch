import React, { useContext } from 'react';
import styled from 'styled-components';

import { AppContext } from './../App/AppContext';
import { GitHub, YouTube, Podcast, Twitter } from './../icons';

const Container = styled.div`
  a,
  a:active,
  a:hover {
    outline: 0;
  }

  .button-container {
    display: inline-block;
    height: 6rem;
    width: 6rem;
    margin: 0 1.75rem;
  }

  .button {
    transition: color 0.5s linear;
    height: 6rem;
    width: 6rem;
    color: ${({ theme }) => theme.primaryTextColor};
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    position: relative;
    z-index: 1;
    border-radius: 25%;
  }

  .icon {
    height: 4.5rem;
    width: 4.5rem;
    padding: 1rem;
  }

  .icon_title {
    font-size: 1.25rem;
  }

  .button:hover {
    background-color: ${({ theme }) => theme.shadowColor};
    box-shadow: 0 0 0.75rem 0.75rem rgba(128, 128, 128, 0.25);
  }

  .button:active {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  .button-container .icon_title {
    display: none;
  }

  .button-container:hover .icon_title {
    display: initial;
  }

  .button-container:hover .icon {
    display: none;
  }

  @media only screen and (max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2) {
    .button-container {
      height: 5rem;
      width: 5rem;
      margin: 0 0.8rem;
    }

    .button {
      height: 5rem;
      width: 5rem;
    }

    .icon {
      height: 4rem;
      width: 4rem;
      padding: 0.5rem;
    }

    .icon_title {
      font-size: 1rem;
    }
  }
`;

export const Buttons = () => {
  const { theme } = useContext(AppContext);

  const DATA = [
    {
      href: 'https://github.com/thecodebrunch',
      aria: 'Star our projects if you like',
      icon: <GitHub />,
      label: 'GitHub',
    },
    {
      href: '',
      aria: 'Subscribe to our YouTube Channel',
      icon: <YouTube />,
      label: 'YouTube',
    },
    {
      href: '',
      aria: 'Listen to our Google Podcasts',
      icon: <Podcast />,
      label: 'Podcast',
    },
    {
      href: '',
      aria: 'Follow us on Twitter',
      icon: <Twitter />,
      label: 'Twitter',
    },
  ];

  return (
    <Container theme={theme}>
      {DATA.map(({ href, aria, icon, label }, i) => (
        <span className='button-container' key={i}>
          <a className='button' href={href} target='_self' aria-label={aria} rel='noopener noreferrer'>
            <div className='icon'>{icon}</div>
            <span className='icon_title' data-v2={label}>{label}</span>
          </a>
        </span>
      ))}
    </Container>
  );
};
