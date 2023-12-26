package com.amypo.amypobackend.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.amypo.amypobackend.Models.Attendance;

@Repository
public interface AttendanceRepository extends CrudRepository<Attendance,String> {
    
}
