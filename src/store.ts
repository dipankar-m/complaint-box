import { types } from "mobx-state-tree";

const validateMail = (str: string): boolean => {
  let atIndex = str.indexOf("@");
  let dotIndex = str.lastIndexOf(".");
  return atIndex > 0 && dotIndex > atIndex;
};

const User = types.model({
  name: types.maybe(types.string),
  mail: types.maybe(types.string),
  complaint: types.maybe(types.string),
  selectedType: types.maybe(
    types.enumeration(["Service related", "Product related"])
  ),
  createdAt: types.maybe(types.Date),
});

export const RootStore = types
  .model({
    name: types.maybe(types.string),
    mail: types.maybe(types.string),
    complaint: types.maybe(types.string),
    selectedType: types.maybe(
      types.enumeration(["Service related", "Product related"])
    ),
    createdAt: types.maybe(types.Date),
    nameError: types.optional(types.boolean, false),
    mailError: types.optional(types.boolean, false),
    complaintError: types.optional(types.boolean, false),
    users: types.array(User),
  })
  .actions((self) => ({
    setName(value: string | undefined) {
      self.name = value;
      if (value && value.length > 16) this.setNameError(true);
      else this.setNameError(false);
    },
    setMail(value: string | undefined) {
      self.mail = value;
      if (value && !validateMail(value)) this.setMailError(true);
      else this.setMailError(false);
    },

    setComplaint(value: string | undefined) {
      self.complaint = value;
      if (value && value.length > 50) this.setComplaintError(true);
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
    setSelectedType(value: string | undefined) {
      self.selectedType = value;
    },
    setUsers(value: {
      name: string;
      mail: string;
      complaint: string;
      selectedType: string | undefined;
      createdAt: Date | undefined;
    }) {
      self.users.push(value);
    },
    handleSubmit() {
      if (!self.name) this.setNameError(true);
      if (!self.mail) this.setMailError(true);
      if (!self.complaint) this.setComplaintError(true);

      if (!self.nameError && !self.mailError && !self.complaintError) {
        alert(
          `Complaint registered successfully. It will be resolved soon by our correspondent.`
        );

        let dt = new Date(Date.now());
        this.setDate(dt);

        let name = self.name!;
        let mail = self.mail!;
        let complaint = self.complaint!;
        let selectedType = self.selectedType;
        let createdAt = self.createdAt;

        this.setUsers({ name, mail, complaint, selectedType, createdAt });

        this.setName(undefined);
        this.setMail(undefined);
        this.setComplaint(undefined);
      }
    },
  }));
