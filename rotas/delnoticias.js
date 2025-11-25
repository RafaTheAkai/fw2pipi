module.exports = (app)=>{
    app.delete( "/noticias", async (req,res) =>{
        try{
            const id = new ObjectId.createFromHexString(req.body._id)
            console.log(id)
            await app.dbClient.connect();
            const resulatado = await app.dbClient.db('portalnoticas')
                .collection('noticias')
                .deleteOne({_id: new Object(id) })
                    
             if (!resulatado.deleteCount) {
                    throw new Error("nenhuma noticia foi apagada - Id não encontrado.")
             }
                res.status(200).send("Noticas apagada com sucesso" + resulatado)
            }catch(error){
                res.status(400).send("erro ao apagar a noticia" + error)
            }
        })
    }