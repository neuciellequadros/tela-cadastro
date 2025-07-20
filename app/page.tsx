"use client";

import Image from "next/image";
import Formulario from "@/components/Formulario";

export default function RegisterPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Imagem1.jpg')" }}
    >
      <div className="bg-white bg-opacity-90 p-6 sm:p-8 rounded-xl shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/Logo-2025-hospital-do-Cancer-crt.png"
            alt="Logo Santa Casa"
            width={140}
            height={140}
            className="mb-2"
          />
          <h1 className="text-xl font-semibold">Cadastro de Usuário</h1>
        </div>
        <Formulario />
      </div>
    </main>
  );
}
