export const getUsersData = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/users", {
            cache: "no-store"
        })
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.log(error)
    }
}