/**
 * @fileoverview main_jsx_file
 * @name index.jsx
 * @author Yoshiya Ito <ito_yoshiya@cyberagnet.co.jp>
 */
import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from './containers/App';

injectTapEventPlugin();

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
