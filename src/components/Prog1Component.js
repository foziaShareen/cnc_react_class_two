import {Card,CardImg,CardImgOverlay,CardTitle,CardText,CardBody} from 'reactstrap';
import React, {Component} from 'react';
class Prog1 extends Component{
    constructor(props){
        super(props);
        this.state={
selectedProgramer:null
        }
    }
       onSelectedProgramer(prog){
           this.setState({selectedProgramer:prog})
       }
       renderProgramer(prog){
           if(prog!=null){
               return(
<Card className="col-12 col-md-5 m-1">
    <CardImg  src={prog.image} alt={prog.name }/>
    <CardBody>
        <CardTitle>{prog.name}</CardTitle>
        <CardText>{prog.description}</CardText>
    </CardBody>

</Card>
               )
           }
           else{
               return(
                   <div></div>
               )
           }
       }
    
    render(){
        const program=this.props.programers.map((prog)=>{
            return(
                <div   className="col-12 col-md-5 mt-1">
                    <Card key={prog.id } onClick={()=>this.onSelectedProgramer(prog)}>
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
                <div class="row">
{this.renderProgramer(this.state.selectedProgramer)}

                </div>

            </div>
        )
    }
}
export default Prog1
