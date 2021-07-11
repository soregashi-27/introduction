import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '../components/footer';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <StyledContent>
          <div>
            {children}
            <Footer />
          </div>
        </StyledContent>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
