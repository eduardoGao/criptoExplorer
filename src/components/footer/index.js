import React from 'react';
import { FooterContainer, Name } from './styles';

function Footer() {
  return (
    <FooterContainer>
      <h6>
        <Name>Creado por</Name>
        {' '}
        Eduardo Díaz
      </h6>
    </FooterContainer>
  );
}

export default Footer;
