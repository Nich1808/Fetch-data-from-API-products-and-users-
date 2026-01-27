import { UserResponse } from "@/lib/type/users";

export default function UserCard({
    email,
    password,
    name,
    role,
    avatar,
    creationAt,
    updatedAt,

}: UserResponse){
   return (
    <div className="max-w-sm rounded-2xl border bg-white p-5 shadow-md">

      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />

        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1 text-sm">
        <p>
          <span className="font-medium">Role:</span> {role}
        </p>

        <p>
          <span className="font-medium">Password:</span> {password}
        </p>

        <p className="text-gray-500">
          Created: {new Date(creationAt).toLocaleString()}
        </p>

        <p className="text-gray-500">
          Updated: {new Date(updatedAt).toLocaleString()}
        </p>
      </div>
    </div>
  )
}