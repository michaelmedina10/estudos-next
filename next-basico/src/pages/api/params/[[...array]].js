export default function params(req, res){
    res.status(200).json({
        params: req.query
    })
}

// Duplo colchete faz com que o param seja opcional
// [...nomequalquer] permite com que vc passe quantos parametros queira no endpoint