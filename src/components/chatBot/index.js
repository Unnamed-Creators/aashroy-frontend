import ChatBot from "react-simple-chatbot";
import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#03dffc",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#51d6e8",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const Bot = () => {
  const signedIn = true;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          enableMobileAutoFocus={true}
          enableSmoothScroll={true}
          recognitionEnable={true}
          width={"300px"}
          floating={true}
          steps={[
            {
              id: "1",
              message: "Hey there! What's your good name?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message:
                "Welcome Aboard {previousValue}! How can I help you today?",
              trigger: "4",
            },
            {
              id: "4",
              options: [
                {
                  value: 1,
                  label: "Report Homeless",
                  trigger: signedIn ? "6" : "5",
                },
                {
                  value: 2,
                  label: "Report Crime",
                  trigger: signedIn ? "7" : "5",
                },
                { value: 3, label: "Donate", trigger: signedIn ? "8" : "5" },
                { value: 4, label: "Contact Us", trigger: "9" },
              ],
            },
            {
              id: "5",
              message: "Please sign in first to continue",
              trigger: "15",
            },
            {
              id: "6",
              message: "Thank You for choosing to help. Click below to report.",

              trigger: "12",
            },
            {
              id: "7",
              message: "Thank You for choosing to help. Click below to report.",
              trigger: "13",
            },
            {
              id: "8",
              message: "Thank You for choosing to help. Click below to report.",
              trigger: "14",
            },
            {
              id: "9",
              message:
                "Enter your phone number! We'll call you back at the earliest.",
              trigger: "10",
            },
            {
              id: "10",
              user: true,
              validator: (value) => {
                if (isNaN(value)) {
                  return "Enter a valid number";
                }
                return true;
              },
              trigger: "11",
            },
            {
              id: "11",
              message:
                "Thanks for visiting us! Our customer care executives will reach out to you soon. Have a nice day😉",
              end: true,
            },
            {
              id: "12",
              component: (
                <div>
                  {" "}
                  <Link to="/main" style={{ textDecoration: "none" }}>
                    Report Homeless
                  </Link>{" "}
                </div>
              ),
            },
            {
              id: "13",
              component: (
                <div>
                  {" "}
                  <Link to="/crimereporting" style={{ textDecoration: "none" }}>
                    Report a Crime
                  </Link>{" "}
                </div>
              ),
            },
            {
              id: "14",
              component: (
                <div>
                  {" "}
                  <Link to="/donateui" style={{ textDecoration: "none" }}>
                    Donate
                  </Link>{" "}
                </div>
              ),
            },
            {
              id: "15",
              component: (
                <div>
                  {" "}
                  <Link to="/loginUser" style={{ textDecoration: "none" }}>
                    Sign In
                  </Link>{" "}
                </div>
              ),
              end: true,
            },
          ]}
        />
      </ThemeProvider>
    </div>
  );
};

export default Bot;
