import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Contact from '../components/sections/contact';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = () => (
  <Layout>
    <StyledMainContainer>
      <Contact />
    </StyledMainContainer>
  </Layout>
);

export default IndexPage;
