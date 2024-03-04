import { types } from "mobx-state-tree";
import { FormEvent } from "react";

const validateMail = (str: string): boolean => {
  let atIndex = str.indexOf("@");
  let dotIndex = str.lastIndexOf(".");
  return atIndex > 0 && dotIndex > atIndex;
};

const User = types.model({
  name: types.string,
  mail: types.string,
  complaint: types.string,
});

export const RootStore = types
  .model({
    name: types.string,
    mail: types.string,
    // phone: types.string,
    complaint: types.string,
    nameError: types.boolean,
    mailError: types.boolean,
    // phoneError: types.boolean,
    complaintError: types.boolean,
    usersArr: types.array(User),
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
    // setPhone(value: string) {
    //   self.phone = value;
    //   if (value.length !== 10 && value.length !== 0 && isNaN(parseInt(value)))
    //     this.setPhoneError(true);
    //   else this.setPhoneError(false);
    // },
    setComplaint(value: string) {
      self.complaint = value;
      if (value.length > 50) this.setComplaintError(true);
      else this.setComplaintError(false);
    },
    setNameError(value: boolean) {
      self.nameError = value;
    },
    setMailError(value: boolean) {
      self.mailError = value;
    },
    // setPhoneError(value: boolean) {
    //   self.phoneError = value;
    // },
    setComplaintError(value: boolean) {
      self.complaintError = value;
    },
    setUsersArr(value: { name: string; mail: string; complaint: string }) {
      self.usersArr.push(value);
    },
    handleSubmit() {
      // e.preventDefault();

      // setNameError(false);
      // setMailError(false);
      // setComplaintError(false);

      console.log("handleSubmit called");

      if (self.name === "") this.setNameError(true);
      if (self.mail === "") this.setMailError(true);
      if (self.complaint === "" || self.complaint.length > 40)
        this.setComplaintError(true);
      // if (phone.length != 10) setPhoneError(true);

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
        //saving data logic
        let name = self.name;
        let mail = self.mail;
        let complaint = self.complaint;

        this.setUsersArr({ name, mail, complaint });

        this.setName("");
        this.setMail("");
        // this.setPhone("");
        this.setComplaint("");
      }
    },
  }));

// let _store: {
//   name: string;
//   mail: string;
//   phone: string;
//   complaint: string;
//   setName(value: string): void;
//   setMail(value: string): void;
//   setPhone(value: string): void;
//   setComplaint(value: string): void;
// };

// export const useStore = () => {
//   const store = useMemo(() => {
//     if (!_store)
//       _store = RootStore.create({
//         name: "",
//         mail: "",
//         phone: "",
//         complaint: "",
//       });
//     return _store;
//   }, []);
//   return store;
// };

// autorun(() => {
//   window.localStorage.setItem("name", _store.name);
// });
// autorun(() => {
//   window.localStorage.setItem("mail", _store.mail);
// });
// autorun(() => {
//   window.localStorage.setItem("phone", _store.phone);
// });
// autorun(() => {
//   window.localStorage.setItem("complaint", _store.complaint);
// });
