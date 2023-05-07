import CreateDumpButton from "@/components/BigCreateDumpButton";

export default function Home() {

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center">
      <h1 className="font-bold text-slate-800 text-8xl mb-2">Dump</h1>
      <h2 className="text-xl text-slate-800 mb-8">Dump anything.</h2>

      <CreateDumpButton />

    </section>
  )
}
