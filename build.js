const fs = require('fs')
const minify = require('html-minifier').minify

console.log('reading img directory 📂  ...')

const images = fs.readdirSync('./img')
  .map(uri => `<li><img src="/img/${uri}" /></li>`)
  .join()

console.log('reading template 📂  ...')

const template = fs.readFileSync('./template.html', { encoding: 'utf8' })

console.log('minifying and writing to file ✏️  ...')

const output = minify(
  template.replace('{{images}}', images),
  {
    minifyCSS: true,
    minifyJS: true,
    useShortDoctype: true,
    removeAttributeQuotes: true,
    collapseWhitespace: true,
  },
)

fs.writeFileSync('index.html', output, { encoding: 'utf8' })

console.log('Images inserted into index.html! 🎉 ')