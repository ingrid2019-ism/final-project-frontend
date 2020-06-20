import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const activeClassName = 'nav-item-active'

/*export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: red;
  }
`*/

export const StyledLink = styled(NavLink)`
color: white;
text-decoration: none;
padding-right: 10px;
&.active {
  color: blue;
}
`;

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

export const NavStyleLink = styled.li`
text-decoration: none;
padding-right: 10px;
`
