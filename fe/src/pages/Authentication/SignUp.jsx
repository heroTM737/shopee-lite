import { useFormik } from "formik";
import * as yup from "yup";
import UserService from "@/services/user.service.js";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            passwordConfirm: ""
        },
        validationSchema: yup.object({
            email: yup.string()
                .required("Required!")
                .email("Invalid email format"),
            password: yup.string()
                .required("Required!")
                .min(8, "Minimum 8 characters"),
            passwordConfirm: yup.string()
                .required("Required!")
                .oneOf([yup.ref("password")], "Password's not match")
        }),
        onSubmit: async values => {
            try {
                await UserService.signUp(values)
                navigate("/sign-in")
            } catch (e) {
                console.log(e)
            }
        }
    })
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div><label>Email</label></div>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <p className={"form-error"}>{formik.errors.email}</p>
                    )}
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div><label>Password</label></div>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p className={"form-error"}>{formik.errors.password}</p>
                    )}
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div><label>Confirm Password</label></div>
                    <input
                        type="password"
                        name="passwordConfirm"
                        value={formik.values.passwordConfirm}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
                        <p className={"form-error"}>{formik.errors.passwordConfirm}</p>
                    )}
                </div>
                <div style={{ marginTop: "10px" }}>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp