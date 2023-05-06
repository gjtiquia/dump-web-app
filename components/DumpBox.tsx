export default function DumpBox({ dumpContents }: { dumpContents: string }) {
    return (
        <div className="p-2 bg-slate-50 rounded-lg max-w-[80ch]">
            <div className="text-slate-700 whitespace-pre-wrap">
                {dumpContents}
            </div>
        </div>
    )
}