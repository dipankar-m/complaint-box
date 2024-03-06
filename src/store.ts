// import { DateTime } from "luxon";
import { types } from "mobx-state-tree";

const validateMail = (str: string): boolean => {
  let atIndex = str.indexOf("@");
  let dotIndex = str.lastIndexOf(".");
  return atIndex > 0 && dotIndex > atIndex;
};

const User = types.model({
  name: types.string,
  mail: types.string,
  complaint: types.string,
  selectedType: types.maybeNull(
    types.enumeration(["Service related", "Product related"])
  ),
  createdAt: types.maybe(types.Date),
});

export const RootStore = types
  .model({
    name: types.string,
    mail: types.string,
    complaint: types.string,
    selectedType: types.maybeNull(
      types.enumeration(["Service related", "Product related"])
    ),
    createdAt: types.maybe(types.Date),
    nameError: types.boolean,
    mailError: types.boolean,
    complaintError: types.boolean,
    users: types.array(User),
  })
  .actions((self) => ({
    setName(value: string) {
      self.name = value;
      if (value.length > 16) this.setNameError(true);
      else this.setNameError(false);
    },
    setMail(value: string) {
      self.mail = value;
      if (value && !validateMail(value)) this.setMailError(true);
      else this.setMailError(false);
    },

    setComplaint(value: string) {
      self.complaint = value;
      if (value.length > 50) this.setComplaintError(true);
      else this.setComplaintError(false);
    },
    setDate(value: Date) {
      self.createdAt = value;
    },
    setNameError(value: boolean) {
      self.nameError = value;
    },
    setMailError(value: boolean) {
      self.mailError = value;
    },
    setComplaintError(value: boolean) {
      self.complaintError = value;
    },
    setSelectedType(value: string) {
      self.selectedType = value;
    },
    setUsers(value: {
      name: string;
      mail: string;
      complaint: string;
      selectedType: string | null;
      createdAt: Date | undefined;
    }) {
      self.users.push(value);
    },
    handleSubmit() {
      console.log("handleSubmit called");

      if (self.name === "") this.setNameError(true);
      if (self.mail === "") this.setMailError(true);
      if (self.complaint === "" || self.complaint.length > 40)
        this.setComplaintError(true);

      if (
        self.name &&
        self.mail &&
        self.complaint &&
        !self.nameError &&
        !self.mailError &&
        !self.complaintError
      ) {
        alert(
          `Complaint registered successfully. It will be resolved soon by our correspondent.`
        );

        let dt = new Date(Date.now());
        this.setDate(dt);

        let name = self.name;
        let mail = self.mail;
        let complaint = self.complaint;
        let selectedType = self.selectedType;
        let createdAt = self.createdAt;

        this.setUsers({ name, mail, complaint, selectedType, createdAt });

        this.setName("");
        this.setMail("");
        this.setComplaint("");
      }
    },
  }));
