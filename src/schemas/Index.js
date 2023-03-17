import * as Yup from "yup";

let pkNum =/^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
// let emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailregex = /(\W|^)[\w.+\-]*@gmail\.com(\W|$)/;
export const contactFormSchema = Yup.object({
    name :Yup.string().min(3).max(20).required("Please enter your first name"),
    last :Yup.string().min(3).max(20).required("Please enter your last name"),
    email: Yup.string().email().matches(emailregex,"email must be a valid email").required("Please enter your email"),
    phone: Yup.string().matches(pkNum, "Invalid phone.").required("Please enter your  number"),
    subject: Yup.string().min(3).max(40).required("Please enter your subject"),
    message:Yup.string().min(5).max(200).required("Please enter your Message"),
})
// .matches(emailregex,"Invalid email")