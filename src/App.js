import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  AppBar,
  Toolbar,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import TripOriginRoundedIcon from "@mui/icons-material/TripOriginRounded";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Step0 from "./components/Step0";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const steps = ["KITCHEN LAYOUT", "MEASUREMENTS", "PACKAGE", "GET QUOTE"];

  const handleNext = () => {
    if (selectedCard || activeStep !== 0) {
      setActiveStep((prev) => prev + 1);
    }
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleReset = () => {
    setActiveStep(0);
    setSelectedCard(null);
  };

  function StepIcon({ active, completed }) {
    if (completed) {
      return <CheckCircleIcon sx={{ color: "#5e455a" }} />;
    }
    if (active) {
      return <TripOriginRoundedIcon sx={{ color: "#5e455a" }} />;
    }
    return <TripOriginRoundedIcon sx={{ color: "gray" }} />;
  }

  return (
    <>
      <AppBar
        position="static"
        sx={{ minHeight: 80, backgroundColor: "white" }}
      >
        <Toolbar
          sx={{
            minHeight: 80,
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <a href="https://www.livspace.com/in">
            <img
              src="https://images.livspace-cdn.com/w:1220/h:264/plain/https://d3gq2merok8n5r.cloudfront.net/bumblebee/common/livspace-new-logo-1651660705-3hLxV.png"
              alt="Logo"
              style={{ height: 30, marginRight: 16 }}
            />
          </a>
          <Box sx={{ width: "65%", margin: "auto" }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel
                    StepIconComponent={(props) => (
                      <StepIcon
                        active={index === activeStep}
                        completed={index < activeStep}
                      />
                    )}
                    sx={{ "& .MuiStepLabel-label": { fontSize: "11px" } }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          {activeStep === steps.length ? (
            <Typography sx={{ mt: 2, mb: 1, color: "black" }}>
              Finished
            </Typography>
          ) : (
            <Typography sx={{ mt: 2, mb: 1, color: "black" }}>
              Step {activeStep + 1} / 4
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <div className="container">
        {activeStep === 0 && (
          <Step0
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
        {activeStep === 1 && <Step1 />}
        {activeStep === 2 && <Step2 />}
        {activeStep === 3 && <Step3 />}
        <div className="buttonContainer">
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{
                mr: 1,
                color: "#eb595f",
                "&.Mui-disabled": {
                  color: "#f18b8f",
                },
              }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length ? (
              <Button onClick={handleReset}>Reset</Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={activeStep === 0 && !selectedCard}
                sx={{
                  mt: "-10px",
                  width: "20%",
                  borderRadius: "25px",
                  color: "#fff",
                  backgroundColor: "#eb595f",
                  "&:hover": { backgroundColor: "#d94b52" },
                  "&.Mui-disabled": {
                    backgroundColor: "#f0a1a4",
                    color: "#fff",
                  },
                }}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            )}
          </Box>
        </div>
      </div>
    </>
  );
}

export default App;
