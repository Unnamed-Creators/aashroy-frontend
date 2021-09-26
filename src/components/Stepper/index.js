import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  MenuItem,
  Box,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import style from "./Stepper.module.css";
import tick from "./img/tick.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Shelter Location", "Address Proof", "Finalize"];
}
const states = [
  {
    value: "Assam",
    label: "Assam",
  },
  {
    value: "UP",
    label: "UP",
  },
  {
    value: "Delhi",
    label: "Delhi",
  },
  {
    value: "Mumbai",
    label: "Mumbai",
  },
];
const upload = [
  {
    value: "jpg",
    label: "jpg",
  },
  {
    value: "png",
    label: "png",
  },
  {
    value: "mp4",
    label: "mp4",
  },
];

const BasicForm = () => {
  const { control } = useFormContext();
  const [currency, setCurrency] = React.useState("EUR");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <Typography variant="h5" style={{ display: "block", color: "#8676FF" }}>
        Location Details
      </Typography>
      <Controller
        control={control}
        name="NeighbourhoodName"
        render={({ field }) => (
          <TextField
            id="Neighbourhood-Name"
            label="Neighbourhood Name"
            variant="standard"
            placeholder="Enter Your Neighbourhood Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Landmark"
        render={({ field }) => (
          <TextField
            id="Landmark"
            label="Landmark"
            variant="standard"
            placeholder="Enter Landmark"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="CityTown"
        render={({ field }) => (
          <TextField
            id="CityTown"
            label="City Town"
            variant="standard"
            placeholder="Enter Your City/Town"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="District"
        render={({ field }) => (
          <TextField
            id="District"
            label="District/P.O."
            variant="standard"
            placeholder="Enter Your District/P.O."
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="State"
        render={({ field }) => (
          <TextField
            id="filled-select-currency"
            select
            label="Select Your State"
            value={currency}
            onChange={handleChange}
            helperText="Please select your state"
            variant="filled"
            {...field}
          >
            {states.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </>
  );
};
const AdressForm = () => {
  const { control } = useFormContext();
  const [currency, setCurrency] = React.useState("EUR");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <Typography
        variant="h5"
        style={{ display: "block", color: "#8676FF", paddingBottom: "2rem" }}
      >
        Address Proof
      </Typography>
      <Controller
        control={control}
        name="UploadFormat"
        render={({ field }) => (
          <TextField
            id="filled-select-currency"
            select
            label="Upload Format"
            value={currency}
            onChange={handleChange}
            helperText="Please select your upload format"
            variant="filled"
            {...field}
          >
            {upload.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <input
            type="file"
            className={style.file_upload}
            id="exampleFormControlFile1"
            style={{ display: "block", marginTop: "1rem" }}
          />
        )}
      />
    </>
  );
};
const Preview = () => {
  return (
    <>
      <Typography variant="h4" style={{ display: "block" }}>
        Final Preview
      </Typography>
      <Typography
        variant="caption"
        style={{ display: "block", paddingBottom: "1rem" }}
      >
        Please review the information you have filled
      </Typography>
      <Paper variant="Box" style={{ marginBottom: "2rem" }}>
        <Typography variant="h6" style={{ display: "block", padding: "2rem" }}>
          Location Details
        </Typography>
        <Typography
          variant="h7"
          style={{ display: "block", paddingLeft: "2rem" }}
        >
          Neighbourhood Name : Kalitapara
        </Typography>
        <Typography
          variant="h7"
          style={{ display: "block", paddingLeft: "2rem", marginTop: "2rem" }}
        >
          Landmark : Near Ganesh Mandir
        </Typography>
        <Typography
          variant="h7"
          style={{
            display: "block",
            paddingLeft: "2rem",
            marginTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          City/Town : Guwahati
        </Typography>
      </Paper>
    </>
  );
};
function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <AdressForm />;
    case 2:
      return <Preview />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      NeighbourhoodName: "",
      Landmark: "",
      CityTown: "",
      District: "",
      State: "",
      UploadFormat: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  // const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  // const isStepOptional = (step) => {
  //   return step === 1 || step === 2;
  // };

  // const isStepSkipped = (step) => {
  //   return skippedSteps.includes(step);
  // };

  const handleNext = (data) => {
    if (activeStep === steps.length - 1) console.log(data);
    setActiveStep(activeStep + 1);
    // setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep]);
  //   }
  //   setActiveStep(activeStep + 1);
  // };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div style={{ background: "#F2F5F7", padding: "0rem" }}>
      {activeStep <= 2 && (
        <div className={style.text}>
          {" "}
          <Typography
            variant="h4"
            style={{ display: "block", padding: "1rem", color: "#383874" }}
            align="center"
          >
            Data Entry
          </Typography>
          <Typography
            variant="h7"
            style={{
              display: "block",
              padding: "0.5rem",
              color: "rgba(130 ,130 ,130 ,0.5)",
            }}
            align="center"
          >
            Please fill up the required information on homeless people
          </Typography>
        </div>
      )}

      {activeStep === steps.length ? (
        <Box
          style={{ padding: "2rem", paddingBottom: "5rem", marginTop: "3rem" }}
        >
          <Box style={{ marginTop: "2rem" }}>
            <Typography variant="h4" align="center">
              Data Entry Completed Successfully
            </Typography>
            <Typography variant="h6" align="center">
              Thank you for your valuable information
            </Typography>
            <Box align="center">
              <img
                src={tick}
                alt=""
                style={{ width: "12%", marginTop: "3rem" }}
              />
            </Box>
            <div className={style.buttons}>
              <button>
                {" "}
                <Link
                  to="/user"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Return to Home Page
                </Link>{" "}
              </button>
            </div>
          </Box>
        </Box>
      ) : (
        <>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            style={{ background: "#F2F5F7" }}
          >
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};
              {
                /* if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              ></Typography>
            );
          } */
              }
              {
                /* if (isStepSkipped(index)) {
            stepProps.completed = false;
          } */
              }
              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(handleNext)}
              style={{ background: "#F2F5F7" }}
            >
              <div className={style.main_div}>
                <div className={style.left}>{getStepContent(activeStep)}</div>
                {activeStep <= 1 && (
                  <div className={style.right}>
                    {activeStep === 0 && (
                      <div className={style.map}>
                        <iframe
                          width="400"
                          height="300"
                          style={{
                            border: "2px solid #162e87",
                            borderRadius: "5px",
                          }}
                          loading="lazy"
                          allowfullscreen
                          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCLsi2FoJCh9HLJpy6KZ_bJ6AopKC6f22c
    &q=Tokyo+Tower+Beltola+Guwahati"
                        ></iframe>
                      </div>
                    )}
                    {/* {activeStep === 1 && <div className={style.image}>Hello</div>} */}
                  </div>
                )}
              </div>
              <div className={style.buttons}>
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Edit Previous
                </Button>
                {/* {isStepOptional(activeStep) && (
                  <Button
                    className={classes.button}
                    variant="contained"
                    style={{background:" linear-gradient(270deg, #02A4FF 0%, #7D40FF 162.75%)",color:"#fff"}}
                    onClick={handleSkip}
                  >
                    skip
                  </Button>
                )} */}
                <Button
                  className={classes.button}
                  variant="contained"
                  // onClick={handleNext}
                  type="submit"
                  style={{
                    background:
                      " linear-gradient(270deg, #02A4FF 0%, #7D40FF 162.75%)",
                    color: "#fff",
                  }}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
