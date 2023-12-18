"use client"

import { Toaster } from "react-hot-toast"

const ToastProvider = () => {
    return <Toaster toastOptions={{ duration: 4000 }} />
}

export default ToastProvider