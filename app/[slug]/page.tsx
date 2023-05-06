"use client";

import { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp, onSnapshot, orderBy, query } from "firebase/firestore";

import DumpBox from "@/components/DumpBox";
import { firestore } from "@/firebaseConfig";

interface AppParams {
    slug: string
}

async function DumpAsync(dumpID: string, dumpText: string) {
    await addDoc(collection(firestore, "dumps", dumpID, "dumps"), {
        text: dumpText,
        createdAt: serverTimestamp()
    })
}

interface DumpData {
    id: string,
    text: string
}

export default function App({ params }: { params: AppParams }) {
    const [textValue, setTextValue] = useState("");
    const [dumpArray, setDumpArray] = useState<DumpData[]>([])

    useEffect(() => {
        const collectionRef = query(collection(firestore, "dumps", params.slug, "dumps"), orderBy("createdAt", "asc"));

        const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
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

    }, [params.slug])

    return (
        <div className="h-full flex flex-col">
            <section className="mb-5 flex-grow-0 flex justify-center gap-1">
                <h1>Dump ID:</h1>
                <h1 className="font-semibold">{params.slug}</h1>
            </section>

            <section className="mb-5 flex-grow overflow-y-auto">
                <div className="flex flex-col items-center">
                    <div className="w-11/12 flex flex-col items-center gap-4">
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
                    />

                    <button
                        className="bg-cyan-600 text-slate-50 px-12 py-2 rounded-xl"
                        onClick={() => {
                            DumpAsync(params.slug, textValue);
                            setTextValue("");
                        }}
                    >
                        Dump
                    </button>
                </div>
            </section>
        </div>
    );
}