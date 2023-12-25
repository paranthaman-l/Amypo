package com.amypo.amypobackend.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.amypo.amypobackend.Models.UserDetailsModel;
import com.amypo.amypobackend.Models.enumerate.Role;

@Repository
public interface UserRepository extends JpaRepository<UserDetailsModel, String> {

  Optional<UserDetailsModel> findByEmail(String username);

  @Query("SELECT u FROM UserDetailsModel u WHERE u.role <> 'ADMIN'")
  List<UserDetailsModel> findAllUsersExceptAdmin();

  List<UserDetailsModel> findAllByRole(Role role);

}