package com.amypo.amypobackend.Repository;

import java.util.List;
import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.amypo.amypobackend.Models.LeaveModel;

@Repository
public interface LeaveRepository extends JpaRepository<LeaveModel,String> {

    public List<LeaveModel> findAllByStatus(String status);

    List<LeaveModel> findByLeavetypeAndDateBetween(String leaveType, Date startDate, Date endDate);

}