import { useEffect } from "react";
import { observer } from "mobx-react";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useRootStore } from "./App";
import { Button, Icon } from "@surya-digital/leo-reactjs-material-ui";
// import { useStore } from "./store";

export const ComplaintBox = observer((): React.ReactElement => {
  const {
    name,
    setName,
    mail,
    setMail,
    complaint,
    setComplaint,
    nameError,
    mailError,
    complaintError,
    usersArr,
    handleSubmit,
  } = useRootStore();
  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [complaint, setComplaint] = useState("");
  // const [nameError, setNameError] = useState(false);
  // const [mailError, setMailError] = useState(false);
  // const [complaintError, setComplaintError] = useState(false);

  useEffect(() => {
    let retrievedName = window.localStorage.getItem("name");
    if (retrievedName) setName(retrievedName);
    let retrievedMail = window.localStorage.getItem("mail");
    if (retrievedMail) setMail(retrievedMail);
    // let retrievedPhone = window.localStorage.getItem("phone");
    // if (retrievedPhone) setPhone(retrievedPhone);
    let retrievedComplaint = window.localStorage.getItem("complaint");
    if (retrievedComplaint) setComplaint(retrievedComplaint);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);
  useEffect(() => {
    window.localStorage.setItem("mail", mail);
  }, [mail]);
  // useEffect(() => {
  //   window.localStorage.setItem("phone", phone);
  // }, [phone]);
  useEffect(() => {
    window.localStorage.setItem("complaint", complaint);
  }, [complaint]);

  let flag = 0;

  const complaintArray = usersArr.map((userComplaint) => (
    <li key={userComplaint.name}>
      {userComplaint.name} | {userComplaint.mail} | {userComplaint.complaint}
    </li>
  ));

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        alignItems: "center",
        flexDirection: { md: "row", xs: "column" },
      }}
    >
      <Box
        component="img"
        alt="Complaint Resolution Image"
        src="https://cdni.iconscout.com/illustration/premium/thumb/complaint-resolution-specialist-handling-customer-complaints-and-working-to-resolve-them-9026220-7342868.png"
      />
      <Box
        sx={{
          padding: "20px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          borderStyle: "solid",
          borderColor: "white",
          borderLeftColor: { md: "silver", xs: "white" },
          pl: { md: 16, xs: 2 },
          borderTopColor: { md: "white", xs: "blue" },
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "medium",
          }}
          variant="h1"
        >
          Complaint Box!
        </Typography>
        <Typography sx={{ fontStyle: "italic" }}>
          Get assured resolution within 24 hours**
        </Typography>
        {/* <form noValidate autoComplete="off" onSubmit={handleSubmit}> */}
        <TextField
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
          value={name}
          id="outlined-basic"
          label="Name"
          variant="standard"
          sx={{ mt: 1 }}
          error={nameError}
          helperText="Enter your name in 16 characters."
        />
        <TextField
          onChange={(e) => setMail(e.target.value)}
          fullWidth
          required
          value={mail}
          id="outlined-basic"
          label="Email"
          variant="standard"
          error={mailError}
        />
        {/* <TextField
          fullWidth
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          id="outlined-basic"
          label="Phone Number"
          variant="standard"
          error={phoneError}
          helperText="Enter your 10 digit phone number"
        /> */}
        <TextField
          onChange={(e) => setComplaint(e.target.value)}
          fullWidth
          required
          value={complaint}
          id="outlined-multiline-static"
          label="Complaint"
          variant="standard"
          multiline
          rows={4}
          error={complaintError}
          helperText="Enter your complaint in 50 characters."
        />
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          {/* <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: "30px",
                fontSize: "18px",
                mt: 4,
                mb: 4,
                fontWeight: "bold",
                textTransform: "none",
              }}
            >
              Submit
            </Button> */}
          <Button
            size={"large"}
            variant={"filled"}
            onClick={() => handleSubmit()}
            label={"Submit"}
            name={""}
            icon={<Icon type="chevron-right" color="white" />}
            iconPosition="trailing"
          />
        </Box>
        {/* </form> */}
        <Typography sx={{ fontSize: "12px" }}>
          **Excluding weekends and public holidays
        </Typography>
        <h3>{complaintArray.length > 0 ? "Active Tickets:" : ""}</h3>
        <Typography>{complaintArray}</Typography>
      </Box>
    </Container>
  );
});
