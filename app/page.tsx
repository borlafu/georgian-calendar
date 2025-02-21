import Image from "next/image";
import skimasLogo from '../public/skimas-tr.svg';
import chachaImg from '../public/chacha.svg';
import shotImg from '../public/shot-glass.svg';


export default function Home() {

  const startDate = new Date("2025-01-29");
  const today = new Date();
  const days = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const yearsSince = Math.floor(days / 365);
  const monthsSince = Math.floor((days % 365) / 30);
  const daysSince = days % 30;
  const stats = [
    { label: "Años", value: yearsSince },
    { label: "Meses", value: monthsSince },
    { label: "Días", value: daysSince }
  ]
  const eventNames = [
    "aquella chachavillosa noche",
    "la chachástrofe",
    "la hora del chacha",
    "el chachapocalipsis",
    "que no me acuerdo de nada"
  ];

  return (
    <div className="grid items-center justify-items-center align-bottom min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <Image
          className="dark:invert"
          src={skimasLogo}
          alt="Skimas logo"
          width={320}
          priority
        />
        <div className="flex flex-row items-center">
          <dl className="grid grid-cols-3 gap-8 justify-items-center items-center text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="mx-auto flex grow max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-lg">desde {eventNames[Math.floor(Math.random() * eventNames.length)]}...</p>
        </div>
        <div className="flex flex-row gap-5 items-end justify-items-center">
          <Image
            className="dark:invert"
            src={chachaImg}
            alt="Chacha bottle"
            width={30}
          />
          <Image
            className="dark:invert"
            src={shotImg}
            alt="Shot glass"
            width={20}
          />
          <Image
            className="dark:invert"
            src={shotImg}
            alt="Shot glass"
            width={20}
          />
          <Image
            className="dark:invert rotate-90 translate-y-1"
            src={shotImg}
            alt="Shot glass"
            width={20}
          />
        </div>
      </main>
      <footer className="flex flex-wrap items-center justify-center">
        <p className="text-sm">Hecho en 🇪🇸 España, con la cabeza en 🇬🇪 Georgia.</p>
      </footer>
    </div>
  );
}
