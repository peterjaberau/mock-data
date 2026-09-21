export default [
    {
        "path": "/settings/roles/public/:permissionKey",
        "meta": {},
        "props": {
            "permissionsDetail": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "permissionsDetail": {
                "__name": "permissions-detail",
                "props": {
                    "permissionKey": {
                        "required": true
                    },
                    "roleKey": {
                        "required": false
                    }
                },
                "emits": [
                    "refresh"
                ],
                "__hmrId": "c9e0fc86",
                "__scopeId": "data-v-c9e0fc86",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/permissions-detail/permissions-detail.vue"
            }
        }
    },
    {
        "path": "/settings/data-model/+",
        "name": "settings-add-new",
        "meta": {},
        "props": {
            "add": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "add": {
                "__name": "new-collection",
                "__hmrId": "1e09fb68",
                "__scopeId": "data-v-1e09fb68",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/new-collection.vue"
            }
        }
    },
    {
        "path": "/settings/roles/+",
        "name": "settings-add-new-role",
        "meta": {},
        "props": {
            "add": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "add": {
                "__name": "add-new",
                "__hmrId": "afe99975",
                "__scopeId": "data-v-afe99975",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/add-new.vue"
            }
        }
    },
    {
        "path": "/settings/roles/public",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [
            {
                "path": ":permissionKey",
                "components": {
                    "permissionsDetail": {
                        "__name": "permissions-detail",
                        "props": {
                            "permissionKey": {
                                "required": true
                            },
                            "roleKey": {
                                "required": false
                            }
                        },
                        "emits": [
                            "refresh"
                        ],
                        "__hmrId": "c9e0fc86",
                        "__scopeId": "data-v-c9e0fc86",
                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/permissions-detail/permissions-detail.vue"
                    }
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "public-item",
                "props": {
                    "permissionKey": {
                        "required": false
                    }
                },
                "__hmrId": "ca2c6178",
                "__scopeId": "data-v-ca2c6178",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/public-item.vue"
            }
        }
    },
    {
        "path": "/files/folders/:folder/+",
        "name": "add-file-folder",
        "meta": {},
        "props": {
            "addNew": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "addNew": {
                "__name": "add-new",
                "props": {
                    "folder": {
                        "required": false
                    }
                },
                "__hmrId": "a6b07b72",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/add-new.vue"
            }
        }
    },
    {
        "path": "/users/roles/:role/+",
        "name": "roles-item-add",
        "meta": {},
        "props": {},
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "item",
                "props": {
                    "primaryKey": {
                        "required": true
                    },
                    "role": {
                        "required": false
                    }
                },
                "__hmrId": "92cc35db",
                "__scopeId": "data-v-92cc35db",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/users/routes/item.vue"
            }
        }
    },
    {
        "path": "/settings/data-model/:collection/:field",
        "name": "settings-fields-field",
        "meta": {},
        "props": {
            "field": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "field": {
                "__name": "field-detail",
                "props": {
                    "collection": {
                        "required": true
                    },
                    "field": {
                        "required": true
                    },
                    "type": {
                        "type": null,
                        "required": true,
                        "default": null
                    }
                },
                "__hmrId": "0e5f3548",
                "__scopeId": "data-v-0e5f3548",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/field-detail/field-detail.vue"
            }
        }
    },
    {
        "path": "/settings/roles/:primaryKey/:permissionKey",
        "meta": {},
        "props": {
            "permissionsDetail": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "permissionsDetail": {
                "__name": "permissions-detail",
                "props": {
                    "permissionKey": {
                        "required": true
                    },
                    "roleKey": {
                        "required": false
                    }
                },
                "emits": [
                    "refresh"
                ],
                "__hmrId": "c9e0fc86",
                "__scopeId": "data-v-c9e0fc86",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/permissions-detail/permissions-detail.vue"
            }
        }
    },
    {
        "path": "/settings/flows/:primaryKey/:operationId",
        "name": "settings-flows-operation",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "operation-detail",
                "props": {
                    "primaryKey": {
                        "required": true
                    },
                    "operationId": {
                        "required": true
                    },
                    "operation": {
                        "required": false
                    },
                    "existingOperationKeys": {
                        "required": false
                    },
                    "flow": {
                        "required": true
                    }
                },
                "emits": [
                    "save",
                    "cancel"
                ],
                "__hmrId": "bb8579d9",
                "__scopeId": "data-v-bb8579d9",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/flows/components/operation-detail.vue"
            }
        }
    },
    {
        "path": "/files/folders/:folder",
        "name": "folders-collection",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [
            {
                "path": "+",
                "name": "add-file-folder",
                "components": {
                    "addNew": {
                        "__name": "add-new",
                        "props": {
                            "folder": {
                                "required": false
                            }
                        },
                        "__hmrId": "a6b07b72",
                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/add-new.vue"
                    }
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "props": {
                    "folder": {
                        "required": false
                    },
                    "special": {
                        "required": false
                    }
                },
                "__hmrId": "9c3ecc97",
                "__scopeId": "data-v-9c3ecc97",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/collection.vue"
            }
        }
    },
    {
        "path": "/settings/data-model/:collection",
        "name": "settings-fields",
        "meta": {},
        "props": {},
        "children": [
            {
                "path": ":field",
                "name": "settings-fields-field",
                "components": {
                    "field": {
                        "__name": "field-detail",
                        "props": {
                            "collection": {
                                "required": true
                            },
                            "field": {
                                "required": true
                            },
                            "type": {
                                "type": null,
                                "required": true,
                                "default": null
                            }
                        },
                        "__hmrId": "0e5f3548",
                        "__scopeId": "data-v-0e5f3548",
                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/field-detail/field-detail.vue"
                    }
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "fields",
                "props": {
                    "collection": {
                        "required": true
                    },
                    "field": {
                        "required": false
                    },
                    "type": {
                        "required": false
                    }
                },
                "__hmrId": "53017c43",
                "__scopeId": "data-v-53017c43",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/fields/fields.vue"
            }
        }
    },
    {
        "path": "/settings/roles/:primaryKey",
        "name": "settings-roles-item",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [
            {
                "path": ":permissionKey",
                "components": {
                    "permissionsDetail": {
                        "__name": "permissions-detail",
                        "props": {
                            "permissionKey": {
                                "required": true
                            },
                            "roleKey": {
                                "required": false
                            }
                        },
                        "emits": [
                            "refresh"
                        ],
                        "__hmrId": "c9e0fc86",
                        "__scopeId": "data-v-c9e0fc86",
                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/permissions-detail/permissions-detail.vue"
                    }
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "item",
                "props": {
                    "primaryKey": {
                        "required": true
                    },
                    "permissionKey": {
                        "required": false
                    },
                    "lastAdminRoleId": {
                        "required": false
                    }
                },
                "__hmrId": "b12a75ea",
                "__scopeId": "data-v-b12a75ea",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/item/item.vue"
            }
        }
    },
    {
        "path": "/settings/presets/:id",
        "name": "settings-presets-item",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "item",
                "props": {
                    "id": {
                        "type": [
                            null,
                            null
                        ],
                        "required": false,
                        "default": null
                    }
                },
                "__hmrId": "8f45249f",
                "__scopeId": "data-v-8f45249f",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/presets/item.vue"
            }
        }
    },
    {
        "path": "/settings/webhooks/:primaryKey",
        "name": "settings-webhooks-item",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "item",
                "props": {
                    "primaryKey": {
                        "required": true
                    }
                },
                "__hmrId": "cba513df",
                "__scopeId": "data-v-cba513df",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/webhooks/item.vue"
            }
        }
    },
    {
        "path": "/settings/flows/:primaryKey",
        "name": "settings-flows-item",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [
            {
                "name": "settings-flows-operation",
                "path": ":operationId",
                "component": {
                    "__name": "operation-detail",
                    "props": {
                        "primaryKey": {
                            "required": true
                        },
                        "operationId": {
                            "required": true
                        },
                        "operation": {
                            "required": false
                        },
                        "existingOperationKeys": {
                            "required": false
                        },
                        "flow": {
                            "required": true
                        }
                    },
                    "emits": [
                        "save",
                        "cancel"
                    ],
                    "__hmrId": "bb8579d9",
                    "__scopeId": "data-v-bb8579d9",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/flows/components/operation-detail.vue"
                },
                "props": true
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "flow",
                "props": {
                    "primaryKey": {
                        "required": true
                    },
                    "operationId": {
                        "required": false
                    }
                },
                "__hmrId": "7885c29f",
                "__scopeId": "data-v-7885c29f",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/flows/flow.vue"
            }
        }
    },
    {
        "path": "/settings/translations/:primaryKey",
        "name": "settings-translations-item",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "item",
                "props": {
                    "primaryKey": {
                        "type": [
                            null,
                            null
                        ],
                        "required": false,
                        "default": null
                    }
                },
                "__hmrId": "f400b11c",
                "__scopeId": "data-v-f400b11c",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/translations/item.vue"
            }
        }
    },
    {
        "path": "/users/roles/:role",
        "name": "roles-collection",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "props": {
                    "role": {
                        "required": false
                    }
                },
                "__hmrId": "0672b942",
                "__scopeId": "data-v-0672b942",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/users/routes/collection.vue"
            }
        }
    },
    {
        "path": "/files/+",
        "name": "add-file",
        "meta": {},
        "props": {
            "addNew": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "addNew": {
                "__name": "add-new",
                "props": {
                    "folder": {
                        "required": false
                    }
                },
                "__hmrId": "a6b07b72",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/add-new.vue"
            }
        }
    },
    {
        "path": "/files/folders",
        "redirect": "/files",
        "meta": {},
        "props": {},
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {}
    },
    {
        "path": "/files/all",
        "meta": {},
        "props": {
            "default": {
                "special": "all"
            }
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "props": {
                    "folder": {
                        "required": false
                    },
                    "special": {
                        "required": false
                    }
                },
                "__hmrId": "9c3ecc97",
                "__scopeId": "data-v-9c3ecc97",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/collection.vue"
            }
        }
    },
    {
        "path": "/files/mine",
        "meta": {},
        "props": {
            "default": {
                "special": "mine"
            }
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "props": {
                    "folder": {
                        "required": false
                    },
                    "special": {
                        "required": false
                    }
                },
                "__hmrId": "9c3ecc97",
                "__scopeId": "data-v-9c3ecc97",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/collection.vue"
            }
        }
    },
    {
        "path": "/files/recent",
        "meta": {},
        "props": {
            "default": {
                "special": "recent"
            }
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "props": {
                    "folder": {
                        "required": false
                    },
                    "special": {
                        "required": false
                    }
                },
                "__hmrId": "9c3ecc97",
                "__scopeId": "data-v-9c3ecc97",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/collection.vue"
            }
        }
    },
    {
        "path": "/settings/project",
        "name": "settings-project",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "project",
                "__hmrId": "5e420fb1",
                "__scopeId": "data-v-5e420fb1",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/project/project.vue"
            }
        }
    },
    {
        "path": "/settings/appearance",
        "name": "settings-appearance",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "item",
                "__hmrId": "d9f3fb09",
                "__scopeId": "data-v-d9f3fb09",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/appearance/item.vue"
            }
        }
    },
    {
        "path": "/settings/data-model",
        "name": "settings-collections",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "path": "+",
                "name": "settings-add-new",
                "components": {
                    "add": {
                        "__name": "new-collection",
                        "__hmrId": "1e09fb68",
                        "__scopeId": "data-v-1e09fb68",
                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/new-collection.vue"
                    }
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collections",
                "__hmrId": "9098f2ea",
                "__scopeId": "data-v-9098f2ea",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/collections/collections.vue"
            }
        }
    },
    {
        "path": "/settings/data-model",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "settings-collections",
                "path": "",
                "component": {
                    "__name": "collections",
                    "__hmrId": "9098f2ea",
                    "__scopeId": "data-v-9098f2ea",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/collections/collections.vue"
                },
                "children": [
                    {
                        "path": "+",
                        "name": "settings-add-new",
                        "components": {
                            "add": {
                                "__name": "new-collection",
                                "__hmrId": "1e09fb68",
                                "__scopeId": "data-v-1e09fb68",
                                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/new-collection.vue"
                            }
                        }
                    }
                ]
            },
            {
                "name": "settings-fields",
                "path": ":collection",
                "component": {
                    "__name": "fields",
                    "props": {
                        "collection": {
                            "required": true
                        },
                        "field": {
                            "required": false
                        },
                        "type": {
                            "required": false
                        }
                    },
                    "__hmrId": "53017c43",
                    "__scopeId": "data-v-53017c43",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/fields/fields.vue"
                },
                "children": [
                    {
                        "path": ":field",
                        "name": "settings-fields-field",
                        "components": {
                            "field": {
                                "__name": "field-detail",
                                "props": {
                                    "collection": {
                                        "required": true
                                    },
                                    "field": {
                                        "required": true
                                    },
                                    "type": {
                                        "type": null,
                                        "required": true,
                                        "default": null
                                    }
                                },
                                "__hmrId": "0e5f3548",
                                "__scopeId": "data-v-0e5f3548",
                                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/field-detail/field-detail.vue"
                            }
                        }
                    }
                ]
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/settings/roles",
        "name": "settings-roles-collection",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "path": "+",
                "name": "settings-add-new-role",
                "components": {
                    "add": {
                        "__name": "add-new",
                        "__hmrId": "afe99975",
                        "__scopeId": "data-v-afe99975",
                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/add-new.vue"
                    }
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "__hmrId": "c996fb7a",
                "__scopeId": "data-v-c996fb7a",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/collection.vue"
            }
        }
    },
    {
        "path": "/settings/roles",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "settings-roles-collection",
                "path": "",
                "component": {
                    "__name": "collection",
                    "__hmrId": "c996fb7a",
                    "__scopeId": "data-v-c996fb7a",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/collection.vue"
                },
                "children": [
                    {
                        "path": "+",
                        "name": "settings-add-new-role",
                        "components": {
                            "add": {
                                "__name": "add-new",
                                "__hmrId": "afe99975",
                                "__scopeId": "data-v-afe99975",
                                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/add-new.vue"
                            }
                        }
                    }
                ]
            },
            {
                "path": "public",
                "component": {
                    "__name": "public-item",
                    "props": {
                        "permissionKey": {
                            "required": false
                        }
                    },
                    "__hmrId": "ca2c6178",
                    "__scopeId": "data-v-ca2c6178",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/public-item.vue"
                },
                "props": true,
                "children": [
                    {
                        "path": ":permissionKey",
                        "components": {
                            "permissionsDetail": {
                                "__name": "permissions-detail",
                                "props": {
                                    "permissionKey": {
                                        "required": true
                                    },
                                    "roleKey": {
                                        "required": false
                                    }
                                },
                                "emits": [
                                    "refresh"
                                ],
                                "__hmrId": "c9e0fc86",
                                "__scopeId": "data-v-c9e0fc86",
                                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/permissions-detail/permissions-detail.vue"
                            }
                        }
                    }
                ]
            },
            {
                "name": "settings-roles-item",
                "path": ":primaryKey",
                "component": {
                    "__name": "item",
                    "props": {
                        "primaryKey": {
                            "required": true
                        },
                        "permissionKey": {
                            "required": false
                        },
                        "lastAdminRoleId": {
                            "required": false
                        }
                    },
                    "__hmrId": "b12a75ea",
                    "__scopeId": "data-v-b12a75ea",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/item/item.vue"
                },
                "props": true,
                "children": [
                    {
                        "path": ":permissionKey",
                        "components": {
                            "permissionsDetail": {
                                "__name": "permissions-detail",
                                "props": {
                                    "permissionKey": {
                                        "required": true
                                    },
                                    "roleKey": {
                                        "required": false
                                    }
                                },
                                "emits": [
                                    "refresh"
                                ],
                                "__hmrId": "c9e0fc86",
                                "__scopeId": "data-v-c9e0fc86",
                                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/permissions-detail/permissions-detail.vue"
                            }
                        }
                    }
                ]
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/settings/presets",
        "name": "settings-presets-collection",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "__hmrId": "610c2cb7",
                "__scopeId": "data-v-610c2cb7",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/presets/collection/collection.vue"
            }
        }
    },
    {
        "path": "/settings/presets",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "settings-presets-collection",
                "path": "",
                "component": {
                    "__name": "collection",
                    "__hmrId": "610c2cb7",
                    "__scopeId": "data-v-610c2cb7",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/presets/collection/collection.vue"
                }
            },
            {
                "name": "settings-presets-item",
                "path": ":id",
                "component": {
                    "__name": "item",
                    "props": {
                        "id": {
                            "type": [
                                null,
                                null
                            ],
                            "required": false,
                            "default": null
                        }
                    },
                    "__hmrId": "8f45249f",
                    "__scopeId": "data-v-8f45249f",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/presets/item.vue"
                },
                "props": true
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/settings/webhooks",
        "name": "settings-webhooks-collection",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "__hmrId": "7b765dda",
                "__scopeId": "data-v-7b765dda",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/webhooks/collection.vue"
            }
        }
    },
    {
        "path": "/settings/webhooks",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "settings-webhooks-collection",
                "path": "",
                "component": {
                    "__name": "collection",
                    "__hmrId": "7b765dda",
                    "__scopeId": "data-v-7b765dda",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/webhooks/collection.vue"
                }
            },
            {
                "name": "settings-webhooks-item",
                "path": ":primaryKey",
                "component": {
                    "__name": "item",
                    "props": {
                        "primaryKey": {
                            "required": true
                        }
                    },
                    "__hmrId": "cba513df",
                    "__scopeId": "data-v-cba513df",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/webhooks/item.vue"
                },
                "props": true
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/settings/flows",
        "name": "settings-flows-collection",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "overview",
                "__hmrId": "efbe1844",
                "__scopeId": "data-v-efbe1844",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/flows/overview.vue"
            }
        }
    },
    {
        "path": "/settings/flows",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "settings-flows-collection",
                "path": "",
                "component": {
                    "__name": "overview",
                    "__hmrId": "efbe1844",
                    "__scopeId": "data-v-efbe1844",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/flows/overview.vue"
                }
            },
            {
                "name": "settings-flows-item",
                "path": ":primaryKey",
                "component": {
                    "__name": "flow",
                    "props": {
                        "primaryKey": {
                            "required": true
                        },
                        "operationId": {
                            "required": false
                        }
                    },
                    "__hmrId": "7885c29f",
                    "__scopeId": "data-v-7885c29f",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/flows/flow.vue"
                },
                "props": true,
                "children": [
                    {
                        "name": "settings-flows-operation",
                        "path": ":operationId",
                        "component": {
                            "__name": "operation-detail",
                            "props": {
                                "primaryKey": {
                                    "required": true
                                },
                                "operationId": {
                                    "required": true
                                },
                                "operation": {
                                    "required": false
                                },
                                "existingOperationKeys": {
                                    "required": false
                                },
                                "flow": {
                                    "required": true
                                }
                            },
                            "emits": [
                                "save",
                                "cancel"
                            ],
                            "__hmrId": "bb8579d9",
                            "__scopeId": "data-v-bb8579d9",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/flows/components/operation-detail.vue"
                        },
                        "props": true
                    }
                ]
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/settings/extensions",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "extensions",
                "__hmrId": "9da7e9aa",
                "__scopeId": "data-v-9da7e9aa",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/extensions/extensions.vue"
            }
        }
    },
    {
        "path": "/settings/translations",
        "name": "settings-translations-collection",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "props": {
                    "bookmark": {
                        "required": false
                    },
                    "archive": {
                        "required": false
                    }
                },
                "__hmrId": "f0500e84",
                "__scopeId": "data-v-f0500e84",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/translations/collection.vue"
            }
        }
    },
    {
        "path": "/settings/translations",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "settings-translations-collection",
                "path": "",
                "component": {
                    "__name": "collection",
                    "props": {
                        "bookmark": {
                            "required": false
                        },
                        "archive": {
                            "required": false
                        }
                    },
                    "__hmrId": "f0500e84",
                    "__scopeId": "data-v-f0500e84",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/translations/collection.vue"
                }
            },
            {
                "name": "settings-translations-item",
                "path": ":primaryKey",
                "component": {
                    "__name": "item",
                    "props": {
                        "primaryKey": {
                            "type": [
                                null,
                                null
                            ],
                            "required": false,
                            "default": null
                        }
                    },
                    "__hmrId": "f400b11c",
                    "__scopeId": "data-v-f400b11c",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/translations/item.vue"
                },
                "props": true
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/users/roles",
        "redirect": "/users",
        "meta": {},
        "props": {},
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {}
    },
    {
        "path": "/shared/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})",
        "name": "shared",
        "meta": {
            "public": true
        },
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__hmrId": "b3594797",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/routes/shared/shared.vue"
            }
        }
    },
    {
        "path": "/content/:collection/:primaryKey/preview",
        "name": "content-item-preview",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "preview",
                "props": {
                    "collection": {
                        "required": true
                    },
                    "primaryKey": {
                        "required": true
                    }
                },
                "__hmrId": "b28139c3",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/preview.vue"
            }
        }
    },
    {
        "path": "/content/:collection/:primaryKey",
        "name": "content-item",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "item",
                "props": {
                    "collection": {
                        "required": true
                    },
                    "primaryKey": {
                        "type": [
                            null,
                            null
                        ],
                        "required": false,
                        "default": null
                    },
                    "singleton": {
                        "required": false,
                        "default": false
                    }
                },
                "__hmrId": "d490aaf4",
                "__scopeId": "data-v-d490aaf4",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/item.vue"
            }
        }
    },
    {
        "path": "/insights/:primaryKey/:panelKey",
        "name": "panel-detail",
        "meta": {},
        "props": {
            "detail": true
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "detail": {
                "__name": "panel-configuration",
                "props": {
                    "dashboardKey": {
                        "required": true
                    },
                    "panelKey": {
                        "required": true
                    }
                },
                "__hmrId": "32fb2492",
                "__scopeId": "data-v-32fb2492",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/insights/routes/panel-configuration.vue"
            }
        }
    },
    {
        "path": "/activity/:primaryKey",
        "name": "activity-item",
        "meta": {},
        "props": {
            "detail": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "detail": {
                "__name": "item",
                "props": {
                    "primaryKey": {
                        "required": true
                    }
                },
                "__hmrId": "6899eb58",
                "__scopeId": "data-v-6899eb58",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/activity/routes/item.vue"
            }
        }
    },
    {
        "path": "/content/:collection",
        "name": "content-collection",
        "meta": {},
        "props": {},
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection-or-item",
                "props": {
                    "collection": {
                        "required": true
                    },
                    "bookmark": {
                        "required": false
                    },
                    "archive": {
                        "required": false
                    }
                },
                "__hmrId": "2b34f365",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/collection-or-item.vue"
            }
        }
    },
    {
        "path": "/content/:collection",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "content-collection",
                "path": "",
                "component": {
                    "__name": "collection-or-item",
                    "props": {
                        "collection": {
                            "required": true
                        },
                        "bookmark": {
                            "required": false
                        },
                        "archive": {
                            "required": false
                        }
                    },
                    "__hmrId": "2b34f365",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/collection-or-item.vue"
                }
            },
            {
                "name": "content-item",
                "path": ":primaryKey",
                "component": {
                    "__name": "item",
                    "props": {
                        "collection": {
                            "required": true
                        },
                        "primaryKey": {
                            "type": [
                                null,
                                null
                            ],
                            "required": false,
                            "default": null
                        },
                        "singleton": {
                            "required": false,
                            "default": false
                        }
                    },
                    "__hmrId": "d490aaf4",
                    "__scopeId": "data-v-d490aaf4",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/item.vue"
                },
                "props": true
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/files/:primaryKey",
        "name": "files-item",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "item",
                "props": {
                    "primaryKey": {
                        "required": true
                    }
                },
                "__hmrId": "c42fb832",
                "__scopeId": "data-v-c42fb832",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/item.vue"
            }
        }
    },
    {
        "path": "/insights/:primaryKey",
        "name": "insights-dashboard",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [
            {
                "name": "panel-detail",
                "path": ":panelKey",
                "props": true,
                "components": {
                    "detail": {
                        "__name": "panel-configuration",
                        "props": {
                            "dashboardKey": {
                                "required": true
                            },
                            "panelKey": {
                                "required": true
                            }
                        },
                        "__hmrId": "32fb2492",
                        "__scopeId": "data-v-32fb2492",
                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/insights/routes/panel-configuration.vue"
                    }
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "dashboard",
                "props": {
                    "primaryKey": {
                        "required": true
                    },
                    "panelKey": {
                        "type": [
                            null,
                            null
                        ],
                        "required": false,
                        "default": null
                    }
                },
                "__hmrId": "a0d583d5",
                "__scopeId": "data-v-a0d583d5",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/insights/routes/dashboard.vue"
            }
        }
    },
    {
        "path": "/users/:primaryKey",
        "name": "users-item",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "item",
                "props": {
                    "primaryKey": {
                        "required": true
                    },
                    "role": {
                        "required": false
                    }
                },
                "__hmrId": "92cc35db",
                "__scopeId": "data-v-92cc35db",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/users/routes/item.vue"
            }
        }
    },
    {
        "path": "/content/:_(.+)+",
        "name": "content-item-not-found",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "not-found",
                "__hmrId": "a707b760",
                "__scopeId": "data-v-a707b760",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/not-found.vue"
            }
        }
    },
    {
        "path": "/settings/:_(.+)+",
        "name": "settings-not-found",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "not-found",
                "__hmrId": "a346dff4",
                "__scopeId": "data-v-a346dff4",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/not-found.vue"
            }
        }
    },
    {
        "path": "/",
        "redirect": "/login",
        "meta": {},
        "props": {},
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {}
    },
    {
        "path": "/login",
        "name": "login",
        "meta": {
            "public": true
        },
        "props": {},
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/reset-password",
        "name": "reset-password",
        "meta": {
            "public": true
        },
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__hmrId": "d0279a8d",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/routes/reset-password/reset-password.vue"
            }
        }
    },
    {
        "path": "/accept-invite",
        "name": "accept-invite",
        "meta": {
            "public": true
        },
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__hmrId": "dd61326c",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/routes/accept-invite.vue"
            }
        }
    },
    {
        "path": "/tfa-setup",
        "name": "tfa-setup",
        "meta": {
            "track": false
        },
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__hmrId": "753ffb1b",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/routes/tfa-setup.vue"
            }
        }
    },
    {
        "path": "/logout",
        "name": "logout",
        "meta": {
            "public": true
        },
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__hmrId": "f2eebcbd",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/routes/logout.vue"
            }
        }
    },
    {
        "path": "/activity",
        "name": "activity-collection",
        "meta": {},
        "props": {
            "default": true
        },
        "children": [
            {
                "name": "activity-item",
                "path": ":primaryKey",
                "components": {
                    "detail": {
                        "__name": "item",
                        "props": {
                            "primaryKey": {
                                "required": true
                            }
                        },
                        "__hmrId": "6899eb58",
                        "__scopeId": "data-v-6899eb58",
                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/activity/routes/item.vue"
                    }
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "props": {
                    "primaryKey": {
                        "required": false
                    }
                },
                "__hmrId": "2ad03f10",
                "__scopeId": "data-v-2ad03f10",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/activity/routes/collection.vue"
            }
        }
    },
    {
        "path": "/activity",
        "name": "activity",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "activity-collection",
                "path": "",
                "component": {
                    "__name": "collection",
                    "props": {
                        "primaryKey": {
                            "required": false
                        }
                    },
                    "__hmrId": "2ad03f10",
                    "__scopeId": "data-v-2ad03f10",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/activity/routes/collection.vue"
                },
                "props": true,
                "children": [
                    {
                        "name": "activity-item",
                        "path": ":primaryKey",
                        "components": {
                            "detail": {
                                "__name": "item",
                                "props": {
                                    "primaryKey": {
                                        "required": true
                                    }
                                },
                                "__hmrId": "6899eb58",
                                "__scopeId": "data-v-6899eb58",
                                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/activity/routes/item.vue"
                            }
                        }
                    }
                ]
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/content",
        "name": "no-collections",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "no-collections",
                "__hmrId": "668d8a9c",
                "__scopeId": "data-v-668d8a9c",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/no-collections.vue"
            }
        }
    },
    {
        "path": "/content",
        "name": "content",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "no-collections",
                "path": "",
                "component": {
                    "__name": "no-collections",
                    "__hmrId": "668d8a9c",
                    "__scopeId": "data-v-668d8a9c",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/no-collections.vue"
                }
            },
            {
                "path": ":collection",
                "children": [
                    {
                        "name": "content-collection",
                        "path": "",
                        "component": {
                            "__name": "collection-or-item",
                            "props": {
                                "collection": {
                                    "required": true
                                },
                                "bookmark": {
                                    "required": false
                                },
                                "archive": {
                                    "required": false
                                }
                            },
                            "__hmrId": "2b34f365",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/collection-or-item.vue"
                        }
                    },
                    {
                        "name": "content-item",
                        "path": ":primaryKey",
                        "component": {
                            "__name": "item",
                            "props": {
                                "collection": {
                                    "required": true
                                },
                                "primaryKey": {
                                    "type": [
                                        null,
                                        null
                                    ],
                                    "required": false,
                                    "default": null
                                },
                                "singleton": {
                                    "required": false,
                                    "default": false
                                }
                            },
                            "__hmrId": "d490aaf4",
                            "__scopeId": "data-v-d490aaf4",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/item.vue"
                        },
                        "props": true
                    }
                ]
            },
            {
                "name": "content-item-preview",
                "path": ":collection/:primaryKey/preview",
                "component": {
                    "__name": "preview",
                    "props": {
                        "collection": {
                            "required": true
                        },
                        "primaryKey": {
                            "required": true
                        }
                    },
                    "__hmrId": "b28139c3",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/preview.vue"
                },
                "props": true
            },
            {
                "name": "content-item-not-found",
                "path": ":_(.+)+",
                "component": {
                    "__name": "not-found",
                    "__hmrId": "a707b760",
                    "__scopeId": "data-v-a707b760",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/content/routes/not-found.vue"
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/files",
        "name": "files-collection",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "path": "+",
                "name": "add-file",
                "components": {
                    "addNew": {
                        "__name": "add-new",
                        "props": {
                            "folder": {
                                "required": false
                            }
                        },
                        "__hmrId": "a6b07b72",
                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/add-new.vue"
                    }
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "props": {
                    "folder": {
                        "required": false
                    },
                    "special": {
                        "required": false
                    }
                },
                "__hmrId": "9c3ecc97",
                "__scopeId": "data-v-9c3ecc97",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/collection.vue"
            }
        }
    },
    {
        "path": "/files",
        "name": "files",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "files-collection",
                "path": "",
                "component": {
                    "__name": "collection",
                    "props": {
                        "folder": {
                            "required": false
                        },
                        "special": {
                            "required": false
                        }
                    },
                    "__hmrId": "9c3ecc97",
                    "__scopeId": "data-v-9c3ecc97",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/collection.vue"
                },
                "children": [
                    {
                        "path": "+",
                        "name": "add-file",
                        "components": {
                            "addNew": {
                                "__name": "add-new",
                                "props": {
                                    "folder": {
                                        "required": false
                                    }
                                },
                                "__hmrId": "a6b07b72",
                                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/add-new.vue"
                            }
                        }
                    }
                ]
            },
            {
                "name": "files-item",
                "path": ":primaryKey",
                "component": {
                    "__name": "item",
                    "props": {
                        "primaryKey": {
                            "required": true
                        }
                    },
                    "__hmrId": "c42fb832",
                    "__scopeId": "data-v-c42fb832",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/item.vue"
                },
                "props": true
            },
            {
                "path": "folders",
                "redirect": "/files"
            },
            {
                "name": "folders-collection",
                "path": "folders/:folder",
                "component": {
                    "__name": "collection",
                    "props": {
                        "folder": {
                            "required": false
                        },
                        "special": {
                            "required": false
                        }
                    },
                    "__hmrId": "9c3ecc97",
                    "__scopeId": "data-v-9c3ecc97",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/collection.vue"
                },
                "props": true,
                "children": [
                    {
                        "path": "+",
                        "name": "add-file-folder",
                        "components": {
                            "addNew": {
                                "__name": "add-new",
                                "props": {
                                    "folder": {
                                        "required": false
                                    }
                                },
                                "__hmrId": "a6b07b72",
                                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/add-new.vue"
                            }
                        }
                    }
                ]
            },
            {
                "path": "all",
                "component": {
                    "__name": "collection",
                    "props": {
                        "folder": {
                            "required": false
                        },
                        "special": {
                            "required": false
                        }
                    },
                    "__hmrId": "9c3ecc97",
                    "__scopeId": "data-v-9c3ecc97",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/collection.vue"
                },
                "props": {
                    "special": "all"
                }
            },
            {
                "path": "mine",
                "component": {
                    "__name": "collection",
                    "props": {
                        "folder": {
                            "required": false
                        },
                        "special": {
                            "required": false
                        }
                    },
                    "__hmrId": "9c3ecc97",
                    "__scopeId": "data-v-9c3ecc97",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/collection.vue"
                },
                "props": {
                    "special": "mine"
                }
            },
            {
                "path": "recent",
                "component": {
                    "__name": "collection",
                    "props": {
                        "folder": {
                            "required": false
                        },
                        "special": {
                            "required": false
                        }
                    },
                    "__hmrId": "9c3ecc97",
                    "__scopeId": "data-v-9c3ecc97",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/files/routes/collection.vue"
                },
                "props": {
                    "special": "recent"
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/insights",
        "name": "insights-overview",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "overview",
                "__hmrId": "b82dacfc",
                "__scopeId": "data-v-b82dacfc",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/insights/routes/overview.vue"
            }
        }
    },
    {
        "path": "/insights",
        "name": "insights",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "insights-overview",
                "path": "",
                "component": {
                    "__name": "overview",
                    "__hmrId": "b82dacfc",
                    "__scopeId": "data-v-b82dacfc",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/insights/routes/overview.vue"
                }
            },
            {
                "name": "insights-dashboard",
                "path": ":primaryKey",
                "component": {
                    "__name": "dashboard",
                    "props": {
                        "primaryKey": {
                            "required": true
                        },
                        "panelKey": {
                            "type": [
                                null,
                                null
                            ],
                            "required": false,
                            "default": null
                        }
                    },
                    "__hmrId": "a0d583d5",
                    "__scopeId": "data-v-a0d583d5",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/insights/routes/dashboard.vue"
                },
                "props": true,
                "children": [
                    {
                        "name": "panel-detail",
                        "path": ":panelKey",
                        "props": true,
                        "components": {
                            "detail": {
                                "__name": "panel-configuration",
                                "props": {
                                    "dashboardKey": {
                                        "required": true
                                    },
                                    "panelKey": {
                                        "required": true
                                    }
                                },
                                "__hmrId": "32fb2492",
                                "__scopeId": "data-v-32fb2492",
                                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/insights/routes/panel-configuration.vue"
                            }
                        }
                    }
                ]
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/settings",
        "redirect": "/settings/data-model",
        "name": "settings-data-model-redirect",
        "meta": {},
        "props": {},
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {}
    },
    {
        "path": "/settings",
        "name": "settings",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "settings-data-model-redirect",
                "path": "",
                "redirect": "/settings/data-model"
            },
            {
                "name": "settings-project",
                "path": "project",
                "component": {
                    "__name": "project",
                    "__hmrId": "5e420fb1",
                    "__scopeId": "data-v-5e420fb1",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/project/project.vue"
                }
            },
            {
                "name": "settings-appearance",
                "path": "appearance",
                "component": {
                    "__name": "item",
                    "__hmrId": "d9f3fb09",
                    "__scopeId": "data-v-d9f3fb09",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/appearance/item.vue"
                }
            },
            {
                "path": "data-model",
                "children": [
                    {
                        "name": "settings-collections",
                        "path": "",
                        "component": {
                            "__name": "collections",
                            "__hmrId": "9098f2ea",
                            "__scopeId": "data-v-9098f2ea",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/collections/collections.vue"
                        },
                        "children": [
                            {
                                "path": "+",
                                "name": "settings-add-new",
                                "components": {
                                    "add": {
                                        "__name": "new-collection",
                                        "__hmrId": "1e09fb68",
                                        "__scopeId": "data-v-1e09fb68",
                                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/new-collection.vue"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "settings-fields",
                        "path": ":collection",
                        "component": {
                            "__name": "fields",
                            "props": {
                                "collection": {
                                    "required": true
                                },
                                "field": {
                                    "required": false
                                },
                                "type": {
                                    "required": false
                                }
                            },
                            "__hmrId": "53017c43",
                            "__scopeId": "data-v-53017c43",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/fields/fields.vue"
                        },
                        "children": [
                            {
                                "path": ":field",
                                "name": "settings-fields-field",
                                "components": {
                                    "field": {
                                        "__name": "field-detail",
                                        "props": {
                                            "collection": {
                                                "required": true
                                            },
                                            "field": {
                                                "required": true
                                            },
                                            "type": {
                                                "type": null,
                                                "required": true,
                                                "default": null
                                            }
                                        },
                                        "__hmrId": "0e5f3548",
                                        "__scopeId": "data-v-0e5f3548",
                                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/data-model/field-detail/field-detail.vue"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "path": "roles",
                "children": [
                    {
                        "name": "settings-roles-collection",
                        "path": "",
                        "component": {
                            "__name": "collection",
                            "__hmrId": "c996fb7a",
                            "__scopeId": "data-v-c996fb7a",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/collection.vue"
                        },
                        "children": [
                            {
                                "path": "+",
                                "name": "settings-add-new-role",
                                "components": {
                                    "add": {
                                        "__name": "add-new",
                                        "__hmrId": "afe99975",
                                        "__scopeId": "data-v-afe99975",
                                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/add-new.vue"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "path": "public",
                        "component": {
                            "__name": "public-item",
                            "props": {
                                "permissionKey": {
                                    "required": false
                                }
                            },
                            "__hmrId": "ca2c6178",
                            "__scopeId": "data-v-ca2c6178",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/public-item.vue"
                        },
                        "props": true,
                        "children": [
                            {
                                "path": ":permissionKey",
                                "components": {
                                    "permissionsDetail": {
                                        "__name": "permissions-detail",
                                        "props": {
                                            "permissionKey": {
                                                "required": true
                                            },
                                            "roleKey": {
                                                "required": false
                                            }
                                        },
                                        "emits": [
                                            "refresh"
                                        ],
                                        "__hmrId": "c9e0fc86",
                                        "__scopeId": "data-v-c9e0fc86",
                                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/permissions-detail/permissions-detail.vue"
                                    }
                                }
                            }
                        ]
                    },
                    {
                        "name": "settings-roles-item",
                        "path": ":primaryKey",
                        "component": {
                            "__name": "item",
                            "props": {
                                "primaryKey": {
                                    "required": true
                                },
                                "permissionKey": {
                                    "required": false
                                },
                                "lastAdminRoleId": {
                                    "required": false
                                }
                            },
                            "__hmrId": "b12a75ea",
                            "__scopeId": "data-v-b12a75ea",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/item/item.vue"
                        },
                        "props": true,
                        "children": [
                            {
                                "path": ":permissionKey",
                                "components": {
                                    "permissionsDetail": {
                                        "__name": "permissions-detail",
                                        "props": {
                                            "permissionKey": {
                                                "required": true
                                            },
                                            "roleKey": {
                                                "required": false
                                            }
                                        },
                                        "emits": [
                                            "refresh"
                                        ],
                                        "__hmrId": "c9e0fc86",
                                        "__scopeId": "data-v-c9e0fc86",
                                        "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/roles/permissions-detail/permissions-detail.vue"
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "path": "presets",
                "children": [
                    {
                        "name": "settings-presets-collection",
                        "path": "",
                        "component": {
                            "__name": "collection",
                            "__hmrId": "610c2cb7",
                            "__scopeId": "data-v-610c2cb7",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/presets/collection/collection.vue"
                        }
                    },
                    {
                        "name": "settings-presets-item",
                        "path": ":id",
                        "component": {
                            "__name": "item",
                            "props": {
                                "id": {
                                    "type": [
                                        null,
                                        null
                                    ],
                                    "required": false,
                                    "default": null
                                }
                            },
                            "__hmrId": "8f45249f",
                            "__scopeId": "data-v-8f45249f",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/presets/item.vue"
                        },
                        "props": true
                    }
                ]
            },
            {
                "path": "webhooks",
                "children": [
                    {
                        "name": "settings-webhooks-collection",
                        "path": "",
                        "component": {
                            "__name": "collection",
                            "__hmrId": "7b765dda",
                            "__scopeId": "data-v-7b765dda",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/webhooks/collection.vue"
                        }
                    },
                    {
                        "name": "settings-webhooks-item",
                        "path": ":primaryKey",
                        "component": {
                            "__name": "item",
                            "props": {
                                "primaryKey": {
                                    "required": true
                                }
                            },
                            "__hmrId": "cba513df",
                            "__scopeId": "data-v-cba513df",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/webhooks/item.vue"
                        },
                        "props": true
                    }
                ]
            },
            {
                "path": "flows",
                "children": [
                    {
                        "name": "settings-flows-collection",
                        "path": "",
                        "component": {
                            "__name": "overview",
                            "__hmrId": "efbe1844",
                            "__scopeId": "data-v-efbe1844",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/flows/overview.vue"
                        }
                    },
                    {
                        "name": "settings-flows-item",
                        "path": ":primaryKey",
                        "component": {
                            "__name": "flow",
                            "props": {
                                "primaryKey": {
                                    "required": true
                                },
                                "operationId": {
                                    "required": false
                                }
                            },
                            "__hmrId": "7885c29f",
                            "__scopeId": "data-v-7885c29f",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/flows/flow.vue"
                        },
                        "props": true,
                        "children": [
                            {
                                "name": "settings-flows-operation",
                                "path": ":operationId",
                                "component": {
                                    "__name": "operation-detail",
                                    "props": {
                                        "primaryKey": {
                                            "required": true
                                        },
                                        "operationId": {
                                            "required": true
                                        },
                                        "operation": {
                                            "required": false
                                        },
                                        "existingOperationKeys": {
                                            "required": false
                                        },
                                        "flow": {
                                            "required": true
                                        }
                                    },
                                    "emits": [
                                        "save",
                                        "cancel"
                                    ],
                                    "__hmrId": "bb8579d9",
                                    "__scopeId": "data-v-bb8579d9",
                                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/flows/components/operation-detail.vue"
                                },
                                "props": true
                            }
                        ]
                    }
                ]
            },
            {
                "path": "extensions",
                "component": {
                    "__name": "extensions",
                    "__hmrId": "9da7e9aa",
                    "__scopeId": "data-v-9da7e9aa",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/extensions/extensions.vue"
                }
            },
            {
                "path": "translations",
                "children": [
                    {
                        "name": "settings-translations-collection",
                        "path": "",
                        "component": {
                            "__name": "collection",
                            "props": {
                                "bookmark": {
                                    "required": false
                                },
                                "archive": {
                                    "required": false
                                }
                            },
                            "__hmrId": "f0500e84",
                            "__scopeId": "data-v-f0500e84",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/translations/collection.vue"
                        }
                    },
                    {
                        "name": "settings-translations-item",
                        "path": ":primaryKey",
                        "component": {
                            "__name": "item",
                            "props": {
                                "primaryKey": {
                                    "type": [
                                        null,
                                        null
                                    ],
                                    "required": false,
                                    "default": null
                                }
                            },
                            "__hmrId": "f400b11c",
                            "__scopeId": "data-v-f400b11c",
                            "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/translations/item.vue"
                        },
                        "props": true
                    }
                ]
            },
            {
                "name": "settings-not-found",
                "path": ":_(.+)+",
                "component": {
                    "__name": "not-found",
                    "__hmrId": "a346dff4",
                    "__scopeId": "data-v-a346dff4",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/settings/routes/not-found.vue"
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/users",
        "name": "users-collection",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "collection",
                "props": {
                    "role": {
                        "required": false
                    }
                },
                "__hmrId": "0672b942",
                "__scopeId": "data-v-0672b942",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/users/routes/collection.vue"
            }
        }
    },
    {
        "path": "/users",
        "name": "users",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [
            {
                "name": "users-collection",
                "path": "",
                "component": {
                    "__name": "collection",
                    "props": {
                        "role": {
                            "required": false
                        }
                    },
                    "__hmrId": "0672b942",
                    "__scopeId": "data-v-0672b942",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/users/routes/collection.vue"
                }
            },
            {
                "name": "users-item",
                "path": ":primaryKey",
                "component": {
                    "__name": "item",
                    "props": {
                        "primaryKey": {
                            "required": true
                        },
                        "role": {
                            "required": false
                        }
                    },
                    "__hmrId": "92cc35db",
                    "__scopeId": "data-v-92cc35db",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/users/routes/item.vue"
                },
                "props": true
            },
            {
                "path": "roles",
                "redirect": "/users"
            },
            {
                "name": "roles-collection",
                "path": "roles/:role",
                "component": {
                    "__name": "collection",
                    "props": {
                        "role": {
                            "required": false
                        }
                    },
                    "__hmrId": "0672b942",
                    "__scopeId": "data-v-0672b942",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/users/routes/collection.vue"
                },
                "props": true
            },
            {
                "name": "roles-item-add",
                "path": "roles/:role/+",
                "component": {
                    "__name": "item",
                    "props": {
                        "primaryKey": {
                            "required": true
                        },
                        "role": {
                            "required": false
                        }
                    },
                    "__hmrId": "92cc35db",
                    "__scopeId": "data-v-92cc35db",
                    "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/pages/modules/users/routes/item.vue"
                }
            }
        ],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {}
    },
    {
        "path": "/:_(.+)+",
        "name": "private-404",
        "meta": {},
        "props": {
            "default": false
        },
        "children": [],
        "instances": {},
        "leaveGuards": {},
        "updateGuards": {},
        "enterCallbacks": {},
        "components": {
            "default": {
                "__name": "private-not-found",
                "__hmrId": "21e11eb3",
                "__scopeId": "data-v-21e11eb3",
                "__file": "/Users/peterjaber/Desktop/Easyflow.io/IBRAINS/SourceCode/ibrains-app/src/routes/private-not-found.vue"
            }
        }
    }
]
