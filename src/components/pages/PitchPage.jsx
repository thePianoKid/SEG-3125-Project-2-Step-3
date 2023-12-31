import React from "react";
import Navbar from "../Navbar";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { properties } from "../../properties";
import ThemedButton from "../ThemedButton";
import { Link } from "react-router-dom";
import service1Image from "../../resources/images/service1-img.jpeg";
import service2Image from "../../resources/images/service2-img.jpeg";
import service3Image from "../../resources/images/service3-img.jpeg";

const SplashPageTitle = styled(Typography)(() => ({
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: properties.style.primary.grey,
}));

const SplashPageBody = styled(Typography)(() => ({
  fontSize: "18px",
  color: properties.style.primary.grey,
}));

function PitchPage(props) {
  const { headerText } = props;

  console.log("titleText: " + properties.services.service1.titleText);

  return (
    <div>
      <Navbar />
      <SplashPageTitle sx={{ pt: 4, ml: 3 }}>{headerText}</SplashPageTitle>
      <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
        Here are the services we suggest for your education centre.
      </SplashPageBody>
      <Grid
        container
        spacing={2}
        style={{ textAlign: "center" }}
      >
        <Grid item xs={4}>
          <SplashPageTitle sx={{ pt: 4, ml: 3 }}>
            {properties.services.service1.titleText}
          </SplashPageTitle>
          <img
            src={service1Image}
            style={{ width: "70%", marginLeft: "25px", borderRadius: "5px" }}
            alt="Service 1"
          />
          <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
            {properties.services.service1.bodyText}
          </SplashPageBody>
          <Link to="/quote?service=service1">
            <ThemedButton sx={{ ml: 3 }} btnText="Get Quote" />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <SplashPageTitle sx={{ pt: 4, ml: 3 }}>
            {properties.services.service2.titleText}
          </SplashPageTitle>
          <img
            src={service2Image}
            style={{ width: "80%", marginLeft: "25px", borderRadius: "5px" }}
            alt="Service 2"
          />
          <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
            {properties.services.service2.bodyText}
          </SplashPageBody>
          <Link to="/quote?service=service2">
            <ThemedButton sx={{ ml: 3 }} btnText="Get Quote" />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <SplashPageTitle sx={{ pt: 4, ml: 3 }}>
            {properties.services.service3.titleText}
          </SplashPageTitle>
          <img
            src={service3Image}
            style={{ width: "80%", marginLeft: "25px", borderRadius: "5px" }}
            alt="Service 3"
          />
          <SplashPageBody sx={{ pt: 2, pb: 4, ml: 3 }}>
            {properties.services.service3.bodyText}
          </SplashPageBody>
          <Link to="/quote?service=service3">
            <ThemedButton sx={{ ml: 3 }} btnText="Get Quote" />
          </Link>
        </Grid>
      </Grid>
      <div style={{ paddingBottom: "50px" }}></div>
    </div>
  );
}

export default PitchPage;
