import { useFormik } from "formik";
import * as yup from "yup";
import UserService from "@/services/user.service.js";
import { AUTH_TOKEN } from "@/utils/constants.js";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string()
                .required("Required!")
                .email("Invalid email format"),
            password: yup.string()
                .required("Required!")
                .min(8, "Minimum 8 characters")
        }),
        onSubmit: async values => {
            const result = await UserService.signIn({
                identity: values.email,
                password: values.password
            })
            localStorage.setItem(AUTH_TOKEN, result.data.token)
            navigate("/")
        }
    })
    return (
        <div>
            <h1>Sign In</h1>
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
                    <button type="submit">Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn