import React from 'react'
import styled from 'styled-components'
import HatenaLogo from '../../../static/hatena.svg'

export default class HatenaButton extends React.Component {
  onClickButton = () => {
    const href = `http://b.hatena.ne.jp/entry/s/noah.plus${this.props.path}`

    window.open(href, '_blank');
  }

  render () {
    return (
      <StyledButton onClick={this.onClickButton}>
        <Logo src={HatenaLogo}/>
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
