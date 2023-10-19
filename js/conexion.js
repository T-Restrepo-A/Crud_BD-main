const mysql = require ('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'crud'
})

connection.connect((err)=>{
    if(err) throw err
    console.log('conexion establecida exitosamente')
})

connection.query('selec * from tbl_productos', (err, rows)=>{
    if (err) throw err
    console.log('Los datos solicitados son:')
    console.log(rows)
})

connection.end()