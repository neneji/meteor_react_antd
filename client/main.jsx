import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import App from '/imports/ui/App';

Meteor.startup(() => {
    render(
        <LocaleProvider locale={zhCN}>
            <App/>
        </LocaleProvider>,
        document.getElementById('renderTarget')
    );
});