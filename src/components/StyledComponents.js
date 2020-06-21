import styled from 'styled-components/macro'
import { Link, NavLink } from 'react-router-dom'
import img from './images/hero_image.jpg'

/*font-family: 'Monoton', cursive;
font-family: 'MuseoModerno', cursive;*/

export const HeroImage = styled.div`
 height: 700px;
 width: 100%;
 background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img});
 background-size: contain;
 background-repeat: no-repeat;
 /*background: cover;*/
 position: relative;
 margin: 0px;
 
`
export const FirstNavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 40px;

border-radius: 3px;
width: 100%;
background: black;
padding: 10px;
`

export const NavContent = styled.div`
display: flex;
justify-content: flex-end;
`
export const SecondaryNavContainer = styled.div`
display: flex;
justify-content: flex-end;
height: 30px;
background: #ffffff;
border-radius: 3px;
opacity: 70%;

`

export const NameLogo = styled.h1`
font-family: 'Monoton';
padding-bottom: 20px;
`
export const HomeLink = styled(Link)`
color: ${props => props.color || 'grey'};
text-decoration: none;

`

export const StyledLink = styled(NavLink)`
color: ${props => props.color || 'grey'};
text-decoration: none;
font-family: 'MuseoModerno';
font-size: 13px;
padding-right: 10px;
&.active {
  color: blue;
}
`

