import express from 'express';
import ejs from 'ejs';
import { configDotenv } from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

// Définir le moteur de vue sur EJS
app.set('view engine', 'ejs');

// Définir le dossier des vues
app.set('views', './views');

// Middleware pour servir des fichiers statiques (CSS, images, etc.)
app.use(express.static('public'));

// Route pour les produits
app.get('/products', (req, res) => {
    res.render('index');  
});

// Démarrer le serveur
app.listen(port, () => {
    console.log('Server app listening on http://localhost:' + port);
});
