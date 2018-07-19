import React from 'react'
import styled from 'styled-components'
import FacebookLogo from '../../../static/facebook.svg'

export default class FacebookButton extends React.Component {
  onClickButton = () => {
    const url = encodeURIComponent(this.props.url)
    const href = `https://www.facebook.com/dialog/share?app_id=281060879310527&display=popup&href=${url}`

    window.open(href, 'facebookwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1')
  }

  render () {
    return (
      <StyledButton onClick={this.onClickButton}>
        <Logo src={FacebookLogo}/>
      </StyledButton>
    )
  }
}

const StyledButton = styled.button`
  width:40px;
  height: 40px;
  appearance: none;
  border: none;
  margin-left: 8px;
  margin-right: 8px;
  padding: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`

const Logo = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  border-radius: 2px;
`
