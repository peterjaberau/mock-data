const ibrains = {



    "users": [
        {
            "userId": "0",
            "name": "Alice C.",
            "position": "Software Engineer",
            "preferences": {
                "showSideBar": true,
                "showPageLeft": true,
                "showPageRight": true,
                "showPageToolbar": true,
                "showPageFooter": false
            }
        }
    ],


    "resources": [
        {
            "kind": "task",
            "display": {
                "label": "Task",
                "description": "Task Object"
            },
            "internal": true,
            "production": true,
            "dynamic_values": {},
            "auth_type": null,
            "conditions": [
                {
                    "key": "status",
                    "types": [
                        "field"
                    ],
                    "operators": [
                        "any",
                        "not any"
                    ],
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "key": "priority",
                    "types": [
                        "field"
                    ],
                    "operators": [
                        "eq",
                        "not",
                        "any",
                        "all",
                        "not any",
                        "not all",
                        "is set",
                        "is not set"
                    ],
                    "schema": {
                        "type": "string",
                        "enum": [
                            "1",
                            "2",
                            "3",
                            "4",
                            "none"
                        ]
                    }
                },
                {
                    "key": "due_date",
                    "types": [
                        "field"
                    ],
                    "operators": [
                        "eq",
                        "not",
                        "lt",
                        "gt",
                        "lte",
                        "gte",
                        "is set",
                        "is not set"
                    ],
                    "schema": {
                        "type": "number",
                        "format": "datetime"
                    }
                },
                {
                    "key": "start_date",
                    "types": [
                        "field"
                    ],
                    "operators": [
                        "eq",
                        "not",
                        "lt",
                        "gt",
                        "lte",
                        "gte",
                        "is set",
                        "is not set"
                    ],
                    "schema": {
                        "type": "number",
                        "format": "datetime"
                    }
                },
                {
                    "key": "assignee",
                    "types": [
                        "field"
                    ],
                    "operators": [
                        "any",
                        "all",
                        "not any",
                        "not all",
                        "is set",
                        "is not set"
                    ],
                    "schema": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "format": "userid"
                        }
                    }
                },
                {
                    "key": "tag",
                    "types": [
                        "field"
                    ],
                    "operators": [
                        "any",
                        "all",
                        "not any",
                        "not all",
                        "is set",
                        "is not set"
                    ],
                    "schema": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                },
                {
                    "key": "follower",
                    "types": [
                        "field"
                    ],
                    "operators": [
                        "any",
                        "all",
                        "not any",
                        "not all",
                        "is set",
                        "is not set"
                    ],
                    "schema": {
                        "type": "array",
                        "items": {
                            "type": "number",
                            "format": "userid"
                        }
                    }
                },
                {
                    "key": "time_estimate",
                    "types": [
                        "field"
                    ],
                    "operators": [
                        "eq",
                        "not",
                        "lt",
                        "gt",
                        "lte",
                        "gte",
                        "is set",
                        "is not set"
                    ],
                    "schema": {
                        "type": "number",
                        "format": "duration"
                    }
                },
                {
                    "key": "custom_field",
                    "types": [
                        "field"
                    ],
                    "operators": [
                        "eq",
                        "not",
                        "lt",
                        "gt",
                        "lte",
                        "gte",
                        "all",
                        "not all",
                        "is set",
                        "is not set",
                        "any",
                        "not any"
                    ],
                    "schema": {
                        "type": "string"
                    }
                },
                {
                    "key": "current_date_is",
                    "types": [
                        "field"
                    ],
                    "operators": [
                        "eq"
                    ],
                    "schema": {
                        "type": "object",
                        "properties": {
                            "task_field": {
                                "type": "string"
                            },
                            "custom_field_id": {
                                "type": "string"
                            },
                            "fixed_date": {
                                "type": "string"
                            },
                            "offset": {
                                "type": "object",
                                "properties": {
                                    "value": {
                                        "type": "number"
                                    },
                                    "unit": {
                                        "type": "string"
                                    },
                                    "type": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "key": "created_via",
                    "types": [
                        "field"
                    ],
                    "operators": [],
                    "schema": {
                        "type": "object",
                        "properties": {
                            "templates": {
                                "type": "boolean"
                            },
                            "imports": {
                                "type": "boolean"
                            },
                            "integrations": {
                                "type": "boolean"
                            },
                            "automations": {
                                "type": "boolean"
                            },
                            "forms": {
                                "type": "boolean"
                            },
                            "users": {
                                "type": "boolean"
                            },
                            "recurrence": {
                                "type": "boolean"
                            },
                            "selected_users": {
                                "type": "object",
                                "properties": {
                                    "user_ids": {
                                        "type": "array",
                                        "items": {
                                            "type": "number"
                                        }
                                    },
                                    "user_group_ids": {
                                        "type": "array",
                                        "items": {
                                            "type": "number"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            ],
            "events": [
                {
                    "key": "status",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Status changes",
                        "verb": "changes",
                        "noun": "status"
                    }
                },
                {
                    "key": "priority",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Priority changes",
                        "verb": "changes",
                        "noun": "priority"
                    }
                },
                {
                    "key": "due_date",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Due Date changes",
                        "verb": "changes",
                        "noun": "due date"
                    }
                },
                {
                    "key": "start_date",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Start Date changes",
                        "verb": "changes",
                        "noun": "start date"
                    }
                },
                {
                    "key": "tag",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Tag added",
                        "verb": "added",
                        "noun": "tag"
                    }
                },
                {
                    "key": "tag_removed",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Tag removed",
                        "verb": "removed",
                        "noun": "tag"
                    }
                },
                {
                    "key": "assignee",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Assignee added",
                        "verb": "added",
                        "noun": "assignee"
                    }
                },
                {
                    "key": "assignee_removed",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Assignee removed",
                        "verb": "removed",
                        "noun": "assignee"
                    }
                },
                {
                    "key": "task_created",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Task created",
                        "verb": "created",
                        "noun": "task"
                    }
                },
                {
                    "key": "added_to_subcategory",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Existing task is added to this location",
                        "verb": "added to this location",
                        "noun": "task"
                    }
                },
                {
                    "key": "subcategory_id",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Moved to this location",
                        "verb": "moves to this location",
                        "noun": "task"
                    }
                },
                {
                    "key": "linked_task",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Task linked",
                        "verb": "is linked",
                        "noun": "task"
                    }
                },
                {
                    "key": "time_spent",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Time tracked",
                        "verb": "is tracked",
                        "noun": "time"
                    }
                },
                {
                    "key": "subtasks_resolved",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "All subtasks resolved",
                        "verb": "are resolved",
                        "noun": "subtasks"
                    }
                },
                {
                    "key": "checklists_resolved",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "All checklists resolved",
                        "verb": "are resolved",
                        "noun": "checklist"
                    }
                },
                {
                    "key": "unblocked",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Task unblocked",
                        "verb": "is unblocked",
                        "noun": "task"
                    }
                },
                {
                    "key": "custom_field",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "input_schema": {
                        "type": "object",
                        "properties": {
                            "cf_trigger_advanced_options": {
                                "type": "object",
                                "properties": {
                                    "on_task_create": {
                                        "title": "Task is created",
                                        "value": true,
                                        "type": "boolean",
                                        "localization": {
                                            "fr-FR": {
                                                "title": "La tâche est créée",
                                                "value": true,
                                                "type": "boolean"
                                            },
                                            "pt-BR": {
                                                "title": "a tarefa for criada",
                                                "value": true,
                                                "type": "boolean"
                                            },
                                            "es-ES": {
                                                "title": "Se cree la tarea",
                                                "value": true,
                                                "type": "boolean"
                                            },
                                            "de-DE": {
                                                "title": "Aufgabe wird erstellt",
                                                "value": true,
                                                "type": "boolean"
                                            },
                                            "it-IT": {
                                                "title": "l'attività viene creata",
                                                "value": true,
                                                "type": "boolean"
                                            }
                                        }
                                    },
                                    "on_task_update": {
                                        "title": "Task is updated",
                                        "type": "boolean",
                                        "value": true,
                                        "localization": {
                                            "fr-FR": {
                                                "title": "La tâche est mise à jour",
                                                "value": true,
                                                "type": "boolean"
                                            },
                                            "pt-BR": {
                                                "title": "a tarefa for atualizada",
                                                "value": true,
                                                "type": "boolean"
                                            },
                                            "es-ES": {
                                                "title": "Se actualice la tarea",
                                                "value": true,
                                                "type": "boolean"
                                            },
                                            "de-DE": {
                                                "title": "Aufgabe wird aktualisiert",
                                                "value": true,
                                                "type": "boolean"
                                            },
                                            "it-IT": {
                                                "title": "l'attività viene aggiornata",
                                                "value": true,
                                                "type": "boolean"
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "display": {
                        "title": "Custom Field changes",
                        "verb": "changes",
                        "noun": "custom field"
                    }
                },
                {
                    "key": "on_due_date",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Due date arrives",
                        "verb": "arrives",
                        "noun": "due date"
                    }
                },
                {
                    "key": "on_start_date",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "id": {
                                "type": "string",
                                "title": "Task ID"
                            },
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "text_content": {
                                "type": "string",
                                "title": "Task Description"
                            },
                            "creator": {
                                "type": "object",
                                "properties": {
                                    "username": {
                                        "type": "string",
                                        "title": "Creator Username"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Creator Email"
                                    }
                                }
                            },
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "date_created": {
                                "type": "number",
                                "title": "Date Created",
                                "format": "datetime"
                            },
                            "date_updated": {
                                "type": "number",
                                "title": "Date Updated",
                                "format": "datetime"
                            },
                            "date_done": {
                                "type": "number",
                                "title": "Date Done",
                                "format": "datetime"
                            },
                            "date_closed": {
                                "type": "number",
                                "title": "Date Closed",
                                "format": "datetime"
                            },
                            "status": {
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "title": "Status Name"
                                    },
                                    "color": {
                                        "type": "string",
                                        "title": "Status Color"
                                    },
                                    "type": {
                                        "type": "string",
                                        "title": "Status Type"
                                    }
                                }
                            },
                            "priority": {
                                "type": "object",
                                "properties": {
                                    "priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    }
                                }
                            },
                            "assignees": {
                                "title": "Assignee(s)",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "display_attribute": "username",
                                    "properties": {
                                        "id": {
                                            "type": "string",
                                            "title": "Assignee ID"
                                        },
                                        "username": {
                                            "type": "string",
                                            "title": "Assignee Username"
                                        },
                                        "email": {
                                            "type": "string",
                                            "title": "Assignee Email"
                                        }
                                    }
                                }
                            },
                            "task_link": {
                                "type": "string",
                                "title": "Task Link"
                            }
                        }
                    },
                    "display": {
                        "title": "Start date arrives",
                        "verb": "arrives",
                        "noun": "start date"
                    }
                }
            ],
            "methods": [
                {
                    "key": "assignee",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "add_assignees": {
                                "type": "array",
                                "title": "Add assignee(s)",
                                "items": {
                                    "type": "number"
                                }
                            },
                            "rem_assignees": {
                                "type": "array",
                                "title": "Remove assignee(s)",
                                "items": {
                                    "type": "number"
                                }
                            },
                            "unassign": {
                                "type": "boolean",
                                "title": "Remove all assignees"
                            }
                        }
                    },
                    "display": {
                        "noun": "assignee",
                        "verb": "change",
                        "title": "Change assignees"
                    }
                },
                {
                    "key": "create_task",
                    "schema": {
                        "type": "object",
                        "required": [
                            "name",
                            "subcategory_id"
                        ],
                        "properties": {
                            "name": {
                                "type": "string",
                                "title": "Task Name"
                            },
                            "subcategory_id": {
                                "type": "number",
                                "title": "List"
                            },
                            "template_id": {
                                "type": "string",
                                "title": "Template"
                            },
                            "status": {
                                "type": "string",
                                "title": "Status"
                            },
                            "content": {
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "title": "Description"
                            },
                            "priority": {
                                "type": "string",
                                "enum": [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "none"
                                ],
                                "title": "Priority"
                            },
                            "due_date": {
                                "type": "string",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "string",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "tags": {
                                "type": "array",
                                "title": "Tags",
                                "items": {
                                    "type": "string",
                                    "title": "Tag Name"
                                }
                            },
                            "assignees": {
                                "type": "array",
                                "title": "Assignees",
                                "items": {
                                    "type": "number",
                                    "description": "userids"
                                }
                            },
                            "custom_field": {
                                "type": "array",
                                "title": "Custom field",
                                "items": {
                                    "type": "custom",
                                    "title": "Custom field"
                                }
                            },
                            "action": {
                                "type": "number",
                                "enum": [
                                    1,
                                    2,
                                    3
                                ],
                                "default": 1,
                                "hidden": true
                            }
                        }
                    },
                    "display": {
                        "noun": "task",
                        "verb": "create",
                        "title": "Create a task"
                    }
                },
                {
                    "key": "create_subtask",
                    "schema": {
                        "type": "object",
                        "required": [
                            "name"
                        ],
                        "properties": {
                            "parent": {
                                "type": "string",
                                "title": "Parent Task",
                                "description": "When no parent task is selected, the task that triggers the automation will be used."
                            },
                            "name": {
                                "type": "string",
                                "title": "Subtask Name"
                            },
                            "template_id": {
                                "type": "string",
                                "title": "Template"
                            },
                            "status": {
                                "type": "string",
                                "title": "Status"
                            },
                            "content": {
                                "type": [
                                    "string",
                                    "object"
                                ],
                                "title": "Description"
                            },
                            "priority": {
                                "type": "string",
                                "enum": [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "none"
                                ],
                                "title": "Priority"
                            },
                            "due_date": {
                                "type": "string",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "start_date": {
                                "type": "string",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "tags": {
                                "type": "array",
                                "title": "Tags",
                                "items": {
                                    "type": "string",
                                    "title": "Tag Name"
                                }
                            },
                            "assignees": {
                                "type": "array",
                                "title": "Assignees",
                                "items": {
                                    "type": "number",
                                    "description": "userids"
                                }
                            },
                            "action": {
                                "type": "number",
                                "enum": [
                                    1,
                                    2,
                                    3
                                ],
                                "default": 1,
                                "hidden": true
                            }
                        }
                    },
                    "display": {
                        "noun": "subtask",
                        "verb": "create",
                        "title": "Create a subtask"
                    }
                },
                {
                    "key": "apply_template",
                    "schema": {
                        "type": "object",
                        "required": [
                            "template_id"
                        ],
                        "properties": {
                            "template_id": {
                                "type": "string",
                                "title": "Template"
                            }
                        }
                    },
                    "display": {
                        "noun": "template",
                        "verb": "apply",
                        "title": "Apply a template"
                    }
                },
                {
                    "key": "comment",
                    "schema": {
                        "type": "object",
                        "required": [
                            "comment"
                        ],
                        "properties": {
                            "comment": {
                                "type": "string",
                                "title": "Comment"
                            },
                            "assignee": {
                                "type": "number",
                                "title": "Assignee"
                            }
                        }
                    },
                    "display": {
                        "noun": "comment",
                        "verb": "post",
                        "title": "Add a comment"
                    }
                },
                {
                    "key": "delete",
                    "schema": {},
                    "display": {
                        "noun": "task",
                        "verb": "delete",
                        "title": "Delete task"
                    }
                },
                {
                    "key": "archive",
                    "schema": {},
                    "display": {
                        "noun": "task",
                        "verb": "archive",
                        "title": "Archive task"
                    }
                },
                {
                    "key": "copy",
                    "schema": {
                        "type": "object",
                        "required": [
                            "subcategory_id"
                        ],
                        "properties": {
                            "subcategory_id": {
                                "type": "number",
                                "title": "List"
                            }
                        }
                    },
                    "display": {
                        "noun": "task",
                        "verb": "copy",
                        "title": "Duplicate",
                        "aliases": [
                            "Copy"
                        ]
                    }
                },
                {
                    "key": "time_spent",
                    "schema": {
                        "type": "object",
                        "required": [
                            "time"
                        ],
                        "properties": {
                            "time": {
                                "type": "number",
                                "title": "Time"
                            },
                            "assignee": {
                                "type": "number",
                                "title": "Tracked for"
                            }
                        }
                    },
                    "display": {
                        "noun": "time",
                        "verb": "track",
                        "title": "Track time"
                    }
                },
                {
                    "key": "change_tags",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "add": {
                                "title": "Add tag(s)",
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            },
                            "rem": {
                                "title": "Remove tag(s)",
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            }
                        }
                    },
                    "display": {
                        "noun": "tags",
                        "verb": "change",
                        "title": "Change tags"
                    }
                },
                {
                    "key": "time_estimate",
                    "schema": {
                        "type": "object",
                        "required": [
                            "time_estimate"
                        ],
                        "properties": {
                            "time_estimate": {
                                "type": "number",
                                "title": "Time Estimate",
                                "format": "duration"
                            }
                        }
                    },
                    "display": {
                        "noun": "time estimate",
                        "verb": "change",
                        "title": "Estimate time"
                    }
                },
                {
                    "key": "change_followers",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "add": {
                                "type": "array",
                                "title": "Add watcher(s)",
                                "items": {
                                    "type": "number"
                                }
                            },
                            "rem": {
                                "type": "array",
                                "title": "Remove watcher(s)",
                                "items": {
                                    "type": "number"
                                }
                            },
                            "unfollow": {
                                "type": "boolean",
                                "title": "Remove all watchers"
                            }
                        }
                    },
                    "display": {
                        "noun": "watchers",
                        "verb": "change",
                        "title": "Change watchers"
                    }
                },
                {
                    "key": "status",
                    "schema": {
                        "type": "object",
                        "required": [
                            "status"
                        ],
                        "properties": {
                            "status": {
                                "type": "string",
                                "title": "Status"
                            },
                            "action": {
                                "type": "number",
                                "enum": [
                                    1,
                                    2,
                                    3
                                ],
                                "default": 1,
                                "hidden": true
                            }
                        }
                    },
                    "display": {
                        "noun": "status",
                        "verb": "change",
                        "title": "Change status"
                    }
                },
                {
                    "key": "priority",
                    "schema": {
                        "type": "object",
                        "required": [
                            "priority"
                        ],
                        "properties": {
                            "priority": {
                                "type": "string",
                                "enum": [
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "none"
                                ],
                                "title": "Priority Level"
                            }
                        }
                    },
                    "display": {
                        "noun": "priority",
                        "verb": "change",
                        "title": "Change Priority"
                    }
                },
                {
                    "key": "due_date",
                    "schema": {
                        "type": "object",
                        "anyOf": [
                            [
                                "days_from_now"
                            ]
                        ],
                        "required": [
                            "due_date"
                        ],
                        "properties": {
                            "due_date": {
                                "type": "number",
                                "title": "Due Date",
                                "format": "datetime"
                            },
                            "due_date_time": {
                                "type": "boolean",
                                "title": "Due Date Time",
                                "format": "datetime"
                            },
                            "days_from_now": {
                                "type": "number",
                                "title": "Days From Now",
                                "description": "Days from when the automation happens"
                            }
                        }
                    },
                    "display": {
                        "noun": "due date",
                        "verb": "change",
                        "title": "Change due date"
                    }
                },
                {
                    "key": "start_date",
                    "schema": {
                        "type": "object",
                        "anyOf": [
                            [
                                "days_from_now"
                            ]
                        ],
                        "required": [
                            "start_date"
                        ],
                        "properties": {
                            "start_date": {
                                "type": "number",
                                "title": "Start Date",
                                "format": "datetime"
                            },
                            "start_date_time": {
                                "type": "boolean",
                                "title": "Start Date Time",
                                "format": "datetime"
                            },
                            "days_from_now": {
                                "type": "number",
                                "title": "Days From Now",
                                "description": "Days from when the automation happens"
                            }
                        }
                    },
                    "display": {
                        "noun": "start date",
                        "verb": "change",
                        "title": "Change start date"
                    }
                },
                {
                    "key": "subcategory",
                    "schema": {
                        "type": "object",
                        "required": [
                            "subcategory_id"
                        ],
                        "properties": {
                            "subcategory_id": {
                                "type": "number",
                                "title": "List name"
                            },
                            "add_to_current_list": {
                                "type": "boolean",
                                "title": "Move and keep in current List"
                            }
                        }
                    },
                    "display": {
                        "noun": "List",
                        "verb": "change",
                        "title": "Move to List"
                    }
                },
                {
                    "key": "custom_field",
                    "schema": {
                        "type": "object",
                        "required": [
                            "field_id",
                            "value"
                        ],
                        "properties": {
                            "field_id": {
                                "type": "string",
                                "title": "common_field"
                            },
                            "value": {
                                "type": [
                                    "number",
                                    "string",
                                    "boolean",
                                    "object",
                                    "array"
                                ],
                                "title": "Value"
                            },
                            "days_from_now": {
                                "type": "number",
                                "title": "Days From Now",
                                "description": "Days from when the automation happens",
                                "field_types": [
                                    4
                                ]
                            },
                            "value_options": {
                                "type": "object",
                                "properties": {
                                    "time": {
                                        "type": "boolean",
                                        "title": "Datetime"
                                    }
                                }
                            }
                        }
                    },
                    "display": {
                        "noun": "custom field",
                        "verb": "set",
                        "title": "Set Custom Field"
                    }
                },
                {
                    "key": "webhook",
                    "schema": {
                        "type": "object",
                        "required": [
                            "endpoint"
                        ],
                        "properties": {
                            "endpoint": {
                                "type": "string",
                                "format": "url",
                                "title": "URL",
                                "url_encode": true
                            }
                        }
                    },
                    "display": {
                        "noun": "webhook",
                        "verb": "send",
                        "title": "Call webhook"
                    }
                },
                {
                    "key": "add_subcategory",
                    "schema": {
                        "type": "object",
                        "required": [
                            "subcategory_id"
                        ],
                        "properties": {
                            "subcategory_id": {
                                "type": "number",
                                "title": "List name"
                            }
                        }
                    },
                    "display": {
                        "noun": "List",
                        "verb": "add to",
                        "title": "Add to List"
                    }
                },
                {
                    "key": "create_list",
                    "schema": {
                        "type": "object",
                        "required": [
                            "list_location",
                            "name"
                        ],
                        "properties": {
                            "list_location": {
                                "type": "object",
                                "required": [
                                    "location_id",
                                    "location_type"
                                ],
                                "properties": {
                                    "location_id": {
                                        "type": "string"
                                    },
                                    "location_type": {
                                        "type": "string"
                                    }
                                },
                                "title": "Location"
                            },
                            "name": {
                                "type": "string",
                                "title": "List name"
                            }
                        }
                    },
                    "display": {
                        "noun": "List",
                        "verb": "create",
                        "title": "Create a List"
                    }
                }
            ]
        },
        {
            "kind": "email",
            "display": {
                "label": "Email",
                "description": "Send Email",
                "color": "#0000FF"
            },
            "internal": false,
            "production": true,
            "auth_type": "custom",
            "dynamic_values": {
                "from": {
                    "type": "object",
                    "required": [
                        "auth"
                    ],
                    "properties": {
                        "auth": {
                            "type": "string",
                            "hidden": true,
                            "auth": true
                        }
                    }
                }
            },
            "authentication": {
                "type": "custom"
            },
            "conditions": [],
            "events": [],
            "methods": [
                {
                    "key": "email",
                    "schema": {
                        "type": "object",
                        "required": [
                            "to",
                            "subject",
                            "body",
                            "auth"
                        ],
                        "anyOf": [
                            [
                                "to",
                                "cc",
                                "bcc"
                            ]
                        ],
                        "properties": {
                            "from": {
                                "type": "string",
                                "title": "From",
                                "dynamic": "from",
                                "readonly": true
                            },
                            "to": {
                                "type": "string",
                                "title": "To",
                                "format": "email_list"
                            },
                            "cc": {
                                "type": "string",
                                "title": "Cc",
                                "format": "email_list"
                            },
                            "bcc": {
                                "type": "string",
                                "title": "Bcc",
                                "format": "email_list"
                            },
                            "subject": {
                                "type": "string",
                                "title": "Subject",
                                "pretty": true
                            },
                            "body": {
                                "type": "string",
                                "title": "Body",
                                "pretty": true
                            },
                            "comment_quill": {
                                "type": "string",
                                "title": "Comment quill",
                                "hidden": true,
                                "pretty": true,
                                "escape": true
                            },
                            "comment_quill_edit": {
                                "type": "string",
                                "title": "Comment quill edit",
                                "hidden": true
                            },
                            "auth": {
                                "type": "string",
                                "hidden": true,
                                "auth": true
                            },
                            "signature": {
                                "type": "string",
                                "hidden": true
                            },
                            "attachment": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                },
                                "hidden": true
                            }
                        }
                    },
                    "display": {
                        "noun": "email",
                        "verb": "Send",
                        "title": "Send Email"
                    }
                }
            ]
        },
        {
            "kind": "calendlyV2",
            "display": {
                "label": "Calendly",
                "description": "Calendly helps you schedule meetings without the back-and-forth emails.",
                "icon": "//s3.amazonaws.com/images.tray.io/artisan/icons/d834c26c004bd650c25586a525eebeb7.png",
                "color": null
            },
            "internal": false,
            "production": true,
            "auth_type": "token",
            "dynamic_values": {},
            "authentication": {
                "type": "token",
                "schema": {
                    "type": "object",
                    "properties": {
                        "token": {
                            "type": "string",
                            "title": "Personal Access Token"
                        }
                    }
                }
            },
            "conditions": [],
            "events": [
                {
                    "key": "webhook",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "cancel_url": {
                                        "type": "string"
                                    },
                                    "created_at": {
                                        "type": "string"
                                    },
                                    "email": {
                                        "type": "string"
                                    },
                                    "event": {
                                        "type": "object",
                                        "properties": {
                                            "created_at": {
                                                "type": "string"
                                            },
                                            "end_time": {
                                                "type": "string"
                                            },
                                            "event_guests": {
                                                "type": "array",
                                                "items": {}
                                            },
                                            "event_memberships": {
                                                "type": "array",
                                                "items": [
                                                    {
                                                        "type": "object",
                                                        "properties": {
                                                            "user": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "required": [
                                                            "user"
                                                        ]
                                                    }
                                                ]
                                            },
                                            "event_type": {
                                                "type": "object",
                                                "properties": {
                                                    "active": {
                                                        "type": "boolean"
                                                    },
                                                    "booking_method": {
                                                        "type": "string"
                                                    },
                                                    "color": {
                                                        "type": "string"
                                                    },
                                                    "created_at": {
                                                        "type": "string"
                                                    },
                                                    "custom_questions": {
                                                        "type": "array",
                                                        "items": [
                                                            {
                                                                "type": "object",
                                                                "properties": {
                                                                    "answer_choices": {
                                                                        "type": "array",
                                                                        "items": {}
                                                                    },
                                                                    "enabled": {
                                                                        "type": "boolean"
                                                                    },
                                                                    "include_other": {
                                                                        "type": "boolean"
                                                                    },
                                                                    "name": {
                                                                        "type": "string"
                                                                    },
                                                                    "position": {
                                                                        "type": "integer"
                                                                    },
                                                                    "required": {
                                                                        "type": "boolean"
                                                                    },
                                                                    "type": {
                                                                        "type": "string"
                                                                    }
                                                                },
                                                                "required": [
                                                                    "answer_choices",
                                                                    "enabled",
                                                                    "include_other",
                                                                    "name",
                                                                    "position",
                                                                    "required",
                                                                    "type"
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    "deleted_at": {
                                                        "type": "null"
                                                    },
                                                    "description_html": {
                                                        "type": "string"
                                                    },
                                                    "description_plain": {
                                                        "type": "string"
                                                    },
                                                    "duration": {
                                                        "type": "integer"
                                                    },
                                                    "internal_note": {
                                                        "type": "null"
                                                    },
                                                    "kind": {
                                                        "type": "string"
                                                    },
                                                    "name": {
                                                        "type": "string"
                                                    },
                                                    "pooling_type": {
                                                        "type": "null"
                                                    },
                                                    "profile": {
                                                        "type": "object",
                                                        "properties": {
                                                            "name": {
                                                                "type": "string"
                                                            },
                                                            "owner": {
                                                                "type": "string"
                                                            },
                                                            "type": {
                                                                "type": "string"
                                                            }
                                                        },
                                                        "required": [
                                                            "name",
                                                            "owner",
                                                            "type"
                                                        ]
                                                    },
                                                    "scheduling_url": {
                                                        "type": "string"
                                                    },
                                                    "secret": {
                                                        "type": "boolean"
                                                    },
                                                    "slug": {
                                                        "type": "string"
                                                    },
                                                    "type": {
                                                        "type": "string"
                                                    },
                                                    "updated_at": {
                                                        "type": "string"
                                                    },
                                                    "uri": {
                                                        "type": "string"
                                                    }
                                                },
                                                "required": [
                                                    "active",
                                                    "booking_method",
                                                    "color",
                                                    "created_at",
                                                    "custom_questions",
                                                    "deleted_at",
                                                    "description_html",
                                                    "description_plain",
                                                    "duration",
                                                    "internal_note",
                                                    "kind",
                                                    "name",
                                                    "pooling_type",
                                                    "profile",
                                                    "scheduling_url",
                                                    "secret",
                                                    "slug",
                                                    "type",
                                                    "updated_at",
                                                    "uri"
                                                ]
                                            },
                                            "invitees_counter": {
                                                "type": "object",
                                                "properties": {
                                                    "active": {
                                                        "type": "integer"
                                                    },
                                                    "limit": {
                                                        "type": "integer"
                                                    },
                                                    "total": {
                                                        "type": "integer"
                                                    }
                                                },
                                                "required": [
                                                    "active",
                                                    "limit",
                                                    "total"
                                                ]
                                            },
                                            "location": {
                                                "type": "object",
                                                "properties": {
                                                    "location": {
                                                        "type": "null"
                                                    },
                                                    "type": {
                                                        "type": "string"
                                                    }
                                                },
                                                "required": [
                                                    "location",
                                                    "type"
                                                ]
                                            },
                                            "name": {
                                                "type": "string"
                                            },
                                            "start_time": {
                                                "type": "string"
                                            },
                                            "status": {
                                                "type": "string"
                                            },
                                            "updated_at": {
                                                "type": "string"
                                            },
                                            "uri": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "created_at",
                                            "end_time",
                                            "event_guests",
                                            "event_memberships",
                                            "event_type",
                                            "invitees_counter",
                                            "location",
                                            "name",
                                            "start_time",
                                            "status",
                                            "updated_at",
                                            "uri"
                                        ]
                                    },
                                    "first_name": {
                                        "type": "null"
                                    },
                                    "last_name": {
                                        "type": "null"
                                    },
                                    "name": {
                                        "type": "string"
                                    },
                                    "new_invitee": {
                                        "type": "null"
                                    },
                                    "no_show": {
                                        "type": "null"
                                    },
                                    "old_invitee": {
                                        "type": "null"
                                    },
                                    "payment": {
                                        "type": "null"
                                    },
                                    "questions_and_answers": {
                                        "type": "array",
                                        "items": {}
                                    },
                                    "reconfirmation": {
                                        "type": "null"
                                    },
                                    "reschedule_url": {
                                        "type": "string"
                                    },
                                    "rescheduled": {
                                        "type": "boolean"
                                    },
                                    "routing_form_submission": {
                                        "type": "null"
                                    },
                                    "status": {
                                        "type": "string"
                                    },
                                    "text_reminder_number": {
                                        "type": "null"
                                    },
                                    "timezone": {
                                        "type": "string"
                                    },
                                    "tracking": {
                                        "type": "object",
                                        "properties": {
                                            "utm_campaign": {
                                                "type": "null"
                                            },
                                            "utm_source": {
                                                "type": "null"
                                            },
                                            "utm_medium": {
                                                "type": "null"
                                            },
                                            "utm_content": {
                                                "type": "null"
                                            },
                                            "utm_term": {
                                                "type": "null"
                                            },
                                            "salesforce_uuid": {
                                                "type": "null"
                                            }
                                        },
                                        "required": [
                                            "utm_campaign",
                                            "utm_source",
                                            "utm_medium",
                                            "utm_content",
                                            "utm_term",
                                            "salesforce_uuid"
                                        ]
                                    },
                                    "updated_at": {
                                        "type": "string"
                                    },
                                    "uri": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "cancel_url",
                                    "created_at",
                                    "email",
                                    "event",
                                    "first_name",
                                    "last_name",
                                    "name",
                                    "new_invitee",
                                    "no_show",
                                    "old_invitee",
                                    "payment",
                                    "questions_and_answers",
                                    "reconfirmation",
                                    "reschedule_url",
                                    "rescheduled",
                                    "routing_form_submission",
                                    "status",
                                    "text_reminder_number",
                                    "timezone",
                                    "tracking",
                                    "updated_at",
                                    "uri"
                                ]
                            },
                            "trigger_id": {
                                "type": "string"
                            },
                            "team_id": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "payload",
                            "trigger_id",
                            "team_id"
                        ]
                    },
                    "input_schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "additionalProperties": false,
                        "type": "object",
                        "properties": {
                            "auth": {
                                "auth": true,
                                "hidden": true,
                                "title": "Auth",
                                "type": "string"
                            }
                        },
                        "required": [
                            "auth"
                        ],
                        "advanced": [
                            "public_url"
                        ]
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "create_task"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Event Created",
                        "verb": "created",
                        "noun": "event"
                    }
                }
            ],
            "methods": []
        },
        {
            "kind": "hubspot",
            "display": {
                "label": "HubSpot",
                "description": "Increase leads, accelerate sales, organize your contacts, and better serve your customers.",
                "icon": "",
                "color": null
            },
            "internal": false,
            "production": true,
            "dynamic_values": {
                "pipelines": {},
                "dealStages": {
                    "type": "object",
                    "required": [
                        "pipeline"
                    ],
                    "properties": {
                        "pipeline": {
                            "type": "string",
                            "hidden": true
                        }
                    }
                },
                "products": {},
                "deals": {},
                "ticketStages": {
                    "type": "object",
                    "required": [
                        "hs_pipeline"
                    ],
                    "properties": {
                        "hs_pipeline": {
                            "type": "string",
                            "hidden": true
                        }
                    }
                },
                "owners": {},
                "ticketPipelines": {}
            },
            "authentication": {},
            "conditions": [],
            "events": [
                {
                    "key": "contact.creation",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "company": {
                                        "type": "string",
                                        "title": "Company"
                                    },
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Email"
                                    },
                                    "firstname": {
                                        "type": "string",
                                        "title": "First name"
                                    },
                                    "lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "lastname": {
                                        "type": "string",
                                        "title": "Last name"
                                    },
                                    "phone": {
                                        "type": "string",
                                        "title": "Phone"
                                    },
                                    "website": {
                                        "type": "string",
                                        "title": "Website"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "additionalProperties": false,
                        "type": "object",
                        "properties": {},
                        "required": [],
                        "advanced": [
                            "public_url"
                        ]
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "create_task"
                        },
                        {
                            "resource": "task",
                            "action": "create_subtask"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Contact Created",
                        "verb": "created",
                        "noun": "event"
                    }
                },
                {
                    "key": "company.creation",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "city": {
                                        "type": "string",
                                        "title": "City"
                                    },
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "domain": {
                                        "type": "string",
                                        "title": "Company domain name"
                                    },
                                    "hs_lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "industry": {
                                        "type": "string",
                                        "title": "Industry"
                                    },
                                    "name": {
                                        "type": "string",
                                        "title": "Company name"
                                    },
                                    "phone": {
                                        "type": "string",
                                        "title": "Phone"
                                    },
                                    "state": {
                                        "type": "string",
                                        "title": "State"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "additionalProperties": false,
                        "type": "object",
                        "properties": {},
                        "required": [],
                        "advanced": [
                            "public_url"
                        ]
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "create_task"
                        },
                        {
                            "resource": "task",
                            "action": "create_subtask"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Company Created",
                        "verb": "created",
                        "noun": "event"
                    }
                },
                {
                    "key": "deal.creation",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "amount": {
                                        "type": "string",
                                        "title": "Amount"
                                    },
                                    "closedate": {
                                        "type": "string",
                                        "title": "Close date"
                                    },
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "dealname": {
                                        "type": "string",
                                        "title": "Deal name"
                                    },
                                    "dealstage": {
                                        "type": "string",
                                        "title": "Deal stage"
                                    },
                                    "hs_lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "hs_object_id": {
                                        "type": "string",
                                        "title": "Deal id"
                                    },
                                    "pipeline": {
                                        "type": "string",
                                        "title": "Pipeline"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "additionalProperties": false,
                        "type": "object",
                        "properties": {},
                        "required": [],
                        "advanced": [
                            "public_url"
                        ]
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "create_task"
                        },
                        {
                            "resource": "task",
                            "action": "create_subtask"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Deal Created",
                        "verb": "created",
                        "noun": "event"
                    }
                },
                {
                    "key": "line_item.creation",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "hs_lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "hs_product_id": {
                                        "type": "string",
                                        "title": "Product Id"
                                    },
                                    "hs_recurring_billing_period": {
                                        "type": "string",
                                        "title": "Term (Months)"
                                    },
                                    "name": {
                                        "type": "string",
                                        "title": "Name"
                                    },
                                    "price": {
                                        "type": "string",
                                        "title": "Unit price"
                                    },
                                    "quantity": {
                                        "type": "string",
                                        "title": "Quantity"
                                    },
                                    "recurringbillingfrequency": {
                                        "type": "string",
                                        "title": "Billing frequency"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "additionalProperties": false,
                        "type": "object",
                        "properties": {},
                        "required": [],
                        "advanced": [
                            "public_url"
                        ]
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "create_task"
                        },
                        {
                            "resource": "task",
                            "action": "create_subtask"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Line Item Created",
                        "verb": "created",
                        "noun": "event"
                    }
                },
                {
                    "key": "product.creation",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "hs_lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "description": {
                                        "type": "string",
                                        "title": "Description"
                                    },
                                    "hs_recurring_billing_period": {
                                        "type": "string",
                                        "title": "Term (Months)"
                                    },
                                    "hs_sku": {
                                        "type": "string",
                                        "title": "SKU"
                                    },
                                    "name": {
                                        "type": "string",
                                        "title": "Name"
                                    },
                                    "price": {
                                        "type": "string",
                                        "title": "Unit price"
                                    },
                                    "hs_cost_of_goods_sold": {
                                        "type": "string",
                                        "title": "Unit cost"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "additionalProperties": false,
                        "type": "object",
                        "properties": {},
                        "required": [],
                        "advanced": [
                            "public_url"
                        ]
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "create_task"
                        },
                        {
                            "resource": "task",
                            "action": "create_subtask"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Product Created",
                        "verb": "created",
                        "noun": "event"
                    }
                },
                {
                    "key": "ticket.creation",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "hs_lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "hs_pipeline": {
                                        "type": "string",
                                        "title": "Pipeline"
                                    },
                                    "hs_pipeline_stage": {
                                        "type": "string",
                                        "title": "Pipeline stage"
                                    },
                                    "hs_ticket_priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    },
                                    "subject": {
                                        "type": "string",
                                        "title": "Ticket name"
                                    },
                                    "content": {
                                        "type": "string",
                                        "title": "Description"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "additionalProperties": false,
                        "type": "object",
                        "properties": {},
                        "required": [],
                        "advanced": [
                            "public_url"
                        ]
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "create_task"
                        },
                        {
                            "resource": "task",
                            "action": "create_subtask"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Ticket Created",
                        "verb": "created",
                        "noun": "event"
                    }
                },
                {
                    "key": "deal.propertyChange",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "amount": {
                                        "type": "string",
                                        "title": "Amount"
                                    },
                                    "closedate": {
                                        "type": "string",
                                        "title": "Close date"
                                    },
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "dealname": {
                                        "type": "string",
                                        "title": "Deal name"
                                    },
                                    "dealstage": {
                                        "type": "string",
                                        "title": "Deal stage"
                                    },
                                    "hs_lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "hs_object_id": {
                                        "type": "string",
                                        "title": "Deal id"
                                    },
                                    "pipeline": {
                                        "type": "string",
                                        "title": "Pipeline"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "type": "object",
                        "required": [
                            "property"
                        ],
                        "properties": {
                            "property": {
                                "type": "string",
                                "title": "Property",
                                "enum": [
                                    "dealname",
                                    "amount",
                                    "dealstage",
                                    "pipeline",
                                    "closedate",
                                    "createdate",
                                    "dealtype",
                                    "description",
                                    "closed_lost_reason",
                                    "closed_won_reason",
                                    "deal_currency_code",
                                    "hs_analytics_source"
                                ]
                            }
                        }
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "apply_template"
                        },
                        {
                            "resource": "task",
                            "action": "comment"
                        },
                        {
                            "resource": "task",
                            "action": "delete"
                        },
                        {
                            "resource": "task",
                            "action": "archive"
                        },
                        {
                            "resource": "task",
                            "action": "copy"
                        },
                        {
                            "resource": "task",
                            "action": "time_spent"
                        },
                        {
                            "resource": "task",
                            "action": "change_tags"
                        },
                        {
                            "resource": "task",
                            "action": "time_estimate"
                        },
                        {
                            "resource": "task",
                            "action": "change_followers"
                        },
                        {
                            "resource": "task",
                            "action": "status"
                        },
                        {
                            "resource": "task",
                            "action": "priority"
                        },
                        {
                            "resource": "task",
                            "action": "due_date"
                        },
                        {
                            "resource": "task",
                            "action": "start_date"
                        },
                        {
                            "resource": "task",
                            "action": "assignee"
                        },
                        {
                            "resource": "task",
                            "action": "subcategory"
                        },
                        {
                            "resource": "task",
                            "action": "custom_field"
                        },
                        {
                            "resource": "task",
                            "action": "webhook"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Deal Updated",
                        "verb": "updated",
                        "noun": "event"
                    }
                },
                {
                    "key": "ticket.propertyChange",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "hs_lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "hs_pipeline": {
                                        "type": "string",
                                        "title": "Pipeline"
                                    },
                                    "hs_pipeline_stage": {
                                        "type": "string",
                                        "title": "Pipeline stage"
                                    },
                                    "hs_ticket_priority": {
                                        "type": "string",
                                        "title": "Priority"
                                    },
                                    "subject": {
                                        "type": "string",
                                        "title": "Ticket name"
                                    },
                                    "content": {
                                        "type": "string",
                                        "title": "Description"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "type": "object",
                        "required": [
                            "property"
                        ],
                        "properties": {
                            "property": {
                                "type": "string",
                                "title": "Property",
                                "enum": [
                                    "subject",
                                    "content",
                                    "source_type",
                                    "hs_resolution",
                                    "createdate",
                                    "closed_date",
                                    "hs_ticket_priority",
                                    "hs_pipeline",
                                    "hs_pipeline_stage",
                                    "hs_ticket_category",
                                    "hs_file_upload"
                                ]
                            }
                        }
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "apply_template"
                        },
                        {
                            "resource": "task",
                            "action": "comment"
                        },
                        {
                            "resource": "task",
                            "action": "delete"
                        },
                        {
                            "resource": "task",
                            "action": "archive"
                        },
                        {
                            "resource": "task",
                            "action": "copy"
                        },
                        {
                            "resource": "task",
                            "action": "time_spent"
                        },
                        {
                            "resource": "task",
                            "action": "change_tags"
                        },
                        {
                            "resource": "task",
                            "action": "time_estimate"
                        },
                        {
                            "resource": "task",
                            "action": "change_followers"
                        },
                        {
                            "resource": "task",
                            "action": "status"
                        },
                        {
                            "resource": "task",
                            "action": "priority"
                        },
                        {
                            "resource": "task",
                            "action": "due_date"
                        },
                        {
                            "resource": "task",
                            "action": "start_date"
                        },
                        {
                            "resource": "task",
                            "action": "assignee"
                        },
                        {
                            "resource": "task",
                            "action": "subcategory"
                        },
                        {
                            "resource": "task",
                            "action": "custom_field"
                        },
                        {
                            "resource": "task",
                            "action": "webhook"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Ticket Updated",
                        "verb": "updated",
                        "noun": "event"
                    }
                },
                {
                    "key": "product.propertyChange",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "hs_lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "description": {
                                        "type": "string",
                                        "title": "Description"
                                    },
                                    "hs_recurring_billing_period": {
                                        "type": "string",
                                        "title": "Term (Months)"
                                    },
                                    "hs_sku": {
                                        "type": "string",
                                        "title": "SKU"
                                    },
                                    "name": {
                                        "type": "string",
                                        "title": "Name"
                                    },
                                    "price": {
                                        "type": "string",
                                        "title": "Unit price"
                                    },
                                    "hs_cost_of_goods_sold": {
                                        "type": "string",
                                        "title": "Unit cost"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "type": "object",
                        "required": [
                            "property"
                        ],
                        "properties": {
                            "property": {
                                "type": "string",
                                "title": "Property",
                                "enum": [
                                    "createdate",
                                    "name",
                                    "description",
                                    "price",
                                    "recurringbillingfrequency",
                                    "discount",
                                    "hs_discount_percentage",
                                    "tax",
                                    "hs_recurring_billing_period",
                                    "hs_cost_of_goods_sold"
                                ]
                            }
                        }
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "apply_template"
                        },
                        {
                            "resource": "task",
                            "action": "comment"
                        },
                        {
                            "resource": "task",
                            "action": "delete"
                        },
                        {
                            "resource": "task",
                            "action": "archive"
                        },
                        {
                            "resource": "task",
                            "action": "copy"
                        },
                        {
                            "resource": "task",
                            "action": "time_spent"
                        },
                        {
                            "resource": "task",
                            "action": "change_tags"
                        },
                        {
                            "resource": "task",
                            "action": "time_estimate"
                        },
                        {
                            "resource": "task",
                            "action": "change_followers"
                        },
                        {
                            "resource": "task",
                            "action": "status"
                        },
                        {
                            "resource": "task",
                            "action": "priority"
                        },
                        {
                            "resource": "task",
                            "action": "due_date"
                        },
                        {
                            "resource": "task",
                            "action": "start_date"
                        },
                        {
                            "resource": "task",
                            "action": "assignee"
                        },
                        {
                            "resource": "task",
                            "action": "subcategory"
                        },
                        {
                            "resource": "task",
                            "action": "custom_field"
                        },
                        {
                            "resource": "task",
                            "action": "webhook"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Product Updated",
                        "verb": "updated",
                        "noun": "event"
                    }
                },
                {
                    "key": "company.propertyChange",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "city": {
                                        "type": "string",
                                        "title": "City"
                                    },
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "domain": {
                                        "type": "string",
                                        "title": "Company domain name"
                                    },
                                    "hs_lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "industry": {
                                        "type": "string",
                                        "title": "Industry"
                                    },
                                    "name": {
                                        "type": "string",
                                        "title": "Company name"
                                    },
                                    "phone": {
                                        "type": "string",
                                        "title": "Phone"
                                    },
                                    "state": {
                                        "type": "string",
                                        "title": "State"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "type": "object",
                        "required": [
                            "property"
                        ],
                        "properties": {
                            "property": {
                                "type": "string",
                                "title": "Property",
                                "enum": [
                                    "name",
                                    "phone",
                                    "address",
                                    "address2",
                                    "city",
                                    "state",
                                    "zip",
                                    "country",
                                    "website",
                                    "domain",
                                    "numberofemployees",
                                    "industry",
                                    "annualrevenue",
                                    "lifecyclestage",
                                    "hs_lead_status",
                                    "type",
                                    "description",
                                    "closedate",
                                    "web_technologies",
                                    "twitterhandle",
                                    "twitterbio",
                                    "twitterfollowers",
                                    "facebook_company_page",
                                    "linkedin_company_page",
                                    "linkedinbio",
                                    "googleplus_page",
                                    "hs_analytics_source",
                                    "founded_year",
                                    "timezone",
                                    "facebookfans",
                                    "about_us",
                                    "total_money_raised"
                                ]
                            }
                        }
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "apply_template"
                        },
                        {
                            "resource": "task",
                            "action": "comment"
                        },
                        {
                            "resource": "task",
                            "action": "delete"
                        },
                        {
                            "resource": "task",
                            "action": "archive"
                        },
                        {
                            "resource": "task",
                            "action": "copy"
                        },
                        {
                            "resource": "task",
                            "action": "time_spent"
                        },
                        {
                            "resource": "task",
                            "action": "change_tags"
                        },
                        {
                            "resource": "task",
                            "action": "time_estimate"
                        },
                        {
                            "resource": "task",
                            "action": "change_followers"
                        },
                        {
                            "resource": "task",
                            "action": "status"
                        },
                        {
                            "resource": "task",
                            "action": "priority"
                        },
                        {
                            "resource": "task",
                            "action": "due_date"
                        },
                        {
                            "resource": "task",
                            "action": "start_date"
                        },
                        {
                            "resource": "task",
                            "action": "assignee"
                        },
                        {
                            "resource": "task",
                            "action": "subcategory"
                        },
                        {
                            "resource": "task",
                            "action": "custom_field"
                        },
                        {
                            "resource": "task",
                            "action": "webhook"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Company Updated",
                        "verb": "updated",
                        "noun": "event"
                    }
                },
                {
                    "key": "contact.propertyChange",
                    "schema": {
                        "$schema": "http://json-schema.org/draft-04/schema#",
                        "type": "object",
                        "properties": {
                            "payload": {
                                "type": "object",
                                "properties": {
                                    "company": {
                                        "type": "string",
                                        "title": "Company"
                                    },
                                    "createdate": {
                                        "type": "string",
                                        "title": "Create date"
                                    },
                                    "email": {
                                        "type": "string",
                                        "title": "Email"
                                    },
                                    "firstname": {
                                        "type": "string",
                                        "title": "First name"
                                    },
                                    "lastmodifieddate": {
                                        "type": "string",
                                        "title": "Last activity date"
                                    },
                                    "lastname": {
                                        "type": "string",
                                        "title": "Last name"
                                    },
                                    "phone": {
                                        "type": "string",
                                        "title": "Phone"
                                    },
                                    "website": {
                                        "type": "string",
                                        "title": "Website"
                                    }
                                }
                            }
                        },
                        "required": []
                    },
                    "input_schema": {
                        "type": "object",
                        "required": [
                            "property"
                        ],
                        "properties": {
                            "property": {
                                "type": "string",
                                "title": "Property",
                                "enum": [
                                    "firstname",
                                    "lastname",
                                    "salutation",
                                    "email",
                                    "phone",
                                    "mobilephone",
                                    "fax",
                                    "address",
                                    "city",
                                    "state",
                                    "zip",
                                    "country",
                                    "hs_language",
                                    "jobtitle",
                                    "message",
                                    "closedate",
                                    "lifecyclestage",
                                    "company",
                                    "website",
                                    "numemployees",
                                    "annualrevenue",
                                    "industry",
                                    "twitterhandle",
                                    "followercount",
                                    "twitterprofilephoto",
                                    "hs_analytics_source",
                                    "hs_persona",
                                    "hs_legal_basis"
                                ]
                            }
                        }
                    },
                    "allowed_actions": [
                        {
                            "resource": "task",
                            "action": "apply_template"
                        },
                        {
                            "resource": "task",
                            "action": "comment"
                        },
                        {
                            "resource": "task",
                            "action": "delete"
                        },
                        {
                            "resource": "task",
                            "action": "archive"
                        },
                        {
                            "resource": "task",
                            "action": "copy"
                        },
                        {
                            "resource": "task",
                            "action": "time_spent"
                        },
                        {
                            "resource": "task",
                            "action": "change_tags"
                        },
                        {
                            "resource": "task",
                            "action": "time_estimate"
                        },
                        {
                            "resource": "task",
                            "action": "change_followers"
                        },
                        {
                            "resource": "task",
                            "action": "status"
                        },
                        {
                            "resource": "task",
                            "action": "priority"
                        },
                        {
                            "resource": "task",
                            "action": "due_date"
                        },
                        {
                            "resource": "task",
                            "action": "start_date"
                        },
                        {
                            "resource": "task",
                            "action": "assignee"
                        },
                        {
                            "resource": "task",
                            "action": "subcategory"
                        },
                        {
                            "resource": "task",
                            "action": "custom_field"
                        },
                        {
                            "resource": "task",
                            "action": "webhook"
                        },
                        {
                            "resource": "task",
                            "action": "create_list"
                        }
                    ],
                    "display": {
                        "title": "Contact Updated",
                        "verb": "updated",
                        "noun": "event"
                    }
                }
            ],
            "methods": [
                {
                    "key": "create_company",
                    "schema": {
                        "type": "object",
                        "required": [
                            "domain",
                            "name"
                        ],
                        "properties": {
                            "domain": {
                                "type": "string",
                                "title": "Company domain name",
                                "useCustomFieldsOnly": true,
                                "format": "url"
                            },
                            "name": {
                                "type": "string",
                                "title": "Company name"
                            },
                            "industry": {
                                "type": "string",
                                "title": "Industry",
                                "enum": [
                                    "Accounting",
                                    "Airlines/Aviation",
                                    "Alternative Dispute Resolution",
                                    "Alternative Medicine",
                                    "Animation",
                                    "Apparel & Fashion",
                                    "Architecture & Planning",
                                    "Arts and Crafts",
                                    "Automotive",
                                    "Aviation & Aerospace",
                                    "Banking",
                                    "Biotechnology",
                                    "Broadcast Media",
                                    "Building Materials",
                                    "Business Supplies and Equipment",
                                    "Capital Markets",
                                    "Chemicals",
                                    "Civic & Social Organization",
                                    "Civil Engineering",
                                    "Commercial Real Estate",
                                    "Computer & Network Security",
                                    "Computer Games",
                                    "Computer Hardware",
                                    "Computer Networking",
                                    "Computer Software",
                                    "Internet",
                                    "Construction",
                                    "Consumer Electronics",
                                    "Consumer Goods",
                                    "Consumer Services",
                                    "Cosmetics",
                                    "Dairy",
                                    "Defense & Space",
                                    "Design",
                                    "Education Management",
                                    "E-Learning",
                                    "Electrical/Electronic Manufacturing",
                                    "Entertainment",
                                    "Environmental Services",
                                    "Events Services",
                                    "Executive Office",
                                    "Facilities Services",
                                    "Farming",
                                    "Financial Services",
                                    "Fine Art",
                                    "Fishery",
                                    "Food & Beverages",
                                    "Food Production",
                                    "Fund-Raising",
                                    "Furniture",
                                    "Gambling & Casinos",
                                    "Glass",
                                    "Ceramics & Concrete",
                                    "Government Administration",
                                    "Government Relations",
                                    "Graphic Design",
                                    "Health",
                                    "Wellness and Fitness",
                                    "Higher Education",
                                    "Hospital & Health Care",
                                    "Hospitality",
                                    "Human Resources",
                                    "Import and Export",
                                    "Individual & Family Services",
                                    "Industrial Automation",
                                    "Information Services",
                                    "Information Technology and Services",
                                    "Insurance",
                                    "International Affairs",
                                    "International Trade and Development",
                                    "Investment Banking",
                                    "Investment Management",
                                    "Judiciary",
                                    "Law Enforcement",
                                    "Law Practice",
                                    "Legal Services",
                                    "Legislative Office",
                                    "Leisure",
                                    "Travel & Tourism",
                                    "Libraries",
                                    "Logistics and Supply Chain",
                                    "Luxury Goods & Jewelry",
                                    "Machinery",
                                    "Management Consulting",
                                    "Maritime",
                                    "Market Research",
                                    "Marketing and Advertising",
                                    "Mechanical or Industrial Engineering",
                                    "Media Production",
                                    "Medical Devices",
                                    "Medical Practice",
                                    "Mental Health Care",
                                    "Military",
                                    "Mining & Metals",
                                    "Motion Pictures and Film",
                                    "Museums and Institutions",
                                    "Music",
                                    "Nanotechnology",
                                    "Newspapers",
                                    "Nonprofit Organization Management",
                                    "Oil & Energy",
                                    "Online Media",
                                    "Outsourcing/Offshoring",
                                    "Package/Freight Delivery",
                                    "Packaging and Containers",
                                    "Paper & Forest Products",
                                    "Performing Arts",
                                    "Pharmaceuticals",
                                    "Philanthropy",
                                    "Photography",
                                    "Plastics",
                                    "Political Organization",
                                    "Primary/Secondary Education",
                                    "Printing",
                                    "Professional Training & Coaching",
                                    "Program Development",
                                    "Public Policy",
                                    "Public Relations and Communications",
                                    "Public Safety",
                                    "Publishing",
                                    "Railroad Manufacture",
                                    "Ranching",
                                    "Real Estate",
                                    "Recreational Facilities and Services",
                                    "Religious Institutions",
                                    "Renewables & Environment",
                                    "Research",
                                    "Restaurants",
                                    "Retail",
                                    "Security and Investigations",
                                    "Semiconductors",
                                    "Shipbuilding",
                                    "Sporting Goods",
                                    "Sports",
                                    "Staffing and Recruiting",
                                    "Supermarkets",
                                    "Telecommunications",
                                    "Textiles",
                                    "Think Tanks",
                                    "Tobacco",
                                    "Translation and Localization",
                                    "Transportation/Trucking/Railroad",
                                    "Utilities",
                                    "Venture Capital & Private Equity",
                                    "Veterinary",
                                    "Warehousing",
                                    "Wholesale",
                                    "Wine and Spirits",
                                    "Wireless",
                                    "Writing and Editing"
                                ]
                            },
                            "city": {
                                "type": "string",
                                "title": "City"
                            },
                            "state": {
                                "type": "string",
                                "title": "State/Region"
                            },
                            "phone": {
                                "type": "string",
                                "title": "Phone",
                                "useCustomFieldsOnly": true,
                                "format": "phone"
                            }
                        }
                    },
                    "display": {
                        "noun": "company",
                        "verb": "create",
                        "title": "Create Company"
                    }
                },
                {
                    "key": "create_contact",
                    "schema": {
                        "type": "object",
                        "required": [
                            "email",
                            "firstname",
                            "lastname"
                        ],
                        "properties": {
                            "company": {
                                "type": "string",
                                "title": "Company"
                            },
                            "email": {
                                "type": "string",
                                "title": "Email",
                                "useCustomFieldsOnly": true,
                                "format": "email"
                            },
                            "firstname": {
                                "type": "string",
                                "title": "First name"
                            },
                            "lastname": {
                                "type": "string",
                                "title": "Last name"
                            },
                            "phone": {
                                "type": "string",
                                "title": "Phone",
                                "useCustomFieldsOnly": true,
                                "format": "phone"
                            },
                            "website": {
                                "type": "string",
                                "title": "Website",
                                "useCustomFieldsOnly": true,
                                "format": "url"
                            }
                        }
                    },
                    "display": {
                        "noun": "contact",
                        "verb": "create",
                        "title": "Create Contact"
                    }
                },
                {
                    "key": "create_deal",
                    "schema": {
                        "type": "object",
                        "required": [
                            "dealname",
                            "pipeline",
                            "dealstage"
                        ],
                        "properties": {
                            "dealname": {
                                "type": "string",
                                "title": "Deal name"
                            },
                            "pipeline": {
                                "type": "string",
                                "title": "Pipeline",
                                "dynamic": "pipelines"
                            },
                            "dealstage": {
                                "type": "string",
                                "dynamic": "dealStages",
                                "depends_on": [
                                    "pipeline"
                                ]
                            },
                            "amount": {
                                "type": "string",
                                "title": "Amount",
                                "useCustomFieldsOnly": true,
                                "format": "currency"
                            },
                            "closedate": {
                                "type": "number",
                                "format": "datetime",
                                "title": "Close date"
                            }
                        }
                    },
                    "display": {
                        "noun": "deal",
                        "verb": "create",
                        "title": "Create Deal"
                    }
                },
                {
                    "key": "create_ticket",
                    "schema": {
                        "type": "object",
                        "required": [
                            "subject",
                            "hs_pipeline",
                            "hs_pipeline_stage"
                        ],
                        "properties": {
                            "subject": {
                                "type": "string",
                                "title": "Ticket name"
                            },
                            "hs_pipeline": {
                                "type": "string",
                                "title": "Pipeline",
                                "dynamic": "ticketPipelines"
                            },
                            "hs_pipeline_stage": {
                                "type": "string",
                                "title": "Ticket stage",
                                "dynamic": "ticketStages",
                                "depends_on": [
                                    "hs_pipeline"
                                ]
                            },
                            "hubspot_owner_id": {
                                "type": "string",
                                "title": "Ticket owner",
                                "dynamic": "owners"
                            },
                            "hs_ticket_priority": {
                                "type": "string",
                                "title": "Ticket priority",
                                "enum": [
                                    "Low",
                                    "Medium",
                                    "High"
                                ]
                            }
                        }
                    },
                    "display": {
                        "noun": "ticket",
                        "verb": "create",
                        "title": "Create Ticket"
                    }
                },
                {
                    "key": "create_line_item",
                    "schema": {
                        "type": "object",
                        "required": [
                            "name",
                            "price",
                            "deal"
                        ],
                        "properties": {
                            "deal": {
                                "type": "string",
                                "title": "Deal",
                                "dynamic": "deals"
                            },
                            "name": {
                                "type": "string",
                                "title": "Name"
                            },
                            "hs_product_id": {
                                "type": "string",
                                "title": "Product",
                                "dynamic": "products"
                            },
                            "hs_recurring_billing_period": {
                                "type": "number",
                                "title": "Term (Months)"
                            },
                            "recurringbillingfrequency": {
                                "type": "string",
                                "title": "Billing frequency",
                                "enum": [
                                    "Monthly",
                                    "Quarterly",
                                    "Semi-annually",
                                    "Annually",
                                    "Every two years",
                                    "Every three years"
                                ]
                            },
                            "quantity": {
                                "type": "number",
                                "title": "Quantity"
                            },
                            "price": {
                                "type": "string",
                                "title": "Price",
                                "useCustomFieldsOnly": true,
                                "format": "currency"
                            }
                        }
                    },
                    "display": {
                        "noun": "line item",
                        "verb": "create",
                        "title": "Create Line Item"
                    }
                },
                {
                    "key": "create_product",
                    "schema": {
                        "type": "object",
                        "required": [
                            "name",
                            "price",
                            "hs_cost_of_goods_sold"
                        ],
                        "properties": {
                            "name": {
                                "type": "string",
                                "title": "Name"
                            },
                            "hs_sku": {
                                "type": "string",
                                "title": "SKU"
                            },
                            "description": {
                                "type": "string",
                                "title": "Description"
                            },
                            "price": {
                                "type": "string",
                                "title": "Unit price",
                                "useCustomFieldsOnly": true,
                                "format": "currency"
                            },
                            "hs_cost_of_goods_sold": {
                                "type": "string",
                                "title": "Unit cost",
                                "useCustomFieldsOnly": true,
                                "format": "currency"
                            },
                            "hs_recurring_billing_period": {
                                "type": "number",
                                "title": "Term (Months)"
                            }
                        }
                    },
                    "display": {
                        "noun": "product",
                        "verb": "create",
                        "title": "Create Product"
                    }
                },
                {
                    "key": "create_hubspot_task",
                    "schema": {
                        "type": "object",
                        "required": [
                            "hs_task_subject",
                            "hs_task_type",
                            "hs_task_priority",
                            "hs_timestamp"
                        ],
                        "properties": {
                            "hs_task_subject": {
                                "type": "string",
                                "title": "Title"
                            },
                            "hs_task_type": {
                                "type": "string",
                                "title": "Type",
                                "enum": [
                                    "Email",
                                    "Call",
                                    "TODO"
                                ]
                            },
                            "hs_task_priority": {
                                "type": "string",
                                "title": "Priority",
                                "enum": [
                                    "Low",
                                    "Medium",
                                    "High"
                                ]
                            },
                            "hubspot_owner_id": {
                                "type": "string",
                                "title": "Assigned to",
                                "dynamic": "owners"
                            },
                            "hs_timestamp": {
                                "type": "number",
                                "title": "Due date",
                                "format": "datetime"
                            },
                            "hs_task_status": {
                                "type": "string",
                                "title": "Status",
                                "enum": [
                                    "Completed",
                                    "Waiting"
                                ]
                            },
                            "hs_task_body": {
                                "type": "string",
                                "title": "Notes"
                            }
                        }
                    },
                    "display": {
                        "noun": "task",
                        "verb": "create",
                        "title": "Create Task"
                    }
                },
                {
                    "key": "update_company",
                    "schema": {
                        "type": "object",
                        "required": [],
                        "properties": {
                            "domain": {
                                "type": "string",
                                "title": "Company domain name",
                                "useCustomFieldsOnly": true,
                                "format": "url"
                            },
                            "name": {
                                "type": "string",
                                "title": "Company name"
                            },
                            "industry": {
                                "type": "string",
                                "title": "Industry",
                                "enum": [
                                    "Accounting",
                                    "Airlines/Aviation",
                                    "Alternative Dispute Resolution",
                                    "Alternative Medicine",
                                    "Animation",
                                    "Apparel & Fashion",
                                    "Architecture & Planning",
                                    "Arts and Crafts",
                                    "Automotive",
                                    "Aviation & Aerospace",
                                    "Banking",
                                    "Biotechnology",
                                    "Broadcast Media",
                                    "Building Materials",
                                    "Business Supplies and Equipment",
                                    "Capital Markets",
                                    "Chemicals",
                                    "Civic & Social Organization",
                                    "Civil Engineering",
                                    "Commercial Real Estate",
                                    "Computer & Network Security",
                                    "Computer Games",
                                    "Computer Hardware",
                                    "Computer Networking",
                                    "Computer Software",
                                    "Internet",
                                    "Construction",
                                    "Consumer Electronics",
                                    "Consumer Goods",
                                    "Consumer Services",
                                    "Cosmetics",
                                    "Dairy",
                                    "Defense & Space",
                                    "Design",
                                    "Education Management",
                                    "E-Learning",
                                    "Electrical/Electronic Manufacturing",
                                    "Entertainment",
                                    "Environmental Services",
                                    "Events Services",
                                    "Executive Office",
                                    "Facilities Services",
                                    "Farming",
                                    "Financial Services",
                                    "Fine Art",
                                    "Fishery",
                                    "Food & Beverages",
                                    "Food Production",
                                    "Fund-Raising",
                                    "Furniture",
                                    "Gambling & Casinos",
                                    "Glass",
                                    "Ceramics & Concrete",
                                    "Government Administration",
                                    "Government Relations",
                                    "Graphic Design",
                                    "Health",
                                    "Wellness and Fitness",
                                    "Higher Education",
                                    "Hospital & Health Care",
                                    "Hospitality",
                                    "Human Resources",
                                    "Import and Export",
                                    "Individual & Family Services",
                                    "Industrial Automation",
                                    "Information Services",
                                    "Information Technology and Services",
                                    "Insurance",
                                    "International Affairs",
                                    "International Trade and Development",
                                    "Investment Banking",
                                    "Investment Management",
                                    "Judiciary",
                                    "Law Enforcement",
                                    "Law Practice",
                                    "Legal Services",
                                    "Legislative Office",
                                    "Leisure",
                                    "Travel & Tourism",
                                    "Libraries",
                                    "Logistics and Supply Chain",
                                    "Luxury Goods & Jewelry",
                                    "Machinery",
                                    "Management Consulting",
                                    "Maritime",
                                    "Market Research",
                                    "Marketing and Advertising",
                                    "Mechanical or Industrial Engineering",
                                    "Media Production",
                                    "Medical Devices",
                                    "Medical Practice",
                                    "Mental Health Care",
                                    "Military",
                                    "Mining & Metals",
                                    "Motion Pictures and Film",
                                    "Museums and Institutions",
                                    "Music",
                                    "Nanotechnology",
                                    "Newspapers",
                                    "Nonprofit Organization Management",
                                    "Oil & Energy",
                                    "Online Media",
                                    "Outsourcing/Offshoring",
                                    "Package/Freight Delivery",
                                    "Packaging and Containers",
                                    "Paper & Forest Products",
                                    "Performing Arts",
                                    "Pharmaceuticals",
                                    "Philanthropy",
                                    "Photography",
                                    "Plastics",
                                    "Political Organization",
                                    "Primary/Secondary Education",
                                    "Printing",
                                    "Professional Training & Coaching",
                                    "Program Development",
                                    "Public Policy",
                                    "Public Relations and Communications",
                                    "Public Safety",
                                    "Publishing",
                                    "Railroad Manufacture",
                                    "Ranching",
                                    "Real Estate",
                                    "Recreational Facilities and Services",
                                    "Religious Institutions",
                                    "Renewables & Environment",
                                    "Research",
                                    "Restaurants",
                                    "Retail",
                                    "Security and Investigations",
                                    "Semiconductors",
                                    "Shipbuilding",
                                    "Sporting Goods",
                                    "Sports",
                                    "Staffing and Recruiting",
                                    "Supermarkets",
                                    "Telecommunications",
                                    "Textiles",
                                    "Think Tanks",
                                    "Tobacco",
                                    "Translation and Localization",
                                    "Transportation/Trucking/Railroad",
                                    "Utilities",
                                    "Venture Capital & Private Equity",
                                    "Veterinary",
                                    "Warehousing",
                                    "Wholesale",
                                    "Wine and Spirits",
                                    "Wireless",
                                    "Writing and Editing"
                                ]
                            },
                            "city": {
                                "type": "string",
                                "title": "City"
                            },
                            "state": {
                                "type": "string",
                                "title": "State/Region"
                            },
                            "phone": {
                                "type": "string",
                                "title": "Phone",
                                "useCustomFieldsOnly": true,
                                "format": "phone"
                            }
                        }
                    },
                    "display": {
                        "noun": "company",
                        "verb": "update",
                        "title": "Update Company"
                    }
                },
                {
                    "key": "update_contact",
                    "schema": {
                        "type": "object",
                        "required": [],
                        "properties": {
                            "company": {
                                "type": "string",
                                "title": "Company"
                            },
                            "email": {
                                "type": "string",
                                "title": "Email",
                                "useCustomFieldsOnly": true,
                                "format": "email"
                            },
                            "firstname": {
                                "type": "string",
                                "title": "First name"
                            },
                            "lastname": {
                                "type": "string",
                                "title": "Last name"
                            },
                            "phone": {
                                "type": "string",
                                "title": "Phone",
                                "useCustomFieldsOnly": true,
                                "format": "phone"
                            },
                            "website": {
                                "type": "string",
                                "title": "Website",
                                "useCustomFieldsOnly": true,
                                "format": "url"
                            }
                        }
                    },
                    "display": {
                        "noun": "contact",
                        "verb": "update",
                        "title": "Update Contact"
                    }
                },
                {
                    "key": "update_deal",
                    "schema": {
                        "type": "object",
                        "required": [],
                        "properties": {
                            "dealname": {
                                "type": "string",
                                "title": "Deal name"
                            },
                            "pipeline": {
                                "type": "string",
                                "title": "Pipeline",
                                "dynamic": "pipelines"
                            },
                            "dealstage": {
                                "type": "string",
                                "dynamic": "dealStages",
                                "depends_on": [
                                    "pipeline"
                                ]
                            },
                            "amount": {
                                "type": "string",
                                "title": "Amount",
                                "useCustomFieldsOnly": true,
                                "format": "currency"
                            },
                            "closedate": {
                                "type": "number",
                                "format": "datetime",
                                "title": "Close date"
                            }
                        }
                    },
                    "display": {
                        "noun": "deal",
                        "verb": "update",
                        "title": "Update Deal"
                    }
                },
                {
                    "key": "update_line_item",
                    "schema": {
                        "type": "object",
                        "required": [],
                        "properties": {
                            "name": {
                                "type": "string",
                                "title": "Name"
                            },
                            "hs_recurring_billing_period": {
                                "type": "number",
                                "title": "Term (Months)"
                            },
                            "recurringbillingfrequency": {
                                "type": "string",
                                "title": "Billing frequency",
                                "enum": [
                                    "Monthly",
                                    "Quarterly",
                                    "Semi-annually",
                                    "Annually",
                                    "Every two years",
                                    "Every three years"
                                ]
                            },
                            "quantity": {
                                "type": "number",
                                "title": "Quantity"
                            },
                            "price": {
                                "type": "string",
                                "title": "Price",
                                "useCustomFieldsOnly": true,
                                "format": "currency"
                            }
                        }
                    },
                    "display": {
                        "noun": "product",
                        "verb": "update",
                        "title": "Update Line Item"
                    }
                },
                {
                    "key": "update_product",
                    "schema": {
                        "type": "object",
                        "required": [],
                        "properties": {
                            "name": {
                                "type": "string",
                                "title": "Name"
                            },
                            "hs_sku": {
                                "type": "string",
                                "title": "SKU"
                            },
                            "description": {
                                "type": "string",
                                "title": "Description"
                            },
                            "price": {
                                "type": "string",
                                "title": "Unit price",
                                "useCustomFieldsOnly": true,
                                "format": "currency"
                            },
                            "hs_cost_of_goods_sold": {
                                "type": "string",
                                "title": "Unit cost",
                                "useCustomFieldsOnly": true,
                                "format": "currency"
                            },
                            "hs_recurring_billing_period": {
                                "type": "number",
                                "title": "Term (Months)"
                            }
                        }
                    },
                    "display": {
                        "noun": "product",
                        "verb": "update",
                        "title": "Update Product"
                    }
                },
                {
                    "key": "update_ticket",
                    "schema": {
                        "type": "object",
                        "required": [],
                        "properties": {
                            "subject": {
                                "type": "string",
                                "title": "Ticket name"
                            },
                            "hs_pipeline": {
                                "type": "string",
                                "title": "Pipeline",
                                "dynamic": "ticketPipelines"
                            },
                            "hs_pipeline_stage": {
                                "type": "string",
                                "title": "Ticket stage",
                                "dynamic": "ticketStages",
                                "depends_on": [
                                    "hs_pipeline"
                                ]
                            },
                            "hubspot_owner_id": {
                                "type": "string",
                                "title": "Ticket owner",
                                "dynamic": "owners"
                            },
                            "hs_ticket_priority": {
                                "type": "string",
                                "title": "Ticket priority",
                                "enum": [
                                    "",
                                    "Low",
                                    "Medium",
                                    "High"
                                ]
                            }
                        }
                    },
                    "display": {
                        "noun": "ticket",
                        "verb": "update",
                        "title": "Update Ticket"
                    }
                }
            ]
        }
    ],

    "favourites": [
        {
            "favId": "bdb54413-f153-4026-9d75-bdc7c1761764",
            "order": 1,
            "data": {
                "kind": "task",
                "id": "900300045517",
                "text": "Business Blueprint",
                "target": "900300045517",
            }
        },
        {
            "favId": "17df8ad6-fa8e-45d2-8e80-e370aafbcf5e",
            "order": 2,
            "data": {
                "kind": "project",
                "id": "90030025269",
                "text": "Business Development",
                "target": "90030025269",
            }
        },
    ],

    "features": {
        "authenticationSupportEmailWhitelist": false,
        "billingVnext": false,
        "JSONata": false,
        "isFreePlan": true,
        "hasTeamBasedPricing": true,
        "pagesCustomCss": false,
        "genericAPI": false,
        "removeBranding": false,
        "appAnalytics": false,
        "ibrainsAI": false,
        "builderTrackingDisableAnalytics": false,
        "authenticationSupportPassword": false,
        "multiFileUpload": false,
        "advancedPro": false
    },

    "plans": {

    },





    "teams": [
        {
            "id": "36698333",
            "color": "#1b5e20",
            "trial_count": 1,
            "using_github": false,
            "using_gitlab": null,
            "setup_step": "project",
            "color_theme": null,
            "personal_team": true,
            "should_encrypt": false,
            "gantt_trial_end": null,
            "require_2fa": false,
            "hours_per_day": null,
            "plan_id": "1",
            "billed_users_this_cycle": 1,
            "minimum_seats": null,
            "billed_plan_id": "1",
            "time_tracking_display_hours": true,
            "time_estimate_display_hours": true,
            "disable_public_sharing": null,
            "disable_never_expire_pub_links": false,
            "pub_links_max_year": false,
            "estimates_per_assignee": null,
            "points_per_assignee": null,
            "zoom": null,
            "nested_subtasks": null,
            "nested_subtasks_level": null,
            "time_in_status": null,
            "charge_for_internal_guests": null,
            "quick_create_statuses": true,
            "universal_search": false,
            "microsoft_365_preview": false,
            "extra_comment_reactions": true,
            "trial_plan_id": null,
            "allow_skip_2fa": true,
            "lineup": true,
            "threaded_comments": true,
            "admin_public_share_override": true,
            "enable_recorder": true,
            "docs_home": true,
            "hipaa_compliant": false,
            "live_view": 2,
            "automation_enabled": true,
            "ai_enabled": false,
            "user_presence": true,
            "task_relationships": true,
            "can_add_guests": null,
            "can_remove_guests": null,
            "wip_limit": false,
            "hide_everything_calendar": false,
            "hide_everything_board": false,
            "emails_as_replies": false,
            "custom_sprint_duration": false,
            "time_tracking_rollup": false,
            "disable_template_pub_sharing": false,
            "time_estimate_rollup": false,
            "enable_codox": true,
            "dashboards_enabled": true,
            "unstarted_status_group": null,
            "tasks_in_multiple_lists": true,
            "subtasks_in_multiple_lists": false,
            "points_estimate_rollup": false,
            "giphy": true,
            "points_scale": [
                1,
                2,
                3,
                5,
                8
            ],
            "white_label_enabled": null,
            "white_label_color": null,
            "rectangle_logo": null,
            "social_logo": null,
            "custom_fields_legacy_ordering": false,
            "default_project": "54779505",
            "role": 1,
            "date_joined": "1649012241023",
            "date_invited": "1649012241023",
            "invite": false,
            "receive_notifs_gh_commit": true,
            "owner": {
                "id": 48763417,
                "username": "Peter Jaber",
                "email": "peterjaberau@gmail.com",
                "color": "#ea80fc",
                "initials": "PJ",
                "profilePicture": null
            },
            "name": "Peter Jaber's Workspace",
            "next_bill_date": "1680548241023",
            "date_created": "1649012241023",
            "service_status": 1,
            "next_renewal_retry_date": null,
            "grace_period_end": null,
            "billingexceptionpopupdismissed": null,
            "was_trial": false,
            "stored_promo_code": null,
            "address": null,
            "dashboard_data_date": null,
            "v2_beta": true,
            "orderindex": "1",
            "plan_tier": "FreeForever",
            "avatar": null,
            "initials": "P",
            "notification_settings": {
                "receive_emails": true,
                "new_task_notifs": 0,
                "fields": {
                    "gh_commit": true
                }
            },
            "automation": {
                "internal": {
                    "count": 0,
                    "limit": 100,
                    "limit_reached": false
                }
            },
            "v2_beta_ms_since": 45839841651,
            "storage_used": {
                "bytes": 0,
                "docs_bytes": 0,
                "tasks_bytes": 0,
                "comments_bytes": 0,
                "projects": {
                    "54779505": {
                        "id": "54779505",
                        "team_name": "Peter Jaber's Workspace",
                        "tasks_bytes": 0,
                        "docs_bytes": 0,
                        "bytes": 0
                    },
                    "90030007894": {
                        "id": "90030007894",
                        "team_name": "Peter Jaber's Workspace",
                        "tasks_bytes": 0,
                        "docs_bytes": 0,
                        "bytes": 0
                    },
                    "90030071122": {
                        "id": "90030071122",
                        "team_name": "Peter Jaber's Workspace",
                        "tasks_bytes": 0,
                        "docs_bytes": 0,
                        "bytes": 0
                    }
                }
            },
            "member_count": "1",
            "member_count_wo_invites": "1",
            "listViewSettings": {
                "visible": {
                    "due_date": true,
                    "start_date": false,
                    "date_created": false,
                    "date_updated": true,
                    "priority": true,
                    "assignees": true,
                    "task_id": false,
                    "time_spent": false
                },
                "sorting": []
            },
            "storage": 0.13,
            "storage_per_user": 0,
            "repos": [],
            "available_storage": 139586437.12
        }
    ],
    "team": {
        "id": "36698333",
        "owner": {
            "id": 48763417,
            "username": "Peter Jaber",
            "email": "peterjaberau@gmail.com",
            "color": "#ea80fc",
            "initials": "PJ",
            "profilePicture": null
        },
        "name": "Peter Jaber's Workspace",
        "date_created": "1649012241023",
        "billed_users_this_cycle": 1,
        "color": "#1b5e20",
        "color_theme": null,
        "setup_step": "project",
        "hours_per_day": null,
        "service_status": 1,
        "next_renewal_retry_date": null,
        "grace_period_end": null,
        "rollup_grace_period_end": null,
        "was_trial": false,
        "personal_team": true,
        "should_encrypt": false,
        "require_2fa": false,
        "plan_id": "1",
        "billed_plan_id": "1",
        "trial_plan_id": null,
        "stored_promo_code": null,
        "address": null,
        "minimum_seats": null,
        "gantt_trial_end": null,
        "v2_beta": true,
        "tax_exempt": null,
        "workspace_no_tax": null,
        "trial_count": 1,
        "next_bill_date": "1680548241023",
        "time_tracking_display_hours": true,
        "time_estimate_display_hours": true,
        "admin_global_delete": null,
        "can_add_guests": null,
        "can_remove_guests": null,
        "dashboard_data_date": null,
        "onetool": null,
        "zoom": null,
        "nested_subtasks": null,
        "nested_subtasks_level": null,
        "quick_create_statuses": true,
        "universal_search": null,
        "personal_views": null,
        "offloading_state": null,
        "time_in_status": false,
        "lineup": true,
        "threaded_comments": true,
        "default_project": "54779505",
        "using_github": false,
        "using_gitlab": null,
        "disable_public_sharing": null,
        "disable_never_expire_pub_links": false,
        "pub_links_max_year": false,
        "estimates_per_assignee": null,
        "sales_type": "self serve",
        "charge_for_internal_guests": null,
        "microsoft_365_preview": false,
        "extra_comment_reactions": true,
        "points_per_assignee": false,
        "custom_sprint_duration": false,
        "giphy": true,
        "task_relationships": true,
        "hipaa_compliant": false,
        "owner_control_private_spaces": false,
        "allow_skip_2fa": true,
        "admin_public_share_override": true,
        "enable_recorder": true,
        "unstarted_status_group": null,
        "points_estimate_rollup": false,
        "wip_limit": false,
        "hide_everything_calendar": false,
        "hide_everything_board": false,
        "emails_as_replies": false,
        "points_scale": [
            1,
            2,
            3,
            5,
            8
        ],
        "custom_fields_legacy_ordering": false,
        "disable_template_pub_sharing": false,
        "tasks_in_multiple_lists": true,
        "subtasks_in_multiple_lists": false,
        "docs_home": true,
        "live_view": 2,
        "enable_codox": true,
        "dashboards_enabled": true,
        "time_tracking_rollup": false,
        "time_estimate_rollup": false,
        "automation_enabled": true,
        "ai_enabled": false,
        "user_presence": true,
        "signed_attachments": false,
        "summary_tasks": false,
        "milestones": 0,
        "email_usage": 0,
        "box_count": 1,
        "attachment_comments_usage": 0,
        "critical_path_usage": 0,
        "email": "peterjaberau@gmail.com",
        "username": "Peter Jaber",
        "plan_tier": "FreeForever",
        "initials": "P",
        "list_export_usages_remaining": 5,
        "timeline_usage_exceeded": false,
        "gantt_limit_reached": false,
        "goal_usage_exceeded": false,
        "portfolio_usage_exceeded": false,
        "milestones_limit_reached": false,
        "custom_items_limit_reached": false,
        "points_limit_reached": false,
        "custom_roles_limit_reached": true,
        "siml_limit_reached": false,
        "document_tags_limit_reached": false,
        "v2_beta_ms_since": 45839843207,
        "sso": {
            "sp_cert": "-----BEGIN CERTIFICATE-----\nMIIDjDCCAnQCCQDmDxxyTbX5jzANBgkqhkiG9w0BAQsFADCBhzELMAkGA1UEBhMC\nVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28x\nEDAOBgNVBAoMB0NsaWNrVXAxGDAWBgNVBAMMD2FwaS5jbGlja3VwLmNvbTEfMB0G\nCSqGSIb3DQEJARYQaGVscEBjbGlja3VwLmNvbTAeFw0xOTAxMzAwMDUzMjVaFw0x\nOTAzMDEwMDUzMjVaMIGHMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5p\nYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzEQMA4GA1UECgwHQ2xpY2tVcDEYMBYG\nA1UEAwwPYXBpLmNsaWNrdXAuY29tMR8wHQYJKoZIhvcNAQkBFhBoZWxwQGNsaWNr\ndXAuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwYi44cSEeeby\neHDSbyEXOffY1cbKfl0F6O1qg2pb4ctOi7xPL6teWYtkpzF2+Ho12N9F+Rcdz8lp\nKJM8kIypbaSsv3/08J57iiHqTYDoP1g2ZQuWr1jWvE3kXVtN2Rhw0nZoOHjKQCe+\nyJhTFgabcARErBOoESr5vV6OtJPYrCLwd75fODlVgrBDgnXK1OaIqXkujFI2Q2BQ\nNZQqlfkHwpXxMVQAGk9mqiV38Rf8rv/zJECG7PKTbbB1OAUGPpVlk+Fi/rnnV3Yt\n3vy5KAYuAtdT8gCK+vUr2sDy32TvA2osIyQ7uiZdYfdEVUpxe+TXJsAefSKJ0cA0\nvorxZTn8gwIDAQABMA0GCSqGSIb3DQEBCwUAA4IBAQBIZcV7rPba2qXmIWp7c1fT\ncbet7KdtWrMOnOYkHt94OtM63XQfRVdRSh0exP7jCuCzEfHm2nGR+/f7/duzq2bW\nP/oWLnSmHxf47EzwZxC+nO+MHAPJb5zJofSgJxrV59+J6Lyvb+cwvgL8pAunNNNs\nJCKyXqlZ/A2qGw+6hrWXqIxJPPmt+Xrk28iqMBahInee8LBNAJndKgGEMOT4vsIX\nXvgjJrqN/Kl9eNKL+WHPtZAuDh/6f800eTpTv6Pxnc7OtuxxQ+vGpjSZoEAW3f5D\nvB78fL0UJIVZUKHr4axl35NZPSNPuJlqVUcMuAi3mJu6+lb4m9lnqGh5H9TdHqEL\n-----END CERTIFICATE-----\n",
            "sp_cert_expires": null,
            "allow_org_signup": null,
            "available_providers": [
                "google_sso",
                "azure_sso",
                "okta_sso",
                "saml_sso"
            ],
            "sso_provider": "none",
            "azure_metadata": {
                "entity_id": "https://api.clickup.com/v1/team/36698333/microsoft",
                "reply_url": "https://api.clickup.com/v1/team/36698333/microsoft/consume",
                "logout_url": "https://api.clickup.com/v1/team/36698333/microsoft/logout",
                "saml_redirect": "https://api.clickup.com/v1/team/36698333/microsoft/login",
                "setup_url": "https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/clickup-productivity-platform-tutorial"
            },
            "okta_metadata": {
                "entity_id": "https://api.clickup.com/v1/team/36698333/okta",
                "reply_url": "https://api.clickup.com/v1/team/36698333/okta/consume",
                "saml_redirect": "https://api.clickup.com/v1/team/36698333/okta/login",
                "setup_url": "https://help.clickup.com/hc/en-us/articles/6305095991703-Enable-Okta-single-sign-on-integration"
            },
            "saml_metadata": {
                "entity_id": "https://api.clickup.com/v1/team/36698333/saml",
                "reply_url": "https://api.clickup.com/v1/team/36698333/saml/consume",
                "saml_redirect": "https://api.clickup.com/v1/team/36698333/saml/login",
                "setup_url": "https://docs.clickup.com/en/articles/3952199-custom-saml-single-sign-on"
            }
        },
        "automation": {
            "internal": {
                "count": 0,
                "limit": 100,
                "included_with_plan": {
                    "action": 100,
                    "plan": "free forever"
                },
                "limit_reached": false
            }
        },
        "avatar": null,
        "role": 1,
        "notification_settings": {
            "receive_emails": true,
            "new_task_notifs": 0,
            "fields": {
                "gh_commit": true
            }
        },
        "email_accounts": 0,
        "workspace_settings": {
            "adminV3": "default"
        },
        "member_count": 1,
        "guest_count": 0,
        "member_count_wo_invites": 1,
        "members": [
            {
                "user": {
                    "id": 48763417,
                    "username": "Peter Jaber",
                    "email": "peterjaberau@gmail.com",
                    "color": "#ea80fc",
                    "initials": "PJ",
                    "profilePicture": null,
                    "profileInfo": {
                        "display_profile": null,
                        "verified_ambassador": null,
                        "verified_consultant": null,
                        "top_tier_user": null,
                        "viewed_verified_ambassador": null,
                        "viewed_verified_consultant": null,
                        "viewed_top_tier_user": null
                    }
                },
                "twofa_enabled": "0",
                "twofa_totp_enabled": false,
                "twofa_text_enabled": false,
                "invite": false,
                "role": 1,
                "role_permissions": {
                    "add_email_account": true,
                    "billing": true,
                    "can_add_team_guests": true,
                    "can_add_team_members": true,
                    "can_be_added_to_user_groups": true,
                    "can_convert_item": true,
                    "can_create_goals": true,
                    "can_create_lists": true,
                    "can_create_milestone": true,
                    "can_create_personal_list": true,
                    "can_create_portfolios": true,
                    "can_create_projects": true,
                    "can_create_spaces": true,
                    "can_create_workload": true,
                    "can_delete_comments": true,
                    "can_delete_no_access": true,
                    "can_edit_description": true,
                    "can_edit_integrations": true,
                    "can_edit_list_statuses": true,
                    "can_edit_privacy": 2,
                    "can_edit_project_settings": 2,
                    "can_edit_space_settings": 2,
                    "can_edit_team": true,
                    "can_edit_team_members": true,
                    "can_edit_team_owner": true,
                    "can_edit_trial": true,
                    "can_edit_user_groups": true,
                    "can_edit_view_protection": true,
                    "can_enable_sso": true,
                    "can_export_tasks": true,
                    "can_gdpr_export": true,
                    "can_import": true,
                    "can_list_inaccessible_spaces": true,
                    "can_recover_inaccessible_spaces": true,
                    "can_see_team_members": true,
                    "can_see_workload": true,
                    "can_use_git": true,
                    "can_view_reporting": true,
                    "create_automation": true,
                    "create_dashboards": true,
                    "custom_roles": true,
                    "make_views_public": true,
                    "manage_custom_fields": true,
                    "manage_custom_items": true,
                    "manage_statuses": true,
                    "manage_tags": true,
                    "name": "owner",
                    "oauth_apps": true,
                    "profile": true,
                    "public_spaces_visible": true,
                    "send_email": true,
                    "share": true,
                    "team_permissions": true,
                    "team_role": 1,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "create_custom_fields": true,
                    "edit_custom_fields": true,
                    "delete_custom_fields": true,
                    "merge_custom_fields": true,
                    "convert_custom_fields": true,
                    "move_custom_fields": true
                },
                "last_active": "1694852081464",
                "date_joined": "1649012241023",
                "date_invited": "1649012241023",
                "auto_send_invoices": false,
                "can_see_time_spent": null,
                "can_see_time_estimated": null,
                "can_see_points_estimated": null,
                "can_create_views": false,
                "can_edit_tags": false,
                "custom_role": null,
                "manager": null
            }
        ],
        "storage_used": {
            "bytes": 0,
            "tasks_bytes": 0,
            "docs_bytes": 0,
            "projects": {
                "54779505": {
                    "id": "54779505",
                    "storage_used": "0",
                    "tasks_bytes": 0,
                    "docs_bytes": 0,
                    "bytes": 0
                },
                "90030071122": {
                    "id": "90030071122",
                    "storage_used": "0",
                    "tasks_bytes": 0,
                    "docs_bytes": 0,
                    "bytes": 0
                },
                "90030007894": {
                    "id": "90030007894",
                    "storage_used": "0",
                    "tasks_bytes": 0,
                    "docs_bytes": 0,
                    "bytes": 0
                }
            }
        },
        "repos": [],
        "listViewSettings": {
            "visible": {
                "due_date": true,
                "start_date": false,
                "date_created": false,
                "date_updated": true,
                "priority": true,
                "assignees": true,
                "task_id": false,
                "time_spent": false
            },
            "sorting": []
        },
        "all_statuses": [
            {
                "status": "Open",
                "type": "open",
                "colors": [
                    "#d3d3d3"
                ]
            },
            {
                "status": "to do",
                "type": "open",
                "colors": [
                    "#d3d3d3"
                ]
            },
            {
                "status": "📬 new testimonial",
                "type": "open",
                "colors": [
                    "#d3d3d3"
                ]
            },
            {
                "status": "prospect",
                "type": "open",
                "colors": [
                    "#d3d3d3"
                ]
            },
            {
                "status": "more info needed",
                "type": "unstarted",
                "colors": [
                    "#a875ff"
                ]
            },
            {
                "status": "🔍 in review",
                "type": "custom",
                "colors": [
                    "#7C4DFF"
                ]
            },
            {
                "status": "concept",
                "type": "custom",
                "colors": [
                    "#FFCC00"
                ]
            },
            {
                "status": "active",
                "type": "custom",
                "colors": [
                    "#a875ff"
                ]
            },
            {
                "status": "in progress",
                "type": "custom",
                "colors": [
                    "#3397dd",
                    "#7C4DFF",
                    "#3082B7",
                    "#0231E8",
                    "#a875ff"
                ]
            },
            {
                "status": "✏️ needs revision",
                "type": "custom",
                "colors": [
                    "#E65100"
                ]
            },
            {
                "status": "in development",
                "type": "custom",
                "colors": [
                    "#ff7800"
                ]
            },
            {
                "status": "in talks",
                "type": "custom",
                "colors": [
                    "#f9d900"
                ]
            },
            {
                "status": "in review",
                "type": "custom",
                "colors": [
                    "#3082B7",
                    "#f9d900",
                    "#81B1FF"
                ]
            },
            {
                "status": "for revision",
                "type": "custom",
                "colors": [
                    "#f9d900"
                ]
            },
            {
                "status": "partner delivery",
                "type": "custom",
                "colors": [
                    "#3397dd"
                ]
            },
            {
                "status": "live/running",
                "type": "custom",
                "colors": [
                    "#1bbc9c"
                ]
            },
            {
                "status": "needs revision",
                "type": "custom",
                "colors": [
                    "#e50000"
                ]
            },
            {
                "status": "for approval",
                "type": "custom",
                "colors": [
                    "#ff7800"
                ]
            },
            {
                "status": "on hold",
                "type": "custom",
                "colors": [
                    "#ff7800",
                    "#e50000"
                ]
            },
            {
                "status": "published",
                "type": "custom",
                "colors": [
                    "#02BCD4"
                ]
            },
            {
                "status": "parked",
                "type": "done",
                "colors": [
                    "#667684"
                ]
            },
            {
                "status": "inactive",
                "type": "done",
                "colors": [
                    "#b5bcc2"
                ]
            },
            {
                "status": "canceled",
                "type": "done",
                "colors": [
                    "#e50000"
                ]
            },
            {
                "status": "lost",
                "type": "done",
                "colors": [
                    "#800000",
                    "#325264"
                ]
            },
            {
                "status": "cancelled",
                "type": "done",
                "colors": [
                    "#667684"
                ]
            },
            {
                "status": "✅ approved",
                "type": "closed",
                "colors": [
                    "#6bc950"
                ]
            },
            {
                "status": "done",
                "type": "closed",
                "colors": [
                    "#6bc950"
                ]
            },
            {
                "status": "Closed",
                "type": "closed",
                "colors": [
                    "#6bc950"
                ]
            },
            {
                "status": "complete",
                "type": "closed",
                "colors": [
                    "#6bc950"
                ]
            }
        ],
        "category_statuses": [
            {
                "color": "#e50000",
                "default": true,
                "hide_label": true,
                "status": "red",
                "type": "custom"
            },
            {
                "color": "#3397dd",
                "hide_label": true,
                "status": "blue",
                "type": "custom"
            },
            {
                "color": "#f9d900",
                "default": true,
                "hide_label": true,
                "status": "yellow",
                "type": "custom"
            },
            {
                "color": "#2ecd6f",
                "default": true,
                "hide_label": true,
                "status": "green",
                "type": "custom"
            }
        ],
        "subcategory_statuses": [
            {
                "color": "#e50000",
                "default": true,
                "hide_label": true,
                "status": "red",
                "type": "custom"
            },
            {
                "color": "#3397dd",
                "hide_label": true,
                "status": "blue",
                "type": "custom"
            },
            {
                "color": "#f9d900",
                "default": true,
                "hide_label": true,
                "status": "yellow",
                "type": "custom"
            },
            {
                "color": "#2ecd6f",
                "default": true,
                "hide_label": true,
                "status": "green",
                "type": "custom"
            }
        ],
        "user_portfolio_count": 0,
        "free_trial": null,
        "session_settings": {},
        "sprint_settings": null,
        "anti_cancellation_flow": null,
        "custom_roles": [],
        "can_buy_addon": false,
        "addons": [],
        "addon_prices": [
            {
                "id": "automations_100",
                "addon_type": "auto",
                "prorate": 0,
                "prorated_price": 0,
                "price_per_month": 9.99,
                "full_price": 119.88
            },
            {
                "id": "automations_1000",
                "addon_type": "auto",
                "prorate": 0,
                "prorated_price": 0,
                "price_per_month": 19.99,
                "full_price": 239.88
            },
            {
                "id": "automations_2500",
                "addon_type": "auto",
                "prorate": 0,
                "prorated_price": 0,
                "price_per_month": 49.99,
                "full_price": 599.88
            },
            {
                "id": "automations_10000",
                "addon_type": "auto",
                "prorate": 0,
                "prorated_price": 0,
                "price_per_month": 99.99,
                "full_price": 1199.8799999999999
            },
            {
                "id": "automations_25000",
                "addon_type": "auto",
                "prorate": 0,
                "prorated_price": 0,
                "price_per_month": 199.99,
                "full_price": 2399.88
            },
            {
                "id": "automations_100000",
                "addon_type": "auto",
                "prorate": 0,
                "prorated_price": 0,
                "price_per_month": 299.99,
                "full_price": 3599.88
            },
            {
                "id": "automations_unlimited",
                "addon_type": "auto",
                "prorate": 0,
                "prorated_price": 0,
                "price_per_month": 29,
                "full_price": 348
            },
            {
                "id": "email_accounts",
                "addon_type": "email_accounts",
                "prorate": 0,
                "prorated_price": 0,
                "price_per_month": 2,
                "full_price": 24
            },
            {
                "id": "ai_addon",
                "addon_type": "ai",
                "prorate": 0,
                "prorated_price": 0,
                "price_per_month": 5,
                "price_per_user": 60,
                "addon_paid_users": 1,
                "full_price": 60
            }
        ],
        "available_storage": 139586437.12,
        "billing_info": {
            "ppu_monthly_override": null,
            "ppu_yearly_override": null,
            "price_monthly_override": null,
            "price_yearly_override": null,
            "storage_override": null,
            "storage_per_user_override": null,
            "free_seats": 0,
            "minimum_seats": 0,
            "promo_code": {
                "promo_code": null,
                "dollars_off_per_user_monthly": 0,
                "dollars_off_per_user_yearly": 0,
                "dollars_off_total_monthly": 0,
                "dollars_off_total_yearly": 0,
                "months_to_last": null,
                "years_to_last": null,
                "expiration": null,
                "active": null,
                "valid_monthly": null,
                "valid_yearly": null
            }
        },
        "plan_info": {
            "id": "1",
            "name": "freeforever",
            "price": 0,
            "price_per_user": 0,
            "price_per_user_monthly": 0,
            "price_per_user_yearly": 0,
            "cycles": "yearly",
            "cycles_next_cycle": null,
            "storage": 0.13,
            "storage_per_user": 0,
            "next_bill_date": "1680548241023",
            "users": 1,
            "free_seats": 0,
            "default_payment_token": null,
            "service_status": 1,
            "payment_failed": false,
            "credit": 0,
            "addUser": 0,
            "prorate": 0
        },
        "upgradeInfo": {
            "plans": {
                "1": {
                    "id": "1",
                    "name": "freeforever",
                    "price": 0,
                    "price_per_user": 0,
                    "trial": 0,
                    "storage": 0.13,
                    "storage_per_user": 0,
                    "is_default": true,
                    "public_plan": true,
                    "valid_monthly": null,
                    "valid_yearly": null,
                    "dollars_off_total": null,
                    "dollar_off_per_user": null,
                    "applies_to": null,
                    "display_name": "Free Forever",
                    "price_monthly": 0,
                    "ppu_monthly": 0,
                    "price_yearly": 0,
                    "ppu_yearly": 0,
                    "guests_per_seat": 1,
                    "base_guests": 0,
                    "billable_users": 1,
                    "base_guests_text": 1,
                    "total_seats": 1,
                    "allowed_guests": 1,
                    "costs": {
                        "monthly": {
                            "upgrade_cost": "0.00",
                            "undiscounted_cost": "0.00",
                            "undiscounted_cost_per_month": "0.00",
                            "cost": "0.00",
                            "cost_per_month": "0.00",
                            "ppu": "0.00",
                            "percent_off": "0",
                            "prorated": false
                        },
                        "yearly": {
                            "upgrade_cost": "0.00",
                            "undiscounted_cost": "0.00",
                            "undiscounted_cost_per_month": "0.00",
                            "cost": "0.00",
                            "cost_per_month": "0.00",
                            "ppu": "0.00",
                            "percent_off": "0",
                            "prorated": false
                        }
                    }
                },
                "3": {
                    "id": "3",
                    "name": "business",
                    "price": null,
                    "price_per_user": null,
                    "trial": 14,
                    "storage": 100000,
                    "storage_per_user": 0,
                    "is_default": false,
                    "public_plan": true,
                    "valid_monthly": null,
                    "valid_yearly": null,
                    "dollars_off_total": null,
                    "dollar_off_per_user": null,
                    "applies_to": null,
                    "display_name": "Business Plan",
                    "price_monthly": 0,
                    "ppu_monthly": 19,
                    "price_yearly": 0,
                    "ppu_yearly": 144,
                    "guests_per_seat": 5,
                    "base_guests": 5,
                    "base_guests_text": 10,
                    "billable_users": 1,
                    "total_seats": 1,
                    "allowed_guests": 10,
                    "costs": {
                        "monthly": {
                            "upgrade_cost": "19.00",
                            "undiscounted_cost": "19.00",
                            "undiscounted_cost_per_month": "19.00",
                            "cost": "19.00",
                            "cost_per_month": "19.00",
                            "ppu": "19.00",
                            "percent_off": "0.00",
                            "prorated": false
                        },
                        "yearly": {
                            "upgrade_cost": "144.00",
                            "undiscounted_cost": "144.00",
                            "undiscounted_cost_per_month": "12.00",
                            "cost": "144.00",
                            "cost_per_month": "12.00",
                            "ppu": "12.00",
                            "percent_off": "0.00",
                            "prorated": false
                        }
                    }
                },
                "4": {
                    "id": "4",
                    "name": "enterprise",
                    "price": null,
                    "price_per_user": null,
                    "trial": 14,
                    "storage": 100000,
                    "storage_per_user": 0,
                    "is_default": false,
                    "public_plan": true,
                    "valid_monthly": null,
                    "valid_yearly": null,
                    "dollars_off_total": null,
                    "dollar_off_per_user": null,
                    "applies_to": null,
                    "display_name": "Enterprise Plan",
                    "price_monthly": 0,
                    "ppu_monthly": 29,
                    "price_yearly": 0,
                    "ppu_yearly": 300,
                    "guests_per_seat": 5,
                    "base_guests": 5,
                    "base_guests_text": 10,
                    "billable_users": 1,
                    "total_seats": 1,
                    "allowed_guests": 10,
                    "costs": {
                        "monthly": {
                            "upgrade_cost": "29.00",
                            "undiscounted_cost": "29.00",
                            "undiscounted_cost_per_month": "29.00",
                            "cost": "29.00",
                            "cost_per_month": "29.00",
                            "ppu": "29.00",
                            "percent_off": "0.00",
                            "prorated": false
                        },
                        "yearly": {
                            "upgrade_cost": "300.00",
                            "undiscounted_cost": "300.00",
                            "undiscounted_cost_per_month": "25.00",
                            "cost": "300.00",
                            "cost_per_month": "25.00",
                            "ppu": "25.00",
                            "percent_off": "0.00",
                            "prorated": false
                        }
                    }
                },
                "5": {
                    "id": "5",
                    "name": "business_plus",
                    "price": null,
                    "price_per_user": null,
                    "trial": 14,
                    "storage": 100000,
                    "storage_per_user": 0,
                    "is_default": false,
                    "public_plan": true,
                    "valid_monthly": null,
                    "valid_yearly": null,
                    "dollars_off_total": null,
                    "dollar_off_per_user": null,
                    "applies_to": null,
                    "display_name": "Business Plus",
                    "price_monthly": 0,
                    "ppu_monthly": 29,
                    "price_yearly": 0,
                    "ppu_yearly": 228,
                    "guests_per_seat": 5,
                    "base_guests": 5,
                    "base_guests_text": 10,
                    "billable_users": 1,
                    "total_seats": 1,
                    "allowed_guests": 10,
                    "costs": {
                        "monthly": {
                            "upgrade_cost": "29.00",
                            "undiscounted_cost": "29.00",
                            "undiscounted_cost_per_month": "29.00",
                            "cost": "29.00",
                            "cost_per_month": "29.00",
                            "ppu": "29.00",
                            "percent_off": "0.00",
                            "prorated": false
                        },
                        "yearly": {
                            "upgrade_cost": "228.00",
                            "undiscounted_cost": "228.00",
                            "undiscounted_cost_per_month": "19.00",
                            "cost": "228.00",
                            "cost_per_month": "19.00",
                            "ppu": "19.00",
                            "percent_off": "0.00",
                            "prorated": false
                        }
                    }
                },
                "6": {
                    "id": "6",
                    "name": "unlimited_2305",
                    "price": null,
                    "price_per_user": null,
                    "trial": 15,
                    "storage": 10000,
                    "storage_per_user": 0,
                    "is_default": false,
                    "public_plan": true,
                    "valid_monthly": null,
                    "valid_yearly": null,
                    "dollars_off_total": null,
                    "dollar_off_per_user": null,
                    "applies_to": null,
                    "display_name": "Unlimited",
                    "price_monthly": 0,
                    "ppu_monthly": 10,
                    "price_yearly": 0,
                    "ppu_yearly": 84,
                    "guests_per_seat": 2,
                    "base_guests": 3,
                    "base_guests_text": 5,
                    "billable_users": 1,
                    "total_seats": 1,
                    "allowed_guests": 5,
                    "costs": {
                        "monthly": {
                            "upgrade_cost": "10.00",
                            "undiscounted_cost": "10.00",
                            "undiscounted_cost_per_month": "10.00",
                            "cost": "10.00",
                            "cost_per_month": "10.00",
                            "ppu": "10.00",
                            "percent_off": "0.00",
                            "prorated": false
                        },
                        "yearly": {
                            "upgrade_cost": "84.00",
                            "undiscounted_cost": "84.00",
                            "undiscounted_cost_per_month": "7.00",
                            "cost": "84.00",
                            "cost_per_month": "7.00",
                            "ppu": "7.00",
                            "percent_off": "0.00",
                            "prorated": false
                        }
                    }
                }
            },
            "memberCount": 1,
            "guestCount": 0,
            "freeSeats": 0,
            "currentPrice": {
                "ppu": "0.00",
                "total": "0.00",
                "total_with_addons": "0.00",
                "total_undiscounted": "0.00",
                "total_seats": 1,
                "allowed_guests": 1
            }
        }
    },
    "team_members": [
        {
            "user": {
                "id": 48763417,
                "username": "Peter Jaber",
                "email": "peterjaberau@gmail.com",
                "phone": null,
                "description": null,
                "initials": "PJ",
                "joined": true,
                "profilePicture": null,
                "profileInfo": {
                    "display_profile": null,
                    "verified_ambassador": null,
                    "verified_consultant": null,
                    "top_tier_user": null,
                    "viewed_verified_ambassador": null,
                    "viewed_verified_consultant": null,
                    "viewed_top_tier_user": null
                },
                "invite": false,
                "role": 1,
                "role_permissions": {
                    "add_email_account": true,
                    "billing": true,
                    "can_add_team_guests": true,
                    "can_add_team_members": true,
                    "can_be_added_to_user_groups": true,
                    "can_convert_item": true,
                    "can_create_goals": true,
                    "can_create_lists": true,
                    "can_create_milestone": true,
                    "can_create_personal_list": true,
                    "can_create_portfolios": true,
                    "can_create_projects": true,
                    "can_create_spaces": true,
                    "can_create_workload": true,
                    "can_delete_comments": true,
                    "can_delete_no_access": true,
                    "can_edit_description": true,
                    "can_edit_integrations": true,
                    "can_edit_list_statuses": true,
                    "can_edit_privacy": 2,
                    "can_edit_project_settings": 2,
                    "can_edit_space_settings": 2,
                    "can_edit_team": true,
                    "can_edit_team_members": true,
                    "can_edit_team_owner": true,
                    "can_edit_trial": true,
                    "can_edit_user_groups": true,
                    "can_edit_view_protection": true,
                    "can_enable_sso": true,
                    "can_export_tasks": true,
                    "can_gdpr_export": true,
                    "can_import": true,
                    "can_list_inaccessible_spaces": true,
                    "can_recover_inaccessible_spaces": true,
                    "can_see_team_members": true,
                    "can_see_workload": true,
                    "can_use_git": true,
                    "can_view_reporting": true,
                    "create_automation": true,
                    "create_dashboards": true,
                    "custom_roles": true,
                    "make_views_public": true,
                    "manage_custom_fields": true,
                    "manage_custom_items": true,
                    "manage_statuses": true,
                    "manage_tags": true,
                    "name": "owner",
                    "oauth_apps": true,
                    "profile": true,
                    "public_spaces_visible": true,
                    "send_email": true,
                    "share": true,
                    "team_permissions": true,
                    "team_role": 1,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "create_custom_fields": true,
                    "edit_custom_fields": true,
                    "delete_custom_fields": true,
                    "merge_custom_fields": true,
                    "convert_custom_fields": true,
                    "move_custom_fields": true
                },
                "last_active": "1694852081464",
                "date_joined": "1649012241023",
                "date_invited": "1649012241023",
                "default_team": "36698333",
                "default_project": null,
                "default_category": null,
                "default_subcategory": null,
                "date_format": null,
                "reverse_statuses": null,
                "engagement_score": 1,
                "demo_data_done": false,
                "tour_cards_done": false,
                "tour_cards_data": null,
                "onboarding_step": "completed",
                "android_onboarding_done": false,
                "markdown_shortcuts": true,
                "dropbox_enabled": true,
                "drive_enabled": true,
                "one_drive_enabled": true,
                "box_enabled": true,
                "dashboard_size": 1,
                "bouncing": false,
                "dark_theme": false,
                "hide_breadcrumbs_when_sorting": null,
                "inbox_breadcrumbs": null,
                "timezone_offset": "-600",
                "timezone": "Australia/Sydney",
                "features": {
                    "harvest": null,
                    "toggl_check": true
                },
                "twofa_enabled": "0",
                "twofa_required": false,
                "v2_beta": true,
                "dashboard": 5,
                "sidebar_theme": 0,
                "user_settings": [
                    {
                        "name": "pinned_rec",
                        "value": true
                    },
                    {
                        "name": "pinned_reminder",
                        "value": null
                    },
                    {
                        "name": "pinned_note",
                        "value": true
                    },
                    {
                        "name": "pinned_doc",
                        "value": true
                    },
                    {
                        "name": "pinned_tray",
                        "value": false
                    },
                    {
                        "name": "show_stats_details",
                        "value": null
                    },
                    {
                        "name": "layout_v3",
                        "value": false
                    },
                    {
                        "name": "toolbar_theme",
                        "value": null
                    },
                    {
                        "name": "pinned_chat",
                        "value": null
                    },
                    {
                        "name": "pinned_my_tasks",
                        "value": null
                    },
                    {
                        "name": "pinned_whiteboard",
                        "value": null
                    },
                    {
                        "name": "inbox_v3",
                        "value": null
                    },
                    {
                        "name": "pinned_ai",
                        "value": null
                    },
                    {
                        "name": "docs_comment_style",
                        "value": "minimal"
                    },
                    {
                        "name": "home_v3_enabled",
                        "value": null
                    }
                ]
            },
        }
    ],
    "members_hierarchy": {
        "members": {
            "subcategory": [
                {
                    "user": {
                        "id": 48763417,
                        "username": "Peter Jaber",
                        "email": "peterjaberau@gmail.com",
                        "color": "#ea80fc",
                        "initials": "PJ",
                        "profilePicture": null,
                        "profileInfo": {
                            "display_profile": null,
                            "verified_ambassador": null,
                            "verified_consultant": null,
                            "top_tier_user": null,
                            "viewed_verified_ambassador": null,
                            "viewed_verified_consultant": null,
                            "viewed_top_tier_user": null
                        }
                    },
                    "permission_level": 5,
                    "date_added": "1649012289186",
                    "role": 1,
                    "id": "168898968"
                }
            ],
            "category": [],
            "project": [],
            "team": [],
            "tasks": []
        },
        "group_members": {
            "subcategory": [],
            "category": [],
            "project": [],
            "team": [],
            "tasks": []
        }
    },
    "user_traits": {
        "createdAt": "2022-04-03T18:56:34.525Z",
        "domain": "gmail.com",
        "email": "peterjaberau@gmail.com",
        "firstName": "Peter",
        "id": 48763417,
        "language": "en-GB",
        "lastName": "Jaber",
        "phone": null,
        "timezone": "Australia/Sydney",
        "workspaceMemberships": [
            "36698333"
        ],
        "platform": "Web",
        "appVersion": "2.197.1",
        "isMobile": false,
        "sessionId": "1694852030",
        "clientId": "476750639.1684026422",
        "sessionNumber": 51,
        "address": null,
        "tier": "FreeForever"
    },

    "hierarchy": [
        {
            "id": "54779505",
            "access": true,
            "name": "Space",
            "private": false,
            "categories": [
                {
                    "id": "102781136",
                    "access": true,
                    "hidden": true,
                    "name": "hidden",
                    "orderindex": 0,
                    "subcategories": [
                        {
                            "id": "168898968",
                            "orderindex": 1,
                            "name": "List",
                            "permission_level": 5
                        }
                    ]
                },
                {
                    "id": "90030187090",
                    "access": true,
                    "hidden": false,
                    "name": "Agile Team Roadmap to clickup. this is a long title",
                    "orderindex": 1,
                    "subcategories": [
                        {
                            "id": "900300351026",
                            "orderindex": 5,
                            "name": "Design",
                            "permission_level": 5
                        },
                        {
                            "id": "900300351027",
                            "orderindex": 7,
                            "name": "Engineering",
                            "permission_level": 5
                        },
                        {
                            "id": "900300351025",
                            "orderindex": 8,
                            "name": "Release",
                            "permission_level": 5
                        }
                    ]
                }
            ]
        },
        {
            "id": "90030007894",
            "access": true,
            "name": "Start a Social Media Marketing Agency",
            "private": false,
            "categories": [
                {
                    "id": "90030025269",
                    "access": true,
                    "hidden": false,
                    "name": "📈Business Development",
                    "orderindex": 5,
                    "subcategories": [
                        {
                            "id": "900300045517",
                            "orderindex": 4,
                            "name": "🪙Business Blueprint",
                            "permission_level": 5
                        },
                        {
                            "id": "900300045519",
                            "orderindex": 5,
                            "name": "🎣Client Acquisition Strategies",
                            "permission_level": 5
                        }
                    ],
                    "color": "#f9d900"
                },
                {
                    "id": "90030025271",
                    "access": true,
                    "hidden": false,
                    "name": "📣Marketing",
                    "orderindex": 6,
                    "subcategories": [
                        {
                            "id": "900300045522",
                            "orderindex": 0,
                            "name": "📂 Case Studies",
                            "permission_level": 5
                        },
                        {
                            "id": "900300045523",
                            "orderindex": 1,
                            "name": "📅Networking Events",
                            "permission_level": 5
                        },
                        {
                            "id": "900300422998",
                            "orderindex": 2,
                            "name": "SEO Roadmap",
                            "permission_level": 5,
                            "status": {
                                "color": "#FF7FAB"
                            }
                        },
                        {
                            "id": "900300045521",
                            "orderindex": 3,
                            "name": "🧑‍🤝‍🧑Community Management",
                            "permission_level": 5
                        },
                        {
                            "id": "900300045524",
                            "orderindex": 4,
                            "name": "📺Ads",
                            "permission_level": 5,
                            "status": {
                                "color": "#81B1FF"
                            }
                        },
                        {
                            "id": "900300045526",
                            "orderindex": 5,
                            "name": "📲Social Media Schedule",
                            "permission_level": 5
                        }
                    ]
                },
                {
                    "id": "90030025268",
                    "access": true,
                    "hidden": false,
                    "name": "📊 Sales",
                    "orderindex": 7,
                    "subcategories": [
                        {
                            "id": "900300045516",
                            "orderindex": 5,
                            "name": "👤 Leads",
                            "permission_level": 5
                        },
                        {
                            "id": "900300045515",
                            "orderindex": 7,
                            "name": "💰 Deals",
                            "permission_level": 5
                        }
                    ]
                },
                {
                    "id": "90030179552",
                    "access": true,
                    "hidden": false,
                    "name": "test",
                    "orderindex": 9,
                    "subcategories": [
                        {
                            "id": "900300331950",
                            "orderindex": 0,
                            "name": "List",
                            "permission_level": 5
                        }
                    ]
                },
                {
                    "id": "90030025267",
                    "access": true,
                    "hidden": false,
                    "name": "🏛️Clients",
                    "orderindex": 10,
                    "subcategories": [
                        {
                            "id": "900300045513",
                            "orderindex": 6,
                            "name": "🤵 <Client 1>",
                            "permission_level": 5
                        },
                        {
                            "id": "900300045514",
                            "orderindex": 7,
                            "name": "🤵<Client 2>",
                            "permission_level": 5
                        }
                    ]
                }
            ]
        },
        {
            "id": "90030071122",
            "access": true,
            "name": "Professional Services",
            "private": false,
            "categories": [
                {
                    "id": "90030231641",
                    "access": true,
                    "hidden": false,
                    "name": "✨ Template Guide",
                    "orderindex": 10,
                    "subcategories": [],
                    "color": "#2ecd6f"
                },
                {
                    "id": "90030231643",
                    "access": true,
                    "hidden": false,
                    "name": "PreSale",
                    "orderindex": 11,
                    "subcategories": [
                        {
                            "id": "900300433025",
                            "orderindex": 7,
                            "name": "Scoping",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        }
                    ],
                    "color": "#3397dd"
                },
                {
                    "id": "90030231644",
                    "access": true,
                    "hidden": false,
                    "name": "PostSale Engagements",
                    "orderindex": 12,
                    "subcategories": [
                        {
                            "id": "900300433026",
                            "orderindex": 10,
                            "name": "Incoming Closed-Won Opps",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        },
                        {
                            "id": "900300433027",
                            "orderindex": 11,
                            "name": "Service 1 - Onboarding",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        },
                        {
                            "id": "900300433028",
                            "orderindex": 13,
                            "name": "Service 2 - Integrations",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        },
                        {
                            "id": "900300433029",
                            "orderindex": 15,
                            "name": "Service 3 - Managed Services",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        }
                    ],
                    "color": "#3397dd"
                },
                {
                    "id": "90030231645",
                    "access": true,
                    "hidden": false,
                    "name": "Wikido - Large Client Project",
                    "orderindex": 15,
                    "subcategories": [
                        {
                            "id": "900300433032",
                            "orderindex": 15,
                            "name": "Project Management",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        },
                        {
                            "id": "900300433034",
                            "orderindex": 18,
                            "name": "Phase 1: Discovery",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        },
                        {
                            "id": "900300433030",
                            "orderindex": 19,
                            "name": "Phase 2: Implementation",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        },
                        {
                            "id": "900300433035",
                            "orderindex": 21,
                            "name": "Phase 3: Launch",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        },
                        {
                            "id": "900300433036",
                            "orderindex": 22,
                            "name": "Phase 4: Enablement",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        }
                    ],
                    "color": "#3397dd"
                },
                {
                    "id": "90030231649",
                    "access": true,
                    "hidden": false,
                    "name": "Small Client Projects",
                    "orderindex": 16,
                    "subcategories": [
                        {
                            "id": "900300433038",
                            "orderindex": 4,
                            "name": "Wikido - Integration Project",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        },
                        {
                            "id": "900300433039",
                            "orderindex": 5,
                            "name": "Agivu - Integration Project",
                            "permission_level": 5,
                            "status": {
                                "color": "#3397dd"
                            }
                        }
                    ],
                    "color": "#3397dd"
                }
            ]
        }
    ],





    "apps": [
        {
            "kind": "taskManager",
            "auto_save": null,
            "sidebar_view": false,
            "pinned": false,
            "sidebar_orderindex": null,
            "sidebar_num_subcats_between": null,
            "permissions": {
                "can_unprotect": true,
                "comment": true,
                "delete_view": true,
                "edit_view": true,
                "permission_level": 5
            },
            "creator_user": {
                "id": 48763417,
                "username": "Peter Jaber",
                "email": "peterjaberau@gmail.com",
                "color": "#ea80fc",
                "initials": "PJ",
                "profilePicture": null
            },
            "members": [],
            "grouping": {
                "field": "status",
                "dir": -1,
                "collapsed": [],
                "ignore": false
            },
            "settings": {
                "show_task_locations": false,
                "show_subtasks": 1,
                "show_subtask_parent_names": true,
                "show_closed_subtasks": false,
                "show_assignees": true,
                "show_images": true,
                "show_timer": false,
                "collapse_empty_columns": null,
                "me_comments": true,
                "me_subtasks": true,
                "me_checklists": true,
                "show_empty_statuses": null,
                "auto_wrap": null,
                "time_in_status_view": 1
            },
            "accounts": {
                "tenant": {},
                "workspace": {},
                "members": ""
            },
            "filters": {
                "op": "AND",
                "fields": [],
                "search": "",
                "search_custom_fields": null,
                "search_description": false,
                "search_name": false,
                "show_closed": true
            },
            "viewing": [],
            "commenting": [],
            "columns": {
                "fields": [
                    {
                        "field": "status",
                        "idx": 0,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "assignee",
                        "idx": 1,
                        "width": 100,
                        "hidden": false,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "startDate",
                        "idx": 2,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "dueDate",
                        "idx": 3,
                        "width": 100,
                        "hidden": false,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "id",
                        "idx": 4,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "customId",
                        "idx": 5,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "dateCreated",
                        "idx": 6,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "dateUpdated",
                        "idx": 7,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "dateClosed",
                        "idx": 8,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "createdBy",
                        "idx": 9,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "latestComment",
                        "idx": 10,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "priority",
                        "idx": 11,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "commentCount",
                        "idx": 12,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "lists",
                        "idx": 13,
                        "width": 140,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "pullRequests",
                        "idx": 14,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "incompleteCommentCount",
                        "idx": 15,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "timeLogged",
                        "idx": 16,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "timeEstimate",
                        "idx": 17,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "name",
                        "idx": 18,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "linked",
                        "idx": 19,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "dependencies",
                        "idx": 20,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "pages",
                        "idx": 21,
                        "width": 100,
                        "hidden": true,
                        "name": null,
                        "display": null
                    },
                    {
                        "field": "cf_e3d070df-62a4-4ee4-bfd9-e09c3a56cb0f",
                        "idx": 22,
                        "width": 100,
                        "hidden": false,
                        "name": null,
                        "display": null
                    }
                ]
            },

        }
    ],

    "console": {
        "sidebar_view": false,
        "sidebarViews": [
            {
                "id": "12zy6x-1562",
                "name": "folder 1",
                "type": 9,
                "parent_id": "54779505",
                "parent_type": 4,
                "orderindex": 1,
                "permission_level": 5,
                "archived": false,
                "visibility": 1,
                "sidebar_num_subcats_between": 0,
                "share_with_team": false
            },
            {
                "id": "12zy6x-1582",
                "name": "Getting Started Guide",
                "type": 9,
                "parent_id": "90030187090",
                "parent_type": 5,
                "orderindex": -1,
                "permission_level": 5,
                "archived": false,
                "visibility": 1,
                "sidebar_num_subcats_between": 0,
                "share_with_team": false
            },
            {
                "id": "12zy6x-1542",
                "name": "Doc",
                "type": 9,
                "parent_id": "90030007894",
                "parent_type": 4,
                "orderindex": 1,
                "permission_level": 5,
                "archived": false,
                "visibility": 1,
                "sidebar_num_subcats_between": 0,
                "share_with_team": false
            },
            {
                "id": "12zy6x-2702",
                "name": "Document Repository",
                "type": 9,
                "parent_id": "90030231645",
                "parent_type": 5,
                "orderindex": 2,
                "permission_level": 5,
                "archived": false,
                "visibility": 1,
                "sidebar_num_subcats_between": 0,
                "share_with_team": false
            }
        ]
    },



    "currentUser": {},



    "selection": {},

    "metadata": {},

    "permissions": {}
}





