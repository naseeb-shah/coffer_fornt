import React, { useEffect, useState } from "react";
import axios from "axios";
import { Scatter } from "react-chartjs-2";
import { UseDispatch,useDispatch,useSelector } from "react-redux";

const ScatterChart = () => {
  
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
          borderColor: "rgb(255, 99, 132)",
          data: reduxData?.map((el)=>{
              return  el.intensity 
            }),
        },
        {
          label: "Based on relevance",
          backgroundColor:"blue",
          borderColor: "rgb(75, 192, 192)",
          data: reduxData?.map((el)=>{
              return  el.relevance 
            }),
        },
        {
          label: "Based on likelihood",
          backgroundColor:"red",
          borderColor: "rgb(201, 203, 207)",
          data: reduxData?.map((el)=>{
              return  el.likelihood 
            }),
        },
      ],
    };
  return (
    <div
      style={{
        
        
        margin: "auto",
        padding: "0px 50px 0px 50px",
        borderRadius: "5%",
        marginTop: "50px",
        width:'80%'
      }}
    >
    <h1 style={{color:"black"}}>Scatter Chart Presentation</h1>
 <Scatter data={Data} />
</div>
  )
}

export default ScatterChart