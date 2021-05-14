import {Card,CardImg,CardImgOverlay,CardTitle,CardText,CardBody} from 'reactstrap';
import React, {Component} from 'react';
class Prog1 extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        const program=this.props.programers.map((prog)=>{
            return(
                <div  key={prog.id } className="col-12 col-md-5 mt-1">
                    <Card>
                        <CardImg src = {prog.image}alt={prog.name}/>
                        <CardImgOverlay>
                            <CardTitle >
                                {prog.name}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                    
                </div>
            )
        })
        return(
            <div className ="container">
                <div className="row">
                    {program}
                </div>

            </div>
        )
    }
} 
export default Prog1
