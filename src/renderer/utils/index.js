const fs = require('fs').promises
const path = require('path')
const path = window.require('path')
const {remote} = window.require('electron')
// 自定义一个当前磁盘里存放文件的路径

export  const savedPath = remote.app.getPath('documents') + '/testMK'
console.log(savedPath)
export const readFile = (path) => {
   return  fs.readFile(path,'utf-8')
}
export const writeFile = (path,content) => {
  return  fs.writeFile(path,content,'utf-8')
}
export const renameFile = (path,newPath) => {
  return fs.rename(path,newPath)
}
export const deleteFile = (path) => {
  return fs.unlink(path)
}