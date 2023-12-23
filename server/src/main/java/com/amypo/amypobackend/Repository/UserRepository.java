package com.amypo.amypobackend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.amypobackend.Models.UserDetailsModel;

@Repository
public interface UserRepository extends JpaRepository<UserDetailsModel,String> {

  Optional<UserDetailsModel>  findByEmail(String username);

}