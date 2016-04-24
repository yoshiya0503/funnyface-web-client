import React, { PropTypes, Component } from 'react';
import mui, { AppBar } from 'material-ui';
const ThemeManager = require('material-ui/lib/styles/theme-manager');

class Header extends Component {
    static get childContextTypes() {
        return { muiTheme: React.PropTypes.object };
    }

    render() {
        return (
            <header className='header'>
              <h1>AppBar Component</h1>
              <AppBar title='this is test' />
            </header>
        )
    }
}

export default Header;
