import DumpBox from "@/components/DumpBox";

interface AppParams {
    slug: string
}


export default function App({ params }: { params: AppParams }) {
    return (
        <div className="h-full flex flex-col">
            <section className="mb-5 flex-grow-0 flex justify-center gap-1">
                <h1>Dump ID:</h1>
                <h1 className="font-semibold">{params.slug}</h1>
            </section>

            <section className="mb-5 flex-grow overflow-y-auto">
                <div className="flex flex-col items-center">
                    <div className="w-11/12 flex flex-col items-center gap-4">
                        <DumpBox dumpContents="lorem" />
                        <DumpBox dumpContents="lorem" />
                        <DumpBox dumpContents="lorem" />
                        <DumpBox dumpContents="lorem" />
                        <DumpBox dumpContents="lorem" />
                        <DumpBox dumpContents="lorem" />
                        <DumpBox dumpContents="lorem" />
                        <DumpBox dumpContents="lorem" />
                    </div>
                </div>
            </section>

            <section className="flex-grow-0">
                <div className="flex flex-col items-center gap-3">
                    <textarea className="w-11/12 max-w-prose resize-none h-28 p-4 rounded-lg">

                    </textarea>

                    <button className="bg-cyan-600 text-slate-50 px-12 py-2 rounded-xl">
                        Dump
                    </button>
                </div>
            </section>
        </div>
    );
}