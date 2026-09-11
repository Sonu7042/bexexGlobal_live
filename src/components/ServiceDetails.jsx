import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/serviceDetails.css";
import Service1 from "../components/services/Service1.jsx";


const ServiceDetails = () => {

  const [serviceName, setServiceName]=useState("")
  const { id } = useParams();


  useEffect(()=>{
    switch (id) {
      case '1':
        setServiceName("Environment, Health & Safety Solutions")
        break;

      case '2':
        setServiceName("Management Systems and Compliance")
        break;

      case '3':
        setServiceName("Training & Competency Development")
        break;

      case '4':
        setServiceName("Software & Digital Solutions")
        break;

      case '5':
        setServiceName("ESG and Sustainability Services")
        break;

      case '6':
        setServiceName("Quality & Business Excellence")
        break;

      default:
        setServiceName("")

    }

  })









  return (
    <>
      <main className="px-4 md:px-16 lg:px-12">
        {id == 1 ? <Service1 serviceName={serviceName} /> : ""}
        {id == 2 ?  <Service1 serviceName={serviceName} /> : ""}
        {id == 3 ?  <Service1 serviceName={serviceName} /> : ""}
        {id == 4 ?  <Service1 serviceName={serviceName} /> : ""}
        {id == 5 ?  <Service1 serviceName={serviceName} /> : ""}
        {id == 6 ?  <Service1 serviceName={serviceName} /> : ""}
       

      </main>
    </>
  );
};

export default ServiceDetails;
























// useEffect(() => {
//   if (id === "1") {
//     setContent("");
//   } else if (id === "2") {
//     setContent("Under Construction");
//   } else if (id === "3") {
//     setContent("Under Construction");
//   } else if (id === "4") {
//     setContent("Under Construction");
//   } else if (id === "5") {
//     setContent("Under Construction");
//   } else if(id==="6"){
//     setContent("Under Construction");
//   }
//   else{
//       setContent("Under Construction");
//   }
// }, [id]);

{
  /* <div className="flex justify-center items-center h-[80vh] flex-col gap-3 sm:gap-4">

      <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold animate-fade-up text-center">
        Coming Soon
      </h1>

      <p className="text-base sm:text-lg md:text-xl animate-fade text-center">
        Under Construction...
      </p>
</div> */
}

// {
//   data.map((item)=>
//     <div key={item.id}>
//       <img src={item.img} alt="" />
//       <p>{item.des}</p>
//     </div>

//   )
// }
