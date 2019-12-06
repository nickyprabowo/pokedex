import React from 'react';
import { Menu, Container } from 'semantic-ui-react';

const Header = () => {
    return (
        <Menu borderless size="huge">
            <Container text>
                <Menu.Item header>Pokedex</Menu.Item>
            </Container>
        </Menu>
    )
}

export default Header;