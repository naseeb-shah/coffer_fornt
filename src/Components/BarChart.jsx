import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import { UseDispatch,useDispatch,useSelector } from "react-redux";
import { dataSuccess, loading } from "../redux/action";

const BarChart = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const dispatchReduxAction= useDispatch()
  const reduxData= useSelector((state)=>state.data)
  

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]); // Fetch data whenever currentPage changes

  const getData = (page) => {
    dispatchReduxAction(loading())
    axios
      .get(`https://coffer-backend.vercel.app/data?page=${currentPage}&limit=10`)
      .then((res) => {
        
        setData(res.data);
        dispatchReduxAction(dataSuccess(res.data))
        setTotalPages(10); // Assuming total pages is always 10
        
      })
      .catch((err) => console.log(err));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const labels = reduxData?.map((el) => el.source.slice(0,20));
  
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
    <div
      style={{
        padding: "0px 50px 0px 50px",
        borderRadius: "5%",
        margin: "auto",
        marginTop: "50px",
        
      }}
    >
      <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous 
          </button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next 
          </button>
        </div>
      <div>
        <h1 style={{ color: "black", width: "40%" }}>
          Bar Chart Presentation
        </h1>
        {data?.length && <Bar data={chartData} />}
      </div>
      <div>
        <h1 style={{ color: "black", width: "40%" }}>
          Line Chart Presentation
        </h1>
        
        {data?.length && <Line data={chartData} />}
      </div>
    </div>
  );
};

export default BarChart;
