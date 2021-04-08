const express = require('express')
const app = express()
const PORT = 5000
const multer = require('multer')
const upload = multer({ dest: './uploads/' })
const fs = require('fs')
const cors = require('cors')

app.use('/static', express.static('./uploads'))
app.use(cors())

app.post('/uploads', upload.single('my_file'), (req, res) => {
  let fileType = req.file.mimetype.split('/')[1]
  let newFileName = req.file.filename + '.' + fileType
  fs.rename(
    `./uploads/${req.file.filename}`,
    `./uploads/${newFileName}`,
    () => {
      return res.status(200).json('uploaded')
    },
  )
})

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
