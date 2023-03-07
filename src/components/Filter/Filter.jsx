import style from './filter.module.scss';
import React, { Component } from "react";
import PropTypes from 'prop-types';

class Filter extends Component {

    handleChange = (evt) => {
        this.setState({[evt.currentTarget.name]: evt.currentTarget.value});
        this.props.onfiltering(this.state.filter);
    }

    render() {
        return (
            <label className={style.label} > Find contacts by name
                <input className={style.input} type="text" name="filter" value={this.props.filter} onChange={evt => this.props.handleChange(evt)}/>
            </label>
        )
    }
}

Filter.propTypes = {
    handleChange: PropTypes.func,
    filter: PropTypes.string,
}

export default Filter;