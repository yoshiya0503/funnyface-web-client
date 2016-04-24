/**
 * @fileoverview Header_UI
 * @name Header.jsx
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
import React, { PropTypes, Component } from 'react';
import mui, {
    AppBar,
    Tabs,
    Tab
} from 'material-ui';

/**
 * @class Menu
 * @extends Component
 * @description メニュー一覧
 */
class Menu extends Component {
    /**
     * @method render
     * @return メニュー一覧
     */
    render() {
        return (
            <Tabs>
              <Tab
                label='SERVICE'
              />
              <Tab
                label='PRODUCT'
              />
              <Tab
                label='ABOUT'
              />
                <Tab
              label='CONTACT'
              />
            </Tabs>
        )
    }
}

/**
 * @class Header
 * @extends Component
 * @description ヘッダ情報, コーポレートサイトのタブ
 */
class Header extends Component {
    /**
     * @method render
     * @return ヘッダ情報
     */
    render() {
        return (
            <header className='header'>
              <AppBar
                title = { 'FunnyFace, inc' }
                showMenuIconButton = { false }
                children = { <Menu/> }
              />
            </header>
        )
    }
}

export default Header;
