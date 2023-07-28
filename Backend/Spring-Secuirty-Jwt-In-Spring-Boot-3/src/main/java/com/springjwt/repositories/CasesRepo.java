package com.springjwt.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.springjwt.entities.Cases;


public interface CasesRepo extends JpaRepository<Cases,Integer>{



    @Modifying
    @Query(value = "INSERT INTO cases "+ "(case_date,case_description,case_file, case_location,case_name, case_time,police_id,area,user_id,user_name) " +"VALUES (:caseDate , :caseDescription,:caseFile, :location, :caseName, :caseTime," +" (SELECT police_id FROM police WHERE police_location = :area),:area,"+"(SELECT user_id FROM reporter WHERE user_name = :userName AND user_email= :userEmail AND mobile = :userMobile),:userName);", nativeQuery = true)
    void insertCaseWithPoliceId(
    		@Param("caseDate") String caseDate,
    		@Param("caseDescription") String caseDescription,
    		@Param("caseFile") String caseFile,
    		@Param("location") String location,
    		@Param("caseName") String caseName,
    		@Param("caseTime") String caseTime,
    		@Param("area") String area,
    		@Param("userName") String userName,
            @Param("userMobile") long userMobile,
            @Param("userEmail") String userEmail);

}
	