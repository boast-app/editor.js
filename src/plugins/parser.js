const hljs = require('highlight.js')

const md = require('markdown-it')({
  langPrefix:'hljs language-',
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {console.error('MarkdownParse Error')}
    }
    return '';
  }
})

export default md