import { useEffect } from "react";
import { observer } from "mobx-react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRootStore } from "./App";
import {
  Button,
  DropdownInputField,
  Icon,
  TextAreaInputField,
  TextInputField,
  useSpacing,
  useTypography,
} from "@surya-digital/leo-reactjs-material-ui";
import { useTranslation } from "react-i18next";
import { DateTime } from "luxon";

export const ComplaintBox = observer((): React.ReactElement => {
  const {
    name,
    setName,
    mail,
    selectedType,
    createdAt,
    setSelectedType,
    setMail,
    complaint,
    setComplaint,
    nameError,
    mailError,
    complaintError,
    users,
    handleSubmit,
  } = useRootStore();

  const spacing = useSpacing();
  const typography = useTypography();
  const { t } = useTranslation();

  useEffect(() => {
    let retrievedName = window.localStorage.getItem("name");
    if (retrievedName) setName(retrievedName);
    let retrievedMail = window.localStorage.getItem("mail");
    if (retrievedMail) setMail(retrievedMail);
    let retrievedComplaint = window.localStorage.getItem("complaint");
    if (retrievedComplaint) setComplaint(retrievedComplaint);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);
  useEffect(() => {
    window.localStorage.setItem("mail", mail);
  }, [mail]);
  useEffect(() => {
    window.localStorage.setItem("complaint", complaint);
  }, [complaint]);

  let dt = DateTime.fromISO(createdAt)
    .setLocale("en-GB")
    .toLocaleString({ month: "long", day: "numeric", year: "numeric" });

  const displayUsers = users.map((user) => (
    <li key={user.name}>
      {dt} | {user.name} | {user.mail} | {user.complaint}
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
      <Stack
        sx={{
          padding: spacing.space3XL,
          alignItems: "center",
          gap: spacing.spaceLG,
          borderStyle: "solid",
          borderColor: "white",
          borderLeftColor: { md: "silver", xs: "white" },
          pl: { md: 16, xs: 2 },
          borderTopColor: { md: "white", xs: "silver" },
        }}
      >
        <Typography
          sx={{
            typography: typography.h4,
          }}
        >
          {t("title")}
        </Typography>
        <Typography
          sx={{
            typography: typography.b2,
            fontStyle: "italic",
            mb: spacing.spaceXL,
          }}
        >
          {t("subTitle")}**
        </Typography>
        <TextInputField
          isRequired
          name={"name"}
          value={name}
          type={"text"}
          onTextChange={(name) => setName(name)}
          label={t("name")}
          maxCharacterLength={16}
          error={nameError}
        />
        <TextInputField
          isRequired
          name={"mail"}
          value={mail}
          type={"text"}
          onTextChange={(mail) => setMail(mail)}
          label={t("email")}
          error={mailError}
        />
        <DropdownInputField
          name={""}
          label={t("type")}
          value={selectedType!}
          options={[
            { name: "Service related", value: "Service related" },
            { name: "Product related", value: "Product related" },
          ]}
          onSelect={(item) => setSelectedType(item.value)}
        />
        <TextAreaInputField
          isRequired
          name={"complaint"}
          value={complaint}
          onTextChange={(complaint) => setComplaint(complaint)}
          label={t("complaint")}
          error={complaintError}
          maxCharacterLength={50}
          numberOfRows={4}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: spacing.spaceXL,
          }}
        >
          <Button
            size={"large"}
            variant={"filled"}
            onClick={() => handleSubmit()}
            label={t("submit")}
            name={"submit-button"}
            icon={<Icon type="chevron-right" color="white" />}
            iconPosition="trailing"
          />
        </Box>
        <Typography sx={{ fontSize: spacing.spaceSM }}>**{t("tnc")}</Typography>
        <h3>{displayUsers.length > 0 ? `${t("tickets")}:` : ""}</h3>
        <Typography>{displayUsers}</Typography>
      </Stack>
    </Container>
  );
});
