/* global describe, it */
import React from 'react';
import Hello from './../../main/js/app/hello';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

global.document = jsdom.jsdom();
global.window = global.document.defaultView;

describe('Hello modal', () => {
    it('should have expected message', () => {

        const renderer = TestUtils.createRenderer();

        renderer.render(<Hello />);

        const rendered = renderer.getRenderOutput();
        const expected = <h4>Brought to you by React, Webpack & Grails</h4>;

        expect(rendered).toIncludeJSX(expected);
    });
});
