const fs = require('fs').promises
const path = require('path')

const readFile = (path) => {
   return  fs.readFile(path,'utf-8')
}
const writeFile = (path,content) => {
  return  fs.writeFile(path,content,'utf-8')
}
const renameFile = (path,newPath) => {
  return fs.rename(path,newPath)
}
const deleteFile = (path) => {
  return fs.unlink(path)
}