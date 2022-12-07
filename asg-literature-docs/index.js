const fs = require('fs')
// const {str} = require('./dyncamic-comp-ids')
const {data} = require('./data')
const writer = fs.createWriteStream('./ouput.txt')
let str = 'Filename\tsiteTypes\taudiences\tproductTypes\tdocTypes\tassetClasses\tshareClasses\ttaNumbers\tfundAccountingIds\tdocumentUrl\n'
let i = 0

writer.write(str)
for(const result of data.results) {
  i++
  const edoc = result.electronicDocument
  const filename = edoc.title
  const fileUrl = !edoc.DocumentUrl ? '-' : edoc.DocumentUrl.a['@href']
  const metadata = edoc.metaDataFields
  const siteTypes = !metadata.SiteTypes ? ['-none-'] : metadata.SiteTypes.SiteType
  const audiences = !metadata.Audiences ? ['-none-'] : metadata.Audiences.Audience
  const productTypes = !metadata.ProductTypes ? ['-none-'] : metadata.ProductTypes.ProductType
  const docType = !metadata.DocumentTypes ? ['-none-'] : metadata.DocumentTypes.DocumentType
  const assetClasses = !metadata.AssetClasses ? ['-none-'] : metadata.AssetClasses.AssetClass
  const shareClasses = !metadata.ShareClasses ? ['-none-'] : metadata.ShareClasses.ShareClass
  const taNumbers = !metadata.TANumbers ? ['-none-'] : metadata.TANumbers.TANumber
  const fundAccountingIds = !metadata.FundAccountingIds ? ['-none-'] : metadata.FundAccountingIds.FundAccountingId
  const documentUrl = fileUrl

  // writer.write('\n')
  // console.log('\n')
  str = 
    `${filename}\t` +
    `${ Array.isArray(siteTypes) ? siteTypes.join(',') : siteTypes }\t` +
    `${ Array.isArray(audiences) ? audiences.join(',') : audiences }\t` +
    `${ Array.isArray(productTypes) ? productTypes.join(',') : productTypes }\t` +
    `${ Array.isArray(docType) ? docType.join(',') : docType }\t` +
    `${ Array.isArray(assetClasses) ? assetClasses.join(',') : assetClasses }\t` +
    `${ Array.isArray(shareClasses) ? shareClasses.join(',') : shareClasses }\t` +
    `${ Array.isArray(taNumbers) ? taNumbers.join(',') : taNumbers }\t` +
    `${ Array.isArray(fundAccountingIds) ? fundAccountingIds.join(',') : fundAccountingIds }\t` +
    `${ documentUrl}\n`

  writer.write(str)
  // if(i>31) break

  // `${filename}\t${siteTypes.join(',')}\t
  // ${audiences.join(',')}\t
  // ${docTypes.join(',')}\t
  // ${assetClasses.join(',')}\t
  // ${shareClasses.join(',')}\t
  // ${documentUrl}\n`)
}
