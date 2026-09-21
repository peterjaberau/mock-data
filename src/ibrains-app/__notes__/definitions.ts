const eventHandlers = {
    schema: {
        from_clickup: [
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
        from_appsmith: [
            {
                queryConfig: {
                    type: "query",
                    label: "Action",
                    actions: [
                        {
                            actionName: "InvokeFunction",
                            label: "Invoke Function",
                            params: [
                                { label: "Function Name", key: "functionName", type: "textInput" },
                                { label: "Payload", key: "payload", type: "jsonInput", defaultValue: "{}" },
                                {
                                    label: "Invocation Type",
                                    key: "invocationType",
                                    type: "select",
                                    options: [
                                        { value: "RequestResponse", label: "RequestResponse" },
                                        { value: "Event", label: "Event" },
                                        { value: "DryRun", label: "DryRun" },
                                    ],
                                },
                            ],
                        },
                        {
                            actionName: "ListFunctions",
                            label: "List Functions",
                            params: [
                                {
                                    label: "Limit",
                                    key: "limit",
                                    type: "numberInput",
                                    defaultValue: 50,
                                    tooltip:
                                        "The maximum number of functions to return in the response. This returns a maximum of 50 items, even if you set the number higher.",
                                },
                                {
                                    label: "Marker",
                                    key: "marker",
                                    type: "textInput",
                                    tooltip: "Specify the pagination token that's returned by a previous request to retrieve the next page of results.",
                                },
                            ],
                        },
                    ],
                },
            }
        ],

        "actions1": [
            {
                "id": "send-mixpanel-event",
                "name": "Track custom event",
                "description": "Send event to Mixpanel API",
                "type": "client",
                "parameters": {
                    "event": {
                        "type": "string",
                        "name": "Event name",
                        "required": true
                    },
                    "eventProperties": {
                        "type": "stringObject",
                        "name": "Properties",
                        "description": "Event properties"
                    }
                },
                "results": {}
            }
        ]
    },

    "actions": [
        {
            "id": "send-gtag-event",
            "name": "Track custom event",
            "description": "Send a custom event to Google Tag Manager",
            "type": "client",
            "parameters": {
                "event": {
                    "type": "string",
                    "name": "Event name",
                    "required": true
                },
                "properties": {
                    "type": "stringObject",
                    "name": "properties",
                    "description": "Event properties"
                }
            },
            "results": {}
        }
    ],

    binding: {
        from_appsmith: [
            {
                compType: "button",
                comp: {
                    text: "Button",
                    type: "",
                    onEvent: [
                        {
                            name: "click",
                            handler: {
                                compType: "executeComp",
                                comp: {
                                    name: "text1",
                                    methodName: "setText",
                                    params: [
                                        {
                                            compType: "string",
                                            comp: "{{text1.text}}",
                                            name: "text",
                                        },
                                    ],
                                },
                                condition: "",
                                slowdown: "debounce",
                                delay: "",
                            },
                        },
                    ],
                    form: "",
                },
                name: "button2",
            }
        ]
    },


    performAction: [
        {
            action: {
                type: "FETCH_USER_DETAILS_SUCCESS",
                payload: {
                    id: "64fd457ab9a11760e745beaa",
                    currentOrgId: "64fd457bb9a11760e745beab",
                    username: "peterjaberau@gmail.com",
                    connections: [
                        {
                            authId: "EMAIL",
                            source: "EMAIL",
                            name: "peterjaberau@gmail.com",
                            avatar: null,
                            rawUserInfo: { email: "peterjaberau@gmail.com" },
                            tokens: ["feb4967813f84828a09f0da3937b6a23"],
                        },
                    ],
                    avatar: null,
                    avatarUrl: null,
                    hasPassword: true,
                    hasSetNickname: false,
                    hasShownNewUserGuidance: false,
                    userStatus: { newUserGuidance: true },
                    createdTimeMs: 1694319994921,
                    ip: "172.18.0.1",
                    enabled: false,
                    anonymous: false,
                    orgDev: true,
                    isAnonymous: false,
                    isEnabled: false,
                    orgs: [
                        {
                            id: "64fd457bb9a11760e745beab",
                            createdBy: "64fd457ab9a11760e745beaa",
                            name: "peterjaberau@gmail.com's workspace",
                            isAutoGeneratedOrganization: true,
                            contactName: null,
                            contactEmail: null,
                            contactPhoneNumber: null,
                            source: null,
                            thirdPartyCompanyId: null,
                            state: "ACTIVE",
                            commonSettings: {},
                            createTime: 1694319995014,
                            logoUrl: "",
                            authConfigs: [{ authType: "FORM", id: "EMAIL", enable: true, enableRegister: true, source: "EMAIL", sourceName: "EMAIL" }],
                        },
                    ],
                    orgRoleMap: {},
                },
            },
        },
        {
            action: {
                type: "FETCH_CURRENT_USER_SUCCESS",
                payload: {
                    id: "64fd457ab9a11760e745beaa",
                    name: "peterjaberau@gmail.com",
                    avatarUrl: null,
                    email: "peterjaberau@gmail.com",
                    ip: "172.18.0.1",
                    groups: [{ groupName: "Developers", groupId: "64fd457bb9a11760e745bead" }],
                    extra: {},
                },
            }
        },
        {
            action: { type: "FETCH_APPLICATION_PERMISSIONS", payload: { applicationId: "64fd651bb9a11760e745bfc1" } },
            timestamp: 1694328091803,
            type: "PERFORM_ACTION",
        },
        {
            onEvent: [
                {
                    name: 'success',
                    handler: {
                        compType: 'executeQuery',
                        comp: {
                            queryName: 'getUsersQuery'
                        },
                        condition: '',
                        slowdown: 'debounce',
                        delay: ''
                    }
                }
            ],
        }
    ]

}
