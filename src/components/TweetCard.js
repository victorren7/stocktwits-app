import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '../global.css'
import { screenView } from '../ScreenView';
import moment from 'moment';

const TweetCard = ({ data }) => {
  return (
    <Wrapper>
      {data.messages.map((tweet, index) => (
        <StyledColumn key={index} gridGap={20}>
          <Icon src={tweet.user.avatar_url_ssl}/>
          <StyledRow>
            <TweetInfo gridGap={15}>
                <Row gridGap={1}>
                  <Name>{tweet.user.name}</Name>
                  <span>@{tweet.user.username}</span>
                </Row>
                <Time>{moment(tweet.created_at).calendar()}</Time>
              <span></span>
            </TweetInfo>
            <Body>{tweet.body}</Body>
          </StyledRow>
        </StyledColumn>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  margin: 30px auto 30px;
  border-radius: 2px;
  grid-gap: 15px;
  @media ${screenView.desktop} { 
    max-width: 70%;
  }
`;

const StyledColumn = styled(Column)`
  width: 85%;
  margin: auto;
  padding: 20px;
  grid-template-columns: 50px 3fr;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  border-radius: 7px;
  @media ${screenView.desktop} { 
    width: 95%;
  }
`;

const Icon = styled.img`
  width: 70px;
  height: 70px;
  background-color: grey;
  border-radius: 35px;
  justify-self: center;
`;

const StyledRow = styled(Row)`
  text-align: left
`;

const TweetInfo = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: flex-start;
  @media ${screenView.desktop} { 
    grid-auto-flow: column;
    justify-content: space-between;

  }
`;

const Name = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const Time = styled.span`
  color: lightgrey;
  font-size: 12px;
`;

const Body = styled.div`
  overflow: hidden;
`

export default TweetCard;