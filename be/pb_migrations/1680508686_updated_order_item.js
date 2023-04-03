migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("94967dqg1mtz98z")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("94967dqg1mtz98z")

  collection.createRule = null

  return dao.saveCollection(collection)
})
