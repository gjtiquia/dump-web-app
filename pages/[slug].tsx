"use client";

import { useEffect, useRef, useState } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, orderBy, query } from "firebase/firestore";
import { useParams } from "next/navigation";

import "../app/globals.css"
import DumpBox from "@/components/DumpBox";
import { firestore } from "@/firebaseConfig";
import { useRouter } from "next/router";
import RootLayout from "@/app/layout";
import BaseLayout from "@/components/BaseLayout";

interface DumpData {
    id: string,
    text: string
}

async function DumpAsync(dumpID: string, dumpText: string) {
    // No empty strings
    if (dumpText.length == 0) return;

    console.log("dumping", JSON.stringify(dumpText));

    await addDoc(collection(firestore, "dumps", dumpID, "dumps"), {
        text: dumpText,
        createdAt: serverTimestamp()
    })
}

export default function App() {
    return (
        <BaseLayout>
            <AppScreen />
        </BaseLayout>
    )
}

// export default function AppScreen() {
function AppScreen() {
    const sectionReference = useRef<HTMLElement>(null);
    const [textValue, setTextValue] = useState("");
    const [dumpArray, setDumpArray] = useState<DumpData[]>([])
    const [isFirstSnapshot, setIsFirstSnapshot] = useState(true);

    const router = useRouter();
    const params = { slug: typeof (router.query.slug) == "string" ? router.query.slug : "error" }

    useEffect(() => {
        const q = query(collection(firestore, "dumps", params.slug, "dumps"), orderBy("createdAt", "asc"));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const updatedDumpArray: DumpData[] = [];

            querySnapshot.forEach((doc) => {
                updatedDumpArray.push({
                    id: doc.id,
                    text: doc.data().text
                })
            });

            setDumpArray(updatedDumpArray);
        });

        return () => {
            unsubscribe();
        }

    }, [isFirstSnapshot, params.slug])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (isFirstSnapshot) {
            scrollToBottom();
            if (dumpArray.length != 0) setIsFirstSnapshot(false);
        }
    })

    const scrollToBottom = () => {
        sectionReference.current?.scrollTo(0, sectionReference.current.scrollHeight)
    }

    const onDumpButtonClicked = async () => {
        setTextValue("");
        await DumpAsync(params.slug, textValue);
        scrollToBottom();
    }

    return (
        <div className="min-h-[92vh] max-h-[92vh] flex flex-col">
            <section className="mb-5 flex-grow-0 flex justify-center gap-3">
                <div className="flex gap-1">
                    <h1>ID:</h1>
                    <h1 className="font-semibold">{params.slug}</h1>
                </div>

                <button
                    className="bg-cyan-200 hover:bg-cyan-300 active:bg-cyan-400 text-sm py-1 px-2 rounded-md"
                    onClick={async () => {
                        const url = window.location.href;
                        await navigator.clipboard.writeText(url);
                    }}
                >
                    Copy Link
                </button>
            </section>

            <section ref={sectionReference} className="mb-5 flex-grow overflow-y-auto">
                <div className="flex flex-col items-center">
                    <div className="w-11/12 max-w-prose flex flex-col items-end gap-2">
                        {dumpArray && dumpArray.map((value) => <DumpBox key={value.id} dumpContents={value.text} />)}
                    </div>
                </div>
            </section>

            <section className="flex-grow-0">
                <div className="flex flex-col items-center gap-3">
                    <textarea
                        className="w-11/12 max-w-prose resize-none h-28 p-4 rounded-lg"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        onKeyDown={(e) => {
                            // Send only if pressed Enter and shift is NOT pressed
                            if (e.key == "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                onDumpButtonClicked();
                            }
                        }}
                    />

                    <button
                        className="bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800 text-slate-50 px-12 py-2 rounded-xl"
                        onClick={onDumpButtonClicked}
                    >
                        Dump
                    </button>
                </div>
            </section >
        </div >
    );
}