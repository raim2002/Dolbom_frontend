package com.dolbom.hanium_project.repository;

import com.dolbom.hanium_project.domain.PatientEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientEntityRepository extends JpaRepository<PatientEntity, Long> {
    // 기본적인 CRUD 메서드는 JpaRepository가 모두 제공하므로 지금은 비워둡니다.
}