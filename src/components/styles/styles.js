import styled from 'styled-components';

export const NavBar = styled.nav `
  background-color: #F6E8EA;
  height: 3vh;
  padding: 2rem;
  /* text-align: center; */
`

export const Logo = styled.img `
  background-image: url(${props => props.image});
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-size: cover;
  display: absolute;
`

export const FlexHeader = styled.section `
  display: flex;
  padding: ${props => props.padding || ''};
  background-color: ${props => props.background_color || ''};
  justify-content: center;
  align-items: center;

  p {
    padding-bottom: .6rem;
    padding-left: .5rem;
    /* justify-items: center; */
    /* align-self: flex-start; */

  }

  img {
    width: 60%;
    height: auto;
  }
`
