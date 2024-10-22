import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { MdDelete } from "react-icons/md";

export function Suppliers() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Estado para armazenar a lista de fornecedores
  const [fornecedores, setFornecedores] = useState([
    {
      id: 1,
      nome: "Fornecedor A",
      contato: "contato@fornecedora.com",
      telefone: "(11) 1234-5678",
    },
    {
      id: 2,
      nome: "Fornecedor B",
      contato: "contato@fornecedorb.com",
      telefone: "(11) 2345-6789",
    },
    {
      id: 3,
      nome: "Fornecedor C",
      contato: "contato@fornecedorc.com",
      telefone: "(11) 3456-7890",
    },
    {
      id: 4,
      nome: "Fornecedor D",
      contato: "contato@fornecedord.com",
      telefone: "(11) 4567-8901",
    },
  ]);

  // Estado para os campos do novo fornecedor
  const [nomeFornecedor, setNomeFornecedor] = useState("");
  const [contatoFornecedor, setContatoFornecedor] = useState("");
  const [telefoneFornecedor, setTelefoneFornecedor] = useState("");

  // Função para adicionar novo fornecedor
  const handleCadastroFornecedor = () => {
    if (user.role === USER_ROLE.ADMIN) {
      if (!nomeFornecedor || !contatoFornecedor || !telefoneFornecedor) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      const novoFornecedor = {
        id: fornecedores.length + 1,
        nome: nomeFornecedor,
        contato: contatoFornecedor,
        telefone: telefoneFornecedor,
      };

      // Atualiza a lista de fornecedores
      setFornecedores([...fornecedores, novoFornecedor]);

      // Limpar os campos
      setNomeFornecedor("");
      setContatoFornecedor("");
      setTelefoneFornecedor("");
    } else {
      alert("Você não tem permissão para adicionar fornecedores.");
    }
  };

  // Função para excluir fornecedor
  const handleExcluirFornecedor = (id) => {
    if (user.role === USER_ROLE.ADMIN) {
      const novaLista = fornecedores.filter(
        (fornecedor) => fornecedor.id !== id
      );
      setFornecedores(novaLista);
    } else {
      alert("Você não tem permissão para excluir fornecedores.");
    }
  };

  return (
    <Container>
      <nav>
        <header>
          <h1>
            Olá! {user.role}, {user.name}
          </h1>
        </header>
        <Button onClick={() => navigate("/")}>Voltar </Button>
      </nav>

      <main>
        <div className="list">
          <h1>Lista de fornecedores</h1>
        </div>
        <div className="content">
          {user.role === USER_ROLE.ADMIN && (
            <div className="form-cadastro">
              <h2>Cadastro de Fornecedor</h2>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Nome do Fornecedor"
                  value={nomeFornecedor}
                  onChange={(e) => setNomeFornecedor(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Contato do Fornecedor"
                  value={contatoFornecedor}
                  onChange={(e) => setContatoFornecedor(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Telefone do Fornecedor"
                  value={telefoneFornecedor}
                  onChange={(e) => setTelefoneFornecedor(e.target.value)}
                />
              </div>
              <Button onClick={handleCadastroFornecedor}>
                Cadastrar Fornecedor{" "}
              </Button>
            </div>
          )}

          <div className="header-content">
            <div className="header-item">Nome</div>
            <div className="header-item">Telefone</div>
            <div className="header-item">Contato</div>
          </div>

          <div className="container">
            {/* Exibição da lista de fornecedores */}
            {fornecedores.map((fornecedor) => (
              <div className="content-list" key={fornecedor.id}>
                <div className="content-item">{fornecedor.nome}</div>
                <div className="content-item">{fornecedor.telefone}</div>
                <div className="content-item">{fornecedor.contato}</div>
                {user.role === USER_ROLE.ADMIN && (
                  <Button
                    onClick={() => handleExcluirFornecedor(fornecedor.id)}
                  >
                    <MdDelete />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
}
