"use client"

import { getLeads } from "@/actions/lead";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const page = () => {

    const [leads, setLeads] = useState([])
    const router = useRouter()

    const fetchLeads = async () => {
        const resp = await getLeads()
        setLeads(resp.todos)
    }

    const handleLogout = () => {
        localStorage.removeItem("TM")
        toast.success("Logged out successfully")
        router.push("/")
    }

    useEffect(() => {
        fetchLeads()
    }, [])

    return (
        <div className="flex flex-col max-w-7xl mx-auto h-fit w-full gap-4 p-4">
            <div className="flex w-full gap-4 items-center justify-between">
                <span className="text-lg md:text-xl lg:text-2xl font-bold">Leads</span>
                <div className="flex w-fit gap-4">
                    <Button
                        onClick={handleLogout}
                        className="w-fit"
                    >
                        Log Out
                    </Button>
                </div>
            </div>
            <Table className="w-full border">
                <TableHeader className="">
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Number</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>State</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {leads.map((lead) => (
                        <TableRow key={lead._id}>
                            <TableCell>{format(lead.createdAt, "Pp")}</TableCell>
                            <TableCell>{lead.fullname}</TableCell>
                            <TableCell>{lead.mobile}</TableCell>
                            <TableCell>{lead.email}</TableCell>
                            <TableCell>{lead.state}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default page
