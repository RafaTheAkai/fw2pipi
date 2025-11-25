module.exports = (app) =>{
app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express on Vercel!' });
  });
}