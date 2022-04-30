const fs = require('fs')
const imageRegex = /(.*)\.(gif|jpe?g|png|)$/i
const thumbnail = 'thumbnail'

fs.readdir('./src/media', function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    console.log(createImageIndex(files).join())
});

function createImageIndex(files) {
    const images = []
    files.map(file => {

        if(imageRegex.test(file)) {
            if(!file.toLowerCase().includes(thumbnail)) {
                const fileSlug = file.match(imageRegex)[1]
                const fileThumbnail = files.find(element => {
                    return element.includes(fileSlug) && element.toLowerCase().includes(thumbnail)
                })

                if(fileThumbnail) {
                    images.push(`{
                        original: require("./${file}"),
                        thumbnail: require("./${fileThumbnail}")
                    }`)
                }
            }
            
        }

    })
    return images
}