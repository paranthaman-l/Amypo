package com.amypo.amypobackend.Models.enumerate;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Permission {
    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    DEVELOPER_READ("developer:read"),
    DEVELOPER_UPDATE("developer:update"),
    DEVELOPER_CREATE("developer:create"),
    DEVELOPER_DELETE("developer:delete"),
    CONTENTDEVELOPER_READ("contentdeveloper:read"),
    CONTENTDEVELOPER_UPDATE("contentdeveloper:update"),
    CONTENTDEVELOPER_CREATE("contentdeveloper:create"),
    CONTENTDEVELOPER_DELETE("contentdeveloper:delete"),
    BDM_READ("bdm:read"),
    BDM_UPDATE("bdm:update"),
    BDM_CREATE("bdm:create"),
    BDM_DELETE("bdm:delete"),
    TRAINER_READ("trainer:read"),
    TRAINER_UPDATE("trainer:update"),
    TRAINER_CREATE("trainer:create"),
    TRAINER_DELETE("trainer:delete");
    @Getter
    private final String permission;
}
