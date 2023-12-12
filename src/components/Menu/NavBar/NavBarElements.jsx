import styled, { css } from 'styled-components';
import { FaHashtag } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


export const NavBarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 50px;
height: 100%;
background-color: #2b2b2b;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end; 
bottom: 0;
left: 0;

@media screen and (max-width: 720px) {
    flex-direction: row;
    width: 100%;
    height: 50px;
    justify-content: flex-start;
    ${props => props.mobile && mobileStylesSideBarClosed}
  }
`;

const mobileStylesSideBarClosed = css`
  margin-bottom: 0rem;
`;

const mobileStylesSideBarOpen = css`
  margin-left: 2.5rem;
  margin-bottom: 0;
`;

export const NavBarIconLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.4rem;
  width: 2.4rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 3px rgba(220, 198, 198, 0.12), 0 1px 2px rgba(78, 77, 77, 0.24);
  background-color: #4F5E6A;
  color: #C2DFD3;
  border-radius: 1.5rem;
  transition: all 300ms linear;
  position: relative;

  &:first-child {
    margin-bottom: auto;
    margin-top: 1.2rem;
    transition: 100ms linear;
  }

  &:last-child {
    margin-bottom: 1.2rem;
  }

  &:hover {
    background-color: #C2DFD3;
    color: #2b2b2b;
    border-radius: 0.75rem;
  }

  @media screen and (max-width: 720px) {
    margin-bottom: 0.2rem;
    margin-left: 0.5rem;

    &:first-child {
      margin-top: 0.25rem;
    }

    &:last-child {
      margin-top: 1rem; 
    }

    .tooltip {
      display: none; /* Hide the tooltip on small screens */
    }
  }


  @media screen and (max-width: 720px) {
    ${props => props.mobile && mobileStylesSideBarOpen}
  }

  .tooltip {
    position: absolute;
    width: auto;
    padding: 0.2rem 0.5rem;
    background-color: #2b2b2b;
    color: #C2DFD3;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    bottom: 25%;
    left: 215%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
  }
`;


export const UserIcon = styled(FaUser)`
`;

export const HashtagIcon = styled(FaHashtag)`
`;

export const MessageIcon = styled(FaEnvelope)`
`;

export const StarIcon = styled(FaStar)`
`;

