"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"

const SRMSchema = z.object({
	password: z.string().min(8),
})

const PageLocker = ({ children }) => {
	const [showPassword, setShowPassword] = useState(false)
	const [locked, setLocked] = useState(true)

	const token = typeof window !== 'undefined' ? localStorage.getItem("TM") : null

	const form = useForm({
		resolver: zodResolver(SRMSchema),
	})

	const handleVerify = values => {
		if (values.password === process.env.NEXT_PUBLIC_CRM_PASSWORD) {
			setLocked(false)
			toast.success("Logged in successfully")
			localStorage.setItem("TM", values.password)
		} else {
			toast.error("Invalid password")
		}
	}

	const togglePasswordVisibility = () => {
		setShowPassword(prev => !prev)
	}

	useEffect(() => {
		if (token) {
			handleVerify({ password: token })
		}
	}, [token])

	return (
		<>
			{locked ? (
				<div className="flex h-[calc(100vh-80px)] w-full items-center justify-center">
					<Card className="mx-auto h-fit w-full max-w-sm">
						<CardHeader>
							<CardTitle>Enter CRM Password</CardTitle>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(handleVerify)}
									className="space-y-4"
								>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<div className="relative flex h-full w-full flex-col">
														<Input
															type={
																showPassword
																	? "text"
																	: "password"
															}
															autoComplete="current-password"
															placeholder="******"
															{...field}
															value={
																field.value ||
																""
															}
														/>
														<button
															type="button"
															onClick={
																togglePasswordVisibility
															}
															className="absolute inset-y-0 right-0 flex items-center pr-3"
															tabIndex={-1}
														>
															{showPassword ? (
																<EyeOff className="h-5 w-5 text-gray-400" />
															) : (
																<Eye className="h-5 w-5 text-gray-400" />
															)}
														</button>
													</div>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<Button
										type="submit"
										className="w-full"
									>
										Login
									</Button>
								</form>
							</Form>
						</CardContent>
					</Card>
				</div>
			) : (
				<div className="flex h-screen w-screen divide-x divide-neutral-200 overflow-hidden bg-neutral-50 text-gray-900 transition-all duration-500 ease-in-out dark:divide-neutral-800 dark:bg-neutral-950 dark:text-gray-50">
					<div className="h-full flex w-full overflow-y-auto scrollbar">
						{children}
					</div>
				</div>
			)}
		</>
	)
}

export default PageLocker
