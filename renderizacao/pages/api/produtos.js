// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: 'Caneta', preco: 5.60 },
    { id: 2, name: 'Caderno', preco: 15.60 },
    { id: 3, name: 'Borracha', preco: 7.30 },
    { id: 4, name: 'Tesoura', preco: 21.60 },
  ])
}
