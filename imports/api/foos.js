import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';

import Schemas from './schemas';
import SimpleSchema from 'simpl-schema';

Schemas.Foo = new SimpleSchema({
    name: String,
}, {check});

const Foos = new Mongo.Collection('foos');

Meteor.methods({
    'foos.insert'() {

    },
    'foos.update'() {

    },
    'foos.remove'() {

    }
});

if (Meteor.isServer) {
    Meteor.methods({
        'foo.bar'(params) {
            console.log(params);

            if (Math.random() >= 0.5) {
                return {message: 'Hello world!'}
            } else {
                throw new Meteor.Error('foo.bar', 'Boom!!!');
            }
        }
    });

    Meteor.publish('foos.list', function () {

    });
}