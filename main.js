const fs = require('fs')
const {str} = require('./dyncamic-comp-ids')
const {data} = require('./components-data')
const ids = str.split(/\n/)
console.log(ids.length, data['141-100983'])

const writer = fs.createWriteStream('./ouput.txt')
for(const id of ids) {
  if(!id){
    writer.write('\n')
    console.log('\n')    
  }
  if(!data[id])
    continue
  // else..
  writer.write(`${id}\t${data[id].name}\n`)
  console.log(`${id}\t${data[id].name}\n`)
}
