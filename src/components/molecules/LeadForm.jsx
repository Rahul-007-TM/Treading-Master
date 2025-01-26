"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Loading from "../atoms/Loading";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { createLead } from "@/actions/lead";
import { toast } from "sonner";

const FormSchema = z.object({
    fullname: z
        .string({
            required_error: "Fullname is required.",
            invalid_type_error: "Fullname must be text.",
        })
        .min(2)
        .max(50),
    mobile: z
        .string({
            required_error: "Mobile no is required.",
            invalid_type_error: "Mobile no must be text.",
        })
        .min(10, "Mobile no must contain 10 digit."),
    email: z
        .string({
            required_error: "Email is required.",
            invalid_type_error: "Email must be text.",
        })
        .email(),
    state: z
        .string({
            required_error: "Location is required.",
            invalid_type_error: "Location must be text.",
        })
        .min(1, "Location is required."),
});

const LeadForm = () => {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullname: "",
            mobile: "",
            email: "",
            state: "",
        },
    });

    const onSubmit = async (values) => {
        setLoading(true);
        await createLead(values)
            .then((result) => {
                form.reset();
                toast.success("Form Submitted Successfully");
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6 w-full"
                >
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
                                            {States.map((state) => (
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
                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? <Loading /> : "Submit"}
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default LeadForm;

const States = [
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { label: "Assam", value: "Assam" },
    { label: "Bihar", value: "Bihar" },
    { label: "Chhattisgarh", value: "Chhattisgarh" },
    { label: "Goa", value: "Goa" },
    { label: "Gujarat", value: "Gujarat" },
    { label: "Haryana", value: "Haryana" },
    { label: "Himachal Pradesh", value: "Himachal Pradesh" },
    { label: "Jharkhand", value: "Jharkhand" },
    { label: "Karnataka", value: "Karnataka" },
    { label: "Kerala", value: "Kerala" },
    { label: "Madhya Pradesh", value: "Madhya Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
    { label: "Manipur", value: "Manipur" },
    { label: "Meghalaya", value: "Meghalaya" },
    { label: "Mizoram", value: "Mizoram" },
    { label: "Nagaland", value: "Nagaland" },
    { label: "Odisha", value: "Odisha" },
    { label: "Punjab", value: "Punjab" },
    { label: "Rajasthan", value: "Rajasthan" },
    { label: "Sikkim", value: "Sikkim" },
    { label: "Tamil Nadu", value: "Tamil Nadu" },
    { label: "Telangana", value: "Telangana" },
    { label: "Tripura", value: "Tripura" },
    { label: "Uttar Pradesh", value: "Uttar Pradesh" },
    { label: "Uttarakhand", value: "Uttarakhand" },
    { label: "West Bengal", value: "West Bengal" },
    {
        label: "Andaman and Nicobar Islands",
        value: "Andaman and Nicobar Islands",
    },
    { label: "Chandigarh", value: "Chandigarh" },
    {
        label: "Dadra and Nagar Haveli and Daman and Diu",
        value: "Dadra and Nagar Haveli and Daman and Diu",
    },
    { label: "Delhi", value: "Delhi" },
    { label: "Jammu and Kashmir", value: "Jammu and Kashmir" },
    { label: "Ladakh", value: "Ladakh" },
    { label: "Lakshadweep", value: "Lakshadweep" },
    { label: "Puducherry", value: "Puducherry" },
];
