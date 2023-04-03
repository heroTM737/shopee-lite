migrate((db) => {
  const collection = new Collection({
    "id": "94967dqg1mtz98z",
    "created": "2023-04-03 04:36:13.853Z",
    "updated": "2023-04-03 04:36:13.853Z",
    "name": "order_item",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "2ujmwfou",
        "name": "product_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "gf7ljgbiv6t1knh",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "klwkmmly",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "mcxfhdu3",
        "name": "quantity",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "jktzvf6v",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id = user_id",
    "viewRule": "@request.auth.id = user_id",
    "createRule": null,
    "updateRule": "@request.auth.id = user_id",
    "deleteRule": "@request.auth.id = user_id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("94967dqg1mtz98z");

  return dao.deleteCollection(collection);
})
