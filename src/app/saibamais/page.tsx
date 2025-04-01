export default function SaibaMais() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Saiba Mais</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Como Funciona</h2>
          <p className="text-gray-600">
            O Banco de Milhas é uma plataforma que conecta pessoas que desejam
            vender suas milhas aéreas com aqueles que procuram comprar por preços
            mais acessíveis.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Segurança</h2>
          <p className="text-gray-600">
            Todas as transações são protegidas e garantidas pela nossa plataforma.
            Utilizamos as mais avançadas tecnologias de criptografia e proteção de
            dados.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Vantagens</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Melhores preços do mercado</li>
            <li>Transações seguras</li>
            <li>Suporte 24/7</li>
            <li>Sistema de avaliação de usuários</li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Para Vendedores</h2>
          <p className="text-gray-600">
            Venda suas milhas de forma segura e receba o pagamento rapidamente.
            Nossa plataforma oferece as melhores taxas do mercado e ferramentas
            para gerenciar suas vendas.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Para Compradores</h2>
          <p className="text-gray-600">
            Encontre as melhores ofertas de milhas aéreas e economize em suas
            viagens. Compare preços, avalie vendedores e faça compras com
            segurança.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Programa Premium</h2>
          <p className="text-gray-600">
            Acesse recursos exclusivos, tenha prioridade nas negociações e
            aproveite taxas reduzidas com nossa assinatura premium.
          </p>
        </div>
      </div>
    </div>
  );
}