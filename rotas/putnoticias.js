module.exports = (app)=>{
    app.put( "/noticias", async (req,res) =>{
        try{
            const id = req.body.objectId
            
        await app.dbClient.connect();
        const resulatado = await app.dbClient.db('portalnoticas')
            .collection('noticias')
            .deleteOne({
                objectId: objectId, })
                
        res.json(users);
        res.status(200).send("Noticas gravadas com sucesso" + resulatado)
        }catch(error){
            res.status(400).send("erro ao gravar a noticia" + error)
        }
    })
    }