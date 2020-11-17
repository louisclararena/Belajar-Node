const express = require('express')
const app = express()
const models = require('./models')

app.use(express.json())

app.get('/', function(req,res){
    res.send({
        messages : 'success',
        body : 'hore berhasil'
    })
})

app.get('/buku', function(req,res){
models.Buku.findAll().then(function(buku){
    res.send(buku)
})
})
app.post('/buku', function(req,res){
    models.Buku.create({
        title : req.body.title,
        year : req.body.year

    }).then(function(data){
        res.send(data)
    }).catch(function(error){
        res.send(error)
    })
})

app.get('/data', function(req,res){
    models.data.findAll().then(function(data){
        res.send(data)
    })
})

app.post('/data', function(req,res){
    models.data.create({
        nama : req.body.nama,
        asal_sekolah : req.body.asal_sekolah,
        nomor_peserta : req.body.nomor_peserta,
        alamat : req.body.alamat,
        telepon : req.body.telepon
    }).then(function(data){
        res.send(data)
    }).catch(function(error){
        res.send(error)
    })
})

app.listen(7000, function(){
    console.log('Berhasil')
})