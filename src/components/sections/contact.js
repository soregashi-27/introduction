import React from 'react';
import styled from 'styled-components';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
`;

const Contact = () => {
  return (
    <StyledContactSection>
      <h2>What's Next?</h2>
      <h2>Keep In Touch</h2>

      <p>
        最後まで目を通していただきありがとうございます。
        <br />
        転職活動は主にWantedlyを活用しております。
        <br />
        カジュアルにお話が出来たら嬉しいです！
        <br />
        ※Wantedly準備中。文章内容考え中。
      </p>

      <a className="email-link" href="{`https://www.wantedly.com/id/t_s_career`}">
        Wantedlyで話す
      </a>
    </StyledContactSection>
  );
};

export default Contact;
