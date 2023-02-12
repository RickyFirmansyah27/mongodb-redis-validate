# mongodb-redis-validate
Backedn API dengan database mongoDB dan redis chace untuk menyimpan data dari database ke redis. sehingga untuk pemanggilan berikutnya tidak mengarah ke Database

### Install Package
Instalasi semua package yang diperlukan dalam menjalankan miniapp
```bash
npm install
```


### Run
Note : server running pada port 5000 
```bash
nodemon app
```
---------


#### Endpoint Express
```bash
GET localhost:5000/users
GET localhost:5000/users/1
POST localhost:5000/users
PATCH localhost:5000/users/1
DELETE localhost:5000/users/1
```

#### Endpoint Express
```bash
GET localhost:5000/buku
GET localhost:5000/buku/1
POST localhost:5000/buku
PATCH localhost:5000/buku/1
DELETE localhost:5000/buku/1
```

#### Endpoint MongoDB
```bash
GET localhost:5000/Contents
GET localhost:5000/Contents/63e5c89fa98d8f48c4c38632
POST localhost:5000/Contents
PATCH localhost:5000/Contents/1
DELETE localhost:5000/Contents/1
```

Note : untuk pengambilan user buku dari database dilakukan saat pertama kali
pemanggilan, selanjutnya menggunakan chace yang tersimpan di redis

```bash
POST  http://localhost:5000/users
Content-Type: application/json

{
    "name": "azemaru",
    "email": "azemaru@node.com",
    "gender": "Laki-Laki"   
}


###
POST  http://localhost:5000/buku
Content-Type: application/json

{
    "judul": "Fullstact",
    "penulis": "admin fullstact",
    "tahun": "2023"   
}

###
GET http://localhost:5000/users

###
GET http://localhost:5000/buku

###
GET http://localhost:5000/Contents




//Check Pemanggilan
###
GET http://localhost:5000/NoBook

###
GET http://localhost:5000/users/books/2


//Redis Chace
###
GET http://localhost:5000/users/checkusers/2

###
GET http://localhost:5000/users/checkbooks/2

---------




