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

  const [memo, setMemo] = useState("");
  useEffect(() => {
    setMemo(randomChachaMemo() + "...");
  }, [])

  return (
    <p className="text-lg">desde {memo}</p>
  );
}
