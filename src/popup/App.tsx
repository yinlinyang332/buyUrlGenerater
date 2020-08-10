import { hot } from 'react-hot-loader/root';
import React from 'react';

import './App.scss';
import 'antd/dist/antd.css';
import UrlMaker from './UrlMaker'

const App = () => {
    return (
        <div className="app">
            <UrlMaker/>
        </div>
    );
};

export default hot(App);
