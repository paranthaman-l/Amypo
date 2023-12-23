package com.amypo.amypobackend.Models.enumerate;

import static com.amypo.amypobackend.Models.enumerate.Permission.ADMIN_CREATE;
import static com.amypo.amypobackend.Models.enumerate.Permission.ADMIN_DELETE;
import static com.amypo.amypobackend.Models.enumerate.Permission.ADMIN_READ;
import static com.amypo.amypobackend.Models.enumerate.Permission.ADMIN_UPDATE;

import static com.amypo.amypobackend.Models.enumerate.Permission.TRAINER_CREATE;
import static com.amypo.amypobackend.Models.enumerate.Permission.TRAINER_DELETE;
import static com.amypo.amypobackend.Models.enumerate.Permission.TRAINER_READ;
import static com.amypo.amypobackend.Models.enumerate.Permission.TRAINER_UPDATE;

import static com.amypo.amypobackend.Models.enumerate.Permission.DEVELOPER_CREATE;
import static com.amypo.amypobackend.Models.enumerate.Permission.DEVELOPER_DELETE;
import static com.amypo.amypobackend.Models.enumerate.Permission.DEVELOPER_READ;
import static com.amypo.amypobackend.Models.enumerate.Permission.DEVELOPER_UPDATE;

import static com.amypo.amypobackend.Models.enumerate.Permission.CONTENTDEVELOPER_CREATE;
import static com.amypo.amypobackend.Models.enumerate.Permission.CONTENTDEVELOPER_DELETE;
import static com.amypo.amypobackend.Models.enumerate.Permission.CONTENTDEVELOPER_READ;
import static com.amypo.amypobackend.Models.enumerate.Permission.CONTENTDEVELOPER_UPDATE;

import static com.amypo.amypobackend.Models.enumerate.Permission.BDM_CREATE;
import static com.amypo.amypobackend.Models.enumerate.Permission.BDM_DELETE;
import static com.amypo.amypobackend.Models.enumerate.Permission.BDM_READ;
import static com.amypo.amypobackend.Models.enumerate.Permission.BDM_UPDATE;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum Role {
    ADMIN(Set.of(
            ADMIN_READ,
            ADMIN_CREATE,
            ADMIN_UPDATE,
            ADMIN_DELETE))
            ,

    TRAINER(Set.of(
            TRAINER_READ,
            TRAINER_CREATE,
            TRAINER_UPDATE,
            TRAINER_DELETE)),

    DEVELOPER(Set.of(
            DEVELOPER_READ,
            DEVELOPER_CREATE,
            DEVELOPER_UPDATE,
            DEVELOPER_DELETE)),

    CONTENTDEVELOPER(Set.of(
            CONTENTDEVELOPER_READ,
            CONTENTDEVELOPER_CREATE,
            CONTENTDEVELOPER_UPDATE,
            CONTENTDEVELOPER_DELETE)),

    BDM(Set.of(
            BDM_READ,
            BDM_CREATE,
            BDM_UPDATE,
            BDM_DELETE));


    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthority() {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();

        for (Permission permission : getPermissions()) {
            authorities.add(new SimpleGrantedAuthority(permission.getPermission()));
        }

        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
