import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';

import Schemas from './schemas';
import SimpleSchema from 'simpl-schema';

Schemas.foos = new SimpleSchema({
    name: String,
}, {check});

const Foo = Mongo.Collection('foos');

Meteor.methods({
    'foos.insert'() {

    },
    'foos.update'() {

    },
    'foos.remove'() {

    }
});

if (Meteor.isServer) {
    Meteor.publish('foos.list', function () {

    })
}