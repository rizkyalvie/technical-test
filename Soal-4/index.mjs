import express from 'express';
import hbs from 'hbs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()
const __filename = fileURLToPath(
    import.meta.url
);
const __dirname = dirname(__filename);

app.use('/public', express.static(__dirname + '/public'))
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'hbs')


app.get('/', (req,res) => {
    res.render('index')
})


const port = 8080
app.listen(port, function() {
    console.log(`Server running on port: ${port}`)
})