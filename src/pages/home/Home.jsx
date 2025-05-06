import React, { useEffect, useState } from "react";
import "./home.css";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Edges, Octahedron } from "@react-three/drei";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { GiAutoRepair } from "react-icons/gi";
import { GrPaint } from "react-icons/gr";
import { GiWorld } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";
import { SiChainguard } from "react-icons/si";
import whatwedoJson from "../../assets/images/whatwedo.json";
import whatwedoJson2 from "../../assets/images/what2.json";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Lottie from "lottie-react";
import { FaAnglesUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import OurWorks from "../OurWorks";

const RotatingHexagon = () => {


  const hexRef = useRef();

  useFrame(() => {
    if (hexRef.current) {
      hexRef.current.rotation.y += 0.005;
      hexRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh ref={hexRef}>
      <Octahedron args={[10, 2]}>
        <meshBasicMaterial wireframe color="black" />
        <Edges color="gray" lineWidth={1.2} />
      </Octahedron>
    </mesh>
  );
};

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const [scrollToTop, setScrollToTop] = useState(false); // Başlangıçta inherit olacak
  
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setScrollToTop(true);
        } else {
          setScrollToTop(false)
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const goUp = () => {
      window.scrollTo(0,0)
    }


  return (
    <section className="home">
      <div className="home-first">
        <div className="left">
          <Canvas
            camera={{ position: [0, 0, 15], fov: 90 }}
            style={{ background: "#000", width: "300px", height: "300px" }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <RotatingHexagon />
          </Canvas>

          <div className="title">
            <h1>
              Designing a Better <br />
              World Today
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A harum{" "}
              <br />
              sunt ab in necessitatibus magnam, at error ex odio sapiente?
            </p>

            <div className="buttons">
              <Link to={"/services"} className="buton bir">
                <p>What We Do</p>
                <MdOutlineDoubleArrow className="buton-icon" />
              </Link>
              <div className="buton iki">
                <p>View Works</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <Canvas
            camera={{ position: [0, 0, 15], fov: 90 }}
            style={{ background: "#000", width: "100%", height: "90vh" }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <RotatingHexagon />
          </Canvas>
        </div>
      </div>

      <div className="about-us" id="whatwedo">
        <div className="about-us-in">
          <div className="about-left">
            <h1>WHAT WE DO</h1>

            <div className="texts">
              <div className="text-box">
                <div className="title">
                  <IoIosRocket className="text-icon" />
                  <p>Web & Mobile Development</p>
                </div>
                <p className="text">
                  Modern, hızlı ve kullanıcı dostu web siteleri ve mobil
                  uygulamalar geliştiriyoruz. İhtiyacınıza özel çözümler sunarak
                  işletmenizi dijital dünyada güçlendiriyoruz.
                </p>
              </div>

              <div className="text-box">
                <div className="title">
                  <GiAutoRepair className="text-icon" />
                  <p>Custom Software Solutions</p>
                </div>
                <p className="text">
                  İş süreçlerinizi optimize etmek için özel yazılım çözümleri
                  sunuyoruz. API entegrasyonları, yönetim panelleri ve otomasyon
                  sistemleri geliştiriyoruz..
                </p>
              </div>

              <div className="text-box">
                <div className="title">
                  <GrPaint className="text-icon" />
                  <p>UI/UX Design</p>
                </div>
                <p className="text">
                  Kullanıcı deneyimini ön planda tutarak modern, işlevsel ve
                  estetik arayüzler tasarlıyoruz. Markanıza uygun, sezgisel ve
                  etkileyici tasarımlar oluşturuyoruz.
                </p>
              </div>

              <div className="text-box">
                <div className="title">
                  <GiWorld className="text-icon" />
                  <p>SEO & Digital Marketing</p>
                </div>
                <p className="text">
                  Web sitenizin Google'da üst sıralarda yer almasını sağlamak
                  için SEO optimizasyonu yapıyoruz. Dijital pazarlama
                  stratejileriyle hedef kitlenize ulaşmanıza yardımcı oluyoruz.
                </p>
              </div>

              <div className="text-box">
                <div className="title">
                  <FaCloud className="text-icon" />
                  <p>Cloud & Backend Development</p>
                </div>
                <p className="text">
                  Güvenli, ölçeklenebilir ve yüksek performanslı backend
                  çözümleri geliştiriyoruz. Node.js ve MongoDB ile güçlü API’ler
                  oluşturuyor, AWS ve Firebase gibi bulut servisleriyle
                  projelerinizi destekliyoruz.
                </p>
              </div>

              <div className="text-box">
                <div className="title">
                  <SiChainguard className="text-icon" />
                  <p>API & Third-Party Integrations</p>
                </div>
                <p className="text">
                  Ödeme sistemleri, harita servisleri, sosyal medya ve diğer
                  üçüncü taraf servislerle entegrasyonlar yaparak projelerinizi
                  daha güçlü hale getiriyoruz.
                </p>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div style={{ width: 400, height: 300 }}>
              <Lottie animationData={whatwedoJson} loop={true} />
            </div>

            <div style={{ width: 400, height: 300 }}>
              <Lottie animationData={whatwedoJson2} loop={true} />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="our-works" id="our-works">
        <div className="our-works-in">
          <h1>OUR WORKS</h1>
          <div className="works">
            <a href="#">MOBILINGO</a>
            <a href="#">DOCUMOOD</a>
            <a href="#">MANATRIX</a>
            <a href="#">COSHGUNUN SAYT</a>
            <a href="#">DAYIOGLU SAYT</a>
            <a href="#">BUTASCARF</a>
          </div>
        </div>
      </div> */}

      <OurWorks />

      <div className="our-team">
        <div className="our-team-in">
          <div className="team-left">
            <h1>
              MEET <br />
              OUR TEAM
            </h1>

            <p>
              We are talented individuals who are passionate about bringing
              ideas to life. With a diverse range of backgrounds and skill sets,
              we collaborate to produce effective solutions for our clients.
            </p>

            <p>
              Together, our creative team is committed to delivering impactful
              work that exceeds expectations.
            </p>

            <p className="last">
              We <b>delivering </b><br />exceptional <b>results.</b>
            </p>
          </div>

          <div className="team-right">
            <div className="top">
              <div className="person-box one">
                <div className="showed">
                <h5>Elmir Sultan</h5>
                <p>WEB & MOBILE DEVELOPER</p>
                <div className="icons">
                  <FaInstagram className="social-icon" />
                  <FaLinkedin className="social-icon" />
                  <FaFacebookSquare className="social-icon"/>
                </div>
                </div>
              </div>

              <div className="person-box one">
                <div className="showed">
                <h5>Burxan Hasanli</h5>
                <p>WEB & MOBILE DEVELOPER</p>
                <div className="icons">
                  <FaInstagram className="social-icon" />
                  <FaLinkedin className="social-icon" />
                  <FaFacebookSquare className="social-icon"/>
                </div>
                </div>
              </div>
            </div>
            <div className="bottom">
            <div className="person-box one">
                <div className="showed">
                <h5>Elmir Sultan</h5>
                <p>WEB & MOBILE DEVELOPER</p>
                <div className="icons">
                  <FaInstagram className="social-icon" />
                  <FaLinkedin className="social-icon" />
                  <FaFacebookSquare className="social-icon"/>
                </div>
                </div>
              </div>

              <div className="person-box one">
                <div className="showed">
                <h5>Elmir Sultan</h5>
                <p>WEB & MOBILE DEVELOPER</p>
                <div className="icons">
                  <FaInstagram className="social-icon" />
                  <FaLinkedin className="social-icon" />
                  <FaFacebookSquare className="social-icon"/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
        {
          scrollToTop && (
        <div className="scrollBox" onClick={goUp}>
          <FaAnglesUp className="scroll-icon" />
          <p>Go Up</p>
        </div>
          )
        }
     
    </section>
  );
}
