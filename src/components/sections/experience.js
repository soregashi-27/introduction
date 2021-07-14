import React from 'react';
import styled from 'styled-components';

const StyledExperienceSection = styled.section`
  max-width: 700px;
`;

const StyledTabList = styled.div``;

const Experience = () => {
  return (
    <StyledExperienceSection>
      <h2>Experience</h2>
      <div className="inner">
        <StyledTabList>// ここにタップしたら表示が変わるTab Listを追加していく</StyledTabList>
      </div>
    </StyledExperienceSection>
  );
};

export default Experience;
