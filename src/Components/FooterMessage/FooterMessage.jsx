import React, {Component} from 'react'
import SimpleReactFooter from "simple-react-footer";

class FooterMessage extends Component{
    render(){
        
        const columns = [
            {
                title: "",
                resources: [
                    
                ]
            },
            {
                title: "",
                resources: [
                    
                ]
            },
            
        ];
        return (
            <div className="foot">
                <SimpleReactFooter 
                    columns={columns}
                    copyright="Task Up"
                    iconColor="black"
                    backgroundColor="bisque"
                    fontColor="black"
                    copyrightColor="darkgrey"
                />
            </div>
        );
    }
}
export default FooterMessage;