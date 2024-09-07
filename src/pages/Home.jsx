import { Row } from "react-bootstrap";
import KitapForm from "../components/KitapForm";
import KitapList from "../components/KitapList";
import React,{ useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const[books,setBooks]=useState([])
  const url = "https://clarus-library-api.vercel.app/books";

  const getBilgiler = async () => {
    try{
    const res = await axios.get(url);
    // console.log(res.data);
    setBooks(res.data)
  }catch(error){
    console.error("Error fetching books:", error);
  }}
useEffect(()=>{
  getBilgiler();
},[])

const deleteKitap = async(id) => {
try {await axios.delete(`${url}/${id}`)
getBilgiler();}
catch (error){
  console.error("Error deleting book:", error);
}
}

const postKitap=async(yeniKitap)=>{
  try {
    await axios.post(url, yeniKitap);
    getBilgiler();
  } catch (error) {
    console.error("Error adding book:", error);
  }
  }
  
  return (
    <Row>
      <h1 className="text-center mt-4">TAFAMUS41 LİBRARY</h1>
      <KitapForm postKitap={postKitap}/>
      <KitapList books={books} deleteKitap={deleteKitap}/>
    </Row>
  );
};

export default Home;
