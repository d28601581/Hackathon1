import React, {Component} from 'react';
import DashCalendar from './DashCalendar';
import NavBarCalendar2 from '../NavBar/NavBarCalendar2';
import '../TextEditor/TextEditor.css';
import TextEditor from '../TextEditor/TextEditor';
import './DashCalendar.css';
import FooterMessage from '../FooterMessage/FooterMessage';


class Dashboard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            TextEditorTrigger: false,
        }

        this.onTriggerChange = this.onTriggerChange.bind(this);
        this.onTriggerChange2 = this.onTriggerChange2.bind(this);

    }

    onTriggerChange = () => {
        this.setState({
            TextEditorTrigger: true,
        });
    };

    onTriggerChange2 = () => {
        this.setState({
            TextEditorTrigger: false,
        });
    };
    
    render(){
    
    return(
        <div className="dash"> 
         
            <NavBarCalendar2/>
            {this.state.TextEditorTrigger ?
                <div className="editor">
                    <TextEditor />
                </div> 
            :null}

            <div>
                <h1>Hello user</h1>
                <DashCalendar/>
                
                 
            </div>
            
            <button onClick={this.onTriggerChange}>Text Editor</button>
            <button onClick={this.onTriggerChange2}>Save Text Editor</button>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h4>Do Not Stress And Leave It To Task Up</h4>
            <FooterMessage/>
        </div>
    )
    // ) 
    // :
        // (
        //     <div>
        //         <NavBarCalendar2 />
        //         <div>
        //             <h1>Hello</h1>
        //             <DashCalendar />

        //         </div>

        //         <button onClick={this.onTriggerChange}>Create new text editor</button>
        //     </div>

        // )
    }
}

export default Dashboard;