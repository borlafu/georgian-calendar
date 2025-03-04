import Image from "next/image";
import skimasLogo from '../public/skimas-tr.svg';
import chachaImg from '../public/chacha.svg';
import shotImg from '../public/shot-glass.svg';
import Calendar from "./Calendar";
import ChachaMemo from "./ChachaMemo";

export default function Home() {

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center">
        <Image
          className="dark:invert"
          src={skimasLogo}
          alt="Skimas logo"
          width={320}
          priority
        />
        <div className="flex flex-row items-center">
          <Calendar />
        </div>
        <div className="flex flex-row items-center text-center">
          <ChachaMemo />
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
      <footer className="flex text-center">
        <p className="text-sm">Hecho en 🇪🇸 España, con la cabeza en 🇬🇪 Georgia.</p>
      </footer>
    </div>
  );
}
