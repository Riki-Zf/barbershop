import React from "react";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Title from "./Components/Title/Title";
import Card from "./Components/Card/Card";
import Heroinfo from "./Components/HeroInfo/Heroinfo";

const App = () => {
  return (
    <div>
      <Hero />
      <Navbar />

      <div className="container">
        <Heroinfo />
        <Title
          title={
            <>
              THE BIGGEST <br />
              LUXURIOUS BARBERSHOP <br />
              IN INDONESIA
            </>
          }
          subTitle="Captain barbershop adalah tempat cukur rambut mewah terbesar di Indonesia. Sejak didirikan pada tahun 2015, Captain Barbershop telah berkembang menjadi 100 cabang di Jabodetabek, Karawang, Bandung, Surabaya, Medan dan Karawang. Pada tahun 2024 kami berencana untuk memperluas cabang kami hingga 130 cabang"
        />
      </div>
      <Card />
    </div>
  );
};

export default App;
