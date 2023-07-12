import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
    render() {
        return (
            <form>
                <label htmlFor="">
                    Find contacts by name
                    <input type="text" />
                </label>
            </form>
        )
    }
}