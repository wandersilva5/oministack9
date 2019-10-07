const multer = require('multer');
const path   = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..' ,'..' , 'uploads'),
        filename: (res, file, callback) =>{
            const ext  = path.extname(file.originalname);//extenção do arquivo
            const name = path.basename(file.originalname, ext); // nome do arquivo
            

            callback(null, `${name}-${Date.now()}${ext}`)
        }
    })
};