import logo from "../../assets/logo-seagri.png";

export function Login() {
  return (
    <div className="flex h-screen">
      {/* Seção esquerda com fundo verde */}
      <div className="hidden md:flex w-1/2 bg-green-600  items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Bem-vindo ao AgroCad!</h1>
      </div>

      {/* Seção direita com o formulário de login */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-white rounded">
          <div className="flex items-center justify-center mb-10">
            <img src={logo} className="w-52 h-auto" />
          </div>

          <h1 className="text-start text-3xl font-bold tracking-tighter">
            Entre com sua conta
          </h1>
          <p className="text-start text-gray-500 mb-6">
            Preencha os dados corretamente para fazer login
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                CPF
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded hover:bg-green-700 mb-6"
            >
              Entrar
            </button>
            <div className="text-center text-sm">
              <a className="underline" href="#">
                Esqueceu a senha?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
