import React from 'react';
import styled from 'styled-components';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 24px;
  }
`;

const Project = () => {
  return (
    <StyledProjectsSection>
      <h2>他のGithub Repositoryはこちら</h2>
      <a href="https://github.com/soregashi-27">View my Github?</a>
      {/* Repositoryが増えてきたらaタグをLinkタグにしてページを追加する */}
    </StyledProjectsSection>
  );
};

export default Project;
