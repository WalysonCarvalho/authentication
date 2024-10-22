import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { MdDelete } from "react-icons/md";

export function SalesReport() {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Estado para armazenar a lista de vendas
  const [vendas, setVendas] = useState([
    {
      id: 1,
      produto: "Produto A",
      quantidade: 10,
      valor: "R$ 100,00",
    },
    {
      id: 2,
      produto: "Produto B",
      quantidade: 5,
      valor: "R$ 50,00",
    },
    {
      id: 3,
      produto: "Produto C",
      quantidade: 8,
      valor: "R$ 80,00",
    },
    {
      id: 4,
      produto: "Produto D",
      quantidade: 12,
      valor: "R$ 120,00",
    },
  ]);

  // Estado para os campos do novo relatório de vendas
  const [produtoVenda, setProdutoVenda] = useState("");
  const [quantidadeVenda, setQuantidadeVenda] = useState("");
  const [valorVenda, setValorVenda] = useState("");

  // Função para adicionar novo relatório de vendas
  const handleCadastroVenda = () => {
    if (user.role === USER_ROLE.ADMIN || user.role === USER_ROLE.SALE) {
      if (!produtoVenda || !quantidadeVenda || !valorVenda) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      const novaVenda = {
        id: vendas.length + 1,
        produto: produtoVenda,
        quantidade: quantidadeVenda,
        valor: valorVenda,
      };

      // Atualiza a lista de vendas
      setVendas([...vendas, novaVenda]);

      // Limpar os campos
      setProdutoVenda("");
      setQuantidadeVenda("");
      setValorVenda("");
    } else {
      alert("Você não tem permissão para adicionar vendas.");
    }
  };

  // Função para excluir relatório de vendas
  const handleExcluirVenda = (id) => {
    if (user.role === USER_ROLE.ADMIN || user.role === USER_ROLE.SALE) {
      const novaLista = vendas.filter((venda) => venda.id !== id);
      setVendas(novaLista);
    } else {
      alert("Você não tem permissão para excluir vendas.");
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
          <h1>Lista de Vendas</h1>
        </div>
        <div className="content">
          {(user.role === USER_ROLE.ADMIN || user.role === USER_ROLE.SALE) && (
            <div className="form-cadastro">
              <h2>Cadastro de Venda</h2>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Produto"
                  value={produtoVenda}
                  onChange={(e) => setProdutoVenda(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Quantidade"
                  value={quantidadeVenda}
                  onChange={(e) => setQuantidadeVenda(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Valor"
                  value={valorVenda}
                  onChange={(e) => setValorVenda(e.target.value)}
                />
              </div>
              <Button onClick={handleCadastroVenda}>
                Cadastrar Venda
              </Button>
            </div>
          )}

          <div className="header-content">
            <div className="header-item">Produto</div>
            <div className="header-item">Quantidade</div>
            <div className="header-item">Valor</div>
          </div>

          <div className="container">
            {/* Exibição da lista de vendas */}
            {vendas.map((venda) => (
              <div className="content-list" key={venda.id}>
                <div className="content-item">{venda.produto}</div>
                <div className="content-item">{venda.quantidade}</div>
                <div className="content-item">{venda.valor}</div>
                {(user.role === USER_ROLE.ADMIN || user.role === USER_ROLE.SALE) && (
                  <Button onClick={() => handleExcluirVenda(venda.id)}>
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
