import { Row } from "react-bootstrap";
import KitapForm from "../components/KitapForm";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const url = "https://clarus-library-api.vercel.app/books";

  const getBilgiler = async () => {
    const res = await axios.get(url);
    console.log(res.data);
  };
useEffect(()=>{
  getBilgiler();
},[])

  return (
    <Row>
      <h1 className="text-center mt-4">TAFAMUS41 LİBRARY</h1>
      <KitapForm />
    </Row>
  );
};

export default Home;
