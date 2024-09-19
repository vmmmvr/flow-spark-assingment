import * as Yup from "yup";

export const UsersLeadsSchema = Yup.object({
  full_name: Yup.string()
    .min(4, "Full Name must be at least 4 characters long")
    .required("Full Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email  is Required"),
    consent: Yup.boolean()
    .required("Please check the consent"),
});

export const UsersBookingsSchema = Yup.object({
  full_name: Yup.string()
    .min(4, "Full Name must be at least 4 characters long")
    .required("Full Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email  is Required"),
  phone_number: Yup.number()
  .min(9, "Phone Number  must be at least 9 characters long")
    .required("Phone Number is Required"),
  note: Yup.string()
    .required("Note is Required"),
  date: Yup.date()
    .required("Date is Required"),
  time: Yup.string()
    .required("Time is Required"),
  consent: Yup.boolean()
    .required("Please check the consent"),
});
