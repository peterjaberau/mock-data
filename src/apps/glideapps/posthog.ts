export default {
  root: {
    "$device_id": "01a0ba04-23c9-74fe-ad79-a0842921b290",
    "distinct_id": "01a0ba04-23c9-74fe-ad79-a0842921b290",
    "$sesid": [
      1789869380568,
      "01a0bc83-e2fe-7289-80c7-4eecfe16b3bb",
      1789869155068
    ],
    "$initial_person_info": {
      "r": "https://www.google.com/",
      "u": "https://www.glideapps.com/"
    },
    "$user_state": "anonymous",
    "$initialization_time": "2026-09-20T01:52:35.029Z",
    "$configured_session_timeout_ms": 1800000,
    "worker": "dotcom",
    "environment": "production",
    "$capture_rate_limit": {
      "tokens": 99,
      "last": 1789869380567
    },
    "$client_session_props": {
      "sessionId": "01a0bc83-e2fe-7289-80c7-4eecfe16b3bb",
      "props": {
        "r": "$direct",
        "u": "https://www.glideapps.com/"
      }
    },
    "$autocapture_disabled_server_side": false,
    "$logs_capture_enabled_server_side": false,
    "$error_tracking_suppression_rules": [],
    "$session_recording_remote_config": {
      "cache_timestamp": 1789869155117,
      "enabled": true,
      "canvasFps": null,
      "canvasQuality": null,
      "consoleLogRecordingEnabled": true,
      "endpoint": "/s/",
      "eventTriggers": [],
      "linkedFlag": null,
      "masking": {
        "maskAllInputs": false
      },
      "minimumDurationMilliseconds": 30000,
      "networkPayloadCapture": {
        "capturePerformance": {
          "network_timing": true,
          "web_vitals": false,
          "web_vitals_allowed_metrics": null
        }
      },
      "recordCanvas": false,
      "recorderVersion": "v2",
      "sampleRate": null,
      "scriptConfig": {
        "script": "posthog-recorder"
      },
      "triggerMatchType": null,
      "urlBlocklist": [],
      "urlTriggers": [],
      "version": 1,
      "canvasRecording": {
        "enabled": false,
        "fps": null,
        "quality": null
      }
    },
    "$product_tours_enabled_server_side": false,
    "$heatmaps_enabled_server_side": true,
    "$web_vitals_enabled_server_side": false,
    "$web_vitals_allowed_metrics": null,
    "$exception_capture_enabled_server_side": true,
    "$dead_clicks_enabled_server_side": false,
    "$surveys": [
      {
        "appearance": {
          "backgroundColor": "#eeeded",
          "borderColor": "#c9c6c6",
          "borderRadius": "10px",
          "boxPadding": "20px 24px",
          "boxShadow": "0 4px 12px rgba(0, 0, 0, 0.15)",
          "disabledButtonOpacity": "0.6",
          "displayThankYouMessage": true,
          "fontFamily": "inherit",
          "inputBackground": "white",
          "maxWidth": "300px",
          "placeholder": "Start typing...",
          "position": "right",
          "ratingButtonActiveColor": "black",
          "ratingButtonColor": "white",
          "shuffleQuestions": false,
          "submitButtonColor": "black",
          "submitButtonTextColor": "white",
          "tabPosition": "right",
          "textSubtleColor": "#939393",
          "thankYouMessageHeader": "Thank you for your feedback!",
          "whiteLabel": true,
          "widgetColor": "black",
          "widgetLabel": "Feedback",
          "widgetType": "tab",
          "zIndex": "2147482647"
        },
        "conditions": null,
        "current_iteration": null,
        "current_iteration_start_date": null,
        "enable_partial_responses": false,
        "end_date": null,
        "id": "019e6612-b4a2-0000-8e65-830cb2516a5a",
        "internal_targeting_flag_key": "survey-targeting-ec314d518f-custom",
        "name": "Glide OS Response Feedback",
        "questions": [
          {
            "branching": {
              "responseValues": {
                "negative": 1,
                "positive": "end"
              },
              "type": "response_based"
            },
            "display": "emoji",
            "id": "839f91bd-4b53-478d-af84-f64b8b6d8538",
            "lowerBoundLabel": "",
            "question": "Was this response helpful?",
            "scale": 2,
            "skipSubmitButton": true,
            "type": "rating",
            "upperBoundLabel": ""
          },
          {
            "id": "d265dba9-7087-4464-a517-658c1ea836f2",
            "optional": true,
            "question": "What went wrong?",
            "type": "open"
          }
        ],
        "schedule": "once",
        "start_date": "2026-05-26T20:56:02.338000Z",
        "type": "api"
      },
      {
        "appearance": {
          "backgroundColor": "#ffffff",
          "borderColor": "#e5e7eb",
          "borderRadius": "10px",
          "boxPadding": "20px 24px",
          "boxShadow": "0 4px 12px rgba(0, 0, 0, 0.15)",
          "disabledButtonOpacity": "0.6",
          "displayThankYouMessage": true,
          "fontFamily": "inherit",
          "inputBackground": "#f9fafb",
          "maxWidth": "300px",
          "placeholder": "Start typing...",
          "position": "right",
          "ratingButtonActiveColor": "#1d1f27",
          "ratingButtonColor": "#f3f4f6",
          "shuffleQuestions": false,
          "submitButtonColor": "#1d1f27",
          "submitButtonTextColor": "#ffffff",
          "tabPosition": "right",
          "textColor": "#1d1f27",
          "textSubtleColor": "#939393",
          "thankYouMessageDescription": "",
          "thankYouMessageHeader": "Thank you for your feedback!",
          "whiteLabel": false,
          "zIndex": "2147482647"
        },
        "conditions": null,
        "current_iteration": 4,
        "current_iteration_start_date": "2026-09-02T16:02:44Z",
        "enable_partial_responses": true,
        "end_date": null,
        "id": "019e935f-45c7-0000-c5a5-0a0d0995917e",
        "internal_targeting_flag_key": "survey-targeting-3bea1402b3-custom",
        "name": "Agent Feedback",
        "questions": [
          {
            "description": "",
            "descriptionContentType": "text",
            "id": "09ca30a0-f1c0-4cb4-b6ef-b197a466ca96",
            "question": "What can we do to improve our product?",
            "type": "open"
          }
        ],
        "schedule": "recurring",
        "start_date": "2026-06-04T16:02:44.615000Z",
        "type": "api"
      },
      {
        "appearance": {
          "backgroundColor": "#ffffff",
          "borderColor": "#e5e7eb",
          "borderRadius": "10px",
          "boxPadding": "20px 24px",
          "boxShadow": "0 4px 12px rgba(0, 0, 0, 0.15)",
          "disabledButtonOpacity": "0.6",
          "displayThankYouMessage": true,
          "fontFamily": "inherit",
          "inputBackground": "#f9fafb",
          "maxWidth": "300px",
          "placeholder": "Start typing...",
          "position": "right",
          "ratingButtonActiveColor": "#1d1f27",
          "ratingButtonColor": "#f3f4f6",
          "shuffleQuestions": false,
          "submitButtonColor": "#1d1f27",
          "submitButtonTextColor": "#ffffff",
          "tabPosition": "right",
          "textColor": "#1d1f27",
          "textSubtleColor": "#939393",
          "thankYouMessageHeader": "Thank you for your feedback!",
          "whiteLabel": false,
          "widgetColor": "black",
          "widgetLabel": "Feedback",
          "widgetType": "tab",
          "zIndex": "2147482647"
        },
        "conditions": {
          "events": {
            "repeatedActivation": false,
            "values": [
              {
                "name": "subscription_cancel_requested"
              }
            ]
          }
        },
        "current_iteration": null,
        "current_iteration_start_date": null,
        "enable_partial_responses": true,
        "end_date": null,
        "id": "019ea8a7-97ab-0000-9e62-ebce7eb7ee4a",
        "internal_targeting_flag_key": "survey-targeting-e3ffea5721-custom",
        "name": "Cancellation survey",
        "questions": [
          {
            "choices": [
              "Too expensive",
              "Missing features I need",
              "Found a better alternative",
              "Too difficult to use",
              "Not getting enough value",
              "No longer need it"
            ],
            "descriptionContentType": "text",
            "hasOpenChoice": false,
            "id": "bc55990e-58ba-4518-9251-d4ec599bc99f",
            "question": "We're sorry to see you go. What's your reason for unsubscribing?",
            "shuffleOptions": true,
            "skipSubmitButton": true,
            "type": "multiple_choice"
          },
          {
            "description": "",
            "descriptionContentType": "text",
            "id": "7a2c45ff-98ca-403d-b933-e7200935626e",
            "question": "What could we have done better?",
            "type": "open"
          }
        ],
        "schedule": "once",
        "start_date": "2026-06-08T19:13:36.012000Z",
        "type": "popover"
      },
      {
        "appearance": {
          "autoDisappear": true,
          "backgroundColor": "#ffffff",
          "borderColor": "#e5e7eb",
          "borderRadius": "10px",
          "boxPadding": "20px 24px",
          "boxShadow": "0 4px 12px rgba(0, 0, 0, 0.15)",
          "disabledButtonOpacity": "0.6",
          "displayThankYouMessage": true,
          "fontFamily": "inherit",
          "inputBackground": "#f9fafb",
          "maxWidth": "300px",
          "placeholder": "Start typing...",
          "position": "right",
          "ratingButtonActiveColor": "#1d1f27",
          "ratingButtonColor": "#f3f4f6",
          "shuffleQuestions": false,
          "submitButtonColor": "#1d1f27",
          "submitButtonTextColor": "#ffffff",
          "surveyPopupDelaySeconds": 7,
          "tabPosition": "right",
          "textColor": "#1d1f27",
          "textSubtleColor": "#939393",
          "thankYouMessageDescription": "Get back to work ;)",
          "thankYouMessageDescriptionContentType": null,
          "thankYouMessageHeader": "Thank you for completing the survey.",
          "whiteLabel": true,
          "zIndex": "2147482647"
        },
        "conditions": {
          "events": {
            "values": [
              {
                "name": "project_opened"
              }
            ]
          },
          "seenSurveyWaitPeriodInDays": null
        },
        "current_iteration": 1,
        "current_iteration_start_date": "2026-07-01T22:55:44.412000Z",
        "enable_partial_responses": true,
        "end_date": null,
        "id": "019f1fc6-4207-0000-d80f-abb39e518c3d",
        "internal_targeting_flag_key": "survey-targeting-c4b5d2583e-custom",
        "name": "NPS Survey (Jul '26)",
        "questions": [
          {
            "branching": {
              "responseValues": {
                "detractors": 1,
                "passives": 1,
                "promoters": 2
              },
              "type": "response_based"
            },
            "description": "",
            "descriptionContentType": "text",
            "display": "number",
            "id": "d1487d83-104c-465a-af20-68e083711bf3",
            "lowerBoundLabel": "Unlikely",
            "question": "How likely are you to recommend GlideOS to a friend?",
            "scale": 10,
            "skipSubmitButton": false,
            "type": "rating",
            "upperBoundLabel": "Very likely"
          },
          {
            "branching": {
              "type": "end"
            },
            "description": "",
            "descriptionContentType": "text",
            "id": "da865d04-e6dc-456f-be6b-2378f190d570",
            "optional": true,
            "question": "What can we do to improve your experience?",
            "type": "open"
          },
          {
            "branching": {
              "type": "end"
            },
            "buttonText": "Leave a Review",
            "description": "Submit a review on G2 about GlideOS and we'll send you a $25 USD gift card.",
            "descriptionContentType": "text",
            "id": "fd8b0205-484e-4a1a-b3c2-0c3b8a5d7e23",
            "link": "https://www.g2.com/contributor/glideos-nps-campaign-32cea2c1-47aa-4883-a048-d169013c652d?secure%5Bpage_id%5D=glideos-nps-campaign-32cea2c1-47aa-4883-a048-d169013c652d&secure%5Brewards%5D=true&secure%5Btoken%5D=be79ddbe6f53f158a07d95d89b7f127ac8e2104fad79d6fdf2d42f0d63f977de",
            "optional": true,
            "question": "Want a $25 Amazon gift card?",
            "type": "link"
          }
        ],
        "schedule": "recurring",
        "start_date": "2026-07-01T22:55:44.412000Z",
        "type": "popover"
      },
      {
        "appearance": {
          "backgroundColor": "#eeeded",
          "borderColor": "#c9c6c6",
          "borderRadius": "10px",
          "boxPadding": "20px 24px",
          "boxShadow": "0 4px 12px rgba(0, 0, 0, 0.15)",
          "disabledButtonOpacity": "0.6",
          "displayThankYouMessage": true,
          "fontFamily": "inherit",
          "inputBackground": "white",
          "maxWidth": "300px",
          "placeholder": "Start typing...",
          "position": "right",
          "ratingButtonActiveColor": "black",
          "ratingButtonColor": "white",
          "shuffleQuestions": false,
          "submitButtonColor": "black",
          "submitButtonTextColor": "white",
          "tabPosition": "right",
          "textSubtleColor": "#939393",
          "thankYouMessageHeader": "Thank you for your feedback!",
          "whiteLabel": false,
          "widgetColor": "black",
          "widgetLabel": "Feedback",
          "widgetType": "tab",
          "zIndex": "2147482647"
        },
        "conditions": {
          "events": {
            "values": [
              {
                "name": "usage_page_viewed"
              }
            ]
          }
        },
        "current_iteration": null,
        "current_iteration_start_date": null,
        "enable_partial_responses": false,
        "end_date": null,
        "id": "019f23ac-c88a-0000-65bb-56b2ed80ec72",
        "internal_targeting_flag_key": "survey-targeting-9ebaefbb15-custom",
        "name": "Usage page feedback",
        "questions": [
          {
            "display": "emoji",
            "id": "6d86b56b-3bd2-4223-be35-ae4dbdecd784",
            "lowerBoundLabel": "Bad",
            "optional": false,
            "question": "How would you rate the Usage page?",
            "scale": 3,
            "type": "rating",
            "upperBoundLabel": "Good"
          },
          {
            "description": "This question is optional.",
            "id": "21470aa4-0a3e-4ec8-90d1-338cbeba4664",
            "optional": true,
            "question": "Any other feedback on the Usage page?",
            "type": "open"
          }
        ],
        "schedule": "once",
        "start_date": "2026-07-02T17:04:43.640000Z",
        "type": "popover"
      }
    ],
    "$surveys_loaded_at": 1789869456837,
    "$feature_flag_errors": [],
    "$active_feature_flags": [
      "glide-os-prompt-routing",
      "survey-targeting-9ebaefbb15-custom",
      "usage-ledger-read-mode",
      "app-source-check",
      "model-pricing-plan-defaults",
      "g3-notification-center-inverted-routing",
      "run-backend-code",
      "transcript_classifier_judge_sample_rate",
      "search-indexing",
      "model-pricing-variant",
      "free-tier-segmentation",
      "compaction-parent-summarizer",
      "g3-descope-sso-surface",
      "app-store-bundles",
      "app-store",
      "build-execution-discipline",
      "survey-targeting-e3ffea5721-custom",
      "g3-invite-email-via-notification-center",
      "app-gate-json-401",
      "usage-billing-cycle-filter",
      "preview-single-reload",
      "file-history",
      "audit-schema-events",
      "new-design",
      "generate-with-imagegpt",
      "transcript_archive_enabled",
      "survey-targeting-ec314d518f-custom",
      "visual-explainer",
      "transcript_classifier_sample_rate",
      "survey-targeting-c4b5d2583e-custom",
      "error-missing-packages",
      "file-history-ledger",
      "org-background-image",
      "integration-scope-check",
      "global_search",
      "enable-billing",
      "enable-mcp-service",
      "data-sync-skill",
      "g3-magic-link-via-notification-center",
      "app-asset-relay",
      "suggest-app-tool",
      "view-transitions",
      "app-triggers",
      "new-plans",
      "show-inline-screenshots",
      "app-public-paths",
      "data-backups",
      "publish-share-buttons-right-aligned",
      "in-chat-human-assist",
      "onboarding-modal-v2",
      "app-settings",
      "chat-version-restore",
      "agent-app-request-tool",
      "fast-start",
      "survey-targeting-3bea1402b3-custom",
      "model-pricing-base"
    ],
    "$enabled_feature_flags": {
      "show-preview-qr-code": false,
      "impact-score": false,
      "stage-messages": false,
      "glide-os-prompt-routing": true,
      "color-contract-inline": false,
      "app_store_suggestions": false,
      "sidebar-recent-projects": false,
      "survey-targeting-9ebaefbb15-custom": true,
      "agent-app-request-authenticated": false,
      "openai-default-models": false,
      "usage-ledger-read-mode": "pg",
      "app-source-check": true,
      "g3-notification-center-enterprise-domain": false,
      "model-pricing-plan-defaults": "gemini-flash",
      "g3-notification-center-inverted-routing": true,
      "run-backend-code": true,
      "transcript_classifier_judge_sample_rate": "20",
      "dashboard-notifications-help-modal": false,
      "search-indexing": true,
      "automation-suggestions": false,
      "dashboard-sort-orgs-alphabetically": false,
      "bill-compaction-spend": false,
      "enterprise-permissions-ui": false,
      "model-pricing-variant": "paywall-intent",
      "evans-skills": false,
      "free-tier-segmentation": true,
      "glide-agents": false,
      "compaction-parent-summarizer": true,
      "g3-descope-sso-surface": true,
      "app-store-bundles": true,
      "app-store": true,
      "view-app-preview-label": false,
      "build-execution-discipline": true,
      "prevent-multi-provider-sessions": false,
      "survey-targeting-e3ffea5721-custom": true,
      "posthog-tool-call-io-spans": false,
      "design-signature-element": false,
      "status-indicator": false,
      "g3-invite-email-via-notification-center": true,
      "app-gate-json-401": true,
      "usage-billing-cycle-filter": true,
      "preview-single-reload": true,
      "org-system-prompt": false,
      "file-history": true,
      "outage-banner": false,
      "audit-schema-events": true,
      "new-design": true,
      "slash-commands": false,
      "generate-with-imagegpt": true,
      "audit-log": false,
      "transcript_archive_enabled": true,
      "survey-targeting-ec314d518f-custom": true,
      "visual-explainer": true,
      "qr-air-drop": false,
      "dashboard-share-feedback": false,
      "enable-vanity-urls": false,
      "agent-schema-context": false,
      "transcript_classifier_sample_rate": "100",
      "survey-targeting-c4b5d2583e-custom": true,
      "error-missing-packages": true,
      "file-history-ledger": true,
      "reduced-signup-credits": false,
      "org-background-image": true,
      "integration-scope-check": true,
      "open-data-on-load-task": false,
      "global_search": true,
      "chat-item-live-state": false,
      "instant-shell": false,
      "enable-billing": true,
      "enable-mcp-service": true,
      "project-visibility": false,
      "data-sync-skill": true,
      "top-level-integration": false,
      "data-residency-staff": false,
      "g3-magic-link-via-notification-center": true,
      "app-asset-relay": true,
      "post-build-suggestions": false,
      "suggest-app-tool": true,
      "qr-code-preview-easy-access": false,
      "plan-mode": false,
      "view-transitions": true,
      "glidedesk-widget": false,
      "debug-toolbar": false,
      "model-pricing-org-override": false,
      "app-triggers": true,
      "new-plans": true,
      "show-inline-screenshots": true,
      "app-public-paths": true,
      "data-backups": true,
      "composer-context-menus": false,
      "agent-app-request-privileged": false,
      "publish-share-buttons-right-aligned": true,
      "always-allow-send-message": false,
      "g3-signin-email-otp": false,
      "app-project-permissions-gate": false,
      "openai-aligned-lightweight": false,
      "usage-ledger-pg-read": false,
      "enable-native-publish": false,
      "in-chat-human-assist": true,
      "mobile-view-switcher": false,
      "onboarding-modal-v2": true,
      "project-change-log": false,
      "app-settings": true,
      "chat-version-restore": true,
      "duplicate-project": false,
      "g3-notification-center-domain-demote": false,
      "project-search-index": false,
      "agent-app-request-tool": true,
      "fast-start": "template",
      "dashboard-project-name-tooltip": false,
      "survey-targeting-3bea1402b3-custom": true,
      "enable-apple-app-store": false,
      "model-pricing-base": true,
      "show-tool-input-output": false,
      "builder-files-tab": false,
      "dashboard-open-selected-data-table": false
    },
    "$feature_flag_payloads": {
      "model-pricing-plan-defaults": "{\"planModelDefaults\":{\"basic\":{\"tiers\":{\"lite\":\"gemini-3.8-flash:low\",\"medium\":\"gemini-3.8-flash\",\"heavy\":\"gemini-3.8-flash\"}},\"plus\":{\"tiers\":{\"lite\":\"gemini-3.8-flash:low\",\"medium\":\"gemini-3.8-flash\",\"heavy\":\"gemini-3.8-flash\"}}}}",
      "model-pricing-variant": "{\"paywallIntent\":{\"enabled\":true}}",
      "model-pricing-base": "{\"version\":1,\"referenceModel\":{\"id\":\"claude-sonnet-4-6\",\"card\":{\"input\":3,\"output\":15,\"cachedInput\":0.3}},\"models\":{\"openai/gpt-5.6-luna\":{\"effective\":{\"input\":0.2,\"output\":1.2,\"cachedInput\":0.02},\"modes\":{\"free\":\"shadow\",\"default\":\"passthrough\"}},\"openai/gpt-5.6-terra\":{\"effective\":{\"input\":2,\"output\":12,\"cachedInput\":0.2},\"modes\":{\"default\":\"passthrough\"}}},\"freeBudget\":{\"cents\":150,\"windowDays\":30,\"segments\":{\"basic\":30,\"premium\":150}},\"freeModelAccess\":{\"forcedModel\":\"openai/gpt-5.6-luna:xhigh\",\"applyTo\":\"all\"},\"paywallIntent\":{\"enabled\":false,\"threshold\":0.85,\"minTurns\":3,\"ttlDays\":7}}"
    },
    "$feature_flag_details": {
      "show-preview-qr-code": {
        "key": "show-preview-qr-code",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 804223,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "impact-score": {
        "key": "impact-score",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 1,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 820242,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "stage-messages": {
        "key": "stage-messages",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 710689,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "glide-os-prompt-routing": {
        "key": "glide-os-prompt-routing",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 788809,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "color-contract-inline": {
        "key": "color-contract-inline",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 763548,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "app_store_suggestions": {
        "key": "app_store_suggestions",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 744564,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "sidebar-recent-projects": {
        "key": "sidebar-recent-projects",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 850910,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "survey-targeting-9ebaefbb15-custom": {
        "key": "survey-targeting-9ebaefbb15-custom",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 742813,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "agent-app-request-authenticated": {
        "key": "agent-app-request-authenticated",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 860163,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "openai-default-models": {
        "key": "openai-default-models",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_group_type",
          "condition_index": 0,
          "description": "No group type"
        },
        "metadata": {
          "id": 766237,
          "version": 8,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "usage-ledger-read-mode": {
        "key": "usage-ledger-read-mode",
        "enabled": true,
        "variant": "pg",
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 792379,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "app-source-check": {
        "key": "app-source-check",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 1,
          "description": "Matched condition set 2"
        },
        "metadata": {
          "id": 741743,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "g3-notification-center-enterprise-domain": {
        "key": "g3-notification-center-enterprise-domain",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 4,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 813189,
          "version": 19,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "model-pricing-plan-defaults": {
        "key": "model-pricing-plan-defaults",
        "enabled": true,
        "variant": "gemini-flash",
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 888957,
          "version": 11,
          "description": null,
          "payload": "{\"planModelDefaults\":{\"basic\":{\"tiers\":{\"lite\":\"gemini-3.8-flash:low\",\"medium\":\"gemini-3.8-flash\",\"heavy\":\"gemini-3.8-flash\"}},\"plus\":{\"tiers\":{\"lite\":\"gemini-3.8-flash:low\",\"medium\":\"gemini-3.8-flash\",\"heavy\":\"gemini-3.8-flash\"}}}}",
          "has_experiment": false
        }
      },
      "g3-notification-center-inverted-routing": {
        "key": "g3-notification-center-inverted-routing",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 829884,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "run-backend-code": {
        "key": "run-backend-code",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 740718,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "transcript_classifier_judge_sample_rate": {
        "key": "transcript_classifier_judge_sample_rate",
        "enabled": true,
        "variant": "20",
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 856278,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "dashboard-notifications-help-modal": {
        "key": "dashboard-notifications-help-modal",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 729288,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "search-indexing": {
        "key": "search-indexing",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 736958,
          "version": 12,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "automation-suggestions": {
        "key": "automation-suggestions",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 1,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 843646,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "dashboard-sort-orgs-alphabetically": {
        "key": "dashboard-sort-orgs-alphabetically",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 733813,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "bill-compaction-spend": {
        "key": "bill-compaction-spend",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 734498,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "enterprise-permissions-ui": {
        "key": "enterprise-permissions-ui",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 1,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 875907,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "model-pricing-variant": {
        "key": "model-pricing-variant",
        "enabled": true,
        "variant": "paywall-intent",
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 831836,
          "version": 6,
          "description": null,
          "payload": "{\"paywallIntent\":{\"enabled\":true}}",
          "has_experiment": false
        }
      },
      "evans-skills": {
        "key": "evans-skills",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 1,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 725298,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "free-tier-segmentation": {
        "key": "free-tier-segmentation",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 731427,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "glide-agents": {
        "key": "glide-agents",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 1,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 874956,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "compaction-parent-summarizer": {
        "key": "compaction-parent-summarizer",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 734226,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "g3-descope-sso-surface": {
        "key": "g3-descope-sso-surface",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 767616,
          "version": 8,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "app-store-bundles": {
        "key": "app-store-bundles",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 764311,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "app-store": {
        "key": "app-store",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 721253,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "view-app-preview-label": {
        "key": "view-app-preview-label",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 731045,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "build-execution-discipline": {
        "key": "build-execution-discipline",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 860317,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "prevent-multi-provider-sessions": {
        "key": "prevent-multi-provider-sessions",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 761823,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "survey-targeting-e3ffea5721-custom": {
        "key": "survey-targeting-e3ffea5721-custom",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 707541,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "posthog-tool-call-io-spans": {
        "key": "posthog-tool-call-io-spans",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 720980,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "design-signature-element": {
        "key": "design-signature-element",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 753503,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "status-indicator": {
        "key": "status-indicator",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 654552,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "g3-invite-email-via-notification-center": {
        "key": "g3-invite-email-via-notification-center",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 694379,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "app-gate-json-401": {
        "key": "app-gate-json-401",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 1,
          "description": "Matched condition set 2"
        },
        "metadata": {
          "id": 844776,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "usage-billing-cycle-filter": {
        "key": "usage-billing-cycle-filter",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 804523,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "preview-single-reload": {
        "key": "preview-single-reload",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 806597,
          "version": 8,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "org-system-prompt": {
        "key": "org-system-prompt",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 847266,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "file-history": {
        "key": "file-history",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 1,
          "description": "Matched condition set 2"
        },
        "metadata": {
          "id": 754346,
          "version": 9,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "outage-banner": {
        "key": "outage-banner",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 747498,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "audit-schema-events": {
        "key": "audit-schema-events",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 862663,
          "version": 5,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "new-design": {
        "key": "new-design",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 776233,
          "version": 38,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "slash-commands": {
        "key": "slash-commands",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 783609,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "generate-with-imagegpt": {
        "key": "generate-with-imagegpt",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 714248,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "audit-log": {
        "key": "audit-log",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 847430,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "transcript_archive_enabled": {
        "key": "transcript_archive_enabled",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 820953,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "survey-targeting-ec314d518f-custom": {
        "key": "survey-targeting-ec314d518f-custom",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 691160,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "visual-explainer": {
        "key": "visual-explainer",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 755693,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "qr-air-drop": {
        "key": "qr-air-drop",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 1,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 800899,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "dashboard-share-feedback": {
        "key": "dashboard-share-feedback",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 692021,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "enable-vanity-urls": {
        "key": "enable-vanity-urls",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_group_type",
          "condition_index": 0,
          "description": "No group type"
        },
        "metadata": {
          "id": 691547,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "agent-schema-context": {
        "key": "agent-schema-context",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 880661,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "transcript_classifier_sample_rate": {
        "key": "transcript_classifier_sample_rate",
        "enabled": true,
        "variant": "100",
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 858803,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "survey-targeting-c4b5d2583e-custom": {
        "key": "survey-targeting-c4b5d2583e-custom",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 741551,
          "version": 10,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "error-missing-packages": {
        "key": "error-missing-packages",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 839418,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "file-history-ledger": {
        "key": "file-history-ledger",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 754345,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "reduced-signup-credits": {
        "key": "reduced-signup-credits",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 819364,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "org-background-image": {
        "key": "org-background-image",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 763704,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "integration-scope-check": {
        "key": "integration-scope-check",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 892724,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "open-data-on-load-task": {
        "key": "open-data-on-load-task",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 858222,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "global_search": {
        "key": "global_search",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 675532,
          "version": 12,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "chat-item-live-state": {
        "key": "chat-item-live-state",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 877183,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "instant-shell": {
        "key": "instant-shell",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_group_type",
          "condition_index": 1,
          "description": "No group type"
        },
        "metadata": {
          "id": 864276,
          "version": 8,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "enable-billing": {
        "key": "enable-billing",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 3,
          "description": "Matched condition set 4"
        },
        "metadata": {
          "id": 684601,
          "version": 16,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "enable-mcp-service": {
        "key": "enable-mcp-service",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 683167,
          "version": 12,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "project-visibility": {
        "key": "project-visibility",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 804832,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "data-sync-skill": {
        "key": "data-sync-skill",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 862122,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "top-level-integration": {
        "key": "top-level-integration",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 843240,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "data-residency-staff": {
        "key": "data-residency-staff",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 814167,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "g3-magic-link-via-notification-center": {
        "key": "g3-magic-link-via-notification-center",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 687261,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "app-asset-relay": {
        "key": "app-asset-relay",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 834908,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "post-build-suggestions": {
        "key": "post-build-suggestions",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 1,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 753889,
          "version": 5,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "suggest-app-tool": {
        "key": "suggest-app-tool",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 799156,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "qr-code-preview-easy-access": {
        "key": "qr-code-preview-easy-access",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 801327,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "plan-mode": {
        "key": "plan-mode",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set (group conditions were not evaluated because no group type was provided)"
        },
        "metadata": {
          "id": 651686,
          "version": 18,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "view-transitions": {
        "key": "view-transitions",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 747146,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "glidedesk-widget": {
        "key": "glidedesk-widget",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 896678,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "debug-toolbar": {
        "key": "debug-toolbar",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 661779,
          "version": 10,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "model-pricing-org-override": {
        "key": "model-pricing-org-override",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 890661,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "app-triggers": {
        "key": "app-triggers",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 870162,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "new-plans": {
        "key": "new-plans",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 819423,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "show-inline-screenshots": {
        "key": "show-inline-screenshots",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 852647,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "app-public-paths": {
        "key": "app-public-paths",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 1,
          "description": "Matched condition set 2"
        },
        "metadata": {
          "id": 845803,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "data-backups": {
        "key": "data-backups",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 744675,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "composer-context-menus": {
        "key": "composer-context-menus",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 2,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 895260,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "agent-app-request-privileged": {
        "key": "agent-app-request-privileged",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 749444,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "publish-share-buttons-right-aligned": {
        "key": "publish-share-buttons-right-aligned",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 712346,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "always-allow-send-message": {
        "key": "always-allow-send-message",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 703693,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "g3-signin-email-otp": {
        "key": "g3-signin-email-otp",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 787245,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "app-project-permissions-gate": {
        "key": "app-project-permissions-gate",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_group_type",
          "condition_index": 0,
          "description": "No group type"
        },
        "metadata": {
          "id": 887970,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "openai-aligned-lightweight": {
        "key": "openai-aligned-lightweight",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 837513,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "usage-ledger-pg-read": {
        "key": "usage-ledger-pg-read",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 792388,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "enable-native-publish": {
        "key": "enable-native-publish",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_group_type",
          "condition_index": 0,
          "description": "No group type"
        },
        "metadata": {
          "id": 877649,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "in-chat-human-assist": {
        "key": "in-chat-human-assist",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 888119,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "mobile-view-switcher": {
        "key": "mobile-view-switcher",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 819863,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "onboarding-modal-v2": {
        "key": "onboarding-modal-v2",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 847957,
          "version": 6,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "project-change-log": {
        "key": "project-change-log",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 874754,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "app-settings": {
        "key": "app-settings",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 880155,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "chat-version-restore": {
        "key": "chat-version-restore",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 862365,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "duplicate-project": {
        "key": "duplicate-project",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 767900,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "g3-notification-center-domain-demote": {
        "key": "g3-notification-center-domain-demote",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 3,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 816331,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "project-search-index": {
        "key": "project-search-index",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 862610,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "agent-app-request-tool": {
        "key": "agent-app-request-tool",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 749443,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "fast-start": {
        "key": "fast-start",
        "enabled": true,
        "variant": "template",
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 862006,
          "version": 5,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "dashboard-project-name-tooltip": {
        "key": "dashboard-project-name-tooltip",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 729285,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "survey-targeting-3bea1402b3-custom": {
        "key": "survey-targeting-3bea1402b3-custom",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 702798,
          "version": 4,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "enable-apple-app-store": {
        "key": "enable-apple-app-store",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "out_of_rollout_bound",
          "condition_index": 0,
          "description": "Out of rollout bound"
        },
        "metadata": {
          "id": 873762,
          "version": 1,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "model-pricing-base": {
        "key": "model-pricing-base",
        "enabled": true,
        "variant": null,
        "reason": {
          "code": "condition_match",
          "condition_index": 0,
          "description": "Matched condition set 1"
        },
        "metadata": {
          "id": 831835,
          "version": 1,
          "description": null,
          "payload": "{\"version\":1,\"referenceModel\":{\"id\":\"claude-sonnet-4-6\",\"card\":{\"input\":3,\"output\":15,\"cachedInput\":0.3}},\"models\":{\"openai/gpt-5.6-luna\":{\"effective\":{\"input\":0.2,\"output\":1.2,\"cachedInput\":0.02},\"modes\":{\"free\":\"shadow\",\"default\":\"passthrough\"}},\"openai/gpt-5.6-terra\":{\"effective\":{\"input\":2,\"output\":12,\"cachedInput\":0.2},\"modes\":{\"default\":\"passthrough\"}}},\"freeBudget\":{\"cents\":150,\"windowDays\":30,\"segments\":{\"basic\":30,\"premium\":150}},\"freeModelAccess\":{\"forcedModel\":\"openai/gpt-5.6-luna:xhigh\",\"applyTo\":\"all\"},\"paywallIntent\":{\"enabled\":false,\"threshold\":0.85,\"minTurns\":3,\"ttlDays\":7}}",
          "has_experiment": false
        }
      },
      "show-tool-input-output": {
        "key": "show-tool-input-output",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 705418,
          "version": 3,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "builder-files-tab": {
        "key": "builder-files-tab",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 664649,
          "version": 9,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      },
      "dashboard-open-selected-data-table": {
        "key": "dashboard-open-selected-data-table",
        "enabled": false,
        "variant": null,
        "reason": {
          "code": "no_condition_match",
          "condition_index": 0,
          "description": "No matching condition set"
        },
        "metadata": {
          "id": 705416,
          "version": 2,
          "description": null,
          "payload": null,
          "has_experiment": false
        }
      }
    },
    "$minimal_flag_called_events": false,
    "$feature_flag_request_id": "b632238e-685f-486b-a690-cff1faa9e57c",
    "$feature_flag_evaluated_at": 1789869455190
  }
}