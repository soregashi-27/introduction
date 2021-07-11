import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: conter;
`;

const StyledCredit = styled.div`
  line-height: 1;

  a {
    pading: 10px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledCredit tabindex="-1">
        <a href="https://github.com/soregashi-27"></a>
        <div> ©️ Tomohiro Sugiyama</div>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
