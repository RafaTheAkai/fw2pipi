module.exports = (app)=>{
    app.get( "/noticias", async (req,res) =>{
        try{
        await app.dbClient.connect();
        const resultado = await app.dbClient.db('portalnoticas')
            .collection('noticias')
            .find()
            .toArray();
        res.json(resultado);
        }catch(error){
            res.end("erro: " + error)
        } finally {
            await app.dbClient.close()
        }
    })
    }