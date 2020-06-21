import React from 'react'
import { Navbar } from 'components/Navbar'
import {ProductCard} from 'components/StyledComponents'


export const About = () => {
  return (
    <main>
      <Navbar />
      <div className='about'>
      <ProductCard 
      title= 'About Us'
      secondaryText=
      'At vero eos et accusamus et iusto odio dignissimos
      ducimus qui blanditiis praesentium voluptatum deleniti
      atque corrupti quos dolores et quas molestias excepturi
      sint occaecati cupiditate non provident, similique
      sunt in culpa qui officia deserunt mollitia animi, id
      est laborum et dolorum fuga. Et harum quidem rerum
      facilis est et expedita distinctio. Nam libero tempore,
      cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus,
      omnis voluptas assumenda est, omnis dolor repellendus.
      Temporibus autem quibusdam et aut officiis debitis aut rerum.'
      />
      </div>
       </main>
)
}