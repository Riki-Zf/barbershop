import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Title from "./Components/Title/Title";
import Card from "./Components/Card/Card";
import Heroinfo from "./Components/HeroInfo/Heroinfo";
import Service from "./Components/Service/Service";

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
        <Card />

        <Service>
          <Title
            title={
              <>
                20+ <br />
                LAYANAN <br />
                PREMIUM
              </>
            }
            subTitle="Nikmati pengalaman perawatan premium kami untuk gaya dan kepercayaan diri Anda."
          />
        </Service>
      </div>
    </div>
  );
};

export default App;
