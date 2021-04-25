import React, {Component} from 'react';
import {CirclePicker} from 'react-color';

 class ColorChoice extends Component{
    state = {
        choice: '#fff',
    }

    handleChangeComplete = (color) => {
        this.setState({ choice: color.hex });
    };


    render(){
        return (
            <CirclePicker
                color={this.state.choice}
                onChangeComplete={this.handleChangeComplete}
            />
        )
    }
}
export default ColorChoice;
