import Iridescence from './components/Iridescence'

const sale = {
  domain: 'goodmcp.si',
  price: 'Open to offers',
  contactLabel: 'github.com/sontakmtp-cell',
  contactUrl: 'https://github.com/sontakmtp-cell',
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.1}
          speed={1.0}
        />
      </div>

      <div className="absolute inset-0 bg-black/20" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">
        <div className="w-full max-w-3xl rounded-[2rem] border border-white/20 bg-black/25 p-7 text-center shadow-2xl backdrop-blur-xl sm:p-12">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Domain for sale
          </div>

          <h1 className="break-words text-5xl font-bold tracking-tight drop-shadow-lg sm:text-7xl">
            {sale.domain}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            A clean, memorable domain for MCP products, Model Context Protocol tools,
            AI agents, developer platforms and infrastructure.
          </p>

          <div className="mx-auto mt-9 max-w-md rounded-2xl border border-white/15 bg-white/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Asking price
            </p>
            <p className="mt-2 text-3xl font-bold sm:text-4xl">{sale.price}</p>
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={sale.contactUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-52 items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-white/90"
            >
              Contact seller
            </a>

            <a
              href={sale.contactUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-52 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Make an offer
            </a>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Contact: <span className="font-medium text-white/85">{sale.contactLabel}</span>
          </p>

          <div className="mt-10 border-t border-white/10 pt-5 text-xs text-white/45">
            Serious inquiries only · Secure domain transfer can be arranged
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
