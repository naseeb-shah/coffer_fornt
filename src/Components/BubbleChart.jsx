import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bubble } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { UseDispatch,useDispatch,useSelector } from "react-redux";

const BubbleChart = () => {
  const reduxData= useSelector((state)=>state.data) 
    
    const labels = reduxData?.map((el)=>{
        return  el.source 
      });
      const Data = {
        labels: labels,
        datasets: [
          {
            label: "Based on intensity",
            backgroundColor:"green",
            borderColor: "black",
            data: reduxData?.map((el)=>{
                return  el.intensity 
              }),
          },
          {
            label: "Based on relevance",
            backgroundColor:"blue",
            borderColor: "black",
            data: reduxData?.map((el)=>{
                return  el.relevance 
              }),
          },
          {
            label: "Based on likelihood",
            backgroundColor:"red",
            borderColor: "black",
            data: reduxData?.map((el)=>{
                return  el.likelihood 
              }),
          },
        ],
      };
  return (
<div
      style={{
        
        width:'80%',
        margin: "auto",
        padding: "0px 50px 0px 50px",
        borderRadius: "5%",
        marginTop: "50px",
      }}
    >
         <h1 style={{color:"black",width:"100%"}}>Bubble Chart Presentation</h1>
      {reduxData.length&&<Bubble data={Data} />}
    </div>
  )
}

export default BubbleChart