const openapi1 = {
    components: {
        schemas: {
            AbstractAuthConfig: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    source: {type: "string"},
                    sourceName: {type: "string"},
                    enable: {type: "boolean"},
                    enableRegister: {type: "boolean"},
                    authType: {type: "string"},
                },
                discriminator: {propertyName: "authType"},
            },
            AbstractAuthConfig_Public: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    source: {type: "string"},
                    sourceName: {type: "string"},
                    enable: {type: "boolean"},
                    enableRegister: {type: "boolean"},
                    authType: {type: "string"},
                },
                discriminator: {propertyName: "authType"},
            },
            AddMemberRequest: {type: "object", properties: {userId: {type: "string"}, role: {type: "string"}}},
            Application: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    orgId: {type: "string", writeOnly: true},
                    name: {type: "string"},
                    applicationType: {type: "integer", format: "int32"},
                    applicationStatus: {type: "string", enum: ["NORMAL", "RECYCLED", "DELETED"]},
                    publishedApplicationDSL: {type: "object", additionalProperties: {type: "object"}, writeOnly: true},
                    publicToAll: {type: "boolean"},
                    editingApplicationDSL: {type: "object", additionalProperties: {type: "object"}},
                    createdBy: {type: "string"},
                    organizationId: {type: "string"},
                    editingQueries: {uniqueItems: true, type: "array", items: {$ref: "#/components/schemas/ApplicationQuery"}},
                    liveQueries: {uniqueItems: true, type: "array", items: {$ref: "#/components/schemas/ApplicationQuery"}},
                    editingModules: {uniqueItems: true, type: "array", items: {type: "string"}},
                    liveModules: {uniqueItems: true, type: "array", items: {type: "string"}},
                    liveContainerSize: {type: "object"},
                },
            },
            ApplicationHistorySnapshotRequest: {
                type: "object",
                properties: {
                    applicationId: {type: "string"},
                    dsl: {type: "object", additionalProperties: {type: "object"}},
                    context: {type: "object", additionalProperties: {type: "object"}},
                },
            },
            ApplicationInfoView: {
                type: "object",
                properties: {
                    orgId: {type: "string"},
                    applicationId: {type: "string"},
                    name: {type: "string"},
                    createAt: {type: "integer", format: "int64"},
                    createBy: {type: "string"},
                    role: {type: "string"},
                    applicationType: {type: "integer", format: "int32"},
                    applicationStatus: {type: "string", enum: ["NORMAL", "RECYCLED", "DELETED"]},
                    containerSize: {type: "object"},
                    folderId: {type: "string"},
                    lastViewTime: {type: "integer", format: "int64"},
                    lastModifyTime: {type: "integer", format: "int64"},
                    publicToAll: {type: "boolean"},
                    folder: {type: "boolean"},
                },
            },
            ApplicationPermissionView: {
                type: "object",
                properties: {
                    orgName: {type: "string"},
                    groupPermissions: {type: "array", items: {$ref: "#/components/schemas/PermissionItemView"}},
                    userPermissions: {type: "array", items: {$ref: "#/components/schemas/PermissionItemView"}},
                    creatorId: {type: "string"},
                    publicToAll: {type: "boolean"},
                    permissions: {type: "array", items: {$ref: "#/components/schemas/PermissionItemView"}},
                },
            },
            ApplicationPublicToAllRequest: {type: "object", properties: {publicToAll: {type: "boolean"}}},
            ApplicationQuery: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    name: {type: "string"},
                    datasourceId: {type: "string", writeOnly: true},
                    comp: {type: "object", additionalProperties: {type: "object"}, writeOnly: true},
                    triggerType: {type: "string"},
                    timeout: {type: "string", writeOnly: true},
                    compType: {type: "string", writeOnly: true},
                    baseQuery: {$ref: "#/components/schemas/BaseQuery"},
                    timeoutStr: {type: "string"},
                    usingLibraryQuery: {type: "boolean"},
                    libraryRecordQueryId: {$ref: "#/components/schemas/LibraryQueryCombineId"},
                },
            },
            ApplicationView: {
                type: "object",
                properties: {
                    applicationInfoView: {$ref: "#/components/schemas/ApplicationInfoView"},
                    applicationDSL: {type: "object", additionalProperties: {type: "object"}},
                    moduleDSL: {type: "object", additionalProperties: {type: "object", additionalProperties: {type: "object"}}},
                    orgCommonSettings: {type: "object", additionalProperties: {type: "object"}},
                    templateId: {type: "string"},
                },
            },
            AuthConfigRequest: {
                type: "object",
                properties: {
                    authType: {type: "string"},
                    enableRegister: {type: "boolean"},
                    clientId: {type: "string"},
                    clientSecret: {type: "string"},
                    id: {type: "string"},
                    empty: {type: "boolean"},
                },
                additionalProperties: {type: "object"},
            },
            BaseQuery: {
                type: "object",
                properties: {
                    datasourceId: {type: "string"},
                    compType: {type: "string"},
                    comp: {type: "object", additionalProperties: {type: "object"}},
                    timeout: {type: "string"},
                },
            },
            BatchAddPermissionRequest: {
                type: "object",
                properties: {
                    role: {type: "string"},
                    userIds: {uniqueItems: true, type: "array", items: {type: "string"}},
                    groupIds: {uniqueItems: true, type: "array", items: {type: "string"}},
                },
            },
            Column: {
                type: "object",
                properties: {name: {type: "string"}, type: {type: "string"}, defaultValue: {type: "string"}, isAutogenerated: {type: "boolean"}},
            },
            CommonPermissionView: {
                type: "object",
                properties: {
                    orgName: {type: "string"},
                    groupPermissions: {type: "array", items: {$ref: "#/components/schemas/PermissionItemView"}},
                    userPermissions: {type: "array", items: {$ref: "#/components/schemas/PermissionItemView"}},
                    creatorId: {type: "string"},
                    permissions: {type: "array", items: {$ref: "#/components/schemas/PermissionItemView"}},
                },
            },
            ConfigView_Public: {
                type: "object",
                properties: {
                    authConfigs: {type: "array", items: {$ref: "#/components/schemas/AbstractAuthConfig_Public"}},
                    workspaceMode: {type: "string", enum: ["SAAS", "ENTERPRISE"]},
                    selfDomain: {type: "boolean"},
                    cookieName: {type: "string"},
                    cloudHosting: {type: "boolean"},
                },
            },
            Connection: {
                required: ["rawId", "source"],
                type: "object",
                properties: {
                    authId: {type: "string"},
                    source: {type: "string"},
                    rawId: {type: "string", writeOnly: true},
                    name: {type: "string"},
                    avatar: {type: "string"},
                    authConnectionAuthToken: {$ref: "#/components/schemas/ConnectionAuthToken"},
                    rawUserInfo: {type: "object", additionalProperties: {type: "object"}},
                    tokens: {uniqueItems: true, type: "array", items: {type: "string"}},
                },
            },
            ConnectionAuthToken: {
                type: "object",
                properties: {
                    accessToken: {type: "string"},
                    expireAt: {type: "integer", format: "int64"},
                    refreshToken: {type: "string"},
                    refreshTokenExpireAt: {type: "integer", format: "int64"},
                    source: {type: "string", deprecated: true},
                    refreshTokenExpired: {type: "boolean"},
                    accessTokenExpired: {type: "boolean"},
                },
            },
            CreateApplicationRequest: {
                type: "object",
                properties: {
                    orgId: {type: "string"},
                    name: {type: "string"},
                    applicationType: {type: "integer", format: "int32"},
                    publishedApplicationDSL: {type: "object", additionalProperties: {type: "object"}},
                    editingApplicationDSL: {type: "object", additionalProperties: {type: "object"}},
                    folderId: {type: "string"},
                },
            },
            CreateGroupRequest: {required: ["name"], type: "object", properties: {name: {type: "string"}, dynamicRule: {type: "string"}}},
            Datasource: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    createdBy: {type: "string"},
                    name: {type: "string"},
                    type: {type: "string"},
                    organizationId: {type: "string"},
                    creationSource: {type: "integer", format: "int32"},
                    datasourceStatus: {type: "string", enum: ["NORMAL", "DELETED"]},
                    pluginDefinition: {
                        type: "object",
                        properties: {
                            queryConfigDynamic: {type: "boolean"},
                            datasourceConfigExtraDynamic: {type: "boolean"},
                            name: {type: "string"},
                            id: {type: "string"},
                            empty: {type: "boolean"},
                        },
                        additionalProperties: {type: "object"},
                    },
                    createTime: {type: "integer", format: "int64"},
                    datasourceConfig: {$ref: "#/components/schemas/DatasourceConnectionConfig"},
                },
            },
            DatasourceConnectionConfig: {type: "object"},
            DatasourceConnectionConfig_Public: {type: "object"},
            DatasourceMetaInfo: {
                type: "object",
                properties: {
                    version: {type: "string"},
                    hasStructureInfo: {type: "boolean"},
                    definition: {type: "object"},
                    id: {type: "string"},
                    name: {type: "string"},
                },
            },
            DatasourceStructure: {type: "object", properties: {tables: {type: "array", items: {$ref: "#/components/schemas/Table"}}}},
            DatasourceView_Public: {
                type: "object",
                properties: {datasource: {$ref: "#/components/schemas/Datasource_Public"}, edit: {type: "boolean"}, creatorName: {type: "string"}},
            },
            Datasource_Public: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    createdBy: {type: "string"},
                    name: {type: "string"},
                    type: {type: "string"},
                    organizationId: {type: "string"},
                    creationSource: {type: "integer", format: "int32"},
                    datasourceStatus: {type: "string", enum: ["NORMAL", "DELETED"]},
                    pluginDefinition: {
                        type: "object",
                        properties: {
                            queryConfigDynamic: {type: "boolean"},
                            datasourceConfigExtraDynamic: {type: "boolean"},
                            name: {type: "string"},
                            id: {type: "string"},
                            empty: {type: "boolean"},
                        },
                        additionalProperties: {type: "object"},
                    },
                    createTime: {type: "integer", format: "int64"},
                    datasourceConfig: {$ref: "#/components/schemas/DatasourceConnectionConfig_Public"},
                },
            },
            Folder: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    createdBy: {type: "string"},
                    organizationId: {type: "string"},
                    parentFolderId: {type: "string"},
                    name: {type: "string"},
                },
            },
            FolderInfoView: {
                type: "object",
                properties: {
                    orgId: {type: "string"},
                    folderId: {type: "string"},
                    parentFolderId: {type: "string"},
                    name: {type: "string"},
                    createAt: {type: "integer", format: "int64"},
                    createBy: {type: "string"},
                    subFolders: {type: "array", items: {$ref: "#/components/schemas/FolderInfoView"}},
                    subApplications: {type: "array", items: {$ref: "#/components/schemas/ApplicationInfoView"}},
                    createTime: {type: "integer", format: "int64"},
                    lastViewTime: {type: "integer", format: "int64"},
                    visible: {type: "boolean"},
                    manageable: {type: "boolean"},
                    folder: {type: "boolean"},
                },
            },
            FormLoginRequest: {
                type: "object",
                properties: {
                    loginId: {type: "string"},
                    password: {type: "string"},
                    register: {type: "boolean"},
                    source: {type: "string"},
                    authId: {type: "string"},
                },
            },
            GetPluginDynamicConfigRequestDTO: {
                type: "object",
                properties: {
                    dataSourceId: {type: "string"},
                    pluginName: {type: "string"},
                    path: {type: "string"},
                    dataSourceConfig: {type: "object", additionalProperties: {type: "object"}},
                },
            },
            GroupMemberAggregateView: {
                type: "object",
                properties: {visitorRole: {type: "string"}, members: {type: "array", items: {$ref: "#/components/schemas/GroupMemberView"}}},
            },
            GroupMemberView: {
                type: "object",
                properties: {
                    joinTime: {type: "integer", format: "int64"},
                    orgId: {type: "string"},
                    role: {type: "string"},
                    userId: {type: "string"},
                    avatarUrl: {type: "string"},
                    userName: {type: "string"},
                    groupId: {type: "string"},
                },
            },
            GroupView: {
                type: "object",
                properties: {
                    groupId: {type: "string"},
                    groupName: {type: "string"},
                    allUsersGroup: {type: "boolean"},
                    visitorRole: {type: "string"},
                    createTime: {type: "integer", format: "int64"},
                    dynamicRule: {type: "string"},
                    devGroup: {type: "boolean"},
                    syncGroup: {type: "boolean"},
                    syncDelete: {type: "boolean"},
                },
            },
            HistorySnapshotDslView: {
                type: "object",
                properties: {
                    applicationsDsl: {type: "object", additionalProperties: {type: "object"}},
                    moduleDSL: {type: "object", additionalProperties: {type: "object", additionalProperties: {type: "object"}}},
                },
            },
            InvitationVO: {
                type: "object",
                properties: {inviteCode: {type: "string"}, createUserName: {type: "string"}, invitedOrganizationName: {type: "string"}},
            },
            JsLibraryMeta: {
                type: "object",
                properties: {
                    name: {type: "string"},
                    latestVersion: {type: "string"},
                    homepage: {type: "string"},
                    description: {type: "string"},
                    downloadUrl: {type: "string"},
                },
            },
            JsonNode: {type: "object"},
            Key: {type: "object", properties: {type: {type: "string"}}},
            LibraryQuery: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    organizationId: {type: "string"},
                    name: {type: "string"},
                    libraryQueryDSL: {type: "object", additionalProperties: {type: "object"}},
                    createdBy: {type: "string"},
                    baseQuerySupplier: {type: "object"},
                    query: {$ref: "#/components/schemas/BaseQuery"},
                },
            },
            LibraryQueryAggregateView: {
                type: "object",
                properties: {
                    libraryQueryMetaView: {$ref: "#/components/schemas/LibraryQueryMetaView"},
                    recordMetaViewList: {type: "array", items: {$ref: "#/components/schemas/LibraryQueryRecordMetaView"}},
                },
            },
            LibraryQueryCombineId: {
                type: "object",
                properties: {
                    libraryQueryId: {type: "string"},
                    libraryQueryRecordId: {type: "string"},
                    usingEditingRecord: {type: "boolean"},
                    usingLiveRecord: {type: "boolean"},
                },
            },
            LibraryQueryMetaView: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    datasourceType: {type: "string"},
                    organizationId: {type: "string"},
                    name: {type: "string"},
                    createTime: {type: "integer", format: "int64"},
                    creatorName: {type: "string"},
                },
            },
            LibraryQueryPublishRequest: {type: "object", properties: {commitMessage: {type: "string"}, tag: {type: "string"}}},
            LibraryQueryRecordMetaView: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    libraryQueryId: {type: "string"},
                    datasourceType: {type: "string"},
                    tag: {type: "string"},
                    commitMessage: {type: "string"},
                    createTime: {type: "integer", format: "int64"},
                    creatorName: {type: "string"},
                },
            },
            LibraryQueryRequestFromJs: {
                type: "object",
                properties: {
                    libraryQueryName: {type: "string"},
                    libraryQueryRecordId: {type: "string"},
                    params: {type: "array", items: {$ref: "#/components/schemas/Param"}},
                },
            },
            LibraryQueryView: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    organizationId: {type: "string"},
                    name: {type: "string"},
                    libraryQueryDSL: {type: "object", additionalProperties: {type: "object"}},
                    createTime: {type: "integer", format: "int64"},
                    creatorName: {type: "string"},
                },
            },
            MarkUserStatusRequest: {type: "object", properties: {type: {type: "string"}, value: {type: "object"}}},
            MaterialView: {type: "object", properties: {id: {type: "string"}, filename: {type: "string"}}},
            OrgAndVisitorRoleView: {type: "object", properties: {org: {$ref: "#/components/schemas/Organization"}, role: {type: "string"}}},
            OrgMemberListView: {
                type: "object",
                properties: {visitorRole: {type: "string"}, members: {type: "array", items: {$ref: "#/components/schemas/OrgMemberView"}}},
            },
            OrgMemberView: {
                type: "object",
                properties: {
                    userId: {type: "string"},
                    name: {type: "string"},
                    avatarUrl: {type: "string"},
                    role: {type: "string"},
                    joinTime: {type: "integer", format: "int64"},
                    rawUserInfos: {type: "object", additionalProperties: {type: "object", additionalProperties: {type: "object"}}},
                },
            },
            OrgView: {type: "object", properties: {orgId: {type: "string"}, orgName: {type: "string"}}},
            Organization: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    createdBy: {type: "string"},
                    name: {type: "string"},
                    isAutoGeneratedOrganization: {type: "boolean"},
                    contactName: {type: "string"},
                    contactEmail: {type: "string"},
                    contactPhoneNumber: {type: "string"},
                    source: {type: "string"},
                    thirdPartyCompanyId: {type: "string"},
                    state: {type: "string", enum: ["ACTIVE", "DELETED"]},
                    organizationDomain: {$ref: "#/components/schemas/OrganizationDomain"},
                    commonSettings: {type: "object", properties: {empty: {type: "boolean"}}, additionalProperties: {type: "object"}},
                    logoUrl: {type: "string"},
                    createTime: {type: "integer", format: "int64"},
                    authConfigs: {type: "array", items: {$ref: "#/components/schemas/AbstractAuthConfig"}},
                },
            },
            OrganizationDomain: {
                type: "object",
                properties: {domain: {type: "string"}, configs: {type: "array", items: {$ref: "#/components/schemas/AbstractAuthConfig"}}},
            },
            Param: {type: "object", properties: {key: {type: "string"}, value: {type: "object"}}},
            Part: {type: "object"},
            PermissionItemView: {
                type: "object",
                properties: {
                    permissionId: {type: "string"},
                    type: {type: "string", enum: ["USER", "GROUP"]},
                    id: {type: "string"},
                    avatar: {type: "string"},
                    name: {type: "string"},
                    role: {type: "string"},
                },
            },
            QueryExecutionRequest: {
                type: "object",
                properties: {
                    applicationId: {type: "string"},
                    queryId: {type: "string"},
                    libraryQueryId: {type: "string", writeOnly: true},
                    libraryQueryRecordId: {type: "string", writeOnly: true},
                    params: {type: "array", writeOnly: true, items: {$ref: "#/components/schemas/Param"}},
                    viewMode: {type: "boolean"},
                    path: {type: "array", items: {type: "string"}},
                    applicationQueryRequest: {type: "boolean"},
                    libraryQueryCombineId: {$ref: "#/components/schemas/LibraryQueryCombineId"},
                },
            },
            QueryResultView: {
                type: "object",
                properties: {
                    data: {type: "object"},
                    headers: {$ref: "#/components/schemas/JsonNode"},
                    success: {type: "boolean"},
                    code: {type: "integer", format: "int32"},
                    queryCode: {type: "string"},
                    hintMessages: {type: "array", items: {type: "string"}},
                    message: {type: "string"},
                },
            },
            ResetPasswordRequest: {type: "object", properties: {userId: {type: "string"}}},
            ResponseViewApplicationPermissionView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/ApplicationPermissionView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewApplicationView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/ApplicationView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewBoolean: {
                type: "object",
                properties: {code: {type: "integer", format: "int32"}, message: {type: "string"}, data: {type: "boolean"}, success: {type: "boolean"}},
            },
            ResponseViewCommonPermissionView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/CommonPermissionView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewConfigView_Public: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/ConfigView_Public"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewDatasourceStructure: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/DatasourceStructure"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewDatasource_Public: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/Datasource_Public"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewFolderInfoView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/FolderInfoView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewGroupMemberAggregateView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/GroupMemberAggregateView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewGroupView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/GroupView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewHistorySnapshotDslView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/HistorySnapshotDslView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewInvitationVO: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/InvitationVO"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewLibraryQueryRecordMetaView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/LibraryQueryRecordMetaView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewLibraryQueryView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/LibraryQueryView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListAbstractAuthConfig_Public: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/AbstractAuthConfig_Public"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListApplicationInfoView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/ApplicationInfoView"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListDatasource: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/Datasource"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListDatasourceMetaInfo: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/DatasourceMetaInfo"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListDatasourceView_Public: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/DatasourceView_Public"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListGroupView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/GroupView"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListJsLibraryMeta: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/JsLibraryMeta"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListLibraryQueryAggregateView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/LibraryQueryAggregateView"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListLibraryQueryRecordMetaView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/LibraryQueryRecordMetaView"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListLibraryQueryView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/LibraryQueryView"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListMaterialView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {$ref: "#/components/schemas/MaterialView"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewListObject: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "array", items: {type: "object"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewMapStringObject: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "object", additionalProperties: {type: "object"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewMaterialView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/MaterialView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewObject: {
                type: "object",
                properties: {code: {type: "integer", format: "int32"}, message: {type: "string"}, data: {type: "object"}, success: {type: "boolean"}},
            },
            ResponseViewOrgMemberListView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/OrgMemberListView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewOrgView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/OrgView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewOrganizationCommonSettings: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {type: "object", properties: {empty: {type: "boolean"}}, additionalProperties: {type: "object"}},
                    success: {type: "boolean"},
                },
            },
            ResponseViewServerConfig: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/ServerConfig"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewString: {
                type: "object",
                properties: {code: {type: "integer", format: "int32"}, message: {type: "string"}, data: {type: "string"}, success: {type: "boolean"}},
            },
            ResponseViewUserDetail: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/UserDetail"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewUserHomepageView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/UserHomepageView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewUserProfileView: {
                type: "object",
                properties: {
                    code: {type: "integer", format: "int32"},
                    message: {type: "string"},
                    data: {$ref: "#/components/schemas/UserProfileView"},
                    success: {type: "boolean"},
                },
            },
            ResponseViewVoid: {
                type: "object",
                properties: {code: {type: "integer", format: "int32"}, message: {type: "string"}, data: {type: "object"}, success: {type: "boolean"}},
            },
            ServerConfig: {
                type: "object",
                properties: {id: {type: "string"}, createdBy: {type: "string"}, key: {type: "string"}, value: {type: "object"}},
            },
            Table: {
                type: "object",
                properties: {
                    type: {type: "string", enum: ["TABLE", "VIEW", "ALIAS", "COLLECTION"]},
                    schema: {type: "string"},
                    name: {type: "string"},
                    columns: {type: "array", items: {$ref: "#/components/schemas/Column"}},
                    keys: {type: "array", items: {$ref: "#/components/schemas/Key"}},
                },
            },
            TransformedUserInfo: {
                type: "object",
                properties: {updateTime: {type: "integer", format: "int64"}, extra: {type: "object", additionalProperties: {type: "object"}}},
            },
            UpdateConfigRequest: {type: "object", properties: {value: {type: "string"}}},
            UpdateGroupRequest: {type: "object", properties: {groupName: {type: "string"}, dynamicRule: {type: "string"}}},
            UpdateOrgCommonSettingsRequest: {type: "object", properties: {key: {type: "string"}, value: {type: "object"}}},
            UpdateOrgRequest: {
                type: "object",
                properties: {orgName: {type: "string"}, contactName: {type: "string"}, contactEmail: {type: "string"}, contactPhoneNumber: {type: "string"}},
            },
            UpdatePasswordRequest: {type: "object", properties: {oldPassword: {type: "string"}, newPassword: {type: "string"}}},
            UpdatePermissionRequest: {type: "object", properties: {role: {type: "string"}}},
            UpdateRoleRequest: {type: "object", properties: {userId: {type: "string"}, role: {type: "string"}}},
            UpdateUserRequest: {type: "object", properties: {name: {type: "string"}}},
            UploadMaterialRequestDTO: {
                type: "object",
                properties: {filename: {type: "string"}, content: {type: "string"}, type: {type: "string", enum: ["COMMON", "LOGO", "FAVICON"]}},
            },
            UpsertDatasourceRequest: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    name: {type: "string"},
                    type: {type: "string"},
                    organizationId: {type: "string"},
                    datasourceConfig: {type: "object", additionalProperties: {type: "object"}},
                },
            },
            UpsertDatasourceRequest_Public: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    name: {type: "string"},
                    type: {type: "string"},
                    organizationId: {type: "string"},
                    datasourceConfig: {type: "object", additionalProperties: {type: "object"}},
                },
            },
            UpsertLibraryQueryRequest: {
                type: "object",
                properties: {name: {type: "string"}, libraryQueryDSL: {type: "object", additionalProperties: {type: "object"}}},
            },
            User: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    createdBy: {type: "string"},
                    name: {type: "string"},
                    avatar: {type: "string"},
                    tpAvatarLink: {type: "string"},
                    state: {type: "string", enum: ["NEW", "INVITED", "ACTIVATED", "DELETED"]},
                    isEnabled: {type: "boolean"},
                    password: {type: "string", writeOnly: true},
                    isAnonymous: {type: "boolean"},
                    connections: {uniqueItems: true, type: "array", items: {$ref: "#/components/schemas/Connection"}},
                    hasSetNickname: {type: "boolean"},
                    orgTransformedUserInfo: {
                        type: "object",
                        properties: {empty: {type: "boolean"}},
                        additionalProperties: {$ref: "#/components/schemas/TransformedUserInfo"},
                    },
                },
            },
            UserDetail: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    name: {type: "string"},
                    avatarUrl: {type: "string"},
                    email: {type: "string"},
                    ip: {type: "string"},
                    groups: {type: "array", items: {type: "object", additionalProperties: {type: "string"}}},
                    extra: {type: "object", additionalProperties: {type: "object"}},
                },
            },
            UserHomepageView: {
                type: "object",
                properties: {
                    user: {$ref: "#/components/schemas/User"},
                    organization: {$ref: "#/components/schemas/Organization"},
                    folderInfoViews: {type: "array", items: {$ref: "#/components/schemas/FolderInfoView"}},
                    homeApplicationViews: {type: "array", items: {$ref: "#/components/schemas/ApplicationInfoView"}},
                },
            },
            UserProfileView: {
                type: "object",
                properties: {
                    id: {type: "string"},
                    orgAndRoles: {type: "array", items: {$ref: "#/components/schemas/OrgAndVisitorRoleView"}},
                    currentOrgId: {type: "string"},
                    username: {type: "string"},
                    connections: {uniqueItems: true, type: "array", items: {$ref: "#/components/schemas/Connection"}},
                    avatar: {type: "string"},
                    avatarUrl: {type: "string"},
                    hasPassword: {type: "boolean"},
                    hasSetNickname: {type: "boolean"},
                    hasShownNewUserGuidance: {type: "boolean"},
                    userStatus: {type: "object", additionalProperties: {type: "object"}},
                    createdTimeMs: {type: "integer", format: "int64"},
                    ip: {type: "string"},
                    enabled: {type: "boolean"},
                    orgDev: {type: "boolean"},
                    anonymous: {type: "boolean"},
                    isAnonymous: {type: "boolean"},
                    isEnabled: {type: "boolean"},
                },
            },
        },
        securitySchemes: {IBRAINS_CE_SELFHOST_TOKEN: {type: "apiKey", name: "IBRAINS_CE_SELFHOST_TOKEN", in: "cookie"}},
    },
    info: {title: "iBrains API", version: "1.0"},
    openapi: "3.0.1",
    paths: {
        "/api/users/password": {
            put: {
                tags: ["user-controller"],
                operationId: "updatePassword",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdatePasswordRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
            post: {
                tags: ["user-controller"],
                operationId: "setPassword",
                parameters: [{name: "password", in: "query", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/users/newUserGuidanceShown": {
            put: {
                tags: ["user-controller"],
                operationId: "newUserGuidanceShown",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/users/mark-status": {
            put: {
                tags: ["user-controller"],
                operationId: "markStatus",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/MarkUserStatusRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/users": {
            put: {
                tags: ["user-controller"],
                operationId: "update",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdateUserRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewUserProfileView"}}}}},
            },
        },
        "/api/organizations/{orgId}/update": {
            put: {
                tags: ["organization-controller"],
                operationId: "update_1",
                parameters: [{name: "orgId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdateOrgRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/organizations/{orgId}/role": {
            put: {
                tags: ["organization-controller"],
                operationId: "updateRoleForMember",
                parameters: [{name: "orgId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdateRoleRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/organizations/{orgId}/common-settings": {
            get: {
                tags: ["organization-controller"],
                operationId: "getOrgCommonSettings",
                parameters: [{name: "orgId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewOrganizationCommonSettings"}}}}},
            },
            put: {
                tags: ["organization-controller"],
                operationId: "updateOrgCommonSettings",
                parameters: [{name: "orgId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdateOrgCommonSettingsRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/organizations/switchOrganization/{orgId}": {
            put: {
                tags: ["organization-controller"],
                operationId: "setCurrentOrganization",
                parameters: [{name: "orgId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewObject"}}}}},
            },
        },
        "/api/groups/{groupId}/update": {
            put: {
                tags: ["group-controller"],
                operationId: "update_2",
                parameters: [{name: "groupId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdateGroupRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/groups/{groupId}/role": {
            put: {
                tags: ["group-controller"],
                operationId: "updateRoleForMember_1",
                parameters: [{name: "groupId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdateRoleRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/datasources/{id}": {
            get: {
                tags: ["datasource-controller"],
                operationId: "getById",
                parameters: [{name: "id", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewDatasource_Public"}}}}},
            },
            put: {
                tags: ["datasource-controller"],
                operationId: "update_3",
                parameters: [{name: "id", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpsertDatasourceRequest_Public"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewDatasource_Public"}}}}},
            },
            delete: {
                tags: ["datasource-controller"],
                operationId: "delete_1",
                parameters: [{name: "id", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/datasources/{datasourceId}/permissions": {
            get: {
                tags: ["datasource-controller"],
                operationId: "getPermissions",
                parameters: [{name: "datasourceId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewCommonPermissionView"}}}}},
            },
            put: {
                tags: ["datasource-controller"],
                operationId: "grantPermission",
                parameters: [{name: "datasourceId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/BatchAddPermissionRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/datasources/permissions/{permissionId}": {
            put: {
                tags: ["datasource-controller"],
                operationId: "updatePermission",
                parameters: [{name: "permissionId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdatePermissionRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
            delete: {
                tags: ["datasource-controller"],
                operationId: "deletePermission",
                parameters: [{name: "permissionId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/applications/{applicationId}/public-to-all": {
            put: {
                tags: ["application-controller"],
                operationId: "setApplicationPublicToAll",
                parameters: [{name: "applicationId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/ApplicationPublicToAllRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/applications/{applicationId}/permissions/{permissionId}": {
            put: {
                tags: ["application-controller"],
                operationId: "updatePermission_1",
                parameters: [
                    {name: "applicationId", in: "path", required: true, schema: {type: "string"}},
                    {name: "permissionId", in: "path", required: true, schema: {type: "string"}},
                ],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdatePermissionRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
            delete: {
                tags: ["application-controller"],
                operationId: "removePermission",
                parameters: [
                    {name: "applicationId", in: "path", required: true, schema: {type: "string"}},
                    {name: "permissionId", in: "path", required: true, schema: {type: "string"}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/applications/{applicationId}/permissions": {
            get: {
                tags: ["application-controller"],
                operationId: "getApplicationPermissions",
                parameters: [{name: "applicationId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewApplicationPermissionView"}}}}},
            },
            put: {
                tags: ["application-controller"],
                operationId: "grantPermission_1",
                parameters: [{name: "applicationId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/BatchAddPermissionRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/applications/{applicationId}": {
            get: {
                tags: ["application-controller"],
                operationId: "getEditingApplication",
                parameters: [{name: "applicationId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewApplicationView"}}}}},
            },
            put: {
                tags: ["application-controller"],
                operationId: "update_4",
                parameters: [{name: "applicationId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/Application"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewApplicationView"}}}}},
            },
            delete: {
                tags: ["application-controller"],
                operationId: "delete_2",
                parameters: [{name: "applicationId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewApplicationView"}}}}},
            },
        },
        "/api/applications/restore/{applicationId}": {
            put: {
                tags: ["application-controller"],
                operationId: "restore",
                parameters: [{name: "applicationId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/applications/recycle/{applicationId}": {
            put: {
                tags: ["application-controller"],
                operationId: "recycle",
                parameters: [{name: "applicationId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/library-queries/{libraryQueryId}": {
            put: {
                tags: ["library-query-controller"],
                operationId: "update_5",
                parameters: [{name: "libraryQueryId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpsertLibraryQueryRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
            delete: {
                tags: ["library-query-controller"],
                operationId: "delete_5",
                parameters: [{name: "libraryQueryId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/folders": {
            put: {
                tags: ["folder-controller"],
                operationId: "update_6",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/Folder"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewFolderInfoView"}}}}},
            },
            post: {
                tags: ["folder-controller"],
                operationId: "create_6",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/Folder"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewFolderInfoView"}}}}},
            },
        },
        "/api/folders/{folderId}/permissions/{permissionId}": {
            put: {
                tags: ["folder-controller"],
                operationId: "updatePermission_2",
                parameters: [
                    {name: "folderId", in: "path", required: true, schema: {type: "string"}},
                    {name: "permissionId", in: "path", required: true, schema: {type: "string"}},
                ],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdatePermissionRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewVoid"}}}}},
            },
            delete: {
                tags: ["folder-controller"],
                operationId: "removePermission_1",
                parameters: [
                    {name: "folderId", in: "path", required: true, schema: {type: "string"}},
                    {name: "permissionId", in: "path", required: true, schema: {type: "string"}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewVoid"}}}}},
            },
        },
        "/api/folders/move/{id}": {
            put: {
                tags: ["folder-controller"],
                operationId: "move",
                parameters: [
                    {name: "id", in: "path", required: true, schema: {type: "string"}},
                    {name: "targetFolderId", in: "query", required: false, schema: {type: "string"}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewVoid"}}}}},
            },
        },
        "/api/users/reset-password": {
            post: {
                tags: ["user-controller"],
                operationId: "resetPassword",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/ResetPasswordRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewString"}}}}},
            },
        },
        "/api/users/photo": {
            get: {tags: ["user-controller"], operationId: "getProfilePhoto_1", responses: {"200": {description: "OK"}}},
            post: {
                tags: ["user-controller"],
                operationId: "uploadProfilePhoto",
                requestBody: {
                    content: {"multipart/form-data": {schema: {required: ["file"], type: "object", properties: {file: {$ref: "#/components/schemas/Part"}}}}},
                },
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
            delete: {
                tags: ["user-controller"],
                operationId: "deleteProfilePhoto",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewVoid"}}}}},
            },
        },
        "/api/query/execute-from-node": {
            post: {
                tags: ["query-controller"],
                operationId: "executeLibraryQueryFromJs",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/LibraryQueryRequestFromJs"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/QueryResultView"}}}}},
            },
        },
        "/api/query/execute": {
            post: {
                tags: ["query-controller"],
                operationId: "execute",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/QueryExecutionRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/QueryResultView"}}}}},
            },
        },
        "/api/organizations/{orgId}/logo": {
            post: {
                tags: ["organization-controller"],
                operationId: "uploadLogo",
                parameters: [{name: "orgId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {
                    content: {"application/json": {schema: {required: ["file"], type: "object", properties: {file: {$ref: "#/components/schemas/Part"}}}}},
                },
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
            delete: {
                tags: ["organization-controller"],
                operationId: "deleteLogo",
                parameters: [{name: "orgId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/organizations": {
            post: {
                tags: ["organization-controller"],
                operationId: "create",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/Organization"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewOrgView"}}}}},
            },
        },
        "/api/invitation": {
            post: {
                tags: ["invitation-controller"],
                operationId: "create_1",
                parameters: [{name: "orgId", in: "query", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewInvitationVO"}}}}},
            },
        },
        "/api/groups/{groupId}/addMember": {
            post: {
                tags: ["group-controller"],
                operationId: "addGroupMember",
                parameters: [{name: "groupId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/AddMemberRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/groups": {
            post: {
                tags: ["group-controller"],
                operationId: "create_2",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/CreateGroupRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewGroupView"}}}}},
            },
        },
        "/api/datasources/test": {
            post: {
                tags: ["datasource-controller"],
                operationId: "testDatasource",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpsertDatasourceRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/datasources/getPluginDynamicConfig": {
            post: {
                tags: ["datasource-controller"],
                operationId: "getPluginDynamicConfig",
                requestBody: {
                    content: {"application/json": {schema: {type: "array", items: {$ref: "#/components/schemas/GetPluginDynamicConfigRequestDTO"}}}},
                    required: true,
                },
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListObject"}}}}},
            },
        },
        "/api/datasources": {
            post: {
                tags: ["datasource-controller"],
                operationId: "create_3",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpsertDatasourceRequest_Public"}}}, required: true},
                responses: {"201": {description: "Created", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewDatasource_Public"}}}}},
            },
        },
        "/api/configs/{key}": {
            get: {
                tags: ["config-controller"],
                operationId: "getServerConfig",
                parameters: [{name: "key", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewServerConfig"}}}}},
            },
            post: {
                tags: ["config-controller"],
                operationId: "updateServerConfig",
                parameters: [{name: "key", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UpdateConfigRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewServerConfig"}}}}},
            },
        },
        "/api/applications/{applicationId}/publish": {
            post: {
                tags: ["application-controller"],
                operationId: "publish",
                parameters: [{name: "applicationId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewApplicationView"}}}}},
            },
        },
        "/api/applications/createFromTemplate": {
            post: {
                tags: ["application-controller"],
                operationId: "createFromTemplate",
                parameters: [{name: "templateId", in: "query", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewApplicationView"}}}}},
            },
        },
        "/api/applications": {
            post: {
                tags: ["application-controller"],
                operationId: "create_4",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/CreateApplicationRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewApplicationView"}}}}},
            },
        },
        "/api/materials": {
            post: {
                tags: ["material-controller"],
                operationId: "upload",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/UploadMaterialRequestDTO"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewMaterialView"}}}}},
            },
        },
        "/api/library-queries": {
            post: {
                tags: ["library-query-controller"],
                operationId: "create_5",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/LibraryQuery"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewLibraryQueryView"}}}}},
            },
        },
        "/api/library-queries/{libraryQueryId}/publish": {
            post: {
                tags: ["library-query-controller"],
                operationId: "publish_1",
                parameters: [{name: "libraryQueryId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/LibraryQueryPublishRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewLibraryQueryRecordMetaView"}}}}},
            },
        },
        "/api/folders/{folderId}/permissions": {
            get: {
                tags: ["folder-controller"],
                operationId: "getApplicationPermissions_1",
                parameters: [{name: "folderId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewApplicationPermissionView"}}}}},
            },
            post: {
                tags: ["folder-controller"],
                operationId: "grantPermission_2",
                parameters: [{name: "folderId", in: "path", required: true, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/BatchAddPermissionRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewVoid"}}}}},
            },
        },
        "/api/auth/tp/login": {
            post: {
                tags: ["authentication-controller"],
                operationId: "loginWithThirdParty",
                parameters: [
                    {name: "authId", in: "query", required: false, schema: {type: "string"}},
                    {name: "source", in: "query", required: false, schema: {type: "string"}},
                    {name: "code", in: "query", required: true, schema: {type: "string"}},
                    {name: "invitationId", in: "query", required: false, schema: {type: "string"}},
                    {name: "redirectUrl", in: "query", required: false, schema: {type: "string"}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/auth/logout": {
            post: {
                tags: ["authentication-controller"],
                operationId: "logout",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/auth/form/login": {
            post: {
                tags: ["authentication-controller"],
                operationId: "formLogin",
                parameters: [{name: "invitationId", in: "query", required: false, schema: {type: "string"}}],
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/FormLoginRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/auth/config": {
            post: {
                tags: ["authentication-controller"],
                operationId: "enableAuthConfig",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/AuthConfigRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewVoid"}}}}},
            },
        },
        "/api/application/history-snapshots": {
            post: {
                tags: ["application-history-snapshot-controller"],
                operationId: "create_7",
                requestBody: {content: {"application/json": {schema: {$ref: "#/components/schemas/ApplicationHistorySnapshotRequest"}}}, required: true},
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/state/healthCheck": {
            head: {
                tags: ["state-controller"],
                operationId: "healthCheck",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/users/userDetail/{id}": {
            get: {
                tags: ["user-controller"],
                operationId: "getUserDetail",
                parameters: [{name: "id", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewObject"}}}}},
            },
        },
        "/api/users/photo/{userId}": {
            get: {
                tags: ["user-controller"],
                operationId: "getProfilePhoto",
                parameters: [{name: "userId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK"}},
            },
        },
        "/api/users/me": {
            get: {
                tags: ["user-controller"],
                operationId: "getUserProfile",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewObject"}}}}},
            },
        },
        "/api/users/currentUser": {
            get: {
                tags: ["user-controller"],
                operationId: "getCurrentUser",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewUserDetail"}}}}},
            },
        },
        "/api/organizations/{orgId}/members": {
            get: {
                tags: ["organization-controller"],
                operationId: "getOrgMembers",
                parameters: [
                    {name: "orgId", in: "path", required: true, schema: {type: "string"}},
                    {name: "page", in: "query", required: false, schema: {type: "integer", format: "int32", default: 0}},
                    {name: "count", in: "query", required: false, schema: {type: "integer", format: "int32", default: 1000}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewOrgMemberListView"}}}}},
            },
        },
        "/api/organizations/{orgId}/datasourceTypes": {
            get: {
                tags: ["organization-controller"],
                operationId: "getSupportedDatasourceTypes",
                parameters: [{name: "orgId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListDatasourceMetaInfo"}}}}},
            },
        },
        "/api/invitation/{invitationId}/invite": {
            get: {
                tags: ["invitation-controller"],
                operationId: "inviteUser",
                parameters: [{name: "invitationId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewObject"}}}}},
            },
        },
        "/api/invitation/{invitationId}": {
            get: {
                tags: ["invitation-controller"],
                operationId: "get",
                parameters: [{name: "invitationId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewInvitationVO"}}}}},
            },
        },
        "/api/groups/{groupId}/members": {
            get: {
                tags: ["group-controller"],
                operationId: "getGroupMembers",
                parameters: [
                    {name: "groupId", in: "path", required: true, schema: {type: "string"}},
                    {name: "page", in: "query", required: false, schema: {type: "integer", format: "int32", default: 1}},
                    {name: "count", in: "query", required: false, schema: {type: "integer", format: "int32", default: 100}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewGroupMemberAggregateView"}}}}},
            },
        },
        "/api/groups/list": {
            get: {
                tags: ["group-controller"],
                operationId: "getOrgGroups",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListGroupView"}}}}},
            },
        },
        "/api/datasources/{datasourceId}/structure": {
            get: {
                tags: ["datasource-controller"],
                operationId: "getStructure",
                parameters: [
                    {name: "datasourceId", in: "path", required: true, schema: {type: "string"}},
                    {name: "ignoreCache", in: "query", required: false, schema: {type: "boolean", default: false}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewDatasourceStructure"}}}}},
            },
        },
        "/api/datasources/listByOrg": {
            get: {
                tags: ["datasource-controller"],
                operationId: "listOrgDataSources",
                parameters: [{name: "orgId", in: "query", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListDatasourceView_Public"}}}}},
            },
        },
        "/api/datasources/listByApp": {
            get: {
                tags: ["datasource-controller"],
                operationId: "listAppDataSources",
                parameters: [{name: "appId", in: "query", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListDatasourceView_Public"}}}}},
                deprecated: true,
            },
        },
        "/api/datasources/jsDatasourcePlugins": {
            get: {
                tags: ["datasource-controller"],
                operationId: "listJsDatasourcePlugins",
                parameters: [{name: "appId", in: "query", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListDatasource"}}}}},
            },
        },
        "/api/datasources/info": {
            get: {
                tags: ["datasource-controller"],
                operationId: "info",
                parameters: [{name: "datasourceId", in: "query", required: false, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewObject"}}}}},
            },
        },
        "/api/configs/deploymentId": {
            get: {
                tags: ["config-controller"],
                operationId: "getDeploymentId",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {type: "string"}}}}},
            },
        },
        "/api/configs": {
            get: {
                tags: ["config-controller"],
                operationId: "getConfig",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewConfigView_Public"}}}}},
            },
        },
        "/api/assets/{id}": {
            get: {
                tags: ["asset-controller"],
                operationId: "getById_1",
                parameters: [{name: "id", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK"}},
            },
        },
        "/api/applications/{applicationId}/view": {
            get: {
                tags: ["application-controller"],
                operationId: "getPublishedApplication",
                parameters: [{name: "applicationId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewApplicationView"}}}}},
            },
        },
        "/api/applications/recycle/list": {
            get: {
                tags: ["application-controller"],
                operationId: "getRecycledApplications",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListApplicationInfoView"}}}}},
            },
        },
        "/api/applications/list": {
            get: {
                tags: ["application-controller"],
                operationId: "getApplications",
                parameters: [
                    {name: "applicationType", in: "query", required: false, schema: {type: "integer", format: "int32"}},
                    {name: "applicationStatus", in: "query", required: false, schema: {type: "string", enum: ["NORMAL", "RECYCLED", "DELETED"]}},
                    {name: "withContainerSize", in: "query", required: false, schema: {type: "boolean", default: true}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListApplicationInfoView"}}}}},
            },
        },
        "/api/applications/home": {
            get: {
                tags: ["application-controller"],
                operationId: "getUserHomePage",
                parameters: [{name: "applicationType", in: "query", required: false, schema: {type: "integer", format: "int32", default: 0}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewUserHomepageView"}}}}},
            },
        },
        "/api/misc/js-library/recommendations": {
            get: {
                tags: ["js-library-controller"],
                operationId: "getRecommendationMetas",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListJsLibraryMeta"}}}}},
            },
        },
        "/api/misc/js-library/metas": {
            get: {
                tags: ["js-library-controller"],
                operationId: "getMeta",
                parameters: [{name: "name", in: "query", required: true, schema: {type: "array", items: {type: "string"}}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListJsLibraryMeta"}}}}},
            },
        },
        "/api/materials/{id}": {
            get: {
                tags: ["material-controller"],
                operationId: "download",
                parameters: [
                    {name: "id", in: "path", required: true, schema: {type: "string"}},
                    {name: "type", in: "query", required: false, schema: {type: "string", default: "download"}},
                ],
                responses: {"200": {description: "OK"}},
            },
            delete: {
                tags: ["material-controller"],
                operationId: "delete_3",
                parameters: [{name: "id", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/materials/list": {
            get: {
                tags: ["material-controller"],
                operationId: "getFileList",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListMaterialView"}}}}},
            },
        },
        "/api/library-query-records": {
            get: {
                tags: ["library-query-record-controller"],
                operationId: "dslById",
                parameters: [
                    {name: "libraryQueryId", in: "query", required: true, schema: {type: "string"}},
                    {name: "libraryQueryRecordId", in: "query", required: true, schema: {type: "string"}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewMapStringObject"}}}}},
            },
        },
        "/api/library-query-records/listByLibraryQueryId": {
            get: {
                tags: ["library-query-record-controller"],
                operationId: "getByLibraryQueryId",
                parameters: [{name: "libraryQueryId", in: "query", required: true, schema: {type: "string"}}],
                responses: {
                    "200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListLibraryQueryRecordMetaView"}}}},
                },
            },
        },
        "/api/library-queries/listByOrg": {
            get: {
                tags: ["library-query-controller"],
                operationId: "list",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListLibraryQueryView"}}}}},
            },
        },
        "/api/library-queries/dropDownList": {
            get: {
                tags: ["library-query-controller"],
                operationId: "dropDownList",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListLibraryQueryAggregateView"}}}}},
            },
        },
        "/api/folders/elements": {
            get: {
                tags: ["folder-controller"],
                operationId: "getElements",
                parameters: [
                    {name: "id", in: "query", required: false, schema: {type: "string"}},
                    {name: "applicationType", in: "query", required: false, schema: {type: "string", enum: ["APPLICATION", "MODULE", "COMPOUND_APPLICATION"]}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListObject"}}}}},
            },
        },
        "/api/auth/configs": {
            get: {
                tags: ["authentication-controller"],
                operationId: "getAllConfigs",
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewListAbstractAuthConfig_Public"}}}}},
            },
        },
        "/api/application/history-snapshots/{applicationId}": {
            get: {
                tags: ["application-history-snapshot-controller"],
                operationId: "listAllHistorySnapshotBriefInfo",
                parameters: [
                    {name: "applicationId", in: "path", required: true, schema: {type: "string"}},
                    {name: "page", in: "query", required: false, schema: {type: "integer", format: "int32", default: 0}},
                    {name: "size", in: "query", required: false, schema: {type: "integer", format: "int32", default: 10}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewMapStringObject"}}}}},
            },
        },
        "/api/application/history-snapshots/{applicationId}/{snapshotId}": {
            get: {
                tags: ["application-history-snapshot-controller"],
                operationId: "getHistorySnapshotDsl",
                parameters: [
                    {name: "applicationId", in: "path", required: true, schema: {type: "string"}},
                    {name: "snapshotId", in: "path", required: true, schema: {type: "string"}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewHistorySnapshotDslView"}}}}},
            },
        },
        "/api/organizations/{orgId}/remove": {
            delete: {
                tags: ["organization-controller"],
                operationId: "removeUserFromOrg",
                parameters: [
                    {name: "orgId", in: "path", required: true, schema: {type: "string"}},
                    {name: "userId", in: "query", required: true, schema: {type: "string"}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/organizations/{orgId}/leave": {
            delete: {
                tags: ["organization-controller"],
                operationId: "leaveOrganization",
                parameters: [{name: "orgId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/organizations/{orgId}": {
            delete: {
                tags: ["organization-controller"],
                operationId: "removeOrg",
                parameters: [{name: "orgId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/groups/{groupId}/remove": {
            delete: {
                tags: ["group-controller"],
                operationId: "removeUser",
                parameters: [
                    {name: "groupId", in: "path", required: true, schema: {type: "string"}},
                    {name: "userId", in: "query", required: true, schema: {type: "string"}},
                ],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/groups/{groupId}/leave": {
            delete: {
                tags: ["group-controller"],
                operationId: "leaveGroup",
                parameters: [{name: "groupId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/groups/{groupId}": {
            delete: {
                tags: ["group-controller"],
                operationId: "delete",
                parameters: [{name: "groupId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewBoolean"}}}}},
            },
        },
        "/api/library-query-records/{libraryQueryRecordId}": {
            delete: {
                tags: ["library-query-record-controller"],
                operationId: "delete_4",
                parameters: [{name: "libraryQueryRecordId", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK"}},
            },
        },
        "/api/folders/{id}": {
            delete: {
                tags: ["folder-controller"],
                operationId: "delete_6",
                parameters: [{name: "id", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewVoid"}}}}},
            },
        },
        "/api/auth/config/{id}": {
            delete: {
                tags: ["authentication-controller"],
                operationId: "disableAuthConfig",
                parameters: [{name: "id", in: "path", required: true, schema: {type: "string"}}],
                responses: {"200": {description: "OK", content: {"*/*": {schema: {$ref: "#/components/schemas/ResponseViewVoid"}}}}},
            },
        },
    },
    security: [{IBRAINS_CE_SELFHOST_TOKEN: []}],
    servers: [{url: "/"}],
}
