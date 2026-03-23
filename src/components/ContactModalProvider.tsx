"use client"

import { createContext, useContext, useState, useCallback } from 'react'
import ContactModal from './ContactModal'

const ContactModalContext = createContext<{ openContactModal: () => void }>({
    openContactModal: () => {},
})

export function useContactModal() {
    return useContext(ContactModalContext)
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)
    const openContactModal = useCallback(() => setOpen(true), [])

    return (
        <ContactModalContext.Provider value={{ openContactModal }}>
            {children}
            <ContactModal open={open} onOpenChange={setOpen} />
        </ContactModalContext.Provider>
    )
}
