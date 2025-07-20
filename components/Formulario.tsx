"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(8, "Senha deve ter no mínimo 8 caracteres"),
  confirmarSenha: z.string().min(8, "Confirmação obrigatória"),
  telefone: z.string().optional(),
  nascimento: z.string().optional(),
  genero: z.string().optional(),
  termos: z
    .boolean()
    .refine((val) => val === true, {message: "Você deve aceitar os termos de uso",
    }),
}).refine((data) => data.senha === data.confirmarSenha, {
  message: "As senhas não coincidem",
  path: ["confirmarSenha"],
});

type FormData = z.infer<typeof formSchema>;

export default function Formulario() {
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    setSubmittedData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3  text-gray-800 ">
      <div>
        <Label>Nome completo *</Label>
        <Input type="text" {...register("nome")} />
        {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
      </div>

      <div>
        <Label>E-mail *</Label>
        <Input type="email" {...register("email")} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <Label>Senha *</Label>
        <Input type="password" {...register("senha")} />
        {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
      </div>

      <div>
        <Label>Confirmar senha *</Label>
        <Input type="password" {...register("confirmarSenha")} />
        {errors.confirmarSenha && <p className="text-red-500 text-sm">{errors.confirmarSenha.message}</p>}
      </div>

      <div>
        <Label>Telefone</Label>
        <Input type="tel" {...register("telefone")} placeholder="(99) 99999-9999" />
      </div>

      <div className="flex gap-2">
        <div className="flex-1">
          <Label>Data de nascimento</Label>
          <Input type="date" {...register("nascimento")} />
        </div>

        <div className="flex-1">
          <Label>Gênero</Label>
          <Select onValueChange={(value) => setValue("genero", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="feminino">Feminino</SelectItem>
              <SelectItem value="masculino">Masculino</SelectItem>
              <SelectItem value="outro">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center space-x-2">
  <input
    type="checkbox"
    id="termos"
    {...register("termos", { required: true })}
    className="border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
  />
  <label htmlFor="termos" className="text-sm">
    Aceito os termos de uso *
  </label>
</div>
{errors.termos && (
  <p className="text-red-500 text-sm">{errors.termos.message}</p>
)}


      <Button type="submit" className="w-full bg-[#14143E] text-white hover:bg-[#244d91]">Cadastrar</Button>

      {submittedData && (
        <div className="mt-4 text-green-600 font-medium">
          Formulário enviado com sucesso!
        </div>
      )}
    </form>
  );
}
