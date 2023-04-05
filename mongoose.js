const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
app.use(express.static('pages'));
mongoose
  .connect(
    'mongodb+srv://habilyusuf:yusuf_2003@rehber.olhurvq.mongodb.net/rehber',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('MongoDB bağlantısı başarılı');
  })
  .catch((err) => {
    console.log('MongoDB bağlantı hatası: ' + err);
  });

app.use(express.json());
const kisiSchema = new mongoose.Schema({
  ad: String,
  telefon: String,
  email: String,
});

// veriyi veritabanına kaydetme
const Kisi = mongoose.model('users', kisiSchema);
app.post('/users', async (req, res) => {
  const { name, email, phone } = req.body;

  // Veri doğrulama işlemi burada yapılabilir

  const yeniKisi = new Kisi({
    ad: name,
    telefon: phone,
    email: email,
  });

  await yeniKisi.save();

  res.status(201).json(yeniKisi);
});
app.get('/users', async (req, res) => {
  const kisiler = await Kisi.find({});
  res.send(kisiler);
});
app.listen(port, () => {
  console.log(`Web uygulaması çalışıyor`);
});

exports = mongoose;
