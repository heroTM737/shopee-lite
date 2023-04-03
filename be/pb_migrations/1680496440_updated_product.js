migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gf7ljgbiv6t1knh")

  collection.updateRule = "@request.auth.id = user_id"
  collection.deleteRule = "@request.auth.id = user_id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gf7ljgbiv6t1knh")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
