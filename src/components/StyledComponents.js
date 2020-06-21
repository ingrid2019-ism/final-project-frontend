import React from 'react'
import styled from 'styled-components/macro'
import { Link, NavLink } from 'react-router-dom'
import img from './images/hero_2.jpg'

/*font-family: 'Monoton', cursive;
font-family: 'MuseoModerno', cursive;*/

export const HeroImage = styled.div`
 height: 700px;
 width: 100%;
 background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${img});
 background-size: 170%;
position: relative;
background-position-x: center;
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
  opacity: 90%;
}
`
export const CheckoutLink = styled(Link)`
color: ${props => props.color || 'grey'};
text-decoration: none;
font-family: 'MuseoModerno';
font-size: 15px;
`

export const Container = styled.div`
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
border-radius: 6px;
background: #fff;
margin-bottom: 0px;
margin-left: 10px;
width: 75%;
`
export const Title = styled.h1`
margin: 0;
font-size: 20px;
font-family: 'MuseoModerno';
`
export const SecondaryText = styled.p`
margin:0;
font-family: 'MuseoModerno';
color: #6b6b6b;
`
export const Thumbnail = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background-image: url(${(props) => props.url});
background-size: cover;
margin-right: 10px;
`
export const TitleBar = styled.div`
display: flex;
align-items: center;
`
export const CoverImage = styled.img`
width: 100%;
border-radius: 6px 6px 0 0;
`
export const Content = styled.div`
padding: 20px;

`
export const Display = styled.div`
display: flex;
flex-direction: column;
`
export const AddToCartButton = styled.button`
border-radius: 6px;
border: none;
width: 25%;
margin-left: 15px;
margin-top: 0px;
padding: 3px;
`

export const ProductCard = ({ title, secondaryText, thumbnailUrl, coverImage, className, secondaryTitle }) => (

  < Container className={className} >
    {coverImage && <CoverImage src={coverImage} />}
    <Content>
      <TitleBar>
        {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText} :-</SecondaryText>}
          {secondaryTitle && <SecondaryText>{secondaryTitle}</SecondaryText>}
        </div>
      </TitleBar>


    </Content>
  </Container >
)

