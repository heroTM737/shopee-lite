migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gf7ljgbiv6t1knh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "43ekjbcm",
    "name": "images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 99,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gf7ljgbiv6t1knh")

  // remove
  collection.schema.removeField("43ekjbcm")

  return dao.saveCollection(collection)
})
