import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const Header = () => {
  return (
    <Menu fixed="top" borderless size="huge">
      <Container>
        <Menu.Item header>Pokedex</Menu.Item>
      </Container>
    </Menu>
  )
}

export default Header;