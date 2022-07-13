import express from 'express';
import hbs from 'hbs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import db from './connection/db_config.js'
import upload from './middlewares/uploadFile.js'

const app = express()
const __filename = fileURLToPath(
    import.meta.url
);
const __dirname = dirname(__filename);

app.use('/public', express.static(__dirname + '/public'))
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'hbs')


app.get('/', (req, res) => {

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

      const fetchProvinsi = dataProvinsi.map((data) => {
        data.photo = '/uploads/' + data.photo
        return data
      })

      res.render('index', {provinsi: fetchProvinsi})
    });

})

app.get('/add-province', (req, res) => {
    res.render('addprovince')
})

app.post('/addprovince', upload.single('photo'), (req, res) => {

    let nama = req.body.nama
    let diresmikan = req.body.diresmikan
    let photo = req.file.filename
    let pulau = req.body.pulau

    const sql = `INSERT INTO provinsi_tb (nama, diresmikan, photo, pulau) VALUES ('${nama}', '${diresmikan}', '${photo}', '${pulau}');`;

    db.query(sql, function (err, result) {
      if (err) throw err;

      res.redirect('/')
      })

})

app.get('/update-province/:id', (req, res) => {

    let id = req.params.id

    const sql = `SELECT * FROM provinsi_tb WHERE id=${id}`;

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
  
        const fetchProvinsi = dataProvinsi.map((data) => {
          data.photo = '/uploads/' + data.photo
          return data
        })
  
        res.render('updateprovince', {provinsi: fetchProvinsi, id: id})
      });
  
})

app.post('/updateprovince/:id', upload.single('photo'), (req, res) => {

    const id = req.params.id

    let nama = req.body.nama
    let diresmikan = req.body.diresmikan
    let photo = req.file.filename
    let pulau = req.body.pulau

    const sql = `UPDATE provinsi_tb SET nama='${nama}', diresmikan='${diresmikan}', photo='${photo}', pulau='${pulau}' WHERE provinsi_tb.id='${id}'`;

    db.query(sql, function (err, result) {
      if (err) throw err;

      res.redirect('/')
      })

})


const port = 8080
app.listen(port, function() {
    console.log(`Server running on port: ${port}`)
})