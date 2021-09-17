import LinearStepper from "../Stepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

function MainUic() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} >
          <LinearStepper />
        </Paper>
      </Container>
    </>
  );
}

export default MainUic;
