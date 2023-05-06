"use client";

import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Dispatch, SetStateAction, useState } from "react";
import { delayAsync } from "@/utils/delayAsync";


async function CreateADumpAsync(router: AppRouterInstance, setIsLoading: Dispatch<SetStateAction<boolean>>) {
    setIsLoading(true);

    const dumpID = "testDumpID";

    console.log("Creating a dump called", dumpID);

    await delayAsync(1000); // Mimic backend loading
    router.push(`/${dumpID}`)

    setIsLoading(false);
}

export default function BigCreateDumpButton() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <button
                className="bg-gray-500 text-slate-50 px-16 py-3 rounded-xl"
            >
                Creating a dump...
            </button>
        )
    }
    else {
        return (
            <button
                className="bg-cyan-600 text-slate-50 px-16 py-3 rounded-xl"
                onClick={() => CreateADumpAsync(router, setIsLoading)}
            >
                Create a Dump
            </button>
        )
    }
}