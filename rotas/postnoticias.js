module.exports = (app)=>{
    app.post( "/noticias", async (req,res) =>{
        try{
            const titulonoticia = req.body.titulonoticia
            const email = req.body.conteudonoticia
            const tiponoticias =  req.body.tiponoticia
        await app.dbClient.connect();
        const resulatado = await app.dbClient.db('portalnoticas')
            .collection('noticias')
            .insertOne({
                titulonoticia: titulonoticia, 
                conteudonoticia: conteudonoticia, 
                tiponoticia: tiponoticia,
                datahoracadastro: new Date()
            })
        res.status(200).send("Noticas gravadas com sucesso" + resulatado)
        }catch(error){
            res.status(400).send("erro ao gravar a noticia" + error)
        }
    })
    }