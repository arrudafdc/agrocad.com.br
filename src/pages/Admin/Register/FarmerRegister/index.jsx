import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/lib/axios";
import { Label } from "@radix-ui/react-dropdown-menu";
import { PlusCircle, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const farmersSchema = z.object({
  name: z.string(),
  city: z.string(),
});

export function FarmerRegister() {
  const [farmers, setFarmers] = useState([]);

  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(farmersSchema),
  });

  async function handleCreateFarmer(data) {
    const { name, city } = data;

    const response = await api.post("farmers", {
      name,
      city,
    });

    setFarmers((state) => [...state, response.data]);

    reset();
  }

  useEffect(() => {
    async function loadFarmers() {
      const response = await api.get("farmers");
      setFarmers(response.data);
    }

    loadFarmers();
  }, []);

  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl space-y-4">
        <h1 className="mb-6 text-2xl font-bold">Agricultor</h1>

        <div className="flex items-center justify-between">
          <form className="flex items-center">
            <Input
              className="rounded-r-none"
              name="name"
              placeholder="Nome do agricultor"
            />
            <Button
              className="rounded-l-none border"
              type="submit"
              variant="secondary"
            >
              <Search className="w-4 h-4" />
            </Button>
          </form>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="w-4 h-4 mr-1" />
                Novo Agricultor
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo agricultor</DialogTitle>
                <DialogDescription>
                  Cadastrar um novo agricultor
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleSubmit(handleCreateFarmer)}
                className="space-y-6"
              >
                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label className="text-sm">Nome</Label>
                  <Input className="col-span-3" {...register("name")} />
                </div>

                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label className="text-sm">Nascimento</Label>
                  <Input
                    type="date"
                    className="col-span-3"
                    {...register("city")}
                  />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                  </DialogClose>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="border rounded">
          <Table>
            <TableHeader className="border-b">
              <TableHead>Nome</TableHead>
              <TableHead>Idade</TableHead>
              <TableHead>Município</TableHead>
              <TableHead>Gênero</TableHead>
              <TableHead>CAF</TableHead>
              <TableHead>PCD</TableHead>
              <TableHead>Raça/Cor</TableHead>
              <TableHead>Cultivo</TableHead>
              <TableHead>Área produzida</TableHead>
              <TableHead>Produção anual</TableHead>
              <TableHead>Sementes recebidas (vol.)</TableHead>
            </TableHeader>
            <TableBody>
              {farmers.map((farmer, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{farmer.id}</TableCell>
                    <TableCell>{farmer.name}</TableCell>
                    <TableCell>{farmer.city}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
