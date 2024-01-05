import React from "react";

export default class Pie extends React.Component{
    render(){
        return(
            <ul>
                <li id = 'linkdin'><a target = '_blank' href="https://www.linkedin.com/in/derik-gonz%C3%A1lez-mart%C3%ADn-6b73242a3/">
                    Linkdin</a></li>
                <li id = "github"><a target = '_blank' href="https://github.com/derikgm">Github</a></li>
            </ul> 
        );
    }
}