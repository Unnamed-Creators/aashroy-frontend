import ReportingForm from "../ReportingForm";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";

function MainUic() {
  return (
    <>
      <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} >
          <ReportingForm />
        </Paper>
      </Container>
    </>
  );
}

export default MainUic;
