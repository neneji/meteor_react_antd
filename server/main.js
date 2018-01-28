import {Meteor} from 'meteor/meteor';

import initApi from './config/initApi'

Meteor.startup(() => {
    // code to run on server at startup

    initApi();
});
