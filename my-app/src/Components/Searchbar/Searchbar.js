import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {toast } from 'react-toastify';

class Searchbar extends Component {

    
    state = {
        query: ""
    };

    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.query === "") {
            toast.error(`Введите название картинки`)
        }
    
        this.props.handleSubmit(this.state.query);

        this.setState({
            query: "",
        });
    };
    

    render () {

        return (
            <header className="Searchbar">
                <form 
                className="SearchForm"
                onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                    name="query"
                    value={this.state.query}
                    onChange={this.handleChange}
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default Searchbar;