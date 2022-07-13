import express from 'express';
import hbs from 'hbs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import db from './connection/db_config.js'

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

    const sql = "SELECT * FROM provinsi_tb";

    db.query(sql, function (err, result) {
      if (err) throw err;

      console.log(`ID \t NAME \t Diresmikan \t Pulau `);
      console.log(`----------------------------------------------------------`);
      result.forEach((data) => {
        console.log(`${data.id} \t ${data.nama} \t ${data.diresmikan} \t ${data.pulau}`);
      });

      console.log(`----------------------------------------------------------`);
      result.forEach((data) => {
        console.log(`${data.nama} -> ${data.pulau}`);
      });

      const dataProvinsi = result

      res.render('index', {provinsi: dataProvinsi})
    });

})


const port = 8080
app.listen(port, function() {
    console.log(`Server running on port: ${port}`)
})