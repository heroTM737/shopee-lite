migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gf7ljgbiv6t1knh")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gf7ljgbiv6t1knh")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