const globals = {

    "applications": [ "#application"],
    "application": {
        "applicationId": "string",
        "sourcePad": {
            "sourceMetadata": [
                {
                    "type": "Native table",
                    "id": "XrYtiAxpoIc5mlCo7HHz",
                    "tableName": {
                        "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                        "isSpecial": false
                    }
                },
                {
                    "type": "Google Sheet",
                    "id": "18AzWTA6Au0ytGFkdj5XNj-9dnhHh71wSDPEgmfigFCE",
                    "title": "Example Data",
                    "fromSharedDrive": false
                }
            ],
            "spreadsheetName": "Example Data",
            "schema": {
                "tables": [
                    {
                        "name": {
                            "name": "Sheet2",
                            "isSpecial": false
                        },
                        "columns": [
                            {
                                "name": "$rowIndex",
                                "type": {
                                    "kind": "number"
                                },
                                "hidden": true,
                                "isProtected": false,
                                "isUserSpecific": false,
                                "isReadOnly": true
                            },
                            {
                                "name": "Reg Price",
                                "displayName": "Reg Price",
                                "type": {
                                    "kind": "number"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Promo Price",
                                "displayName": "Promo Price",
                                "type": {
                                    "kind": "number"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Lot Location",
                                "displayName": "Lot Location",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Acquired Date",
                                "displayName": "Acquired Date",
                                "type": {
                                    "kind": "date-time"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Stock #",
                                "displayName": "Stock #",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Mileage",
                                "displayName": "Mileage",
                                "type": {
                                    "kind": "number"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Status",
                                "displayName": "Status",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "VIN",
                                "displayName": "VIN",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Year",
                                "displayName": "Year",
                                "type": {
                                    "kind": "number"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Make",
                                "displayName": "Make",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Model",
                                "displayName": "Model",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Ext Color",
                                "displayName": "Ext Color",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Ext Trim",
                                "displayName": "Ext Trim",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Int Color",
                                "displayName": "Int Color",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Body Style",
                                "displayName": "Body Style",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Transmission",
                                "displayName": "Transmission",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Drive Type",
                                "displayName": "Drive Type",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Engine",
                                "displayName": "Engine",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Fuel Type",
                                "displayName": "Fuel Type",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Weight",
                                "displayName": "Weight",
                                "type": {
                                    "kind": "number"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Condition",
                                "displayName": "Condition",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Inventory Type",
                                "displayName": "Inventory Type",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Installed Options",
                                "displayName": "Installed Options",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Seller Notes",
                                "displayName": "Seller Notes",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Delete",
                                "displayName": "Delete",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "Images",
                                "displayName": "Images",
                                "type": {
                                    "kind": "image-uri"
                                },
                                "hidden": false,
                                "isUserSpecific": false,
                                "isProtected": false
                            },
                            {
                                "name": "$isFavorited",
                                "displayName": "Is Favorited?",
                                "type": {
                                    "kind": "boolean"
                                },
                                "isUserSpecific": true,
                                "isProtected": false
                            }
                        ],
                        "sheetName": "Sheet2",
                        "sheetID": 575000436,
                        "numDataRows": 499,
                        "emailOwnersColumn": []
                    },
                    {
                        "name": {
                            "name": "comments",
                            "isSpecial": true
                        },
                        "columns": [
                            {
                                "name": "$documentID",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": true,
                                "isProtected": false
                            },
                            {
                                "name": "topic",
                                "type": {
                                    "kind": "string"
                                },
                                "isProtected": false
                            },
                            {
                                "name": "email",
                                "type": {
                                    "kind": "string"
                                },
                                "isProtected": false
                            },
                            {
                                "name": "username",
                                "type": {
                                    "kind": "string"
                                },
                                "isProtected": false
                            },
                            {
                                "name": "dateTime",
                                "type": {
                                    "kind": "date-time"
                                },
                                "isProtected": false
                            },
                            {
                                "name": "comment",
                                "type": {
                                    "kind": "string"
                                },
                                "isProtected": false
                            }
                        ]
                    },
                    {
                        "sheetName": "Users",
                        "name": {
                            "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                            "isSpecial": false
                        },
                        "columns": [
                            {
                                "name": "$rowIndex",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": true,
                                "isProtected": false,
                                "isUserSpecific": false,
                                "isReadOnly": true,
                                "fromNativeTable": true
                            },
                            {
                                "name": "$rowID",
                                "displayName": "🔒 Row ID",
                                "type": {
                                    "kind": "string"
                                },
                                "hidden": true,
                                "isUserSpecific": false,
                                "isProtected": false,
                                "fromNativeTable": true
                            },
                            {
                                "name": "Name",
                                "type": {
                                    "kind": "string"
                                },
                                "isProtected": false,
                                "fromNativeTable": true
                            },
                            {
                                "name": "Email",
                                "type": {
                                    "kind": "email-address"
                                },
                                "isProtected": false,
                                "fromNativeTable": true
                            },
                            {
                                "name": "Photo",
                                "type": {
                                    "kind": "image-uri"
                                },
                                "isProtected": false,
                                "fromNativeTable": true
                            },
                            {
                                "name": "Role",
                                "type": {
                                    "kind": "string"
                                },
                                "isProtected": false,
                                "fromNativeTable": true
                            },
                            {
                                "name": "$isFavorited",
                                "displayName": "Is Favorited?",
                                "type": {
                                    "kind": "boolean"
                                },
                                "isUserSpecific": true,
                                "isProtected": false,
                                "fromNativeTable": true
                            }
                        ],
                        "rowIDColumn": "$rowID",
                        "sourceMetadata": {
                            "type": "Native table",
                            "id": "XrYtiAxpoIc5mlCo7HHz",
                            "tableName": {
                                "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                                "isSpecial": false
                            }
                        },
                        "isReadOnly": false,
                        "emailOwnersColumn": []
                    }
                ]
            }
        },
        "publishState": {
            "publishing": false,
            "isPublished": false,
            "isPublishingActive": true
        },
        "appMetadata": {
            "title": "Field operations",
            "lastReloadCheck": {
                "at": "2023-09-15T00:03:55.972Z",
                "result": "No pending reload"
            },
            "lastRefreshed": "2023-09-14T15:42:08.392Z",
            "createdAtOrBefore": "2023-08-14T09:05:45.285Z"
        },
        "ownerID": "1oTMe7Opw2imuxlsDSpy",
        "zapierAPIKey": "13a5d1b2-ec4a-4d9f-ab4e-0eee78693eff",
        "zaps": [],
        "webhooks": [],
        "quotas": {
            "rows-used": {
                "current": 500
            },
            "file-bytes-used": {
                "current": 0
            },
            "reloads": {
                "current": 0
            },
            "zaps": {
                "current": 0
            },
            "signatures": {
                "current": 0
            },
            "deliver-email": {
                "current": 0
            },
            "barcodes-scanned": {
                "current": 0
            },
            "map-pins": {
                "current": 0
            },
            "private-users": {
                "current": 0
            },
            "public-users": {
                "current": 0
            },
            "app-editors": {
                "current": 0
            }
        },
        "serial": 44,
        "lastUpdated": "2023-09-15T00:13:54.483Z"
    },





    "serializedApp": {
        "title": "Field operations",
        "description": "",
        "sourceMetadata": {
            "type": "Google Sheet",
            "id": "18AzWTA6Au0ytGFkdj5XNj-9dnhHh71wSDPEgmfigFCE",
            "title": "Example Data",
            "fromSharedDrive": false
        },
        "sourceMetadataArray": [
            {
                "type": "Native table",
                "id": "XrYtiAxpoIc5mlCo7HHz",
                "tableName": {
                    "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                    "isSpecial": false
                }
            },
            {
                "type": "Google Sheet",
                "id": "18AzWTA6Au0ytGFkdj5XNj-9dnhHh71wSDPEgmfigFCE",
                "title": "Example Data",
                "fromSharedDrive": false
            }
        ],
        "iconImage": {
            "emoji": "📈"
        },
        "tabs": [
            {
                "screenName": {
                    "kind": "screen",
                    "value": "free-0"
                },
                "title": "Sheet2",
                "hidden": false,
                "icon": "path:/svg/stroke/st-mail-opened.svg"
            },
            {
                "screenName": {
                    "kind": "screen",
                    "value": "free-1"
                },
                "title": "Users",
                "hidden": false,
                "icon": "path:/svg/stroke/st-send.svg"
            }
        ],
        "screenDescriptions": {
            "free-0": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "Sheet2",
                        "isSpecial": false
                    }
                },
                "canEdit": false,
                "canEditFilters": [],
                "canDelete": false,
                "canDeleteFilters": [],
                "isForm": false,
                "fetchesData": true,
                "components": [
                    {
                        "kind": "inline-list",
                        "componentTitle": {
                            "kind": "string",
                            "value": "Sheet2"
                        },
                        "cardStyle": {
                            "kind": "enum",
                            "value": "card"
                        },
                        "size": {
                            "kind": "enum",
                            "value": "size-small"
                        },
                        "propertyName": {
                            "kind": "table",
                            "value": {
                                "name": "Sheet2",
                                "isSpecial": false
                            }
                        },
                        "format": {
                            "kind": "enum",
                            "value": "card-collection"
                        },
                        "title": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Lot Location"
                            }
                        },
                        "subtitle": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Stock #"
                            }
                        },
                        "image": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Images"
                            }
                        },
                        "action": {
                            "kind": "action",
                            "value": {
                                "kind": "push-detail-screen"
                            }
                        },
                        "allowSearch": {
                            "kind": "switch",
                            "value": {
                                "value": true
                            }
                        },
                        "titleActions": {
                            "kind": "array",
                            "value": [
                                {
                                    "title": {
                                        "kind": "string",
                                        "value": "Add"
                                    },
                                    "action": {
                                        "kind": "action",
                                        "value": {
                                            "kind": "form-screen",
                                            "title": {
                                                "kind": "string",
                                                "value": "Add"
                                            },
                                            "formScreenName": "form-0"
                                        }
                                    }
                                }
                            ]
                        },
                        "forEasyTabConfiguration": {
                            "kind": "switch",
                            "value": {
                                "value": true
                            }
                        },
                        "easyCRUDAdd": {
                            "kind": "switch",
                            "value": {
                                "value": true
                            }
                        },
                        "easyCRUDEdit": {
                            "kind": "switch",
                            "value": {
                                "value": true,
                                "condition": {
                                    "kind": "filter",
                                    "predicate": {
                                        "kind": "check-value",
                                        "operator": "is-not-empty",
                                        "value": {
                                            "kind": "get-column",
                                            "column": "Reg Price"
                                        }
                                    },
                                    "isActive": true
                                }
                            }
                        },
                        "easyCRUDDelete": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "emphasis": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Int Color"
                            }
                        },
                        "transforms": [],
                        "imageStyle": {
                            "kind": "enum",
                            "value": "image-style-rectilinear"
                        },
                        "imageFill": {
                            "kind": "enum",
                            "value": "image-fill-cover"
                        },
                        "aspectRatio": {
                            "kind": "enum",
                            "value": "aspect-four-by-three"
                        },
                        "orientation": {
                            "kind": "enum",
                            "value": "vertical"
                        },
                        "titleStyle": {
                            "kind": "enum",
                            "value": "title-style-bold"
                        },
                        "multipleDynamicFilters": {
                            "kind": "array",
                            "value": []
                        },
                        "visibilityFilters": [],
                        "pageSize": {
                            "kind": "number",
                            "value": 24
                        },
                        "componentID": "free-0-inline-list-1"
                    }
                ],
                "transforms": []
            },
            "form-0": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "Sheet2",
                        "isSpecial": false
                    }
                },
                "canEdit": false,
                "canEditFilters": [],
                "canDelete": false,
                "canDeleteFilters": [],
                "isForm": true,
                "fetchesData": false,
                "formType": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "Sheet2",
                        "isSpecial": false
                    }
                },
                "title": {
                    "kind": "string",
                    "value": "Add"
                },
                "components": [
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Reg Price"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Reg Price"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-number-field-1"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Promo Price"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Promo Price"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-number-field-2"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Lot Location"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Lot Location"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-1"
                    },
                    {
                        "kind": "date-time-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Acquired Date"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Acquired Date"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "pastAndOrFuture": {
                            "kind": "enum",
                            "value": "all"
                        },
                        "componentID": "form-0-date-time-field-1"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Stock #"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Stock #"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-2"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Mileage"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Mileage"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-number-field-3"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Status"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Status"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-3"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "VIN"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "VIN"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-4"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Year"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Year"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-number-field-4"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Make"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Make"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-5"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Model"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Model"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-6"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Ext Color"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Ext Color"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-7"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Ext Trim"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Ext Trim"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-8"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Int Color"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Int Color"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-9"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Body Style"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Body Style"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-10"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Transmission"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Transmission"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-11"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Drive Type"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Drive Type"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-12"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Engine"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Engine"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-13"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Fuel Type"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Fuel Type"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-14"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Weight"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Weight"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-number-field-5"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Condition"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Condition"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-15"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Inventory Type"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Inventory Type"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-16"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Installed Options"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Installed Options"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-17"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Seller Notes"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Seller Notes"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-18"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Delete"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Delete"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-0-text-field-19"
                    },
                    {
                        "kind": "image-picker",
                        "visibilityFilters": [],
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Images"
                            }
                        },
                        "caption": {
                            "kind": "string",
                            "value": "Images"
                        },
                        "cameraHint": {
                            "kind": "enum",
                            "value": "Any"
                        },
                        "componentID": "form-0-image-picker-1"
                    }
                ],
                "onSubmitActions": [
                    {
                        "kind": "show-toast",
                        "icon": {
                            "kind": "enum",
                            "value": "success"
                        }
                    }
                ]
            },
            "free-1": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                        "isSpecial": false
                    }
                },
                "canEdit": false,
                "canEditFilters": [],
                "canDelete": false,
                "canDeleteFilters": [],
                "isForm": false,
                "fetchesData": true,
                "components": [
                    {
                        "kind": "inline-list",
                        "componentTitle": {
                            "kind": "string",
                            "value": "Users"
                        },
                        "cardStyle": {
                            "kind": "enum",
                            "value": "card"
                        },
                        "size": {
                            "kind": "enum",
                            "value": "size-small"
                        },
                        "propertyName": {
                            "kind": "table",
                            "value": {
                                "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                                "isSpecial": false
                            }
                        },
                        "format": {
                            "kind": "enum",
                            "value": "card-collection"
                        },
                        "title": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Name"
                            }
                        },
                        "subtitle": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Role"
                            }
                        },
                        "image": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Photo"
                            }
                        },
                        "action": {
                            "kind": "action",
                            "value": {
                                "kind": "push-detail-screen"
                            }
                        },
                        "allowSearch": {
                            "kind": "switch",
                            "value": {
                                "value": true
                            }
                        },
                        "titleActions": {
                            "kind": "array",
                            "value": [
                                {
                                    "title": {
                                        "kind": "string",
                                        "value": "Add"
                                    },
                                    "action": {
                                        "kind": "action",
                                        "value": {
                                            "kind": "form-screen",
                                            "title": {
                                                "kind": "string",
                                                "value": "Add"
                                            },
                                            "formScreenName": "form-1"
                                        }
                                    }
                                }
                            ]
                        },
                        "forEasyTabConfiguration": {
                            "kind": "switch",
                            "value": {
                                "value": true
                            }
                        },
                        "easyCRUDAdd": {
                            "kind": "switch",
                            "value": {
                                "value": true
                            }
                        },
                        "easyCRUDEdit": {
                            "kind": "switch",
                            "value": {
                                "value": true
                            }
                        },
                        "easyCRUDDelete": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "free-1-inline-list-1"
                    }
                ],
                "transforms": []
            },
            "form-1": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                        "isSpecial": false
                    }
                },
                "canEdit": false,
                "canEditFilters": [],
                "canDelete": false,
                "canDeleteFilters": [],
                "isForm": true,
                "fetchesData": false,
                "formType": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                        "isSpecial": false
                    }
                },
                "title": {
                    "kind": "string",
                    "value": "Add"
                },
                "components": [
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Name"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Name"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-1-text-field-1"
                    },
                    {
                        "kind": "email-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Email"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Email"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-1-email-field-1"
                    },
                    {
                        "kind": "image-picker",
                        "visibilityFilters": [],
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Photo"
                            }
                        },
                        "caption": {
                            "kind": "string",
                            "value": "Photo"
                        },
                        "cameraHint": {
                            "kind": "enum",
                            "value": "Any"
                        },
                        "componentID": "form-1-image-picker-1"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Role"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Role"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "form-1-text-field-2"
                    }
                ],
                "onSubmitActions": [
                    {
                        "kind": "show-toast",
                        "icon": {
                            "kind": "enum",
                            "value": "success"
                        }
                    }
                ]
            },
            "class-Sheet2": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "Sheet2",
                        "isSpecial": false
                    }
                },
                "canEdit": false,
                "canEditFilters": [],
                "canDelete": false,
                "canDeleteFilters": [],
                "isForm": false,
                "fetchesData": false,
                "title": {
                    "kind": "column",
                    "value": {
                        "kind": "default-ctx",
                        "name": "Lot Location"
                    }
                },
                "components": [
                    {
                        "kind": "breadcrumbs",
                        "componentID": "class-Sheet2-breadcrumbs-1"
                    },
                    {
                        "kind": "hero",
                        "title": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Lot Location"
                            }
                        },
                        "subtitle": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Stock #"
                            }
                        },
                        "image": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Images"
                            }
                        },
                        "componentID": "class-Sheet2-hero-1"
                    },
                    {
                        "kind": "fields",
                        "fields": {
                            "kind": "array",
                            "value": [
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Reg Price"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Reg Price"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Promo Price"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Promo Price"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Acquired Date"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Acquired Date"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Mileage"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Mileage"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Status"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Status"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "VIN"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "VIN"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Year"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Year"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Make"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Make"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Model"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Model"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Ext Color"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Ext Color"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Ext Trim"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Ext Trim"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Int Color"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Int Color"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Body Style"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Body Style"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Transmission"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Transmission"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Drive Type"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Drive Type"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Engine"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Engine"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Fuel Type"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Fuel Type"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Weight"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Weight"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Condition"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Condition"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Inventory Type"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Inventory Type"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Installed Options"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Installed Options"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Seller Notes"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Seller Notes"
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Delete"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Delete"
                                        }
                                    }
                                }
                            ]
                        },
                        "componentID": "class-Sheet2-fields-1"
                    }
                ]
            },
            "edit-class-Sheet2": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "Sheet2",
                        "isSpecial": false
                    }
                },
                "canEditFilters": [],
                "canDelete": true,
                "canDeleteFilters": [],
                "isForm": false,
                "fetchesData": false,
                "title": {
                    "kind": "string",
                    "value": "Edit"
                },
                "components": [
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Reg Price"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Reg Price"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-number-field-1"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Promo Price"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Promo Price"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-number-field-2"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Lot Location"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Lot Location"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-1"
                    },
                    {
                        "kind": "date-time-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Acquired Date"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Acquired Date"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "pastAndOrFuture": {
                            "kind": "enum",
                            "value": "all"
                        },
                        "componentID": "edit-class-Sheet2-date-time-field-1"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Stock #"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Stock #"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-2"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Mileage"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Mileage"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-number-field-3"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Status"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Status"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-3"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "VIN"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "VIN"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-4"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Year"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Year"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-number-field-4"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Make"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Make"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-5"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Model"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Model"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-6"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Ext Color"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Ext Color"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-7"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Ext Trim"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Ext Trim"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-8"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Int Color"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Int Color"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-9"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Body Style"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Body Style"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-10"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Transmission"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Transmission"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-11"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Drive Type"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Drive Type"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-12"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Engine"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Engine"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-13"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Fuel Type"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Fuel Type"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-14"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Weight"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Weight"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-number-field-5"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Condition"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Condition"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-15"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Inventory Type"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Inventory Type"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-16"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Installed Options"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Installed Options"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-17"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Seller Notes"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Seller Notes"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-18"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Delete"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Delete"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-Sheet2-text-field-19"
                    },
                    {
                        "kind": "image-picker",
                        "visibilityFilters": [],
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Images"
                            }
                        },
                        "caption": {
                            "kind": "string",
                            "value": "Images"
                        },
                        "cameraHint": {
                            "kind": "enum",
                            "value": "Any"
                        },
                        "componentID": "edit-class-Sheet2-image-picker-1"
                    }
                ]
            },
            "class-native-table-XrYtiAxpoIc5mlCo7HHz": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                        "isSpecial": false
                    }
                },
                "canEdit": false,
                "canEditFilters": [],
                "canDelete": false,
                "canDeleteFilters": [],
                "isForm": false,
                "fetchesData": false,
                "title": {
                    "kind": "column",
                    "value": {
                        "kind": "default-ctx",
                        "name": "Name"
                    }
                },
                "components": [
                    {
                        "kind": "breadcrumbs",
                        "componentID": "class-native-table-XrYtiAxpoIc5mlCo7HHz-breadcrumbs-1"
                    },
                    {
                        "kind": "hero",
                        "title": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Name"
                            }
                        },
                        "subtitle": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Role"
                            }
                        },
                        "image": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Photo"
                            }
                        },
                        "componentID": "class-native-table-XrYtiAxpoIc5mlCo7HHz-hero-1"
                    },
                    {
                        "kind": "fields",
                        "fields": {
                            "kind": "array",
                            "value": [
                                {
                                    "name": {
                                        "kind": "string",
                                        "value": "Email"
                                    },
                                    "value": {
                                        "kind": "column",
                                        "value": {
                                            "kind": "default-ctx",
                                            "name": "Email"
                                        }
                                    }
                                }
                            ]
                        },
                        "componentID": "class-native-table-XrYtiAxpoIc5mlCo7HHz-fields-1"
                    }
                ]
            },
            "edit-class-native-table-XrYtiAxpoIc5mlCo7HHz": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                        "isSpecial": false
                    }
                },
                "canEditFilters": [],
                "canDelete": true,
                "canDeleteFilters": [],
                "isForm": false,
                "fetchesData": false,
                "title": {
                    "kind": "string",
                    "value": "Edit"
                },
                "components": [
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Name"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Name"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-native-table-XrYtiAxpoIc5mlCo7HHz-text-field-1"
                    },
                    {
                        "kind": "email-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Email"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Email"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-native-table-XrYtiAxpoIc5mlCo7HHz-email-field-1"
                    },
                    {
                        "kind": "image-picker",
                        "visibilityFilters": [],
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Photo"
                            }
                        },
                        "caption": {
                            "kind": "string",
                            "value": "Photo"
                        },
                        "cameraHint": {
                            "kind": "enum",
                            "value": "Any"
                        },
                        "componentID": "edit-class-native-table-XrYtiAxpoIc5mlCo7HHz-image-picker-1"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Role"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Role"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "edit-class-native-table-XrYtiAxpoIc5mlCo7HHz-text-field-2"
                    }
                ]
            },
            "user-profile": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                        "isSpecial": false
                    }
                },
                "canEdit": false,
                "canEditFilters": [],
                "canDelete": false,
                "canDeleteFilters": [],
                "fetchesData": true,
                "components": [
                    {
                        "kind": "container",
                        "containerStyle": {
                            "kind": "enum",
                            "value": "card"
                        },
                        "layout": {
                            "kind": "enum",
                            "value": "full"
                        },
                        "width": {
                            "kind": "enum",
                            "value": "normal"
                        },
                        "padding": {
                            "kind": "enum",
                            "value": "container-padding-md"
                        },
                        "backgroundEffect": {
                            "kind": "enum",
                            "value": "None"
                        },
                        "withBlur": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "components": [
                            {
                                "kind": "hero",
                                "title": {
                                    "kind": "column",
                                    "value": {
                                        "kind": "default-ctx",
                                        "name": "Name"
                                    }
                                },
                                "subtitle": {
                                    "kind": "special-value",
                                    "value": "real-email-address"
                                },
                                "image": {
                                    "kind": "column",
                                    "value": {
                                        "kind": "default-ctx",
                                        "name": "Photo"
                                    }
                                },
                                "isDefaultUserProfileComponent": {
                                    "kind": "switch",
                                    "value": {
                                        "value": true
                                    }
                                },
                                "componentID": "user-profile-container-1-hero-1"
                            }
                        ],
                        "componentID": "user-profile-container-1"
                    }
                ]
            },
            "add-class-Sheet2": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "Sheet2",
                        "isSpecial": false
                    }
                },
                "canEditFilters": [],
                "canDelete": true,
                "canDeleteFilters": [],
                "isForm": false,
                "fetchesData": false,
                "title": {
                    "kind": "string",
                    "value": "Edit"
                },
                "components": [
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Reg Price"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Reg Price"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-number-field-1"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Promo Price"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Promo Price"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-number-field-2"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Lot Location"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Lot Location"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-1"
                    },
                    {
                        "kind": "date-time-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Acquired Date"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Acquired Date"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "pastAndOrFuture": {
                            "kind": "enum",
                            "value": "all"
                        },
                        "componentID": "add-class-Sheet2-date-time-field-1"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Stock #"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Stock #"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-2"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Mileage"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Mileage"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-number-field-3"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Status"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Status"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-3"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "VIN"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "VIN"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-4"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Year"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Year"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-number-field-4"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Make"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Make"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-5"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Model"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Model"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-6"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Ext Color"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Ext Color"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-7"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Ext Trim"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Ext Trim"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-8"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Int Color"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Int Color"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-9"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Body Style"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Body Style"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-10"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Transmission"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Transmission"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-11"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Drive Type"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Drive Type"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-12"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Engine"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Engine"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-13"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Fuel Type"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Fuel Type"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-14"
                    },
                    {
                        "kind": "number-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Weight"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Weight"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-number-field-5"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Condition"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Condition"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-15"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Inventory Type"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Inventory Type"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-16"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Installed Options"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Installed Options"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-17"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Seller Notes"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Seller Notes"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-18"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Delete"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Delete"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-Sheet2-text-field-19"
                    },
                    {
                        "kind": "image-picker",
                        "visibilityFilters": [],
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Images"
                            }
                        },
                        "caption": {
                            "kind": "string",
                            "value": "Images"
                        },
                        "cameraHint": {
                            "kind": "enum",
                            "value": "Any"
                        },
                        "componentID": "add-class-Sheet2-image-picker-1"
                    }
                ]
            },
            "add-class-native-table-XrYtiAxpoIc5mlCo7HHz": {
                "kind": "class",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                        "isSpecial": false
                    }
                },
                "canEditFilters": [],
                "canDelete": true,
                "canDeleteFilters": [],
                "isForm": false,
                "fetchesData": false,
                "title": {
                    "kind": "string",
                    "value": "Edit"
                },
                "components": [
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Name"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Name"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-native-table-XrYtiAxpoIc5mlCo7HHz-text-field-1"
                    },
                    {
                        "kind": "email-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Email"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Email"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-native-table-XrYtiAxpoIc5mlCo7HHz-email-field-1"
                    },
                    {
                        "kind": "image-picker",
                        "visibilityFilters": [],
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Photo"
                            }
                        },
                        "caption": {
                            "kind": "string",
                            "value": "Photo"
                        },
                        "cameraHint": {
                            "kind": "enum",
                            "value": "Any"
                        },
                        "componentID": "add-class-native-table-XrYtiAxpoIc5mlCo7HHz-image-picker-1"
                    },
                    {
                        "kind": "text-field",
                        "propertyName": {
                            "kind": "column",
                            "value": {
                                "kind": "default-ctx",
                                "name": "Role"
                            }
                        },
                        "placeholder": {
                            "kind": "string",
                            "value": ""
                        },
                        "title": {
                            "kind": "string",
                            "value": "Role"
                        },
                        "isRequired": {
                            "kind": "switch",
                            "value": {
                                "value": false
                            }
                        },
                        "componentID": "add-class-native-table-XrYtiAxpoIc5mlCo7HHz-text-field-2"
                    }
                ]
            },
            "array-table-Sheet2": {
                "kind": "array",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "Sheet2",
                        "isSpecial": false
                    }
                },
                "format": "list",
                "fetchesData": false,
                "canAddRow": {
                    "kind": "switch",
                    "value": {
                        "value": false
                    }
                },
                "canAddRowFilters": [],
                "actions": [
                    {
                        "kind": "push-detail-screen"
                    }
                ],
                "components": [],
                "dynamicSortColumns": {
                    "kind": "array",
                    "value": []
                },
                "search": {
                    "kind": "switch",
                    "value": true
                },
                "titleProperty": {
                    "kind": "column",
                    "value": {
                        "kind": "default-ctx",
                        "name": "Lot Location"
                    }
                },
                "subtitleProperty": {
                    "kind": "column",
                    "value": {
                        "kind": "default-ctx",
                        "name": "Stock #"
                    }
                },
                "imageURLProperty": {
                    "kind": "column",
                    "value": {
                        "kind": "default-ctx",
                        "name": "Images"
                    }
                },
                "imageKind": {
                    "kind": "constant",
                    "value": "url"
                },
                "allowWrapping": {
                    "kind": "switch",
                    "value": false
                },
                "itemSize": {
                    "kind": "enum",
                    "value": "regular"
                },
                "useFallbackInitials": {
                    "kind": "switch",
                    "value": false
                }
            },
            "array-table-native-table-XrYtiAxpoIc5mlCo7HHz": {
                "kind": "array",
                "type": {
                    "kind": "table-ref",
                    "tableName": {
                        "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                        "isSpecial": false
                    }
                },
                "format": "list",
                "fetchesData": false,
                "canAddRow": {
                    "kind": "switch",
                    "value": {
                        "value": false
                    }
                },
                "canAddRowFilters": [],
                "actions": [
                    {
                        "kind": "push-detail-screen"
                    }
                ],
                "components": [],
                "dynamicSortColumns": {
                    "kind": "array",
                    "value": []
                },
                "search": {
                    "kind": "switch",
                    "value": true
                },
                "titleProperty": {
                    "kind": "column",
                    "value": {
                        "kind": "default-ctx",
                        "name": "Name"
                    }
                },
                "subtitleProperty": {
                    "kind": "column",
                    "value": {
                        "kind": "default-ctx",
                        "name": "Role"
                    }
                },
                "imageURLProperty": {
                    "kind": "column",
                    "value": {
                        "kind": "default-ctx",
                        "name": "Photo"
                    }
                },
                "imageKind": {
                    "kind": "constant",
                    "value": "url"
                },
                "allowWrapping": {
                    "kind": "switch",
                    "value": false
                },
                "itemSize": {
                    "kind": "enum",
                    "value": "regular"
                },
                "useFallbackInitials": {
                    "kind": "switch",
                    "value": false
                }
            }
        },
        "theme": {
            "primaryAccentColor": "#576EBD",
            "showTabLabels": true,
            "increaseContrast": false,
            "themeOverlay": "none",
            "showDesktopSideBar": false,
            "showIconsInNavBar": true,
            "showLabelsInTabBar": true,
            "pageTheme": "Accent",
            "themeIsAdaptive": true
        },
        "authentication": {
            "kind": "email-pin",
            "source": "user-profiles"
        },
        "features": {
            "isPluginsAlpha": false,
            "filterSortLimitColumn": false,
            "multipleFilters": false,
            "notesComponent": false,
            "commentsCollection": false,
            "multiFileUpload": false,
            "glideAI": false,
            "genericAPI": false,
            "JSONata": false,
            "removeBranding": false,
            "primaryKeyProperties": false,
            "addRowToSheet": false,
            "emailClientOption": false,
            "omitNotifications": false,
            "copyToClipboardAction": false,
            "advancedPro": false,
            "adminPanel": false,
            "appStoreReview": false,
            "forceAllowTemplateSubmit": false,
            "forceSoftEnforcement": false,
            "forceHardEnforcement": false,
            "autoApproveTemplate": false,
            "canApplyPromoCodes": true,
            "alternateUniverseGlide": false,
            "massScanBarcodes": false,
            "unlimitedBarcodeScanning": false,
            "offlineActionQueue": false,
            "ncmPerformanceAnalysis": false,
            "nonBlockingButton": false,
            "builderTrackingDisableAnalytics": false,
            "billingVNoneCodePaths": false,
            "onChangeAction": false,
            "billingVnext": false,
            "hasV3TeamBasedPricing": true,
            "isV3FreePlan": true,
            "payAsYouGoAddon": false,
            "pagesCustomCss": false,
            "allowNCMOverWire": false,
            "hasMigratedTeamTemplates": false,
            "unifiedApps": false,
            "privateMagicLinks": false,
            "authenticationSupportPassword": false,
            "authenticationSupportEmailWhitelist": false,
            "appAnalytics": false,
            "yesCodeAction": false,
            "queryableNativeTables": false,
            "chatGPTButton": false,
            "convertAppToPage": false,
            "canOnlyMakePages": true,
            "jdbcDataSources": false,
            "emailClient": "native-mail",
            "requirePinForComments": true,
            "isWorldCopyable": false,
            "automaticRefreshMinutes": 0,
            "googleAnalyticsMeasureIDs": [],
            "showSignInWithEmailPin": true,
            "showSignInWithGoogle": false,
            "showSignInWithSSO": false,
            "useCustomSignInBackgroundImageInLoading": false,
            "enableShareScreen": false,
            "shareScreenTitle": "",
            "disableSharing": false,
            "defaultTabletMode": false,
            "virtualEmailAddresses": false,
            "askUserToSaveAuthCookie": false,
            "appKind": "page",
            "useNCMOverWire": false,
            "useUnifiedApps": false,
            "canAppUserRequestAccess": true,
            "noLegacyActions": true,
            "magicLinkInPinEmail": true,
            "compileCustomCss": true,
            "actionsRecentRuns": false,
            "templateProvenance": "none"
        },
        "userProfile": {
            "userProfileTable": {
                "kind": "table",
                "value": {
                    "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                    "isSpecial": false
                }
            },
            "emailColumn": {
                "kind": "column",
                "value": {
                    "kind": "default-ctx",
                    "name": "Email"
                }
            },
            "nameColumn": {
                "kind": "column",
                "value": {
                    "kind": "default-ctx",
                    "name": "Name"
                }
            },
            "imageColumn": {
                "kind": "column",
                "value": {
                    "kind": "default-ctx",
                    "name": "Photo"
                }
            },
            "allowImageUpload": {
                "kind": "switch",
                "value": {
                    "value": true
                }
            }
        }
    },



    "globalFilters": {
        "resourceTypes": ["database", "restApi", "transformer", "nativeTable", "widget", "externalApi"]
    },




    "metadata": [
        {
            "scope": "resources",
            "content": [
                {"id": "6Au0ytGF", "type": "database", "name": "mySql", "tags": ["relational"]},
                {"id": "mfiAu0u0", "type": "database", "name": "postgres", "tags": ["relational"]},
                {"id": "9dnhHh71", "type": "database", "name": "dynamodb", "tags": ["document"]},
                {"id": "kdj5XNj9", "type": "database", "name": "mongodb", "tags": ["document"]},
                {"id": "xlwhtKpp", "type": "database", "name": "nativeTable", "tags": ["document"]},
                {"id": "pXagagTS", "type": "externalApi", "name": "Google Sheet", "tags": []},
            ]
        }
    ],

    "userMetadata": [
        {
            "scope": "resources",
            "content": [
                {"originId": "6Au0ytGF", "id": "0Uhp6Djij5TSGGQ0", "type": "database", "name": "google-sheets", "title": "Google Sheets", "tags": ["relational"]},
                {"originId": "6Au0ytGF", "id": "dL2eObFSLmdvpne4", "type": "database", "name": "postgres", "title": "postreSQL", "tags": ["relational"]},
                {"originId": "6Au0ytGF", "id": "xgwO3jYHwScMzKCy", "type": "database", "name": "dynamodb", "tags": ["document"]},
                {"originId": "6Au0ytGF", "id": "QISH9UK3SxVn81uu", "type": "database", "name": "mongodb", "tags": ["document"]}
            ]
        }
    ],

    "sourceMetadata": [{
        "type": "Google Sheet",
        "id": "18AzWTA6Au0ytGFkdj5XNj-9dnhHh71wSDPEgmfigFCE",
        "title": "Example Data",
        "fromSharedDrive": false
    },
        {
            "type": "nativeTable",
            "id": "XrYtiAxpoIc5mlCo7HHz",
            "title": "",
            "tableName": {
                "name": "native-table-XrYtiAxpoIc5mlCo7HHz",
                "isSpecial": false
            }
        },


    ],


}
