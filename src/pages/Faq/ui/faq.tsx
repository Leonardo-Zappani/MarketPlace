import React, { useState }from "react"

export default function Faq() {
        const faqs = [
            {
              question: "Qual é o prazo de entrega dos produtos?",
              answer: "O prazo de entrega pode variar dependendo da sua localização e da disponibilidade dos produtos em estoque."
            },
            {
              question: "Como posso rastrear meu pedido?",
              answer: "Após a finalização do pedido, você receberá um código de rastreamento por email que pode ser utilizado para acompanhar a entrega no site da transportadora."
            },
            {
              question: "Quais são as formas de pagamento aceitas?",
              answer: "Aceitamos cartão de crédito, boleto bancário, PayPal e PIX."
            },
            {
              question: "É possível trocar ou devolver um produto?",
              answer: "Sim, a troca ou devolução pode ser feita dentro do prazo de 7 dias após o recebimento, conforme o Código de Defesa do Consumidor."
            },
            {
              question: "Os produtos possuem garantia?",
              answer: "Sim, todos os nossos produtos possuem garantia mínima de 90 dias contra defeitos de fabricação."
            },
            {
              question: "Posso agendar a entrega do meu pedido?",
              answer: "Infelizmente não oferecemos essa opção no momento. As entregas são realizadas conforme a rota da transportadora."
            },
            {
              question: "Como funciona o processo de reembolso?",
              answer: "O reembolso é efetuado após o recebimento e análise do produto devolvido, sendo realizado na mesma forma de pagamento do pedido original."
            },
            {
              question: "Existe desconto para compras em grande quantidade?",
              answer: "Sim, oferecemos descontos especiais para compras no atacado. Entre em contato conosco para mais informações."
            },
            {
              question: "Como posso cancelar um pedido?",
              answer: "Para cancelar um pedido antes do envio, acesse a seção 'Meus Pedidos' ou entre em contato com nosso serviço de atendimento."
            },
            {
              question: "É seguro comprar no site?",
              answer: "Sim, utilizamos tecnologia de criptografia e proteção de dados para garantir a segurança das suas informações."
            },
            {
              question: "Posso alterar o endereço de entrega após finalizar o pedido?",
              answer: "Caso o pedido ainda não tenha sido enviado, entre em contato imediatamente com o suporte para tentarmos realizar a alteração."
            },
          ]
          
    
      const [activeIndex, setActiveIndex] = useState(null)
    
      const toggleFAQ = index => {
        setActiveIndex(activeIndex === index ? null : index)
      }
    
      return (
        <div className="p-6">
          <h1 className="text-3xl text-center font-bold mb-6">Perguntas Frequentes (FAQ)</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <div className="font-medium text-lg flex justify-between items-center" onClick={() => toggleFAQ(index)}>
                  <span>{faq.question}</span>
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className={activeIndex === index ? "h-6 w-6 rotate-180 transition-transform" : "h-6 w-6 transition-transform"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                </div>
                <div className={activeIndex === index ? "pt-3" : "hidden"}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}