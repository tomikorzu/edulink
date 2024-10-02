import "../assets/styles/home.css";
import {useEffect} from 'react'

const Home = () => {
  useEffect(() => {
    document.title = "Home - EduLink";
  });
  return <h1>Home</h1>;
};

export default Home;
