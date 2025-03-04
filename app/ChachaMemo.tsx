"use client"

import { useEffect, useState } from "react";

const CHACHA_MEMOS = [
  "la chachástrofe",
  "aquella chachavillosa noche",
  "la hora del chacha",
  "el chachapocalipsis",
  "que no me acuerdo de nada"
];

function randomChachaMemo() {
  return CHACHA_MEMOS[Math.floor(Math.random() * CHACHA_MEMOS.length)];
}

export default function ChachaMemo() {

  const [memo, setMemo] = useState("desde...");
  useEffect(() => {
    setMemo("desde " + randomChachaMemo() + "...");
  }, [])

  return (
    <p className="text-lg">{memo}</p>
  );
}
