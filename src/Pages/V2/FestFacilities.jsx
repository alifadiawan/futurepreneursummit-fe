import React from 'react';
import logo from '../../assets/Logo-FEST-LIGHT.png'
import bg_slider from '../../assets/bg-slider.png'


export default function FestFacilities() {
  const btnClasses = "block text-white px-8 py-3 rounded-lg font-medium transition-transform transform hover:scale-105 bg-[linear-gradient(172deg,#fd006a_0%,#bc00f5_100%)]";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8 text-white font-['Rubik',sans-serif]"
      style={{
         backgroundImage: `url(${bg_slider})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header id="home" className="w-full max-w-xl mx-auto bg-gray-900 rounded-2xl p-8 shadow-lg">
        <img
          src={logo}
          alt="Festival Logo"
          className="mb-5 w-96 mx-auto rounded-lg"
        />

        <p className="text-white text-lg font-medium">Ayo Ikuti Rangkaian Programnya!</p>
        <div className="space-y-4 mt-6">
          <a
            href="https://futurepreneursummit.com/events/fes-go-world-overseas"
            className={btnClasses}
          >
            INTERNATIONAL PROGRAM
          </a>
          <a
            href="https://linktr.ee/StartupFounderClash"
            target="_blank"
            rel="noopener noreferrer"
            className={btnClasses}
          >
            REGISTRASI STARTUP FOUNDER CLASH
          </a>
          <a
            href="https://futurepreneursummit.com/event-detail/improvement-soft-skill-webinar"
            target="_blank"
            rel="noopener noreferrer"
            className={btnClasses}
          >
            LINK WEBINAR SKILL DEVELOPMENT
          </a>
        </div>

        <p className="text-white text-lg font-medium mt-10">Nikmati Fasilitas dan Program lainnya</p>
        <div className="space-y-4 mt-6">
          <a
            href="https://futurepreneursummit.com/events/bootcamp-soft-skill-batch-1"
            className={btnClasses}
          >
            BOOTCAMP PROGRAM
          </a>
          <a
            href="https://drive.google.com/drive/folders/1Vbt2Gsn_t1zTqz8JS0e7n0w36DCppvQV?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className={btnClasses}
          >
            E-BOOK FUTUREPRENEUR
          </a>
          <a
            href="https://bit.ly/m/FutureEntrepreneurFest2024"
            className={btnClasses}
          >
            GABUNG GRUP FEST
          </a>
        </div>

        <div className="mt-10 pt-5 border-t border-gray-700">
          <p className="text-white text-sm">
            Informasi mengenai Bootcamp Program hanya bisa diakses ketika Hari H Acara
          </p>
        </div>
      </header>
    </div>
  );
}
