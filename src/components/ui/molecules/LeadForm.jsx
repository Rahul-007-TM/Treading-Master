"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Loading from "../atoms/Loading"
import { Button } from "../button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form"
import { Input } from "../input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select"

const FormSchema = z.object({
    fullname: z
        .string(
            {
                required_error: "Fullname is required.",
                invalid_type_error: "Fullname must be text.",
            })
        .min(2)
        .max(50),
    mobile: z.string({
        required_error: "Mobile no is required.",
        invalid_type_error: "Mobile no must be text.",
    }).min(10, "Mobile no must contain 10 digit."),
    email: z.string({
        required_error: "Email is required.",
        invalid_type_error: "Email must be text.",
    }).email(),
    state: z.string({
        required_error: "Location is required.",
        invalid_type_error: "Location must be text.",
    }).min(1, "Location is required."),
})

const LeadForm = () => {

    const [loading, setLoading] = useState(false)

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullname: "",
            mobile: "",
            email: "",
            state: ""
        }
    })

    const onSubmit = async (values) => {
        console.log(values);
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                    <div className="w-full space-y-2">
                        <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Full Name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mobile"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>Mobile no</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="9988776655"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="email@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>State</FormLabel>
                                    <Select
                                        value={field.value}
                                        onValueChange={field.onChange}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select State" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="max-w-52 max-h-52">
                                            {States.map(state => (
                                                <SelectItem
                                                    key={state.value}
                                                    value={state.value}
                                                >
                                                    {state.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full"
                    >
                        {loading ? <Loading /> : "Submit"}
                    </Button>
                </form>
            </Form>
        </>
    )
}

export default LeadForm

const States = [
    { label: "Andhra Pradesh", value: "andhra_pradesh" },
    { label: "Arunachal Pradesh", value: "arunachal_pradesh" },
    { label: "Assam", value: "assam" },
    { label: "Bihar", value: "bihar" },
    { label: "Chhattisgarh", value: "chhattisgarh" },
    { label: "Goa", value: "goa" },
    { label: "Gujarat", value: "gujarat" },
    { label: "Haryana", value: "haryana" },
    { label: "Himachal Pradesh", value: "himachal_pradesh" },
    { label: "Jharkhand", value: "jharkhand" },
    { label: "Karnataka", value: "karnataka" },
    { label: "Kerala", value: "kerala" },
    { label: "Madhya Pradesh", value: "madhya_pradesh" },
    { label: "Maharashtra", value: "maharashtra" },
    { label: "Manipur", value: "manipur" },
    { label: "Meghalaya", value: "meghalaya" },
    { label: "Mizoram", value: "mizoram" },
    { label: "Nagaland", value: "nagaland" },
    { label: "Odisha", value: "odisha" },
    { label: "Punjab", value: "punjab" },
    { label: "Rajasthan", value: "rajasthan" },
    { label: "Sikkim", value: "sikkim" },
    { label: "Tamil Nadu", value: "tamil_nadu" },
    { label: "Telangana", value: "telangana" },
    { label: "Tripura", value: "tripura" },
    { label: "Uttar Pradesh", value: "uttar_pradesh" },
    { label: "Uttarakhand", value: "uttarakhand" },
    { label: "West Bengal", value: "west_bengal" },
    { label: "Andaman and Nicobar Islands", value: "andaman_and_nicobar_islands" },
    { label: "Chandigarh", value: "chandigarh" },
    { label: "Dadra and Nagar Haveli and Daman and Diu", value: "dadra_and_nagar_haveli_and_daman_and_diu" },
    { label: "Delhi", value: "delhi" },
    { label: "Jammu and Kashmir", value: "jammu_and_kashmir" },
    { label: "Ladakh", value: "ladakh" },
    { label: "Lakshadweep", value: "lakshadweep" },
    { label: "Puducherry", value: "puducherry" }
]
