import React from 'react';
import './States.css';

class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            substring: '',       // The substring entered by the user
            filteredStates: [],  // States that match the substring
        };
    }

    // Function to update the filtered states based on the input substring
    updateFilteredStates = (substring) => {
        substring = substring.toLowerCase(); // Ignore case

        // Call the models.states() function to get the array of state names
        const stateNames = window.models.states();

        const filteredStates = stateNames.filter((state) =>
            state.toLowerCase().includes(substring)
        );
        this.setState({ filteredStates, substring });
    };

    // Handle changes in the input field
    handleInputChange = (e) => {
        const { value } = e.target;
        this.updateFilteredStates(value);
    };

    render() {
        const { substring, filteredStates } = this.state;

        return (
            <div>
                <h1>State Filter</h1>
                <input
                    type="text"
                    placeholder="Enter a substring"
                    value={substring}
                    onChange={this.handleInputChange}
                />
                <p>Filter: {substring}</p>

                {filteredStates.length > 0 ? (
                    <ul>
                        {filteredStates.map((state, index) => (
                            <li key={index}>{state}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No matching states found</p>
                )}
            </div>
        );
    }
}

export default States;
