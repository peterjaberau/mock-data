const clickup = {
    application: {
        windowType: 'normal',
        commandBarWindowHeight: null,
        commandBarScreenHeight: null,
        electronVersion: null,
        chromeVersion: null,
        os: null,
        clipboardHistory: {
            enabled: false,
            retentionPeriod: 30
        }
    },
    assetInputs: {
        assetInputs: []
    },
    browser: {
        focused: true,
        chromeConfig: {
            COMMAND_BAR_SHORTCUT: 'COMMAND+J'
        },
        connected: false,
        newTabExtensionInstalled: false,
        version: null,
        supportedActionTypes: [],
        tabs: {},
        appVisits: {}
    },
    browsers: {
        browsers: {},
        overrides: {}
    },
    clipboardHistory: {
        latestRecordedItem: null,
        latestRecordedItemUpdated: null
    },
    commandBarDevTools: {
        runs: []
    },
    localCommands: [],
    location: {
        search: '',
        pathname: '/',
        hash: '',
        key: 'iwo77j'
    },
    nativeApps: {
        nativeApps: [],
        byAppSlug: {}
    },
    query: '/',
    user: {
        id: '4028108879559463209'
    }
}

const goals = {
    "goals": [
        {
            "id": "896fe918-be76-4ae3-99fe-b50fed930e27",
            "pretty_id": "1",
            "name": "goal1",
            "team_id": "36698333",
            "creator": 48763417,
            "owner": null,
            "color": "#757380",
            "date_created": "1691243843278",
            "start_date": null,
            "due_date": "1691416799999",
            "description": "{\"ops\":[{\"insert\":\"test goal \"},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-6a8fb571-769e-4088-bd7f-988853f55799\",\"list\":{\"list\":\"toggled\",\"toggle-id\":\"list-ezvxyb\"}}}]}",
            "private": false,
            "archived": false,
            "multiple_owners": true,
            "editor_token": "goal:896fe918-be76-4ae3-99fe-b50fed930e27:37775a08-6bb3-45c8-a338-c83bedf5963d:a7f14d34-d984-4049-92cd-779f36d770e4",
            "date_updated": "1691243843278",
            "last_update": "1691243868541",
            "folder_id": null,
            "pinned": false,
            "owners": [
                {
                    "id": 48763417,
                    "email": "peterjaberau@gmail.com",
                    "username": "Peter Jaber",
                    "color": "#ea80fc",
                    "profilePicture": null,
                    "initials": "P"
                }
            ],
            "key_result_count": 1,
            "members": [],
            "group_members": [],
            "percent_completed": 0
        }
    ],
    "folders": []
}

