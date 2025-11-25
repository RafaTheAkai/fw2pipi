module.exports = (app)=>{
    app.get("/noticias/tipo/:tiponoticia", async (req, res)=> {
        res.send(req.params.tipo)
    });
}