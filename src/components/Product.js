import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { cart } from 'reducers/cart'


const Container = styled.div`
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
border-radius: 6px;
background: #fff;
margin-bottom: 0px;
margin-left: 10px;
width: 75%;
`
const Title = styled.h1`
margin: 0;
font-size: 20px;
font-family: 'MuseoModerno';
`
const SecondaryText = styled.p`
margin:0;
font-family: 'MuseoModerno';
color: #6b6b6b;
`
const Thumbnail = styled.div`
width: 70px;
height: 70px;
border-radius: 50%;
background-image: url(${(props) => props.url});
background-size: cover;
margin-right: 10px;
`
const TitleBar = styled.div`
display: flex;
align-items: center;
`
const CoverImage = styled.img`
width: 100%;
border-radius: 6px 6px 0 0;
`
const Content = styled.div`
padding: 20px;

`
const Display = styled.div`
display: flex;
flex-direction: column;
`
export const AddToCartButton = styled.button`
border-radius: 6px;
border: none;
width: 25%;
margin-left: 15px;
margin-top: 0px;
`

const ProductCard = ({ title, secondaryText, thumbnailUrl, coverImage, className }) => (

  < Container className={className} >
    {coverImage && <CoverImage src={coverImage} />}
    <Content>
      <TitleBar>
        {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText} :-</SecondaryText>}
        </div>
      </TitleBar>


    </Content>
  </Container >
)


export const Product = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <Display>
      <div className='margin'>
        <ProductCard
          title={product.title}
          secondaryText={product.price} />
      </div>



      <AddToCartButton
        type='button'
        //disabled={product.inventory === 0}
        onClick={() => dispatch(cart.actions.addItem(product))}>
        Add to cart
        </AddToCartButton>

    </Display>
  )
}