const settings = {
    "categories": [
        {
            "id": "90030025269",
            "name": "📈Business Development",
            "orderindex": 5,
            "content": null,
            "color": "#f9d900",
            "due_date": null,
            "due_date_time": null,
            "archived": false,
            "private": false,
            "owner": 48763417,
            "project_id": "90030007894",
            "override_statuses": false,
            "hidden": false,
            "sprint": null,
            "status": {
                "color": "#f9d900",
                "default": true,
                "hide_label": true,
                "status": "yellow",
                "type": "custom"
            },
            "date_created": "1671494137187",
            "team_id": "36698333",
            "default_subcategory": "900300045517",
            "taskcount": "18",
            "statuses": [],
            "automation_count": 0,
            "members": [],
            "fields": [
                {
                    "id": "f707fd8b-ebdd-4b8d-8425-3f0fcb8f3e47",
                    "name": "💯Progress",
                    "type": "automatic_progress",
                    "project_id": null,
                    "category_id": "90030025269",
                    "type_config": {
                        "tracking": {
                            "subtasks": true,
                            "checklists": true,
                            "assigned_comments": true
                        },
                        "complete_on": 3,
                        "subtask_rollup": false
                    },
                    "values_set": null,
                    "orderindex": null,
                    "userid": "12818833",
                    "date_created": "1671494137217",
                    "hide_from_guests": false,
                    "team_id": "36698333",
                    "deleted": false,
                    "date_deleted": null,
                    "deleted_by": null,
                    "pinned": null,
                    "linked_subcategory": null,
                    "required_field": null,
                    "required_subtasks": null,
                    "private": null,
                    "description": null
                }
            ],
            "permissions": {
                "add_attachments": true,
                "add_checklists": true,
                "add_dependencies": true,
                "add_followers": true,
                "add_self_follower": true,
                "add_status": true,
                "add_subtasks": true,
                "add_tags": true,
                "archive": true,
                "can_add_automation": true,
                "can_change_subtask_columns": true,
                "can_change_task_links": true,
                "can_create_relationships": true,
                "can_create_tasks": true,
                "can_delete_checklist_item": true,
                "can_make_tasks_public": true,
                "can_pin_fields": true,
                "can_read": true,
                "can_resolve_checklist_item_if_assigned": true,
                "change_assignee": 2,
                "change_clickapps": true,
                "change_description": true,
                "change_due_date": true,
                "change_incoming_address": true,
                "change_points_estimate": true,
                "change_priority": true,
                "change_recurring": true,
                "change_status": true,
                "change_time_estimate": true,
                "change_title": true,
                "comment": true,
                "create_view": true,
                "delete": true,
                "delete_view": true,
                "display_name": "edit",
                "duplicate": true,
                "edit_attachments": true,
                "edit_checklists": true,
                "edit_list_details": true,
                "edit_view": true,
                "like_comments": true,
                "manage_custom_fields": true,
                "merge": true,
                "move_task": true,
                "name": "owner",
                "permission_level": 5,
                "remove_attachments": true,
                "remove_dependencies": true,
                "remove_followers": true,
                "remove_self_follower": true,
                "remove_status": true,
                "remove_tags": true,
                "set_custom_field_values": true,
                "template": true,
                "track_time": true,
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
                "manage_custom_items": true,
                "manage_statuses": true,
                "manage_tags": true,
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
                "can_edit_tags": true,
                "create_custom_fields": true,
                "edit_custom_fields": true,
                "delete_custom_fields": true,
                "merge_custom_fields": true,
                "convert_custom_fields": true,
                "move_custom_fields": true
            },
            "permission_level": 5,
            "features": {
                "due_dates": {
                    "enabled": true,
                    "start_date": true,
                    "remap_due_dates": true,
                    "remap_closed_due_date": false
                },
                "sprints": {
                    "enabled": true,
                    "settings": null
                },
                "time_tracking": {
                    "enabled": true,
                    "harvest": false,
                    "rollup": false
                },
                "points": {
                    "enabled": true
                },
                "custom_items": {
                    "enabled": false
                },
                "priorities": {
                    "enabled": true,
                    "priorities": [
                        {
                            "color": "#f50000",
                            "id": "1",
                            "orderindex": "1",
                            "priority": "urgent"
                        },
                        {
                            "color": "#ffcc00",
                            "id": "2",
                            "orderindex": "2",
                            "priority": "high"
                        },
                        {
                            "color": "#6fddff",
                            "id": "3",
                            "orderindex": "3",
                            "priority": "normal"
                        },
                        {
                            "color": "#d8d8d8",
                            "id": "4",
                            "orderindex": "4",
                            "priority": "low"
                        }
                    ]
                },
                "tags": {
                    "enabled": true
                },
                "wip_limits": {
                    "enabled": true
                },
                "time_estimates": {
                    "enabled": true,
                    "rollup": false,
                    "per_assignee": false
                },
                "check_unresolved": {
                    "enabled": true,
                    "subtasks": null,
                    "checklists": null,
                    "comments": null
                },
                "zoom": {
                    "enabled": true
                },
                "milestones": {
                    "enabled": true
                },
                "custom_fields": {
                    "enabled": true
                },
                "remap_dependencies": {
                    "enabled": true
                },
                "dependency_warning": {
                    "enabled": true
                },
                "status_pies": {
                    "enabled": false
                },
                "multiple_assignees": {
                    "enabled": true
                }
            },
            "subcategories": [
                {
                    "id": "900300045517",
                    "name": "🪙Business Blueprint",
                    "orderindex": 4,
                    "content": null,
                    "color": null,
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025269",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": false,
                    "date_created": "1671494137653",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 7,
                    "unfinishedtaskcount": 7,
                    "closedtaskcount": 0,
                    "statuses": [
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_4n7pWbZY",
                            "status": "to do",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_afPRonTe",
                            "status": "in progress",
                            "orderindex": 1,
                            "color": "#7C4DFF",
                            "type": "custom"
                        },
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_t3ixgh0b",
                            "status": "complete",
                            "orderindex": 2,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045517.u-48763417.cc1f91b9-4eed-4223-b2df-8f6f22cfd2ff@tasks.clickup.com",
                    "content_size": "none"
                },
                {
                    "id": "900300045519",
                    "name": "🎣Client Acquisition Strategies",
                    "orderindex": 5,
                    "content": "{\"ops\":[{\"insert\":\"You can employ several strategies to generate new leads for your social media marketing agency.\"},{\"attributes\":{\"block-id\":\"block-dc097393-88d0-4945-b6aa-f2d6c4fa4de1\"},\"insert\":\"\\n\"},{\"attributes\":{\"block-id\":\"block-37bbfbcd-0038-4b7c-a04e-10575f0790ce\"},\"insert\":\"\\n\"}]}",
                    "color": null,
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025269",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": false,
                    "date_created": "1671494153842",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 11,
                    "unfinishedtaskcount": 11,
                    "closedtaskcount": 0,
                    "statuses": [
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_4n7pWbZY",
                            "status": "to do",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_afPRonTe",
                            "status": "in progress",
                            "orderindex": 1,
                            "color": "#7C4DFF",
                            "type": "custom"
                        },
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_t3ixgh0b",
                            "status": "complete",
                            "orderindex": 2,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045519.u-48763417.2a1f98ff-ad06-4ca9-985e-ba96e5a1b42e@tasks.clickup.com",
                    "content_size": "small"
                }
            ]
        },
        {
            "id": "90030025271",
            "name": "📣Marketing",
            "orderindex": 6,
            "content": null,
            "color": null,
            "due_date": null,
            "due_date_time": null,
            "archived": false,
            "private": false,
            "owner": 48763417,
            "project_id": "90030007894",
            "override_statuses": false,
            "hidden": false,
            "sprint": null,
            "status": null,
            "date_created": "1671494156682",
            "team_id": "36698333",
            "default_subcategory": "900300045523",
            "taskcount": "83",
            "statuses": [],
            "automation_count": 0,
            "members": [],
            "fields": [],
            "permissions": {
                "add_attachments": true,
                "add_checklists": true,
                "add_dependencies": true,
                "add_followers": true,
                "add_self_follower": true,
                "add_status": true,
                "add_subtasks": true,
                "add_tags": true,
                "archive": true,
                "can_add_automation": true,
                "can_change_subtask_columns": true,
                "can_change_task_links": true,
                "can_create_relationships": true,
                "can_create_tasks": true,
                "can_delete_checklist_item": true,
                "can_make_tasks_public": true,
                "can_pin_fields": true,
                "can_read": true,
                "can_resolve_checklist_item_if_assigned": true,
                "change_assignee": 2,
                "change_clickapps": true,
                "change_description": true,
                "change_due_date": true,
                "change_incoming_address": true,
                "change_points_estimate": true,
                "change_priority": true,
                "change_recurring": true,
                "change_status": true,
                "change_time_estimate": true,
                "change_title": true,
                "comment": true,
                "create_view": true,
                "delete": true,
                "delete_view": true,
                "display_name": "edit",
                "duplicate": true,
                "edit_attachments": true,
                "edit_checklists": true,
                "edit_list_details": true,
                "edit_view": true,
                "like_comments": true,
                "manage_custom_fields": true,
                "merge": true,
                "move_task": true,
                "name": "owner",
                "permission_level": 5,
                "remove_attachments": true,
                "remove_dependencies": true,
                "remove_followers": true,
                "remove_self_follower": true,
                "remove_status": true,
                "remove_tags": true,
                "set_custom_field_values": true,
                "template": true,
                "track_time": true,
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
                "manage_custom_items": true,
                "manage_statuses": true,
                "manage_tags": true,
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
                "can_edit_tags": true,
                "create_custom_fields": true,
                "edit_custom_fields": true,
                "delete_custom_fields": true,
                "merge_custom_fields": true,
                "convert_custom_fields": true,
                "move_custom_fields": true
            },
            "permission_level": 5,
            "features": {
                "due_dates": {
                    "enabled": true,
                    "start_date": true,
                    "remap_due_dates": true,
                    "remap_closed_due_date": false
                },
                "sprints": {
                    "enabled": true,
                    "settings": null
                },
                "time_tracking": {
                    "enabled": true,
                    "harvest": false,
                    "rollup": false
                },
                "points": {
                    "enabled": true
                },
                "custom_items": {
                    "enabled": false
                },
                "priorities": {
                    "enabled": true,
                    "priorities": [
                        {
                            "color": "#f50000",
                            "id": "1",
                            "orderindex": "1",
                            "priority": "urgent"
                        },
                        {
                            "color": "#ffcc00",
                            "id": "2",
                            "orderindex": "2",
                            "priority": "high"
                        },
                        {
                            "color": "#6fddff",
                            "id": "3",
                            "orderindex": "3",
                            "priority": "normal"
                        },
                        {
                            "color": "#d8d8d8",
                            "id": "4",
                            "orderindex": "4",
                            "priority": "low"
                        }
                    ]
                },
                "tags": {
                    "enabled": true
                },
                "wip_limits": {
                    "enabled": true
                },
                "time_estimates": {
                    "enabled": true,
                    "rollup": false,
                    "per_assignee": false
                },
                "check_unresolved": {
                    "enabled": true,
                    "subtasks": null,
                    "checklists": null,
                    "comments": null
                },
                "zoom": {
                    "enabled": true
                },
                "milestones": {
                    "enabled": true
                },
                "custom_fields": {
                    "enabled": true
                },
                "remap_dependencies": {
                    "enabled": true
                },
                "dependency_warning": {
                    "enabled": true
                },
                "status_pies": {
                    "enabled": false
                },
                "multiple_assignees": {
                    "enabled": true
                }
            },
            "subcategories": [
                {
                    "id": "900300045522",
                    "name": "📂 Case Studies",
                    "orderindex": 0,
                    "content": null,
                    "color": null,
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025271",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": true,
                    "date_created": "1671494170620",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 5,
                    "unfinishedtaskcount": 5,
                    "closedtaskcount": 1,
                    "statuses": [
                        {
                            "id": "subcat900300045522_subcat211256506_subcat211256485_subcat223565881_subcat217673724_sc211700082_TpXAZCon",
                            "status": "📬 new testimonial",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "subcat900300045522_subcat211256506_subcat211256485_subcat223565881_subcat217673724_sc211700082_s3s2Qd9S",
                            "status": "🔍 in review",
                            "orderindex": 1,
                            "color": "#7C4DFF",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045522_subcat211256506_subcat211256485_subcat223565881_subcat217673724_sc211700082_5QVOREAf",
                            "status": "✏️ needs revision",
                            "orderindex": 2,
                            "color": "#E65100",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045522_subcat211256506_subcat211256485_subcat223565881_subcat217673724_sc211700082_BkkenFVn",
                            "status": "✅ approved",
                            "orderindex": 3,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045522.u-48763417.5f5e16d6-8966-4d9e-b697-936050e255ab@tasks.clickup.com",
                    "content_size": "none"
                },
                {
                    "id": "900300045523",
                    "name": "📅Networking Events",
                    "orderindex": 1,
                    "content": "{\"ops\":[{\"insert\":\"this board is for xyz\"},{\"attributes\":{\"block-id\":\"block-51138e5e-15a9-4382-85a9-1b8aa09a5eb5\"},\"insert\":\"\\n\"},{\"attributes\":{\"block-id\":\"block-af9689ea-34d9-4312-b8fe-1472d6870955\"},\"insert\":\"\\n\"}]}",
                    "color": null,
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025271",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": false,
                    "date_created": "1671494174830",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 3,
                    "unfinishedtaskcount": 3,
                    "closedtaskcount": 0,
                    "statuses": [
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_4n7pWbZY",
                            "status": "to do",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_afPRonTe",
                            "status": "in progress",
                            "orderindex": 1,
                            "color": "#7C4DFF",
                            "type": "custom"
                        },
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_t3ixgh0b",
                            "status": "complete",
                            "orderindex": 2,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045523.u-48763417.353adbcc-cd43-4232-82af-78cbc140ac4b@tasks.clickup.com",
                    "content_size": "small"
                },
                {
                    "id": "900300422998",
                    "name": "SEO Roadmap",
                    "orderindex": 2,
                    "content": null,
                    "color": "#FF7FAB",
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025271",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": true,
                    "date_created": "1674083540895",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [
                        {
                            "user": {
                                "id": 48763417,
                                "username": "Peter Jaber",
                                "email": "peterjaberau@gmail.com",
                                "color": "#ea80fc",
                                "initials": "PJ",
                                "profilePicture": null
                            },
                            "permissions": {
                                "add_attachments": true,
                                "add_checklists": true,
                                "add_dependencies": true,
                                "add_followers": true,
                                "add_self_follower": true,
                                "add_status": true,
                                "add_subtasks": true,
                                "add_tags": true,
                                "archive": true,
                                "can_add_automation": true,
                                "can_change_subtask_columns": true,
                                "can_change_task_links": true,
                                "can_create_lists_pl": true,
                                "can_create_relationships": true,
                                "can_create_tasks": true,
                                "can_delete_checklist_item": true,
                                "can_make_tasks_public": true,
                                "can_pin_fields": true,
                                "can_read": true,
                                "can_resolve_checklist_item_if_assigned": true,
                                "change_assignee": 2,
                                "change_clickapps": true,
                                "change_description": true,
                                "change_due_date": true,
                                "change_incoming_address": true,
                                "change_points_estimate": true,
                                "change_priority": true,
                                "change_recurring": true,
                                "change_status": true,
                                "change_time_estimate": true,
                                "change_title": true,
                                "comment": true,
                                "create_view": true,
                                "delete": true,
                                "delete_view": true,
                                "display_name": "edit",
                                "duplicate": true,
                                "edit_attachments": true,
                                "edit_checklists": true,
                                "edit_list_details": true,
                                "edit_view": true,
                                "like_comments": true,
                                "manage_custom_fields": true,
                                "merge": true,
                                "move_task": true,
                                "name": "can create and edit",
                                "permission_level": 5,
                                "remove_attachments": true,
                                "remove_dependencies": true,
                                "remove_followers": true,
                                "remove_self_follower": true,
                                "remove_status": true,
                                "remove_tags": true,
                                "set_custom_field_values": true,
                                "template": true,
                                "track_time": true
                            },
                            "permission_level": 5,
                            "date_added": "1674083540908",
                            "role": 1
                        }
                    ],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 6,
                    "unfinishedtaskcount": 6,
                    "closedtaskcount": 0,
                    "statuses": [
                        {
                            "id": "subcat900300422998_subcat900200018560_subcat900200018557_subcat900800015032_sc223617852_aej3vKml",
                            "status": "to do",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "subcat900300422998_subcat900200018560_subcat900200018557_subcat900800015032_sc223617852_a6VpdmGr",
                            "status": "in progress",
                            "orderindex": 1,
                            "color": "#0231E8",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300422998_subcat900200018560_subcat900200018557_subcat900800015032_sc223617852_egYdGapc",
                            "status": "complete",
                            "orderindex": 2,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300422998.u-48763417.3dd73b7c-61a2-468e-ac1a-5d355c79f953@tasks.clickup.com",
                    "content_size": "none"
                },
                {
                    "id": "900300045521",
                    "name": "🧑‍🤝‍🧑Community Management",
                    "orderindex": 3,
                    "content": null,
                    "color": null,
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025271",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": false,
                    "date_created": "1671494156929",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 47,
                    "unfinishedtaskcount": 47,
                    "closedtaskcount": 0,
                    "statuses": [
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_4n7pWbZY",
                            "status": "to do",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_afPRonTe",
                            "status": "in progress",
                            "orderindex": 1,
                            "color": "#7C4DFF",
                            "type": "custom"
                        },
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_t3ixgh0b",
                            "status": "complete",
                            "orderindex": 2,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045521.u-48763417.f1b4f43f-0049-4471-a7dd-742338a9e5d2@tasks.clickup.com",
                    "content_size": "none"
                },
                {
                    "id": "900300045524",
                    "name": "📺Ads",
                    "orderindex": 4,
                    "content": null,
                    "color": "#81B1FF",
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025271",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": true,
                    "date_created": "1671494175913",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 9,
                    "unfinishedtaskcount": 9,
                    "closedtaskcount": 0,
                    "statuses": [
                        {
                            "id": "subcat900300045524_subcat211256504_subcat211256487_subcat223565878_subcat217673716_subcat206607567_subcat200586672_subcat182169736_subcat182169652_subcat182131639_subcat182131533_sc375138501_bN506hoc",
                            "status": "Open",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "subcat900300045524_subcat211256504_subcat211256487_subcat223565878_subcat217673716_subcat206607567_subcat200586672_subcat182169736_subcat182169652_subcat182131639_subcat182131533_sc375138501_UXFKJmbo",
                            "status": "concept",
                            "orderindex": 1,
                            "color": "#FFCC00",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045524_subcat211256504_subcat211256487_subcat223565878_subcat217673716_subcat206607567_subcat200586672_subcat182169736_subcat182169652_sc182131639_gVumnJ1p",
                            "status": "in development",
                            "orderindex": 2,
                            "color": "#ff7800",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045524_subcat211256504_subcat211256487_subcat223565878_subcat217673716_subcat206607567_subcat200586672_subcat182169736_subcat182169652_subcat182131639_subcat182131533_sc375138501_XR8UN9rl",
                            "status": "in review",
                            "orderindex": 3,
                            "color": "#81B1FF",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045524_subcat211256504_subcat211256487_subcat223565878_subcat217673716_subcat206607567_subcat200586672_subcat182169736_subcat182169652_subcat182131639_subcat182131533_sc375138501_wSa2hcR1",
                            "status": "live/running",
                            "orderindex": 4,
                            "color": "#1bbc9c",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045524_subcat211256504_subcat211256487_subcat223565878_subcat217673716_subcat206607567_subcat200586672_subcat182169736_subcat182169652_sc182131639_3uix3Z8H",
                            "status": "on hold",
                            "orderindex": 5,
                            "color": "#e50000",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045524_subcat211256504_subcat211256487_subcat223565878_subcat217673716_subcat206607567_subcat200586672_subcat182169736_subcat182169652_sc182131639_CTjwDRMq",
                            "status": "Closed",
                            "orderindex": 6,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045524.u-48763417.1176ea85-7eeb-4b0a-b275-8802bd2adc92@tasks.clickup.com",
                    "content_size": "none"
                },
                {
                    "id": "900300045526",
                    "name": "📲Social Media Schedule",
                    "orderindex": 5,
                    "content": "{\"ops\":[{\"attributes\":{\"italic\":true,\"bold\":true},\"insert\":\"Production Stage \"},{\"attributes\":{\"block-id\":\"block-a6aadccb-3018-4916-9ed9-e78c6db76d95\"},\"insert\":\"\\n\"},{\"attributes\":{\"italic\":true,\"color-class\":\"pink\",\"bold\":true},\"insert\":\"Idea Generation\"},{\"attributes\":{\"italic\":true},\"insert\":\" - Includes brainstorming, briefing and mindmapping of Social media content\"},{\"attributes\":{\"block-id\":\"block-371085e5-63cb-4112-8d19-5d2943f044e8\"},\"insert\":\"\\n\"},{\"attributes\":{\"italic\":true,\"color-class\":\"red\",\"bold\":true},\"insert\":\"Content Production\"},{\"attributes\":{\"italic\":true},\"insert\":\" - Social media content that are in the process of  designing, video recording, and writing\"},{\"attributes\":{\"block-id\":\"block-8c81a95e-d224-4455-97a4-3c6623c00d23\"},\"insert\":\"\\n\"},{\"attributes\":{\"italic\":true,\"color-class\":\"yellow\",\"bold\":true},\"insert\":\"Content Post-production\"},{\"attributes\":{\"italic\":true},\"insert\":\" -  Social media content that are in the process of video editing, image post-processing and proofreading \"},{\"attributes\":{\"block-id\":\"block-6b17a890-97fd-4c46-b777-35e1fb71c72f\"},\"insert\":\"\\n\"},{\"attributes\":{\"italic\":true,\"color-class\":\"green\",\"bold\":true},\"insert\":\"Scheduled\"},{\"attributes\":{\"italic\":true},\"insert\":\" - Social media content that are ready for publishing and are scheduled for release\"},{\"attributes\":{\"block-id\":\"block-e123c7f8-9610-4cbb-9404-534a3d8c2a9a\"},\"insert\":\"\\n\"},{\"attributes\":{\"italic\":true,\"color-class\":\"orange\",\"bold\":true},\"insert\":\"LIVE\"},{\"attributes\":{\"italic\":true},\"insert\":\" - Published social media content\"},{\"attributes\":{\"block-id\":\"block-2c1bf0b2-9686-49e7-be9c-608f1b549d10\"},\"insert\":\"\\n\"}]}",
                    "color": null,
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025271",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": true,
                    "date_created": "1671494179002",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 13,
                    "unfinishedtaskcount": 13,
                    "closedtaskcount": 0,
                    "statuses": [
                        {
                            "id": "subcat900300045526_subcat211256503_subcat211256488_subcat223565876_subcat217673883_sc205624968_xJoHRfyt",
                            "status": "to do",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "subcat900300045526_subcat211256503_subcat211256488_subcat223565876_subcat217673883_sc205624968_75fAvof1",
                            "status": "in progress",
                            "orderindex": 1,
                            "color": "#a875ff",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045526_subcat211256503_subcat211256488_subcat223565876_subcat217673883_sc205624968_2D34j7zW",
                            "status": "in review",
                            "orderindex": 2,
                            "color": "#f9d900",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045526_subcat211256503_subcat211256488_subcat223565876_subcat217673883_sc205624968_gEAcH9Sl",
                            "status": "needs revision",
                            "orderindex": 3,
                            "color": "#e50000",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045526_subcat211256503_subcat211256488_subcat223565876_subcat217673883_sc205624968_tzVjQ4wq",
                            "status": "complete",
                            "orderindex": 4,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045526.u-48763417.36d83c61-e863-4969-88b6-53d6d81f593b@tasks.clickup.com",
                    "content_size": "medium"
                }
            ]
        },
        {
            "id": "90030025268",
            "name": "📊 Sales",
            "orderindex": 7,
            "content": null,
            "color": null,
            "due_date": null,
            "due_date_time": null,
            "archived": false,
            "private": false,
            "owner": 48763417,
            "project_id": "90030007894",
            "override_statuses": true,
            "hidden": false,
            "sprint": null,
            "status": null,
            "date_created": "1671494131624",
            "team_id": "36698333",
            "default_subcategory": "900300045516",
            "taskcount": "16",
            "statuses": [
                {
                    "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_yGPak821",
                    "status": "prospect",
                    "type": "open",
                    "orderindex": 0,
                    "color": "#d3d3d3"
                },
                {
                    "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_BeU4nchV",
                    "status": "active",
                    "type": "custom",
                    "orderindex": 1,
                    "color": "#a875ff"
                },
                {
                    "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_fWM8NiyQ",
                    "status": "in talks",
                    "type": "custom",
                    "orderindex": 2,
                    "color": "#f9d900"
                },
                {
                    "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_fFboPX13",
                    "status": "inactive",
                    "type": "done",
                    "orderindex": 3,
                    "color": "#b5bcc2"
                },
                {
                    "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_HxrkLHYs",
                    "status": "lost",
                    "type": "done",
                    "orderindex": 4,
                    "color": "#325264"
                },
                {
                    "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_47glaf5R",
                    "status": "complete",
                    "type": "closed",
                    "orderindex": 5,
                    "color": "#6bc950"
                }
            ],
            "automation_count": 0,
            "members": [],
            "fields": [
                {
                    "id": "249a1557-bf4c-4683-b762-2cbd3ad3429c",
                    "name": "Deal Size",
                    "type": "currency",
                    "project_id": null,
                    "category_id": "90030025268",
                    "type_config": {
                        "default": null,
                        "precision": 2,
                        "currency_type": "USD"
                    },
                    "values_set": null,
                    "orderindex": null,
                    "userid": "12750809",
                    "date_created": "1671494131726",
                    "hide_from_guests": false,
                    "team_id": "36698333",
                    "deleted": false,
                    "date_deleted": null,
                    "deleted_by": null,
                    "pinned": null,
                    "linked_subcategory": null,
                    "required_field": null,
                    "required_subtasks": null,
                    "private": null,
                    "description": null
                }
            ],
            "permissions": {
                "add_attachments": true,
                "add_checklists": true,
                "add_dependencies": true,
                "add_followers": true,
                "add_self_follower": true,
                "add_status": true,
                "add_subtasks": true,
                "add_tags": true,
                "archive": true,
                "can_add_automation": true,
                "can_change_subtask_columns": true,
                "can_change_task_links": true,
                "can_create_relationships": true,
                "can_create_tasks": true,
                "can_delete_checklist_item": true,
                "can_make_tasks_public": true,
                "can_pin_fields": true,
                "can_read": true,
                "can_resolve_checklist_item_if_assigned": true,
                "change_assignee": 2,
                "change_clickapps": true,
                "change_description": true,
                "change_due_date": true,
                "change_incoming_address": true,
                "change_points_estimate": true,
                "change_priority": true,
                "change_recurring": true,
                "change_status": true,
                "change_time_estimate": true,
                "change_title": true,
                "comment": true,
                "create_view": true,
                "delete": true,
                "delete_view": true,
                "display_name": "edit",
                "duplicate": true,
                "edit_attachments": true,
                "edit_checklists": true,
                "edit_list_details": true,
                "edit_view": true,
                "like_comments": true,
                "manage_custom_fields": true,
                "merge": true,
                "move_task": true,
                "name": "owner",
                "permission_level": 5,
                "remove_attachments": true,
                "remove_dependencies": true,
                "remove_followers": true,
                "remove_self_follower": true,
                "remove_status": true,
                "remove_tags": true,
                "set_custom_field_values": true,
                "template": true,
                "track_time": true,
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
                "manage_custom_items": true,
                "manage_statuses": true,
                "manage_tags": true,
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
                "can_edit_tags": true,
                "create_custom_fields": true,
                "edit_custom_fields": true,
                "delete_custom_fields": true,
                "merge_custom_fields": true,
                "convert_custom_fields": true,
                "move_custom_fields": true
            },
            "permission_level": 5,
            "features": {
                "due_dates": {
                    "enabled": true,
                    "start_date": true,
                    "remap_due_dates": true,
                    "remap_closed_due_date": false
                },
                "sprints": {
                    "enabled": true,
                    "settings": null
                },
                "time_tracking": {
                    "enabled": true,
                    "harvest": false,
                    "rollup": false
                },
                "points": {
                    "enabled": true
                },
                "custom_items": {
                    "enabled": false
                },
                "priorities": {
                    "enabled": true,
                    "priorities": [
                        {
                            "color": "#f50000",
                            "id": "1",
                            "orderindex": "1",
                            "priority": "urgent"
                        },
                        {
                            "color": "#ffcc00",
                            "id": "2",
                            "orderindex": "2",
                            "priority": "high"
                        },
                        {
                            "color": "#6fddff",
                            "id": "3",
                            "orderindex": "3",
                            "priority": "normal"
                        },
                        {
                            "color": "#d8d8d8",
                            "id": "4",
                            "orderindex": "4",
                            "priority": "low"
                        }
                    ]
                },
                "tags": {
                    "enabled": true
                },
                "wip_limits": {
                    "enabled": true
                },
                "time_estimates": {
                    "enabled": true,
                    "rollup": false,
                    "per_assignee": false
                },
                "check_unresolved": {
                    "enabled": true,
                    "subtasks": null,
                    "checklists": null,
                    "comments": null
                },
                "zoom": {
                    "enabled": true
                },
                "milestones": {
                    "enabled": true
                },
                "custom_fields": {
                    "enabled": true
                },
                "remap_dependencies": {
                    "enabled": true
                },
                "dependency_warning": {
                    "enabled": true
                },
                "status_pies": {
                    "enabled": false
                },
                "multiple_assignees": {
                    "enabled": true
                }
            },
            "subcategories": [
                {
                    "id": "900300045516",
                    "name": "👤 Leads",
                    "orderindex": 5,
                    "content": "{\"ops\":[{\"insert\":\"Contact Stages\",\"attributes\":{\"bold\":true}},{\"insert\":\"\\n\",\"attributes\":{\"banner\":false,\"advanced-banner\":\"3e5877ed-8fce-4b70-a9df-bfeadab4ae0c\",\"advanced-banner-color\":\"blue\",\"block-id\":\"block-b2d08cb5-86ac-453f-b2de-d934b85c6635\"}},{\"insert\":\"PROSPECT\",\"attributes\":{\"color-class\":\"grey\",\"bold\":true}},{\"insert\":\" -\"},{\"insert\":\" list of prospect leads\",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-96462aba-7222-4768-84fc-2d0d1b51db54\",\"blockquote\":{}}},{\"insert\":\"IN TALKS\",\"attributes\":{\"color-class\":\"yellow\",\"bold\":true}},{\"insert\":\" -\"},{\"insert\":\" leads in communication for potential deals\",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-6aa18d33-5963-4472-a3ed-8024fd957f45\",\"blockquote\":{}}},{\"insert\":\"ACTIVE\",\"attributes\":{\"color-class\":\"blue\",\"bold\":true}},{\"insert\":\" \",\"attributes\":{\"color-class\":\"blue\"}},{\"insert\":\"- \"},{\"insert\":\"contacts with active deals \",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-765a7259-facb-4371-b2d0-9f341168e296\",\"blockquote\":{}}},{\"insert\":\"INACTIVE\",\"attributes\":{\"bold\":true}},{\"insert\":\" - \"},{\"insert\":\"contacts without active deals\",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-eab67889-60f6-4b2a-950e-bb318cf36bef\",\"blockquote\":{}}},{\"insert\":\"LOST\",\"attributes\":{\"color-class\":\"pink\",\"bold\":true}},{\"insert\":\" \",\"attributes\":{\"color-class\":\"pink\"}},{\"insert\":\"- \"},{\"insert\":\"lost leads\",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-9104dc74-f310-4112-b582-bd01cec198a8\",\"blockquote\":{}}}]}",
                    "color": null,
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025268",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": false,
                    "date_created": "1671494134873",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 8,
                    "unfinishedtaskcount": 8,
                    "closedtaskcount": 0,
                    "statuses": [
                        {
                            "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_yGPak821",
                            "status": "prospect",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_BeU4nchV",
                            "status": "active",
                            "orderindex": 1,
                            "color": "#a875ff",
                            "type": "custom"
                        },
                        {
                            "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_fWM8NiyQ",
                            "status": "in talks",
                            "orderindex": 2,
                            "color": "#f9d900",
                            "type": "custom"
                        },
                        {
                            "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_fFboPX13",
                            "status": "inactive",
                            "orderindex": 3,
                            "color": "#b5bcc2",
                            "type": "done"
                        },
                        {
                            "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_HxrkLHYs",
                            "status": "lost",
                            "orderindex": 4,
                            "color": "#325264",
                            "type": "done"
                        },
                        {
                            "id": "c90030025268_c127231050_c127231034_c127537779_c121728888_47glaf5R",
                            "status": "complete",
                            "orderindex": 5,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045516.u-48763417.c9450a7d-f846-446d-9e05-131fe16c1a31@tasks.clickup.com",
                    "content_size": "medium"
                },
                {
                    "id": "900300045515",
                    "name": "💰 Deals",
                    "orderindex": 7,
                    "content": "{\"ops\":[{\"insert\":\"Deal Stages\",\"attributes\":{\"bold\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-af5bd7ba-ad81-414f-a2bd-d889537dfabe\",\"advanced-banner\":\"c88d091d-8766-4869-a55a-84c332684b26\",\"advanced-banner-color\":\"blue\"}},{\"insert\":\"PROSPECT \",\"attributes\":{\"color-class\":\"grey\",\"bold\":true}},{\"insert\":\"- \"},{\"insert\":\"list down all prospects\",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-668479ca-544a-449a-ad14-301fff3067fe\",\"blockquote\":{}}},{\"insert\":\"APPOINTMENT\",\"attributes\":{\"color-class\":\"pink\",\"bold\":true}},{\"insert\":\" \",\"attributes\":{\"color-class\":\"pink\"}},{\"insert\":\"- \"},{\"insert\":\"reach out to the prospect and set an appointment for the initial engagement\",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-228530e3-328e-42f7-9fca-9abb6c6ebe6c\",\"blockquote\":{}}},{\"insert\":\"QUALIFY \",\"attributes\":{\"color-class\":\"blue\",\"bold\":true}},{\"insert\":\"- \"},{\"insert\":\"qualify the prospect based on the initial engagement, if fit or not a fit\",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-c71c56f4-bff8-4623-ac8b-0a989ad6778f\",\"blockquote\":{}}},{\"insert\":\"PRESENTATION\",\"attributes\":{\"color-class\":\"yellow\",\"bold\":true}},{\"insert\":\" \",\"attributes\":{\"color-class\":\"yellow\"}},{\"insert\":\"- present deals to the prospect\"},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-ab486cfe-fa0c-4427-88be-7bcfd5663cbf\",\"blockquote\":{}}},{\"insert\":\"PROPOSAL \",\"attributes\":{\"color-class\":\"orange\",\"bold\":true}},{\"insert\":\"-\"},{\"insert\":\" create a proposal and send to the prospect for approval \",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-b5d5cc8b-666b-46c8-983f-73e60757f9f2\",\"blockquote\":{}}},{\"insert\":\"AGREEMENT\",\"attributes\":{\"color-class\":\"green\",\"bold\":true}},{\"insert\":\" \",\"attributes\":{\"color-class\":\"green\"}},{\"insert\":\"- \"},{\"insert\":\"signing of agreement and terms and conditions\",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-88db9fb3-8609-467b-a6fe-5b314b99bdad\",\"blockquote\":{}}},{\"insert\":\"WON\",\"attributes\":{\"color-class\":\"green\",\"bold\":true}},{\"insert\":\" - \"},{\"insert\":\"onboard customer and proceed with deal execution\",\"attributes\":{\"italic\":true}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-d58ed111-56c4-4b0e-a5ae-d8f361ca0c95\",\"blockquote\":{}}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-3f5d0bd1-4787-40f9-a723-1127d887ded6\"}},{\"insert\":\"\\n\",\"attributes\":{\"block-id\":\"block-47fca315-720c-44a5-9df8-efacaa06b9a0\"}}]}",
                    "color": null,
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025268",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": true,
                    "date_created": "1671494131964",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 8,
                    "unfinishedtaskcount": 7,
                    "closedtaskcount": 2,
                    "statuses": [
                        {
                            "id": "subcat900300045515_subcat211256514_subcat211256480_subcat223565886_subcat217673718_sc199593591_tVQy6wfg",
                            "status": "to do",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "subcat900300045515_subcat211256514_subcat211256480_subcat223565886_subcat217673718_sc199593591_a0sROBn8",
                            "status": "in progress",
                            "orderindex": 1,
                            "color": "#0231E8",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045515_subcat211256514_subcat211256480_subcat223565886_subcat217673718_sc199593591_xuZoAqiz",
                            "status": "on hold",
                            "orderindex": 2,
                            "color": "#ff7800",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045515_subcat211256514_subcat211256480_subcat223565886_subcat217673718_sc199593591_zHxUmwWh",
                            "status": "lost",
                            "orderindex": 3,
                            "color": "#800000",
                            "type": "done"
                        },
                        {
                            "id": "subcat900300045515_subcat211256514_subcat211256480_subcat223565886_subcat217673718_sc199593591_hB0qFJ7R",
                            "status": "complete",
                            "orderindex": 4,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045515.u-48763417.8fc95f2c-d6c3-4c9c-9d77-c799150aaae3@tasks.clickup.com",
                    "content_size": "medium"
                }
            ]
        },
        {
            "id": "90030179552",
            "name": "test",
            "orderindex": 9,
            "content": null,
            "color": null,
            "due_date": null,
            "due_date_time": false,
            "archived": false,
            "private": false,
            "owner": 48763417,
            "project_id": "90030007894",
            "override_statuses": false,
            "hidden": false,
            "sprint": null,
            "status": null,
            "date_created": "1673575669655",
            "team_id": "36698333",
            "default_subcategory": "900300331950",
            "taskcount": "0",
            "statuses": [],
            "automation_count": 0,
            "members": [],
            "fields": [],
            "permissions": {
                "add_attachments": true,
                "add_checklists": true,
                "add_dependencies": true,
                "add_followers": true,
                "add_self_follower": true,
                "add_status": true,
                "add_subtasks": true,
                "add_tags": true,
                "archive": true,
                "can_add_automation": true,
                "can_change_subtask_columns": true,
                "can_change_task_links": true,
                "can_create_relationships": true,
                "can_create_tasks": true,
                "can_delete_checklist_item": true,
                "can_make_tasks_public": true,
                "can_pin_fields": true,
                "can_read": true,
                "can_resolve_checklist_item_if_assigned": true,
                "change_assignee": 2,
                "change_clickapps": true,
                "change_description": true,
                "change_due_date": true,
                "change_incoming_address": true,
                "change_points_estimate": true,
                "change_priority": true,
                "change_recurring": true,
                "change_status": true,
                "change_time_estimate": true,
                "change_title": true,
                "comment": true,
                "create_view": true,
                "delete": true,
                "delete_view": true,
                "display_name": "edit",
                "duplicate": true,
                "edit_attachments": true,
                "edit_checklists": true,
                "edit_list_details": true,
                "edit_view": true,
                "like_comments": true,
                "manage_custom_fields": true,
                "merge": true,
                "move_task": true,
                "name": "owner",
                "permission_level": 5,
                "remove_attachments": true,
                "remove_dependencies": true,
                "remove_followers": true,
                "remove_self_follower": true,
                "remove_status": true,
                "remove_tags": true,
                "set_custom_field_values": true,
                "template": true,
                "track_time": true,
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
                "manage_custom_items": true,
                "manage_statuses": true,
                "manage_tags": true,
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
                "can_edit_tags": true,
                "create_custom_fields": true,
                "edit_custom_fields": true,
                "delete_custom_fields": true,
                "merge_custom_fields": true,
                "convert_custom_fields": true,
                "move_custom_fields": true
            },
            "permission_level": 5,
            "features": {
                "due_dates": {
                    "enabled": true,
                    "start_date": true,
                    "remap_due_dates": true,
                    "remap_closed_due_date": false
                },
                "sprints": {
                    "enabled": true,
                    "settings": null
                },
                "time_tracking": {
                    "enabled": true,
                    "harvest": false,
                    "rollup": false
                },
                "points": {
                    "enabled": true
                },
                "custom_items": {
                    "enabled": false
                },
                "priorities": {
                    "enabled": true,
                    "priorities": [
                        {
                            "color": "#f50000",
                            "id": "1",
                            "orderindex": "1",
                            "priority": "urgent"
                        },
                        {
                            "color": "#ffcc00",
                            "id": "2",
                            "orderindex": "2",
                            "priority": "high"
                        },
                        {
                            "color": "#6fddff",
                            "id": "3",
                            "orderindex": "3",
                            "priority": "normal"
                        },
                        {
                            "color": "#d8d8d8",
                            "id": "4",
                            "orderindex": "4",
                            "priority": "low"
                        }
                    ]
                },
                "tags": {
                    "enabled": true
                },
                "wip_limits": {
                    "enabled": true
                },
                "time_estimates": {
                    "enabled": true,
                    "rollup": false,
                    "per_assignee": false
                },
                "check_unresolved": {
                    "enabled": true,
                    "subtasks": null,
                    "checklists": null,
                    "comments": null
                },
                "zoom": {
                    "enabled": true
                },
                "milestones": {
                    "enabled": true
                },
                "custom_fields": {
                    "enabled": true
                },
                "remap_dependencies": {
                    "enabled": true
                },
                "dependency_warning": {
                    "enabled": true
                },
                "status_pies": {
                    "enabled": false
                },
                "multiple_assignees": {
                    "enabled": true
                }
            },
            "subcategories": [
                {
                    "id": "900300331950",
                    "name": "List",
                    "orderindex": 0,
                    "content": null,
                    "color": null,
                    "due_date": null,
                    "due_date_time": null,
                    "start_date": null,
                    "start_date_time": null,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030179552",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": null,
                    "date_created": null,
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 0,
                    "unfinishedtaskcount": 0,
                    "closedtaskcount": 0,
                    "statuses": [
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_4n7pWbZY",
                            "status": "to do",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_afPRonTe",
                            "status": "in progress",
                            "orderindex": 1,
                            "color": "#7C4DFF",
                            "type": "custom"
                        },
                        {
                            "id": "p90030007894_p67286864_p67286862_p55705132_p55624116_t3ixgh0b",
                            "status": "complete",
                            "orderindex": 2,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300331950.u-48763417.0801bb02-53d6-41ac-82a6-431cf0940f5c@tasks.clickup.com",
                    "content_size": "none"
                }
            ]
        },
        {
            "id": "90030025267",
            "name": "🏛️Clients",
            "orderindex": 10,
            "content": null,
            "color": null,
            "due_date": null,
            "due_date_time": null,
            "archived": false,
            "private": false,
            "owner": 48763417,
            "project_id": "90030007894",
            "override_statuses": false,
            "hidden": false,
            "sprint": null,
            "status": null,
            "date_created": "1671494117832",
            "team_id": "36698333",
            "default_subcategory": "900300045513",
            "taskcount": "36",
            "statuses": [],
            "automation_count": 0,
            "members": [],
            "fields": [
                {
                    "id": "2d424808-ebbe-46d2-88f9-a3b9c30cd13b",
                    "name": "Channel",
                    "type": "labels",
                    "project_id": null,
                    "category_id": "90030025267",
                    "type_config": {},
                    "values_set": null,
                    "orderindex": null,
                    "userid": "5935377",
                    "date_created": "1671494117887",
                    "hide_from_guests": false,
                    "team_id": "36698333",
                    "deleted": false,
                    "date_deleted": null,
                    "deleted_by": null,
                    "pinned": null,
                    "linked_subcategory": null,
                    "required_field": null,
                    "required_subtasks": null,
                    "private": null,
                    "description": null
                },
                {
                    "id": "c6994840-58d5-488f-b879-a16172508da3",
                    "name": "Content Stage",
                    "type": "drop_down",
                    "project_id": null,
                    "category_id": "90030025267",
                    "type_config": {
                        "default": 0,
                        "placeholder": null,
                        "new_drop_down": true,
                        "options": [
                            {
                                "id": "271e5609-6e26-43bc-86e3-290914fe2556",
                                "field_id": "c6994840-58d5-488f-b879-a16172508da3",
                                "name": "SUGGESTION",
                                "value": {
                                    "value": "SUGGESTION"
                                },
                                "type": 5,
                                "color": "#667684",
                                "orderindex": 0,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "94211995-9685-4a77-a00d-5d99f9572aec",
                                "field_id": "c6994840-58d5-488f-b879-a16172508da3",
                                "name": "COPYWRITING",
                                "value": {
                                    "value": "COPYWRITING"
                                },
                                "type": 5,
                                "color": "#3397dd",
                                "orderindex": 1,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "10381a3b-d344-48cb-b2e5-f7a5c8722a0b",
                                "field_id": "c6994840-58d5-488f-b879-a16172508da3",
                                "name": "DESIGN",
                                "value": {
                                    "value": "DESIGN"
                                },
                                "type": 5,
                                "color": "#81B1FF",
                                "orderindex": 2,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "f3f5062d-cfdc-48fe-a155-7af438454344",
                                "field_id": "c6994840-58d5-488f-b879-a16172508da3",
                                "name": "QA",
                                "value": {
                                    "value": "QA"
                                },
                                "type": 5,
                                "color": "#e50000",
                                "orderindex": 3,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "c8256d84-857b-4106-9d26-8de6f6e1b4bc",
                                "field_id": "c6994840-58d5-488f-b879-a16172508da3",
                                "name": "PUBLICATION",
                                "value": {
                                    "value": "PUBLICATION"
                                },
                                "type": 5,
                                "color": "#02BCD4",
                                "orderindex": 4,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "8979880f-8a7e-49b4-87a6-a798bd4db287",
                                "field_id": "c6994840-58d5-488f-b879-a16172508da3",
                                "name": "EVALUATION",
                                "value": {
                                    "value": "EVALUATION"
                                },
                                "type": 5,
                                "color": "#2ecd6f",
                                "orderindex": 5,
                                "workspace_id": "36698333"
                            }
                        ]
                    },
                    "values_set": null,
                    "orderindex": null,
                    "userid": "5935377",
                    "date_created": "1671494117887",
                    "hide_from_guests": false,
                    "team_id": "36698333",
                    "deleted": false,
                    "date_deleted": null,
                    "deleted_by": null,
                    "pinned": null,
                    "linked_subcategory": null,
                    "required_field": null,
                    "required_subtasks": null,
                    "private": null,
                    "description": null
                },
                {
                    "id": "9f5db78d-c768-49ef-aec4-87332a812200",
                    "name": "Content-Type",
                    "type": "drop_down",
                    "project_id": null,
                    "category_id": "90030025267",
                    "type_config": {
                        "default": 0,
                        "placeholder": null,
                        "new_drop_down": true,
                        "options": [
                            {
                                "id": "c469aeb0-c420-4b30-b47c-b1b011458e0a",
                                "field_id": "9f5db78d-c768-49ef-aec4-87332a812200",
                                "name": "Single Photo",
                                "value": {
                                    "value": "Single Photo"
                                },
                                "type": 5,
                                "color": "#81B1FF",
                                "orderindex": 0,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "bae9dc3b-7190-49de-99b6-a76a431d8317",
                                "field_id": "9f5db78d-c768-49ef-aec4-87332a812200",
                                "name": "Carousel",
                                "value": {
                                    "value": "Carousel"
                                },
                                "type": 5,
                                "color": "#9b59b6",
                                "orderindex": 1,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "7686068d-350d-4c90-8f26-2c85e5771ab0",
                                "field_id": "9f5db78d-c768-49ef-aec4-87332a812200",
                                "name": "Videos",
                                "value": {
                                    "value": "Videos"
                                },
                                "type": 5,
                                "color": "#FF7FAB",
                                "orderindex": 2,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "28e5475d-65e5-434c-88d5-39b4a9d82b3a",
                                "field_id": "9f5db78d-c768-49ef-aec4-87332a812200",
                                "name": "Story",
                                "value": {
                                    "value": "Story"
                                },
                                "type": 5,
                                "color": "#1bbc9c",
                                "orderindex": 3,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "bbb06295-cc0b-4720-a6a1-f1622620ad77",
                                "field_id": "9f5db78d-c768-49ef-aec4-87332a812200",
                                "name": "Short Video",
                                "value": {
                                    "value": "Short Video"
                                },
                                "type": 5,
                                "color": "#e50000",
                                "orderindex": 4,
                                "workspace_id": "36698333"
                            }
                        ]
                    },
                    "values_set": null,
                    "orderindex": null,
                    "userid": "5935377",
                    "date_created": "1671494117887",
                    "hide_from_guests": false,
                    "team_id": "36698333",
                    "deleted": false,
                    "date_deleted": null,
                    "deleted_by": null,
                    "pinned": null,
                    "linked_subcategory": null,
                    "required_field": null,
                    "required_subtasks": null,
                    "private": null,
                    "description": null
                },
                {
                    "id": "7ec7b023-1ee1-4262-956a-9be96b8a57ff",
                    "name": "QA Stage",
                    "type": "drop_down",
                    "project_id": null,
                    "category_id": "90030025267",
                    "type_config": {
                        "default": 0,
                        "placeholder": null,
                        "new_drop_down": true,
                        "options": [
                            {
                                "id": "2abc0b69-f81b-410e-8227-a40bfd1ba2a0",
                                "field_id": "7ec7b023-1ee1-4262-956a-9be96b8a57ff",
                                "name": "PENDING",
                                "value": {
                                    "value": "PENDING"
                                },
                                "type": 5,
                                "color": "#b5bcc2",
                                "orderindex": 0,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "480ae309-0fb1-4d58-b1d1-9e14f3b278c1",
                                "field_id": "7ec7b023-1ee1-4262-956a-9be96b8a57ff",
                                "name": "APPROVED",
                                "value": {
                                    "value": "APPROVED"
                                },
                                "type": 5,
                                "color": "#2ecd6f",
                                "orderindex": 1,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "63c56586-6002-47b5-b404-890ce030b2b2",
                                "field_id": "7ec7b023-1ee1-4262-956a-9be96b8a57ff",
                                "name": "NEEDS REVISION",
                                "value": {
                                    "value": "NEEDS REVISION"
                                },
                                "type": 5,
                                "color": "#f9d900",
                                "orderindex": 2,
                                "workspace_id": "36698333"
                            },
                            {
                                "id": "d5b2404b-a080-4439-8e13-f0ff5ac7f18a",
                                "field_id": "7ec7b023-1ee1-4262-956a-9be96b8a57ff",
                                "name": "REJECTED",
                                "value": {
                                    "value": "REJECTED"
                                },
                                "type": 5,
                                "color": "#e50000",
                                "orderindex": 3,
                                "workspace_id": "36698333"
                            }
                        ]
                    },
                    "values_set": null,
                    "orderindex": null,
                    "userid": "5935377",
                    "date_created": "1671494117887",
                    "hide_from_guests": false,
                    "team_id": "36698333",
                    "deleted": false,
                    "date_deleted": null,
                    "deleted_by": null,
                    "pinned": null,
                    "linked_subcategory": null,
                    "required_field": null,
                    "required_subtasks": null,
                    "private": null,
                    "description": null
                }
            ],
            "permissions": {
                "add_attachments": true,
                "add_checklists": true,
                "add_dependencies": true,
                "add_followers": true,
                "add_self_follower": true,
                "add_status": true,
                "add_subtasks": true,
                "add_tags": true,
                "archive": true,
                "can_add_automation": true,
                "can_change_subtask_columns": true,
                "can_change_task_links": true,
                "can_create_relationships": true,
                "can_create_tasks": true,
                "can_delete_checklist_item": true,
                "can_make_tasks_public": true,
                "can_pin_fields": true,
                "can_read": true,
                "can_resolve_checklist_item_if_assigned": true,
                "change_assignee": 2,
                "change_clickapps": true,
                "change_description": true,
                "change_due_date": true,
                "change_incoming_address": true,
                "change_points_estimate": true,
                "change_priority": true,
                "change_recurring": true,
                "change_status": true,
                "change_time_estimate": true,
                "change_title": true,
                "comment": true,
                "create_view": true,
                "delete": true,
                "delete_view": true,
                "display_name": "edit",
                "duplicate": true,
                "edit_attachments": true,
                "edit_checklists": true,
                "edit_list_details": true,
                "edit_view": true,
                "like_comments": true,
                "manage_custom_fields": true,
                "merge": true,
                "move_task": true,
                "name": "owner",
                "permission_level": 5,
                "remove_attachments": true,
                "remove_dependencies": true,
                "remove_followers": true,
                "remove_self_follower": true,
                "remove_status": true,
                "remove_tags": true,
                "set_custom_field_values": true,
                "template": true,
                "track_time": true,
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
                "manage_custom_items": true,
                "manage_statuses": true,
                "manage_tags": true,
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
                "can_edit_tags": true,
                "create_custom_fields": true,
                "edit_custom_fields": true,
                "delete_custom_fields": true,
                "merge_custom_fields": true,
                "convert_custom_fields": true,
                "move_custom_fields": true
            },
            "permission_level": 5,
            "features": {
                "due_dates": {
                    "enabled": true,
                    "start_date": true,
                    "remap_due_dates": true,
                    "remap_closed_due_date": false
                },
                "sprints": {
                    "enabled": true,
                    "settings": null
                },
                "time_tracking": {
                    "enabled": true,
                    "harvest": false,
                    "rollup": false
                },
                "points": {
                    "enabled": true
                },
                "custom_items": {
                    "enabled": false
                },
                "priorities": {
                    "enabled": true,
                    "priorities": [
                        {
                            "color": "#f50000",
                            "id": "1",
                            "orderindex": "1",
                            "priority": "urgent"
                        },
                        {
                            "color": "#ffcc00",
                            "id": "2",
                            "orderindex": "2",
                            "priority": "high"
                        },
                        {
                            "color": "#6fddff",
                            "id": "3",
                            "orderindex": "3",
                            "priority": "normal"
                        },
                        {
                            "color": "#d8d8d8",
                            "id": "4",
                            "orderindex": "4",
                            "priority": "low"
                        }
                    ]
                },
                "tags": {
                    "enabled": true
                },
                "wip_limits": {
                    "enabled": true
                },
                "time_estimates": {
                    "enabled": true,
                    "rollup": false,
                    "per_assignee": false
                },
                "check_unresolved": {
                    "enabled": true,
                    "subtasks": null,
                    "checklists": null,
                    "comments": null
                },
                "zoom": {
                    "enabled": true
                },
                "milestones": {
                    "enabled": true
                },
                "custom_fields": {
                    "enabled": true
                },
                "remap_dependencies": {
                    "enabled": true
                },
                "dependency_warning": {
                    "enabled": true
                },
                "status_pies": {
                    "enabled": false
                },
                "multiple_assignees": {
                    "enabled": true
                }
            },
            "subcategories": [
                {
                    "id": "900300045513",
                    "name": "🤵 <Client 1>",
                    "orderindex": 6,
                    "content": null,
                    "color": null,
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025267",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": true,
                    "date_created": "1671494118185",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 18,
                    "unfinishedtaskcount": 18,
                    "closedtaskcount": 2,
                    "statuses": [
                        {
                            "id": "subcat900300045513_subcat211256516_subcat211256478_subcat223565888_subcat217673678_sc211688392_T92kTldA",
                            "status": "to do",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "subcat900300045513_subcat211256516_subcat211256478_subcat223565888_subcat217673678_sc211688392_zDDfl4j6",
                            "status": "in progress",
                            "orderindex": 1,
                            "color": "#a875ff",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045513_subcat211256516_subcat211256478_subcat223565888_subcat217673678_sc211688392_WYroXhd1",
                            "status": "for revision",
                            "orderindex": 2,
                            "color": "#f9d900",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045513_subcat211256516_subcat211256478_subcat223565888_subcat217673678_sc211688392_M9auaoJt",
                            "status": "for approval",
                            "orderindex": 3,
                            "color": "#ff7800",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045513_subcat211256516_subcat211256478_subcat223565888_subcat217673678_sc211688392_AYBzwdrM",
                            "status": "published",
                            "orderindex": 4,
                            "color": "#02BCD4",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045513_subcat211256516_subcat211256478_subcat223565888_subcat217673678_sc211688392_cZYVIL0j",
                            "status": "canceled",
                            "orderindex": 5,
                            "color": "#e50000",
                            "type": "done"
                        },
                        {
                            "id": "subcat900300045513_subcat211256516_subcat211256478_subcat223565888_subcat217673678_sc211688392_Lc5hUGID",
                            "status": "complete",
                            "orderindex": 6,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045513.u-48763417.bf5fe3b3-75b9-4ade-b75a-9a48a818d459@tasks.clickup.com",
                    "content_size": "none"
                },
                {
                    "id": "900300045514",
                    "name": "🤵<Client 2>",
                    "orderindex": 7,
                    "content": null,
                    "color": null,
                    "due_date": null,
                    "due_date_time": false,
                    "start_date": null,
                    "start_date_time": false,
                    "hide_description": false,
                    "archived": false,
                    "category": "90030025267",
                    "encrypted": false,
                    "private": false,
                    "priority": null,
                    "status": null,
                    "assignee": null,
                    "sprint": null,
                    "sprint_index": null,
                    "sprint_status": null,
                    "sprint_start_date": null,
                    "sprint_end_date": null,
                    "sprint_date_done": null,
                    "sprint_date_progress": null,
                    "sprint_dashboard_id": null,
                    "override_statuses": true,
                    "date_created": "1671494125704",
                    "custom_items_default": null,
                    "project_id": "90030007894",
                    "sprint_date_format": null,
                    "owner": 48763417,
                    "can_see_time_spent": true,
                    "can_see_time_estimated": true,
                    "can_see_points_estimated": true,
                    "automation_count": 0,
                    "points_total": null,
                    "features": {
                        "due_dates": {
                            "enabled": true,
                            "start_date": true,
                            "remap_due_dates": true,
                            "remap_closed_due_date": false
                        },
                        "sprints": {
                            "enabled": true,
                            "settings": null
                        },
                        "time_tracking": {
                            "enabled": true,
                            "harvest": false,
                            "rollup": false
                        },
                        "points": {
                            "enabled": true
                        },
                        "custom_items": {
                            "enabled": false
                        },
                        "priorities": {
                            "enabled": true,
                            "priorities": [
                                {
                                    "color": "#f50000",
                                    "id": "1",
                                    "orderindex": "1",
                                    "priority": "urgent"
                                },
                                {
                                    "color": "#ffcc00",
                                    "id": "2",
                                    "orderindex": "2",
                                    "priority": "high"
                                },
                                {
                                    "color": "#6fddff",
                                    "id": "3",
                                    "orderindex": "3",
                                    "priority": "normal"
                                },
                                {
                                    "color": "#d8d8d8",
                                    "id": "4",
                                    "orderindex": "4",
                                    "priority": "low"
                                }
                            ]
                        },
                        "tags": {
                            "enabled": true
                        },
                        "wip_limits": {
                            "enabled": true
                        },
                        "time_estimates": {
                            "enabled": true,
                            "rollup": false,
                            "per_assignee": false
                        },
                        "check_unresolved": {
                            "enabled": true,
                            "subtasks": null,
                            "checklists": null,
                            "comments": null
                        },
                        "zoom": {
                            "enabled": true
                        },
                        "milestones": {
                            "enabled": true
                        },
                        "custom_fields": {
                            "enabled": true
                        },
                        "remap_dependencies": {
                            "enabled": true
                        },
                        "dependency_warning": {
                            "enabled": true
                        },
                        "status_pies": {
                            "enabled": false
                        },
                        "multiple_assignees": {
                            "enabled": true
                        }
                    },
                    "hasAttachments": false,
                    "members": [],
                    "group_members": [],
                    "permissions": {
                        "add_attachments": true,
                        "add_checklists": true,
                        "add_dependencies": true,
                        "add_followers": true,
                        "add_self_follower": true,
                        "add_status": true,
                        "add_subtasks": true,
                        "add_tags": true,
                        "archive": true,
                        "can_add_automation": true,
                        "can_change_subtask_columns": true,
                        "can_change_task_links": true,
                        "can_create_relationships": true,
                        "can_create_tasks": true,
                        "can_delete_checklist_item": true,
                        "can_make_tasks_public": true,
                        "can_pin_fields": true,
                        "can_read": true,
                        "can_resolve_checklist_item_if_assigned": true,
                        "change_assignee": 2,
                        "change_clickapps": true,
                        "change_description": true,
                        "change_due_date": true,
                        "change_incoming_address": true,
                        "change_points_estimate": true,
                        "change_priority": true,
                        "change_recurring": true,
                        "change_status": true,
                        "change_time_estimate": true,
                        "change_title": true,
                        "comment": true,
                        "create_view": true,
                        "delete": true,
                        "delete_view": true,
                        "display_name": "edit",
                        "duplicate": true,
                        "edit_attachments": true,
                        "edit_checklists": true,
                        "edit_list_details": true,
                        "edit_view": true,
                        "like_comments": true,
                        "manage_custom_fields": true,
                        "merge": true,
                        "move_task": true,
                        "name": "owner",
                        "permission_level": 5,
                        "remove_attachments": true,
                        "remove_dependencies": true,
                        "remove_followers": true,
                        "remove_self_follower": true,
                        "remove_status": true,
                        "remove_tags": true,
                        "set_custom_field_values": true,
                        "template": true,
                        "track_time": true,
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
                        "manage_custom_items": true,
                        "manage_statuses": true,
                        "manage_tags": true,
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
                    "permission_level": 5,
                    "time_spent": 0,
                    "time_estimate": 0,
                    "taskcount": 18,
                    "unfinishedtaskcount": 18,
                    "closedtaskcount": 2,
                    "statuses": [
                        {
                            "id": "subcat900300045514_subcat211256515_subcat211256479_subcat223565887_subcat217673681_subcat217673678_sc211688392_T92kTldA",
                            "status": "to do",
                            "orderindex": 0,
                            "color": "#d3d3d3",
                            "type": "open"
                        },
                        {
                            "id": "subcat900300045514_subcat211256515_subcat211256479_subcat223565887_subcat217673681_subcat217673678_sc211688392_zDDfl4j6",
                            "status": "in progress",
                            "orderindex": 1,
                            "color": "#a875ff",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045514_subcat211256515_subcat211256479_subcat223565887_subcat217673681_subcat217673678_sc211688392_WYroXhd1",
                            "status": "for revision",
                            "orderindex": 2,
                            "color": "#f9d900",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045514_subcat211256515_subcat211256479_subcat223565887_subcat217673681_subcat217673678_sc211688392_M9auaoJt",
                            "status": "for approval",
                            "orderindex": 3,
                            "color": "#ff7800",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045514_subcat211256515_subcat211256479_subcat223565887_subcat217673681_subcat217673678_sc211688392_AYBzwdrM",
                            "status": "published",
                            "orderindex": 4,
                            "color": "#02BCD4",
                            "type": "custom"
                        },
                        {
                            "id": "subcat900300045514_subcat211256515_subcat211256479_subcat223565887_subcat217673681_subcat217673678_sc211688392_cZYVIL0j",
                            "status": "canceled",
                            "orderindex": 5,
                            "color": "#e50000",
                            "type": "done"
                        },
                        {
                            "id": "subcat900300045514_subcat211256515_subcat211256479_subcat223565887_subcat217673681_subcat217673678_sc211688392_Lc5hUGID",
                            "status": "complete",
                            "orderindex": 6,
                            "color": "#6bc950",
                            "type": "closed"
                        }
                    ],
                    "incoming_address": "a.t.900300045514.u-48763417.4f3922bc-8395-4621-8dd7-ab3b36d03896@tasks.clickup.com",
                    "content_size": "none"
                }
            ]
        }
    ]
}
