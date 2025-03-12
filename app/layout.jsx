import { useState } from 'react'
import { useToast, ToastContainer } from '@/components/ui/toast'

export default function RootLayout({ children }) {
  const { toasts, show, close } = useToast()

  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer toasts={toasts} onClose={close} />
      </body>
    </html>
  )
} 