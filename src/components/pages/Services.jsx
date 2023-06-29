import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ThemedButton from "../ThemedButton";

const ServicesTitle = styled(Typography)(() => ({
  margin: "auto",
  textAlign: "center",
  fontFamily: "Josefin Sans",
  fontSize: "30px",
  color: "#6D6D6D",
}));

const StyledParagraph = styled(Typography)(() => ({
  fontFamily: "Roboto",
  fontSize: "18px",
}));

function Services() {
  return (
    <div>
      <ServicesTitle sx={{ pt: 10, pb: 7 }}>Why Steampunk?</ServicesTitle>
      <Grid container spacing={2} s>
        <Grid xs={6} sx={{ ml: "70px" }}>
          <StyledParagraph variant="p">
            Steampunk provides the hardware, educators and infrastructure
            required to run a successful STEM education program
          </StyledParagraph>

          <br />
          <br />

          <StyledParagraph variant="p">
            Whether you're planning a half-day workshop, or a multi-year
            initiative to improve STEM education, we provide course content and
            hardware that that is tailored to your needs.
          </StyledParagraph>
          <Container sx={{ pb: "30px" }}></Container>
          <ThemedButton btnText={"Request a Quote"} />
        </Grid>
        <Grid xs={6}></Grid>
      </Grid>
    </div>
  );
}

export default Services;