import React from 'react'
import styled from 'styled-components'
import TwitterLogo from '../../../static/twitter.svg'

export default class TweetButton extends React.Component {
  onClickButton = () => {
    const url = encodeURIComponent(this.props.url)
    const text = encodeURIComponent(this.props.text)
    const href = `https://twitter.com/share?url=${url}&text=${text}`

    window.open(href, 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1');
  }

  render () {
    return (
      <StyledButton onClick={this.onClickButton}>
        <Logo src={TwitterLogo}/>
      </StyledButton>
    )
  }
}

const StyledButton = styled.button`
  width:40px;
  height: 40px;
  appearance: none;
  border: none;
  padding: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  border-radius: 2px;
`
