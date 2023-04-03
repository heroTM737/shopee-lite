import "./Header.scss"
import { NavLink, useNavigate } from "react-router-dom";
import useUserInfo from "@/hooks/useUserInfo.js";
import UserService from "@/services/user.service.js";

function Header() {
    const navigate = useNavigate();
    const userInfo = useUserInfo()

    const goToSignIn = () => {
        navigate("/sign-in")
    }

    const goToSignUp = () => {
        navigate("/sign-up")
    }

    const signOut = async () => {
        await UserService.signOut()
        location.reload()
    }

    return (
        <div className={"Header"}>
            <div className={"main-container header-inner"}>
                <div>
                    <NavLink to={"/"}>Shopee Lite</NavLink>
                </div>
                {userInfo ? (
                    <div>
                        {userInfo.email}
                        <button
                            onClick={signOut}
                            style={{ marginLeft: "10px" }}
                        >Sign out
                        </button>
                    </div>
                ) : (
                    <div>
                        <button
                            style={{ marginRight: "10px" }}
                            onClick={goToSignUp}
                        >Sign up
                        </button>
                        <button
                            onClick={goToSignIn}
                        >Sign in
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
