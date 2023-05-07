"use client";

import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { Dispatch, SetStateAction, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/firebaseConfig";


async function CreateADumpAsync(router: AppRouterInstance, setIsLoading: Dispatch<SetStateAction<boolean>>) {
    setIsLoading(true);

    const createdDoc = await addDoc(collection(firestore, "dumps"), {
        createdAt: serverTimestamp()
    })

    const dumpID = createdDoc.id;
    console.log("Creating a dump called", dumpID);

    router.push(`/${dumpID}`)

    // No need to set reset loading state as the page will change
    // State will be reset anyways when rendered back into the home page
    // setIsLoading(false);
}

export default function BigCreateDumpButton() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <button
                className="bg-gray-500 text-slate-50 px-16 py-3 rounded-xl"
                disabled={true}
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