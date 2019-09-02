import React, { Component } from "react";
import Chart from "./Chartwallet";
import './scss/components/_wallet.scss';
// import InfoDetail from'./scss/components/InfoDetail';


class Wallet extends Component {
    render() {
     
      return (
          <div className="wallet_wrapper">
          <p className="transaction_history">Transaction history</p>
          <div className="wallet_container">
          <div className="transaction_info">
                
                <div className="date_div">
                  <p className="date-header">Date</p>
                   <p className="datecontent">7/30/2019</p> 
                </div>
                 <div className="summary_div">
                  <p className="summary-header">Summary</p>
                   <p className="summarycontent"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                 </div>

                 <div className="date_div odd">
                   <p className="datecontent">7/30/2019</p> 
                </div>
                 <div className="summary_div odd">
                   <p className="summarycontent"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                 </div>

                 <div className="date_div even">
                   <p className="datecontent">7/30/2019</p> 
                </div>
                 <div className="summary_div even">
                   <p className="summarycontent"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                 </div>


                 <div className="date_div odd">
                   <p className="datecontent">7/30/2019</p> 
                </div>
                 <div className="summary_div odd">
                   <p className="summarycontent"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                 </div>

                 <div className="date_div even">
                   <p className="datecontent">7/30/2019</p> 
                </div>
                 <div className="summary_div even">
                   <p className="summarycontent"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                 </div>
              
              

                 
                 
               {/* <p className="summary-header">Summary</p>
               <div className="all_info">
                   
               </div>
               <div className="all_info2">
               <p className="date2">7/30/2019</p>       <p className="summary2"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
               </div>
               <div className="all_info3">
               <p className="date3">7/30/2019</p>       <p className="summary3"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
               </div>
               <div className="all_info4">
               <p className="date4">7/30/2019</p>       <p className="summary4"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
               </div>
               <div className="all_info5">
               <p className="date5">7/30/2019</p>       <p className="summary5"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
               </div>
               <div className="all_info6">
               <p className="date6">7/30/2019</p>       <p className="summary6"> Lorem ipsum dolor sit amet, consectetur adipiscing </p>
               </div>
               <div className="all_info7">
               <p className="date7">7/30/2019</p>       <p className="summary7"> Lorem ipsum dolor sit amet, consectetur adipiscing </p> */}
               {/* </div> */}
               {/* <InfoDetail/>  */}

          </div>
       <div className="chart_view">
       <Chart/>

       </div>
       </div>
         
              
              
          </div>
      )
    }
    };


    
export default Wallet;