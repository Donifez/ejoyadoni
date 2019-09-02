import React, {Component} from "react";
import {Bar,Line} from "react-chartjs-2";
import "./scss/components/__chartwallet.scss";
class Chart extends Component{
    constructor(props){
super(props);
this.state={
chartData:{
labels:["Aug 10", "Aug 20", "Aug 30", 'Sept 10', "Sept 20"],

dataSets:[{
    label:"Revenue",
     data:[
         "7.3","7.3","7.3","7.3", "7.3"
     ],
     backgroundColor:[
         "green",
     ]
}]
}
}       
   }
    render(){
        return(
            <div className="chart_wrapper">
          <Bar
            data={this.state.chartData}
            width={300}
            height={50}
            options={{maintainAspectRatio:false}}



          />

            </div>
        )
    }
}
export default Chart;