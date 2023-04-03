migrate((db) => {
  const collection = new Collection({
    "id": "j862y05ia0yrqpx",
    "created": "2023-04-03 04:35:29.245Z",
    "updated": "2023-04-03 04:35:29.245Z",
    "name": "cart_item",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fqlktakk",
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
        "id": "vd0mykvd",
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
        "id": "ht0iovk4",
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
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id = user_id",
    "viewRule": "@request.auth.id = user_id",
    "createRule": "",
    "updateRule": "@request.auth.id = user_id",
    "deleteRule": "@request.auth.id = user_id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j862y05ia0yrqpx");

  return dao.deleteCollection(collection);
})
