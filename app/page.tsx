import AddNewUser from "@/components/AddNewUser";
import ShowAllUsers from "@/components/ShowAllUsers";
import { getUsersData } from "@/lib/getUsersData"

export default async function Home() {
  const users = await getUsersData();

  return (
    <>
      <AddNewUser />
      <ShowAllUsers users={users.data} />
    </>
  )
}
