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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const userRegisterSchema = z.object({
  name: z.string().min(1, { message: "Este campo é obrigatório" }),
  email: z.string().min(1).email(),
});

export function UserRegister() {
  const [users, setUsers] = useState([]);

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: zodResolver(userRegisterSchema) });

  console.log(errors);

  async function handleCreateUser(data) {
    reset();

    // const { name, city } = data;

    // const response = await api.post("farmers", {
    //   name,
    //   city,
    // });

    // setFarmers((state) => [...state, response.data]);

    // reset();
  }

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("users");
      setUsers(response.data);
    }

    loadUsers();
  }, []);

  return (
    <div className="p-6">
      <div className="mx-auto max-w-6xl space-y-4">
        <h1 className="mb-6 text-2xl font-bold">Usuários</h1>

        {/* FORMULÀRIO DE PESQUISA */}

        <div className="flex items-center justify-between">
          <form className="flex items-center">
            <Input
              className="rounded-r-none"
              name="name"
              placeholder="Nome do usuário"
            />
            <Button
              className="rounded-l-none border"
              type="submit"
              variant="secondary"
            >
              <Search className="w-4 h-4" />
            </Button>
          </form>

          {/* FORMULÀRIO DE CADASTRO */}

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="w-4 h-4 mr-1" />
                Novo Usuário
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo usuário</DialogTitle>
                <DialogDescription>Cadastrar um novo usuário</DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleSubmit(handleCreateUser)}
                className="space-y-4"
              >
                <div>
                  <Label className="text-sm mb-1">Nome</Label>
                  <Input type="text" {...register("name")} />
                </div>

                <div>
                  <Label className="text-sm mb-1">Email</Label>
                  <Input type="email" {...register("email")} />
                </div>

                <div>
                  <Label className="text-sm mb-1">CPF</Label>
                  <Input type="text" {...register("cpf")} />
                </div>

                <div>
                  <Label className="text-sm mb-1">Senha</Label>
                  <Input type="password" {...register("password")} />
                </div>

                <div>
                  <Label className="text-sm mb-1">Organização</Label>
                  <Select
                    onValueChange={(value) => setValue("organization", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleciona a organização" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Teste</SelectLabel>
                        <SelectItem value="association">Associação</SelectItem>
                        <SelectItem value="cooperative">Cooperativa</SelectItem>
                        <SelectItem value="institute">Instituto</SelectItem>
                        <SelectItem value="union">Sindicato</SelectItem>
                        <SelectItem value="cityhall">
                          Prefeitura/Secretaria Municipal
                        </SelectItem>
                        <SelectItem value="statehall">
                          Orgão Estadual
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-sm mb-1">CNPJ</Label>
                  <Input {...register("CNPJ")} />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Cancelar
                    </Button>
                  </DialogClose>
                  <Button disabled={isSubmitting} type="submit">
                    Salvar
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* TABELA */}

        <div className="border rounded">
          <Table>
            <TableHeader className="border-b">
              <TableHead>CPF</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Organização</TableHead>
            </TableHeader>
            <TableBody>
              {users.map((user, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{user.cpf}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.organization}</TableCell>
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
