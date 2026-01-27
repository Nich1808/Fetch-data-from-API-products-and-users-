import UserCard from "@/components/i-tech-cards/user-card";
import { UserResponse } from "@/lib/type/users";

const BASE_URL = process.env.NEXT_PUBLIC_API

export default async function UserPage(){
    const response = await fetch(`${BASE_URL}/api/v1/users`)
    const users: UserResponse[] = await response.json();


    return(
       <main className="container mx-auto">
                  <section className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {
                          users.map((user, index) =>
                              <UserCard
                              key={index}
                              email={user.email}
                              password={user.password}
                              name={user.name}
                              role={user.role}
                              avatar={user.avatar}
                              creationAt={user.creationAt}
                              updatedAt={user.updatedAt}
                               />
                          )
      
                      }
                      
      
      
                     
                  </section>
              </main>
    )
}