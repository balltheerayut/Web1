import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import myImage from "../assets/B.jpg"; // ใส่รูป B.jpg

// นำเข้ารูปภาพสำหรับทักษะต่าง ๆ
import javaLogo from "../assets/java.jpg";
import cssLogo from "../assets/css.jpg";
import cppLogo from "../assets/cpp.jpg";
import pythonLogo from "../assets/python.jpg";
import photoshopLogo from "../assets/photoshop.jpg";
import sonyVegasLogo from "../assets/sv.jpg";

// นำเข้าไฟล์ gif และ mp3
import oiaGif from "../assets/oia.gif";
import oiaSound from "../assets/oiaa.mp3";

// นำเข้าไฟล์ PDF
import CV from "../assets/re.pdf";
import Transcript from "../assets/trs.pdf";

const About = () => {
  // ฟังก์ชันสำหรับเล่นเสียง
  const playSound = () => {
    const audio = new Audio(oiaSound);
    audio.play();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        height: "100vh",
        textAlign: "left",
        paddingLeft: "800px",
      }}
    >
      {/* รูปภาพ */}
      <img
        src={myImage}
        alt="My Profile"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "20px",
          objectFit: "cover",
          marginBottom: "20px",
        }}
      />

      {/* ปุ่มสำหรับเปิด PDF */}
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
        <a href={CV} target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-blue-400 to-green-500 md:inline text-white px-4 py-2
            focus:outline-none hover:bg-blue-400 hover:shadow-[0_0_40px_rgb(96,165,250,0.9)]
            rounded-full text-lg">
            Resume
          </button>
        </a>

        <a href={Transcript} target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-purple-400 to-red-500 md:inline text-white px-4 py-2
            focus:outline-none hover:bg-purple-400 hover:shadow-[0_0_40px_rgb(192,132,252,0.9)]
            rounded-full text-lg">
            Transcript
          </button>
        </a>
      </Box>

      {/* ข้อความใต้ปุ่ม */}
      <Typography variant="h2" sx={{ mt: 4, color: "#666" }}>
        My Skill
      </Typography>

      {/* แสดงรูปภาพทักษะต่าง ๆ */}
      <Grid container spacing={4} sx={{ justifyContent: "center", mt: 3 }}>
        <Grid item>
          <img src={javaLogo} alt="Java" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item>
          <img src={cssLogo} alt="CSS" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item>
          <img src={cppLogo} alt="C++" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item>
          <img src={pythonLogo} alt="Python" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item>
          <img src={photoshopLogo} alt="Photoshop" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item>
          <img src={sonyVegasLogo} alt="Sony Vegas" style={{ width: "50px", height: "50px" }} />
        </Grid>
      </Grid>

      {/* GIF ที่มุมขวาล่าง */}
      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
        }}
        onClick={playSound}
      >
        <img src={oiaGif} alt="OIA GIF" style={{ width: "150px", height: "150px" }} />
      </Box>
    </Box>
  );
};

export default About;
