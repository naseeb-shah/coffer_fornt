import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { UseDispatch,useDispatch,useSelector } from "react-redux";

const DoughnutChart = () => {
  const [data, setData] = useState([]);
 

  const reduxData= useSelector((state)=>state.data)

 

  const labels = reduxData?.map((el) => el.source);
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Based on intensity",
        backgroundColor: "green",
        borderColor: "black",
        data: reduxData?.map((el) => el.intensity),
      },
      {
        label: "Based on relevance",
        backgroundColor: "blue",
        borderColor: "black",
        data: reduxData?.map((el) => el.relevance),
      },
      {
        label: "Based on likelihood",
        backgroundColor: "red",
        borderColor: "black",
        data: reduxData?.map((el) => el.likelihood),
      },
    ],
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h1 style={{ color: "black", width: "80%" }}>
        Doughnut Chart Presentation
      </h1>
      <Doughnut data={chartData} />
      
    </div>
  );
};

export default DoughnutChart;
