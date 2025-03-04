"use client"

import { useEffect, useState } from "react";
import CountUp from "react-countup";


function computeGeorgianDate() {
  const startDate = new Date("2025-01-19");
  const today = new Date();
  const days = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const yearsSince = Math.floor(days / 365);
  const monthsSince = Math.floor((days % 365) / 30);
  const daysSince = days % 30;
  return [
    { label: "Años", value: yearsSince },
    { label: "Meses", value: monthsSince },
    { label: "Días", value: daysSince }
  ]
}

export default function Calendar() {

  const [stats, setStats] = useState([
    { label: "Años", value: 0 },
    { label: "Meses", value: 0 },
    { label: "Días", value: 0 }
  ]);

  useEffect(() => {
    setStats(computeGeorgianDate());
  }, []);

  return (
    <dl className="grid grid-cols-3 gap-8 justify-items-center items-end text-center">
      {stats.map((stat) => (
        <div key={stat.label} className="mx-auto flex flex-none max-w-xs flex-col gap-y-4">
          <dt className="text-base/7">{stat.label}</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
            <CountUp start={0} end={stat.value} duration={3.0} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
