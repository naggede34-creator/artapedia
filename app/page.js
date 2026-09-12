import Link from "next/link";
import SignalCard from "@/components/SignalCard";

const steps = [
  {
    n: "1",
    title: "Isi saldo pakai QRIS",
    desc: "Scan QRIS dari e-wallet atau m-banking apa saja. Saldo masuk otomatis begitu pembayaran terkonfirmasi, tanpa konfirmasi manual."
  },
  {
    n: "2",
    title: "Pilih layanan & negara",
    desc: "Cari layanan yang kamu butuhkan (WhatsApp, Telegram, Google, dan ratusan layanan lain), lalu pilih negara dan operator dengan harga yang tampil jelas di depan."
  },
  {
    n: "3",
    title: "Terima kode OTP otomatis",
    desc: "Nomor langsung diberikan begitu order dibuat. Kode OTP muncul otomatis di halaman begitu masuk, tanpa perlu refresh manual."
  }
];

const points = [
  {
    title: "Diproses 24 jam tanpa admin",
    desc: "Deposit dan pembelian nomor berjalan otomatis lewat sistem, bukan menunggu balasan admin."
  },
  {
    title: "Satu tempat, semua layanan",
    desc: "Bukan cuma WhatsApp — semua layanan yang tersedia di katalog OTP ditampilkan lengkap dengan harga per negara."
  },
  {
    title: "Harga & status transparan",
    desc: "Nominal deposit dan harga nomor ditampilkan di depan sebelum kamu bayar, tidak ada biaya tersembunyi."
  },
  {
    title: "Riwayat tersimpan rapi",
    desc: "Setiap deposit dan pembelian tercatat di halaman Riwayat, bisa dicek kapan saja pakai kode akun kamu."
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-content px-5 pb-16 pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-medium text-amber">Deposit otomatis · Nomor OTP semua layanan</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
              Isi saldo, pilih nomor, kode OTP-nya sampai duluan dari yang kamu duga.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted">
              Artapedia menghubungkan deposit QRIS otomatis dengan katalog nomor virtual untuk
              ratusan layanan — bukan cuma WhatsApp. Tanpa antre admin, tanpa jam operasional.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/deposit"
                className="rounded-lg bg-amber px-5 py-3 text-sm font-medium text-bg transition hover:bg-amber-bright"
              >
                Deposit saldo
              </Link>
              <Link
                href="/otp"
                className="rounded-lg border border-teal/40 px-5 py-3 text-sm font-medium text-teal-bright transition hover:border-teal"
              >
                Beli nomor OTP
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted">
              Tanpa login — cukup satu kode akun unik yang dibuat otomatis untuk kamu.
            </p>
          </div>

          <SignalCard />
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-content px-5 py-16">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Cara kerjanya</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <span className="font-display text-3xl text-amber">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Kenapa pakai Artapedia</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {points.map((p) => (
            <div key={p.title} className="grid gap-2 py-6 sm:grid-cols-[280px_1fr] sm:gap-8">
              <h3 className="font-display text-base font-medium text-ink">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 pb-20">
        <div className="rounded-3xl border border-amber/25 bg-amber-soft px-8 py-12 text-center sm:px-16">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Siap coba sekarang?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Mulai dari deposit Rp2.000. Kode akun kamu sudah siap dipakai, tidak perlu daftar apa pun.
          </p>
          <Link
            href="/deposit"
            className="mt-6 inline-block rounded-lg bg-amber px-6 py-3 text-sm font-medium text-bg transition hover:bg-amber-bright"
          >
            Deposit sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
