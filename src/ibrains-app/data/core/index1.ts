
export const schemaToUi = {

    scopedTree: {
        "canvas": {
            "type": "Tab",
            "elements": [
                {
                    "type": "Category",
                    "label": "Basic Information",
                    "elements": [
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Button",
                                    "scope": "#/properties/btn1"

                                }
                            ]
                        }

                    ]
                },
                {
                    "type": "Category",
                    "label": "Address",
                    "elements": [
                        {
                            "type": "HorizontalLayout",
                            "elements": [

                            ]
                        },
                        {
                            "type": "HorizontalLayout",
                            "elements": [

                            ]
                        }
                    ],
                },
                {
                    "type": "Category",
                    "label": "Additional",
                    "elements": [

                    ],
                }
            ],
        },
        "leftside": {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "SelectButton",
                    "scope": "#/properties/selectbutton1"
                },
                {
                    "type": "RadioButton",
                    "scope": "#/properties/radiobutton1"
                },

            ]
        },
        "editorRightSide": {
            "type": "Disclosure",
            "elements": [
                {
                    "type": "Category",
                    "label": "Content",
                    "elements": [
                        {
                            "type": "VerticalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/content",
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Category",
                    "label": "Add-ons",
                    "elements": [
                        {
                            "type": "VerticalLayout",
                            "elements": [

                            ]
                        }
                    ]
                },
                {
                    "type": "Category",
                    "label": "Interaction",
                    "elements": [

                    ]
                },
                {
                    "type": "Category",
                    "label": "Appearance",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/options",

                        },
                        // example pointing directly to a specific key
                        // {
                        //     "type": "Control",
                        //     "scope": "#/properties/options/properties/size"
                        // },


                    ]
                }
            ]
        },

        "arrays": {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Control",
                    "scope": "#/properties/comments"
                }
            ]
        },

        "tab": {
            "type": "Tab",
            "elements": [
                {
                    "type": "Category",
                    "label": "Basic Information",
                    "elements": [
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Button",
                                    "scope": "#/properties/firstName"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/secondName"
                                }
                            ]
                        },
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/birthDate"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/nationality"
                                }
                            ]
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/provideAddress"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/vegetarian"
                        }
                    ]
                },
                {
                    "type": "Category",
                    "label": "Address",
                    "elements": [
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/address/properties/street"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/address/properties/streetNumber"
                                }
                            ]
                        },
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/address/properties/city"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/address/properties/postalCode"
                                }
                            ]
                        }
                    ],
                    "rule": {
                        "effect": "SHOW",
                        "condition": {
                            "scope": "#/properties/provideAddress",
                            "schema": {
                                "const": true
                            }
                        }
                    }
                },
                {
                    "type": "Category",
                    "label": "Additional",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/vegetarianOptions/properties/vegan"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/vegetarianOptions/properties/favoriteVegetable"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/vegetarianOptions/properties/otherFavoriteVegetable",
                            "rule": {
                                "effect": "SHOW",
                                "condition": {
                                    "scope": "#/properties/vegetarianOptions/properties/favoriteVegetable",
                                    "schema": {
                                        "const": "Other"
                                    }
                                }
                            }
                        }
                    ],
                    "rule": {
                        "effect": "SHOW",
                        "condition": {
                            "scope": "#/properties/vegetarian",
                            "schema": {
                                "const": true
                            }
                        }
                    }
                }
            ],
            "options": {
                "vertical": false
            }
        },

        "disclosure": {
            "type": "Disclosure",
            "elements": [
                {
                    "type": "Category",
                    "label": "Basic Information",
                    "elements": [
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/firstName"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/secondName"
                                }
                            ]
                        },
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/birthDate"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/nationality"
                                }
                            ]
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/provideAddress"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/vegetarian"
                        }
                    ]
                },
                {
                    "type": "Category",
                    "label": "Address",
                    "elements": [
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/address/properties/street"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/address/properties/streetNumber"
                                }
                            ]
                        },
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/address/properties/city"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/address/properties/postalCode"
                                }
                            ]
                        }
                    ],
                    "rule": {
                        "effect": "SHOW",
                        "condition": {
                            "scope": "#/properties/provideAddress",
                            "schema": {
                                "const": true
                            }
                        }
                    }
                },
                {
                    "type": "Category",
                    "label": "Additional",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/vegetarianOptions/properties/vegan"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/vegetarianOptions/properties/favoriteVegetable"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/vegetarianOptions/properties/otherFavoriteVegetable",
                            "rule": {
                                "effect": "SHOW",
                                "condition": {
                                    "scope": "#/properties/vegetarianOptions/properties/favoriteVegetable",
                                    "schema": {
                                        "const": "Other"
                                    }
                                }
                            }
                        }
                    ],
                    "rule": {
                        "effect": "SHOW",
                        "condition": {
                            "scope": "#/properties/vegetarian",
                            "schema": {
                                "const": true
                            }
                        }
                    }
                }
            ],
            "options": {
                "vertical": false
            }
        },

        "rules": {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "Categorization",
                    "elements": [
                        {
                            "type": "Category",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/rule/properties/rule",
                                    "options": {
                                        "detail": {
                                            "type": "VerticalLayout",
                                            "elements": [
                                                {
                                                    "type": "Control",
                                                    "scope": "#"
                                                }
                                            ]
                                        }
                                    }
                                }
                            ],
                            "label": "Rule"
                        },
                        {
                            "type": "Category",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": "#/properties/rule/properties/ruleBuilder/properties/effect"
                                },
                                {
                                    "type": "Control",
                                    "scope": "#/properties/rule/properties/ruleBuilder/properties/condition/properties/scope"
                                },
                                {
                                    "type": "Formbuilder",
                                    "scope": "#/properties/rule/properties/ruleBuilder/properties/condition/properties/schema",
                                    "options": {
                                        "XXhideToolbar": true,
                                        "baseTool": "schema",
                                        "XXbaseToolProps": {
                                            "hideActionbar": true,
                                            "prefixLabel": "if:"
                                        }
                                    }
                                }
                            ],
                            "label": "Schema Builder"
                        }
                    ]
                }
            ]
        },

        "conditional": {}




    },
    scopedSchema: {

        "rules": {
            "type": "object",
            "definitions": {
                "schemaConstTypes": {
                    "oneOf": [
                        {
                            "type": "string",
                            "title": "string"
                        },
                        {
                            "type": "number",
                            "title": "number"
                        },
                        {
                            "type": "boolean",
                            "title": "boolean"
                        }
                    ]
                },
                "schema": {
                    "type": "object",
                        "properties": {
                        "const": {
                            "oneOf": [
                                {
                                    "type": "string",
                                    "title": "string"
                                },
                                {
                                    "type": "number",
                                    "title": "number"
                                },
                                {
                                    "type": "boolean",
                                    "title": "boolean"
                                }
                            ]
                        }
                    },
                    "required": [
                        "const"
                    ]
                },
                "ruleCondition": {
                    "type": "object",
                        "title": "Single Condition",
                        "properties": {
                        "scope": {
                            "type": "string"
                        },
                        "schema": {
                            "oneOf": [
                                {
                                    "type": "object",
                                    "title": "const",
                                    "properties": {
                                        "const": {
                                            "oneOf": [
                                                {
                                                    "type": "string",
                                                    "title": "string"
                                                },
                                                {
                                                    "type": "number",
                                                    "title": "number"
                                                },
                                                {
                                                    "type": "boolean",
                                                    "title": "boolean"
                                                }
                                            ]
                                        }
                                    },
                                    "required": [
                                        "const"
                                    ]
                                },
                                {
                                    "type": "object",
                                    "title": "required",
                                    "properties": {
                                        "required": {
                                            "type": "array",
                                            "items": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "required": [
                                        "required"
                                    ]
                                }
                            ]
                        }
                    },
                    "required": [
                        "scope",
                        "schema"
                    ]
                },
                "ruleConditions": {
                    "type": "object",
                        "title": "Combined Conditions",
                        "properties": {
                        "type": {
                            "type": "string",
                                "enum": [
                                "AND",
                                "OR"
                            ],
                                "default": "AND"
                        },
                        "conditions": {
                            "type": "array",
                                "minItems": 1,
                                "items": {
                                "type": "object",
                                    "properties": {
                                    "scope": {
                                        "type": "string",
                                            "description": "like: #/properties/name"
                                    },
                                    "schema": {
                                        "oneOf": [
                                            {
                                                "type": "object",
                                                "title": "const",
                                                "properties": {
                                                    "const": {
                                                        "oneOf": [
                                                            {
                                                                "type": "string",
                                                                "title": "string"
                                                            },
                                                            {
                                                                "type": "number",
                                                                "title": "number"
                                                            },
                                                            {
                                                                "type": "boolean",
                                                                "title": "boolean"
                                                            }
                                                        ]
                                                    }
                                                },
                                                "required": [
                                                    "const"
                                                ]
                                            },
                                            {
                                                "type": "object",
                                                "title": "required",
                                                "properties": {
                                                    "required": {
                                                        "type": "array",
                                                        "items": {
                                                            "type": "string"
                                                        }
                                                    }
                                                },
                                                "required": [
                                                    "required"
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    },
                    "required": [
                        "type"
                    ]
                },
                "ruleLeafCondition": {
                    "type": "object",
                        "title": "Leaf Condition",
                        "properties": {
                        "type": {
                            "type": "string",
                                "const": "LEAF"
                        },
                        "scope": {
                            "type": "string",
                                "description": "like: #/properties/name"
                        },
                        "expectedValue": {
                            "type": "string"
                        }
                    },
                        "required": [
                        "type",
                        "scope",
                        "expectedValue"
                    ]
                }
            },
            "properties": {
                "rule": {
                    "type": "object",
                    "properties": {
                        "rule": {
                            "type": "object",
                                "properties": {
                                    "effect": {
                                    "type": "string",
                                        "enum": [
                                        "SHOW",
                                        "HIDE",
                                        "ENABLE",
                                        "DISABLE"
                                    ]
                                },
                                    "condition": {
                                    "title": "ConditionType",
                                        "oneOf": [
                                        {
                                            "$ref": "#/definitions/ruleLeafCondition",
                                            "title": "Leaf Condition"
                                        },
                                        {
                                            "$ref": "#/definitions/ruleCondition",
                                            "title": "SingleCondition"
                                        },
                                        {
                                            "$ref": "#/definitions/ruleConditions",
                                            "title": "CombinedConditions"
                                        }
                                    ]
                                        }
                                    },
                                "required": [
                                    "effect",
                                    "condition"
                                ]
                        },
                        "ruleBuilder": {
                            "type": "object",
                            "properties": {
                            "effect": {
                                "type": "string",
                                    "enum": [
                                    "SHOW",
                                    "HIDE",
                                    "ENABLE",
                                    "DISABLE"
                                ]
                            },
                            "condition": {
                                "type": "object",
                                    "properties": {
                                    "scope": {
                                        "type": "string",
                                            "description": "like: #"
                                    },
                                    "schema": {
                                        "type": "object",
                                            "additionalProperties": true,
                                            "properties": {}
                                    }
                                },
                                "required": ["scope","schema"]
                            }
                            },
                            "required": ["effect","condition"]
                        }
            }
        }
            }
        },

        "conditional": {
            "type": "object",
            "properties": {}
        },


        "leftside": {
            "type": "object",
            "properties": {
                "selectbutton1": {
                    "type": "object",
                    "properties": {
                        "content": {
                            "type": "object",
                            "properties": {
                                "options": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "label": {
                                                "type": "string"
                                            },
                                            "value": {
                                                "type": "string"
                                            },
                                            "icon": {
                                                "type": "string"
                                            },
                                            "disabled": {
                                                "type": "boolean",
                                                "default": false
                                            },
                                        }
                                    }
                                },
                                "optionLabel": {
                                    "type": "string"
                                },
                                "dataKey": {
                                    "type": "string"
                                },
                                "value": {
                                    "type": "string"
                                }
                            }
                        },
                        "value": {
                            "anyOf": [
                                { "type": "object"},
                                { "type": "array"}
                            ]
                        },
                        "actions": {
                            "type": "object",
                            "properties": {
                            }
                        },
                        "options": {
                            "type": "object",
                            "properties": {
                                "size": {
                                    "type": "string",
                                    "default": "small",
                                },
                                "disabled": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "multiple": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "allowEmpty": {
                                    "type": "boolean",
                                    "default": true
                                }
                            },
                        }
                    },
                },
                "radiobutton1": {
                    "type": "object",
                    "properties": {
                        "content": {
                            "type": "object",
                            "properties": {
                                "options": {
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                        "properties": {
                                            "label": {
                                                "type": "string"
                                            },
                                            "value": {
                                                "type": "string"
                                            },
                                            "disabled": {
                                                "type": "boolean",
                                                "default": false
                                            },
                                        }
                                    }
                                },
                            }
                        },
                        "value": {
                            "anyOf": [
                                { "type": "object"},
                                { "type": "string"}
                            ]
                        },
                        "actions": {
                            "type": "object",
                            "properties": {
                            }
                        },
                        "options": {
                            "type": "object",
                            "properties": {
                                "disabled": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "direction": {
                                    "type": "string",
                                    "enum": ["vertical", "horizontal"]
                                },

                            },
                        }
                    },
                },
            },
        },

        "btn1": {
            "type": "object",
            "properties": {
                "content": {
                    "type": "object",
                    "properties": {
                        "text": { "type": "string",
                            "default": null
                        },
                    }
                },
                "actions": {
                    "type": "object",
                    "properties": {
                    }
                },
                "options": {
                    "type": "object",
                    "properties": {

                        "variant": {
                            "type": "string",
                            "default": null,
                            "enum": [
                                "default", "destructive", "outline", "secondary", "ghost", "link"
                            ]
                        },
                        "size": {
                            "type": "string",
                            "default": null,
                            "enum": [
                                "default", "sm", "lg", "icon"
                            ]
                        }
                    },
                }
            }
        },
        "splitbutton1": {
            "type": "object",
            "properties": {
                "content": {
                    "type": "object",
                    "properties": {
                        "model": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "label": {
                                        "type": "string"
                                    },
                                    "icon": {
                                        "type": "string"
                                    },
                                }
                            }
                        },
                    }
                },
                "value": {
                    "anyOf": [
                        { "type": "object"},
                        { "type": "array"}
                    ]
                },
                "actions": {
                    "type": "object",
                    "properties": {
                    }
                },
                "options": {
                    "type": "object",
                    "properties": {
                        "class": {
                            "type": "string",
                            "default": null,
                        },

                        "text": {
                            "type": "string",
                            "default": null
                        }
                    },
                }

            },
            "events": []
        },
        "selectbutton1": {
            "type": "object",
            "properties": {
                "content": {
                    "type": "object",
                    "properties": {
                        "options": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "label": {
                                        "type": "string"
                                    },
                                    "value": {
                                        "type": "string"
                                    },
                                    "icon": {
                                        "type": "string"
                                    },
                                    "disabled": {
                                        "type": "boolean",
                                        "default": false
                                    },
                                }
                            }
                        },
                        "optionLabel": {
                            "type": "string"
                        },
                        "dataKey": {
                            "type": "string"
                        }
                    }
                },
                "value": {
                    "anyOf": [
                        { "type": "object"},
                        { "type": "array"}
                    ]
                },
                "actions": {
                    "type": "object",
                    "properties": {
                    }
                },
                "options": {
                    "type": "object",
                    "properties": {
                        "size": {
                            "type": "string",
                            "default": "small",
                        },
                        "disabled": {
                            "type": "boolean",
                            "default": false
                        },
                        "multiple": {
                            "type": "boolean",
                            "default": false
                        },
                        "allowEmpty": {
                            "type": "boolean",
                            "default": true
                        }
                    },
                }
            },
        },


        "arrays": {
            "type": "object",
            "properties": {
                "comments": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "date": {
                                "type": "string",
                                "format": "date"
                            },
                            "message": {
                                "type": "string",
                                "maxLength": 5
                            },
                            "enum": {
                                "type": "string",
                                "enum": [
                                    "foo",
                                    "bar"
                                ]
                            }
                        }
                    }
                }
            }
        },

        "tab": {
            "type": "object",
            "properties": {
                "firstName": {
                    "type": "string",
                    "minLength": 3,
                    "description": "Please enter your first name"
                },
                "secondName": {
                    "type": "string",
                    "minLength": 3,
                    "description": "Please enter your second name"
                },
                "vegetarian": {
                    "type": "boolean"
                },
                "birthDate": {
                    "type": "string",
                    "format": "date",
                    "description": "Please enter your birth date."
                },
                "nationality": {
                    "type": "string",
                    "enum": [
                        "DE",
                        "IT",
                        "JP",
                        "US",
                        "RU",
                        "Other"
                    ]
                },
                "provideAddress": {
                    "type": "boolean"
                },
                "address": {
                    "type": "object",
                    "properties": {
                        "street": {
                            "type": "string"
                        },
                        "streetNumber": {
                            "type": "string"
                        },
                        "city": {
                            "type": "string"
                        },
                        "postalCode": {
                            "type": "string",
                            "maxLength": 5
                        }
                    }
                },
                "vegetarianOptions": {
                    "type": "object",
                    "properties": {
                        "vegan": {
                            "type": "boolean"
                        },
                        "favoriteVegetable": {
                            "type": "string",
                            "enum": [
                                "Tomato",
                                "Potato",
                                "Salad",
                                "Aubergine",
                                "Cucumber",
                                "Other"
                            ]
                        },
                        "otherFavoriteVegetable": {
                            "type": "string"
                        }
                    }
                }
            }
        },

        "disclosure": {
            "type": "object",
            "properties": {
                "firstName": {
                    "type": "string",
                    "minLength": 3,
                    "description": "Please enter your first name"
                },
                "secondName": {
                    "type": "string",
                    "minLength": 3,
                    "description": "Please enter your second name"
                },
                "vegetarian": {
                    "type": "boolean"
                },
                "birthDate": {
                    "type": "string",
                    "format": "date",
                    "description": "Please enter your birth date."
                },
                "nationality": {
                    "type": "string",
                    "enum": [
                        "DE",
                        "IT",
                        "JP",
                        "US",
                        "RU",
                        "Other"
                    ]
                },
                "provideAddress": {
                    "type": "boolean"
                },
                "address": {
                    "type": "object",
                    "properties": {
                        "street": {
                            "type": "string"
                        },
                        "streetNumber": {
                            "type": "string"
                        },
                        "city": {
                            "type": "string"
                        },
                        "postalCode": {
                            "type": "string",
                            "maxLength": 5
                        }
                    }
                },
                "vegetarianOptions": {
                    "type": "object",
                    "properties": {
                        "vegan": {
                            "type": "boolean"
                        },
                        "favoriteVegetable": {
                            "type": "string",
                            "enum": [
                                "Tomato",
                                "Potato",
                                "Salad",
                                "Aubergine",
                                "Cucumber",
                                "Other"
                            ]
                        },
                        "otherFavoriteVegetable": {
                            "type": "string"
                        }
                    }
                }
            }
        },

    },
    scopedData: {
        "splitbutton1": {
            "content": {
                "model": [
                    {
                        "label": "Update",
                        "icon": "fa-regular fa-refresh"
                    },
                    {
                        "label": "Delete",
                        "icon": "fa-regular fa-delete"
                    }
                ]
            },
            "actions": {},
            "options": {
                "text": "Peter Split",
                "class": "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
            }
        },
        "selectbutton1": {
            "content": {
                "options": [
                    {
                        "label": "Vanilla",
                        "value": "vanilla",
                        "icon": "fa-thin fa-palette",
                        "disabled": false
                    },
                    {
                        "label": "Vuetify",
                        "value": "vuetify",
                        "icon": "fa-thin fa-palette",
                        "disabled": false
                    },
                    {
                        "label": "Tailwind",
                        "value": "tailwind",
                        "icon": "fa-duotone fa-palette",
                        "disabled": false
                    }
                ],
                "optionLabel": "label",
                "dataKey": "value",
            },
            "actions": {},
            "value": {},
            "options": {
                "disabled": false,
                "multiple": false,
                "allowEmpty": true,
                "size": "small"
            }
        },
        "radiobutton1": {
            "content": {
                "options": [
                    {
                        "label": "SplitButton (1)",
                        "value": "splitbutton1",
                        "disabled": false
                    },
                    {
                        "label": "SelectButton (1)",
                        "value": "selectbutton1",
                        "disabled": false
                    },
                    {
                        "label": "RadioButton (1)",
                        "value": "radiobutton1",
                        "disabled": false
                    }
                ]
            },
            "actions": {},
            "value": {},
            "options": {
                "disabled": false,
                "size": "small",
            }
        },
        "btn1": {
            "content": {
                "text": "Peter"
            },
            "actions": {},
            "options": {
                "variant": "default",
                "size": "sm"
            }
        },
        "nativeEnumAsRadio": {},
        "leftside": {
            "type": "object",
            "properties": {
                "selectbutton1": {
                    "content": {
                        "options": [
                            {
                                "label": "Vanilla",
                                "value": "vanilla",
                                "icon": "fa-thin fa-palette",
                                "disabled": false
                            },
                            {
                                "label": "Vuetify",
                                "value": "vuetify",
                                "icon": "fa-thin fa-palette",
                                "disabled": false
                            },
                            {
                                "label": "Tailwind",
                                "value": "tailwind",
                                "icon": "fa-duotone fa-palette",
                                "disabled": false
                            }
                        ],
                        "optionLabel": "label",
                        "dataKey": "value",
                    },
                    "actions": {},
                    "value": {},
                    "options": {
                        "disabled": false,
                        "multiple": false,
                        "allowEmpty": true,
                        "size": "small"
                    }
                },
                "radiobutton1": {
                    "content": {
                        "options": [
                            {
                                "label": "SplitButton (1)",
                                "value": "splitbutton1",
                                "disabled": false
                            },
                            {
                                "label": "SelectButton (1)",
                                "value": "selectbutton1",
                                "disabled": false
                            },
                            {
                                "label": "RadioButton (1)",
                                "value": "radiobutton1",
                                "disabled": false
                            }
                        ]
                    },
                    "actions": {},
                    "value": {},
                    "options": {
                        "disabled": false,
                        "size": "small",
                        "direction": "vertical"
                    }
                }
            }
        },
        "arrays": {
            "comments": [
                {
                    "date": "2001-09-11",
                    "message": "This is an example message"
                },
                {
                    "date": "2021-08-13",
                    "message": "Get ready for booohay"
                }
            ]
        },
        "tab": {
            "firstName": "Peter",
            "provideAddress": true,
            "vegetarian": false
        },
        "disclosure": {
            "provideAddress": true,
            "vegetarian": false
        },

        "rules": {},
        "conditional": {}


    },

    sessionTree: {

        "basic": {
            "type": "VerticalLayout",
            "elements": [
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/name"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/personalData/properties/age"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/birthDate"
                        }
                    ]
                },
                {
                    "type": "Label",
                    "text": "Additional Information"
                },
                {
                    "type": "HorizontalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": "#/properties/personalData/properties/height"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/nationality"
                        },
                        {
                            "type": "Control",
                            "scope": "#/properties/occupation",
                            "options": {
                                "suggestion": [
                                    "Accountant",
                                    "Engineer",
                                    "Freelancer",
                                    "Journalism",
                                    "Physician",
                                    "Student",
                                    "Teacher",
                                    "Other"
                                ]
                            }
                        }
                    ]
                }
            ]
        }

    },
    sessionSchema: {

        "basic": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "minLength": 3,
                    "description": "Please enter your name",
                    "i18n": "name"
                },
                "vegetarian": {
                    "type": "boolean",
                    "i18n": "vegetarian"
                },
                "birthDate": {
                    "type": "string",
                    "format": "date",
                    "i18n": "birth"
                },
                "nationality": {
                    "type": "string",
                    "enum": [
                        "DE",
                        "IT",
                        "JP",
                        "US",
                        "RU",
                        "Other"
                    ],
                    "i18n": "nationality"
                },
                "personalData": {
                    "type": "object",
                    "properties": {
                        "age": {
                            "type": "integer",
                            "description": "Please enter your age.",
                            "i18n": "personal-data.age"
                        },
                        "height": {
                            "type": "number",
                            "i18n": "height"
                        },
                        "drivingSkill": {
                            "type": "number",
                            "maximum": 10,
                            "minimum": 1,
                            "default": 7,
                            "i18n": "personal-data.driving"
                        }
                    },
                    "required": [
                        "age",
                        "height"
                    ]
                },
                "occupation": {
                    "type": "string",
                    "i18n": "occupation"
                },
                "postalCode": {
                    "type": "string",
                    "maxLength": 5,
                    "i18n": "postal-code"
                }
            },
            "required": [
                "occupation",
                "nationality"
            ]
        }

    },
    sessionData: {

        "basic": {
            "name": "John Doe",
            "vegetarian": false,
            "birthDate": "1985-06-02",
            "personalData": {
                "age": 34,
                "drivingSkill": 7
            },
            "postalCode": "12345"
        },
        "main": {
            "firstName": "Max",
            "lastName": "Power"
        }

    },

    // definitions
    globalSchema: {
        "Button": {
            "type": "object",
            "properties": {
                "content": {
                    "type": "object",
                    "properties": {
                        "text": { "type": "string",
                            "default": null
                        },
                    }
                },
                "actions": {
                    "type": "object",
                    "properties": {
                    }
                },
                "options": {
                    "type": "object",
                    "properties": {

                        "variant": {
                            "type": "string",
                            "default": null,
                            "enum": [
                                "default", "destructive", "outline", "secondary", "ghost", "link"
                            ]
                        },
                        "size": {
                            "type": "string",
                            "default": null,
                            "enum": [
                                "default", "sm", "lg", "icon"
                            ]
                        }
                    },
                },
                "appearance": {
                    "type": "object",
                    "properties": {

                        "class": {
                            "type": "string",
                        },
                        "style": {
                            "type": "string"
                        }
                    },
                }
            }
        },
        "SplitButton": {
            "type": "object",
            "properties": {
                "content": {
                    "type": "object",
                    "properties": {
                        "model": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "label": {
                                        "type": "string"
                                    },
                                    "icon": {
                                        "type": "string"
                                    },
                                }
                            }
                        },
                    }
                },
                "actions": {
                    "type": "object",
                    "properties": {
                    }
                },
                "options": {
                    "type": "object",
                    "properties": {
                        "class": {
                            "type": "string",
                            "default": null,
                        },
                        "text": {
                            "type": "string",
                            "default": null
                        }
                    },
                }

            },
            "events": []
        },
        "SelectButton": {
            "type": "object",
            "properties": {
                "content": {
                    "type": "object",
                    "properties": {
                        "options": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "label": {
                                        "type": "string"
                                    },
                                    "value": {
                                        "type": "string"
                                    },
                                    "icon": {
                                        "type": "string"
                                    },
                                    "disabled": {
                                        "type": "boolean",
                                        "default": false
                                    },
                                }
                            }
                        },
                        "optionLabel": {
                            "type": "string"
                        },
                        "dataKey": {
                            "type": "string"
                        }
                    }
                },
                "value": {
                    "anyOf": [
                        { "type": "object"},
                        { "type": "array"}
                    ]
                },
                "actions": {
                    "type": "object",
                    "properties": {
                    }
                },
                "options": {
                    "type": "object",
                    "properties": {
                        "size": {
                            "type": "string",
                            "default": "small",
                        },
                        "disabled": {
                            "type": "boolean",
                            "default": false
                        },
                        "multiple": {
                            "type": "boolean",
                            "default": false
                        },
                        "allowEmpty": {
                            "type": "boolean",
                            "default": true
                        }
                    },
                }
            },
        },
        "RadioButton": {
            "type": "object",
            "properties": {
                "content": {
                    "type": "object",
                    "properties": {
                        "options": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "label": {
                                        "type": "string"
                                    },
                                    "value": {
                                        "type": "string"
                                    },
                                    "disabled": {
                                        "type": "boolean",
                                        "default": false
                                    },
                                }
                            }
                        },
                    }
                },
                "value": {
                    "anyOf": [
                        { "type": "object"},
                        { "type": "string"}
                    ]
                },
                "actions": {
                    "type": "object",
                    "properties": {
                    }
                },
                "options": {
                    "type": "object",
                    "properties": {
                        "disabled": {
                            "type": "boolean",
                            "default": false
                        },
                        "direction": {
                            "type": "string",
                            "enum": ["vertical", "horizontal"]
                        },

                    },
                }
            },
        },

        "typeOfString": {

        },
        "typeOfArray": {

        },
        "typeOfObject": {

        },

        "uiButton": {
            "name": "ibButton",
            "styles": {
                "type": "object",
                "properties": {
                    "root": {
                        "type": "object",
                        "properties": {
                            "class": {
                                "type": "string"
                            },
                            "style": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "props": {
                "type": "object",
                "properties": {
                    "size": {
                        "type": "string",
                        "enum": [
                            "default", "sm", "xs", "lg", "icon"
                        ]
                    },
                    "variant": {
                        "type": "string",
                        "enum": [
                            "default", "destructive", "outline", "secondary", "ghost", "link"
                        ]
                    },
                    "text": {
                        "type": "string"
                    },
                    "class": {
                        "type": "string",
                    },
                    "style": {
                        "type": "string",
                    },

                }
            },
            "data": {
                "type": "object",
                "properties": {},
            },
            "setup": {
                "type": "object",
                "properties": {},
            },
            "computed": {
                "type": "object",
                "properties": {},
            },
            "methods": {
                "type": "object",
                "properties": {},
            },
            "events": {
                "type": "object",
                "properties": {},
            },
            "states": {
                "type": "object",
                "properties": {}
            }
        },
        "uiLayout": {
            "name": "ibLayout",
            "styles": {
                "type": "object",
                "properties": {
                    "root": {
                        "type": "object",
                        "properties": {
                            "class": {
                                "type": "string"
                            },
                            "style": {
                                "type": "string"
                            }
                        }
                    },
                    "child": {
                        "type": "object",
                        "properties": {
                            "class": {
                                "type": "string"
                            },
                            "style": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "props": {
                "type": "object",
                "properties": {
                    "styles": {
                        "type": "object",
                    },
                    "style": {
                        "type": "string",
                    },
                }
            },
            "data": {
                "type": "object",
                "properties": {},
            },
            "setup": {
                "type": "object",
                "properties": {},
            },
            "computed": {
                "type": "object",
                "properties": {},
            },
            "methods": {
                "type": "object",
                "properties": {},
            },
            "events": {
                "type": "object",
                "properties": {},
            },
            "states": {
                "type": "object",
                "properties": {}
            }
        },
        "uiCard": {
            "name": "ibCard",
            "styles": {
                "type": "object",
                "properties": {
                    "card": {
                        "type": "object",
                        "properties": {
                            "class": {
                                "type": "string"
                            },
                            "style": {
                                "type": "string"
                            }
                        }
                    },
                    "content": {
                        "type": "object",
                        "properties": {
                            "class": {
                                "type": "string"
                            },
                            "style": {
                                "type": "string"
                            }
                        }
                    },
                    "header": {
                        "type": "object",
                        "properties": {
                            "class": {
                                "type": "string"
                            },
                            "style": {
                                "type": "string"
                            }
                        }
                    },
                    "description": {
                        "type": "object",
                        "properties": {
                            "class": {
                                "type": "string"
                            },
                            "style": {
                                "type": "string"
                            }
                        }
                    },
                    "title": {
                        "type": "object",
                        "properties": {
                            "class": {
                                "type": "string"
                            },
                            "style": {
                                "type": "string"
                            }
                        }
                    },
                    "footer": {
                        "type": "object",
                        "properties": {
                            "class": {
                                "type": "string"
                            },
                            "style": {
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "props": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "object",
                    },
                    "description": {
                        "type": "string",
                    },
                    "header": {
                        "type": "object",
                    },
                    "content": {
                        "type": "object",
                    },
                    "footer": {
                        "type": "object",
                    },
                }
            },
            "data": {
                "type": "object",
                "properties": {},
            },
            "setup": {
                "type": "object",
                "properties": {},
            },
            "computed": {
                "type": "object",
                "properties": {},
            },
            "methods": {
                "type": "object",
                "properties": {},
            },
            "events": {
                "type": "object",
                "properties": {},
            },
            "states": {
                "type": "object",
                "properties": {}
            }
        }

    },



    metadata: {
        draftRenderers: [
            {
                "label": "Canvas - Display",
                "value": "canvas",
                "options": {
                    "dataFromRoot": true,
                    "schemaFromRoot": true
                }
            },
            {
                "label": "RightSide - Editor",
                "value": "editorRightSide",
                "options": {
                    "dataFromRoot": true,
                    "schemaFromRoot": true
                }
            },

            {
                "label": "^^Rules^^",
                "value": "rules",
                "options": {
                    "dataFromRoot": false,
                    "schemaFromRoot": false
                }
            },

            {
                "label": "^^Conditional^^",
                "value": "conditional",
                "options": {
                    "dataFromRoot": false,
                    "schemaFromRoot": false
                }
            },



            {
                "label": "Control",
                "value": "file-control",
                "options": {
                    "dataFromRoot": false,
                    "schemaFromRoot": false,
                }
            },

            {
                "label": "arrays",
                "value": "arrays",
                "options": {
                    "dataFromRoot": false,
                    "schemaFromRoot": false
                }
            },

            {
                "label": "Tab",
                "value": "tab",
                "options": {
                    "dataFromRoot": true,
                    "schemaFromRoot": true
                }
            },

            {
                "label": "Disclosure",
                "value": "disclosure",
                "options": {
                    "dataFromRoot": true,
                    "schemaFromRoot": true
                }
            }

        ],
        vuetifyRenderers: []


    }




}

export default {
    schemaToUi: schemaToUi
}
