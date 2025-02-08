"use client"
import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <div><button onClick={() => signOut("google")}>Sign out google</button></div>
        <div><button onClick={() => signOut("github")}>Sign out github</button></div>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <div><button onClick={() => signIn("google")}>Sign in google</button></div>
      <div><button onClick={() => signIn("github")}>Sign in github</button></div>
    </>
  )
}