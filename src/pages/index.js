import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Contact from '../components/sections/contact';
import Projects from '../components/sections/projects';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = () => (
  <Layout>
    <StyledMainContainer>
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

export default IndexPage;
