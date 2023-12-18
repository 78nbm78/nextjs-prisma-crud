const ShowAllUsers = ({ users }: { users: any }) => {
    return (
        <div className="max-w-3xl m-auto mt-10 bg-stone-200 rounded-lg border-2 p-6">
            <ul className="space-y-4">
                {users.length > 0 ? (
                    users.map((user: any) => (
                        <li key={user.id} className="border-b-[1px] border-b-stone-500 last-of-type:border-b-0 pb-2">
                            id: {user.id} &nbsp;|&nbsp; username: {user.username}
                        </li>
                    ))
                ) : (
                    <li>no users found!</li>
                )}
            </ul>
        </div>
    );
}

export default ShowAllUsers;