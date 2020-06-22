import React, { useState } from 'react'
import { Navbar } from 'components/Navbar'
import styled from 'styled-components/macro'
import { AddToCartButton, HeroImage } from 'components/StyledComponents'


export const MainContainer = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 600px) {
flex-direction: row;
}
`
export const Container = styled.div`
background-color: white;
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
border-radius: 6px;
width: 50%;
padding: 20px;
margin: 20px;
opacity: 92%;

@media (min-width: 600px) {
width: 25%;
}
`
export const Title = styled.h1`
font-family: 'MuseoModerno';
color: black;
margin-bottom: 25px;
font-size: 24px;
`
export const SmallTitle = styled.h3`
font-family: 'MuseoModerno';
color: black;
margin-bottom: 15px;
font-size: 19px;
`
export const Content = styled.div`
display: flex;
flex-direction: column;
`
export const InputField = styled.input`
font-family: 'MuseoModerno';
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
border-radius: 3px;
border: none;
width: 60%;
margin-bottom: 15px;
padding: 5px;
`
export const Button = styled.button`
font-family: 'MuseoModerno';
background: #3a7f8a;
color: white;
box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0,0,0,.12);
border-radius: 3px;
border: none;
width: 30%;
margin-top: 20px;
margin-left: 10%;
padding: 5px;

&:hover {
  cursor: pointer;
}
`

const URL = process.env.REACT_APP_API_URL || 'https://final-project-ingrid.herokuapp.com/users'

export const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const handleFormSubmit = event => {
    event.preventDefault()

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          setSuccessMessage('Thank you for signing up!') // set success message
          setErrorMessage(false) // set error message to false
          return res.json()
        }
        else {
          setErrorMessage('could not create user') // set error message
          setSuccessMessage(false) // set success message to false
          return res.text().then(json => { throw new Error(json) })
        }
      })
      .then(user => console.log('created user:', user))
      .catch(err => { console.error(err) })
  }


  return (
    <div>
      <Navbar />
      <HeroImage>
        <div className='about'>
          <Container>
            <form onSubmit={handleFormSubmit} >
              <Title>Sign Up</Title>
              <SmallTitle>To Get Our Newsletter</SmallTitle>
              <Content>
                <InputField
                  value={name}
                  placeholder='Enter Name'
                  type='text'
                  name='name'
                  onChange={event => setName(event.target.value)}
                  required
                />
                <InputField
                  value={email}
                  placeholder='Enter Email'
                  type='email'
                  name='email'
                  onChange={event => setEmail(event.target.value)}
                  required
                />
                <InputField
                  value={password}
                  placeholder='Enter Password'
                  type='password'
                  name='password'
                  onChange={event => setPassword(event.target.value)}
                  required
                />
                {errorMessage && <div>  <br />{errorMessage} </div>}
                {successMessage && <div> <br />{successMessage} </div>}
                <br />
                <AddToCartButton onClick={handleFormSubmit} type="submit" >Submit</AddToCartButton>
              </Content>
            </form>
          </Container >
        </div>
      </HeroImage>
    </div>
  )

}


