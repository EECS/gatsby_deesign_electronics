import * as Yup from 'yup'

export default function getYupValidationSchema(values) {
  return Yup.object().shape({
    name: Yup.string()
      .min(2, "A name must be at minimum 2 characters in length.")
      .required('Name is required.'),
    email: Yup.string()
      .email('E-mail is not valid.')
      .required('E-mail is required.'),
    message: Yup.string()
      .required('You have to supply a message.'),
  })
}