import { useContext } from "react"
import { UserContext } from "../providers/UserProvider"

export const CurrentUser = () => {
    const authUser = useContext(UserContext);

    return (
        <>
            Zalogowano jako: {authUser?.email}
        </>
    )
}