export default function DumpBox({ dumpContents }: { dumpContents: string }) {
    return (
        <div className="p-2 bg-slate-50 rounded-lg max-w-[80ch]">
            <p className="text-slate-700">
                {dumpContents}
            </p>
        </div>
    )
}