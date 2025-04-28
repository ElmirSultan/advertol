import React, { useEffect } from 'react'
import "./home/home.css"
import Lottie from "lottie-react";
import { IoIosRocket } from "react-icons/io";
import { GiAutoRepair } from "react-icons/gi";
import { GrPaint } from "react-icons/gr";
import { GiWorld } from "react-icons/gi";
import { FaCloud } from "react-icons/fa";
import { SiChainguard } from "react-icons/si";
import whatwedoJson from "../assets/images/whatwedo.json";
import whatwedoJson2 from "../assets/images/what2.json";

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="about-us">
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
  )
}

export default Services