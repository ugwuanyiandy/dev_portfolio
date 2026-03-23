"use client"

import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from './ui/dialog'
import { Button } from './ui/button'

interface ContactModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

type Fields = {
    name: string
    email: string
    budget: string
    service: string
    description: string
}

type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(fields: Fields): Errors {
    const errors: Errors = {}

    if (!fields.name.trim()) {
        errors.name = 'Name is required.'
    } else if (fields.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters.'
    }

    if (!fields.email.trim()) {
        errors.email = 'Email is required.'
    } else if (!EMAIL_RE.test(fields.email.trim())) {
        errors.email = 'Enter a valid email address.'
    }

    if (!fields.budget) {
        errors.budget = 'Please select a budget range.'
    }

    if (!fields.service) {
        errors.service = 'Please select a service.'
    }

    if (!fields.description.trim()) {
        errors.description = 'Description is required.'
    } else if (fields.description.trim().length < 20) {
        errors.description = 'Please describe your project in at least 20 characters.'
    }

    return errors
}

const EMPTY: Fields = { name: '', email: '', budget: '', service: '', description: '' }

const inputClass = (error?: string) =>
    `w-full px-4 py-2.5 rounded-lg border text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-shadow ${
        error
            ? 'border-red-400 dark:border-red-500 focus:ring-red-300 dark:focus:ring-red-500/30'
            : 'border-gray-200 dark:border-gray-700 focus:ring-gray-900 dark:focus:ring-white/20'
    }`

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
    const [fields, setFields] = useState<Fields>(EMPTY)
    const [errors, setErrors] = useState<Errors>({})
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const set = (key: keyof Fields) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFields((prev) => ({ ...prev, [key]: e.target.value }))
        if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errs = validate(fields)
        if (Object.keys(errs).length > 0) {
            setErrors(errs)
            return
        }

        setStatus('loading')
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fields),
        })
        if (res.ok) {
            setStatus('success')
            setFields(EMPTY)
        } else {
            setStatus('error')
        }
    }

    const handleOpenChange = (val: boolean) => {
        onOpenChange(val)
        if (!val) {
            setTimeout(() => {
                setFields(EMPTY)
                setErrors({})
                setStatus('idle')
            }, 300)
        }
    }

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="max-w-[480px] rounded-2xl p-8 bg-white dark:bg-gray-900 border-none shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                        Start a project
                    </DialogTitle>
                    <DialogDescription className="text-gray-500 dark:text-gray-400 text-sm">
                        Tell me about your project and I'll get back to you shortly.
                    </DialogDescription>
                </DialogHeader>

                {status === 'success' ? (
                    <div className="py-8 text-center space-y-2">
                        <p className="text-2xl">👋</p>
                        <p className="font-semibold text-gray-900 dark:text-white">Message sent!</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            I'll be in touch soon.
                        </p>
                    </div>
                ) : (
                    <form className="space-y-4 mt-1" onSubmit={handleSubmit} noValidate>
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your name"
                                value={fields.name}
                                onChange={set('name')}
                                className={inputClass(errors.name)}
                            />
                            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={fields.email}
                                onChange={set('email')}
                                className={inputClass(errors.email)}
                            />
                            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>

                        {/* Budget & Service row */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Budget
                                </label>
                                <select
                                    id="budget"
                                    value={fields.budget}
                                    onChange={set('budget')}
                                    className={inputClass(errors.budget)}
                                >
                                    <option value="" disabled>Select range</option>
                                    <option value="$1k – $5k">$1k – $5k</option>
                                    <option value="$5k – $10k">$5k – $10k</option>
                                    <option value="$10k – $25k">$10k – $25k</option>
                                    <option value="$25k+">$25k+</option>
                                </select>
                                {errors.budget && <p className="mt-1 text-xs text-red-500">{errors.budget}</p>}
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Service
                                </label>
                                <select
                                    id="service"
                                    value={fields.service}
                                    onChange={set('service')}
                                    className={inputClass(errors.service)}
                                >
                                    <option value="" disabled>Select service</option>
                                    <option value="Web Design">Web Design</option>
                                    <option value="Frontend Development">Frontend Development</option>
                                    <option value="Full Product Design">Full Product Design</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service}</p>}
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows={4}
                                placeholder="Tell me about your project..."
                                value={fields.description}
                                onChange={set('description')}
                                className={inputClass(errors.description)}
                                style={{ resize: 'none' }}
                            />
                            {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description}</p>}
                        </div>

                        {status === 'error' && (
                            <p className="text-xs text-red-500 text-center">
                                Something went wrong. Please try again or email me directly.
                            </p>
                        )}

                        <Button
                            type="submit"
                            size="lg"
                            disabled={status === 'loading'}
                            className="w-full rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 py-3 text-sm font-medium transition-colors disabled:opacity-60"
                        >
                            {status === 'loading' ? 'Sending…' : 'Send message'}
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    )
}
