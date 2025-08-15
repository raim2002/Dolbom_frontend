package com.dolbom.hanium_project.repository;

import com.dolbom.hanium_project.domain.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserEntityRepository extends JpaRepository<UserEntity, Long> {
    // 이메일로 사용자를 찾기 위한 메서드
    Optional<UserEntity> findByEmail(String email);
}