import React from 'react';
import { withRouter } from 'react-router-dom';
import Results from '../search_results/search_results';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        this.setState({input: e.target.value});
    }

    handleSubmit() {
        
        this.props.getAllResults(this.state.input)
        this.setState({input: ""});
        this.props.history.push('/search/results');
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleSubmit();
        }
    }

    


    render() {
        return (
          <div onKeyPress={this.handleKeyPress} className="topnav">
            <input
              src={window.favicon}
              className="search"
              placeholder="Search categories as Food, Fashion, Place ..."
              value={this.state.input}
              onChange={this.handleChange}
              type="text"
            />
          </div>
        );
    }
}

export default withRouter(Search);
