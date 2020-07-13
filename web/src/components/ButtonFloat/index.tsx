import React, { FC } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

export const Button = styled.button`
    width: 75px;
    height: 75px;
    background-color: ${props => props.theme.primary};
    box-shadow: 0px 0px 20px 2px ${props => props.theme.secondary};
    position: fixed;
    bottom: 5%;
    right: 0;
    margin-right: 25px;
    border: none;
    border-radius: 50%;
    color: white;
    box-shadow: 0px 0px 20px 0px black;
    &:hover {
      cursor: pointer;
    }
`;

interface ButtonInterface {
    icon: IconDefinition
}

function ButtonComponent({icon}: ButtonInterface) {
  return (
    <Button>
        <FontAwesomeIcon icon={icon} size="2x"/>
    </Button>
  )
}

export default ButtonComponent;
