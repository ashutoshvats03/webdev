"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"
function sessionWrapper({ children }) {
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    )
}

export default sessionWrapper
