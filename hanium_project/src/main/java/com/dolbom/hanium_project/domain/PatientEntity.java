package com.dolbom.hanium_project.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "patients")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PatientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "patient_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int age;

    @Column(nullable = false)
    private double height;

    @Column(nullable = false)
    private double weight;

    @Column(columnDefinition = "TEXT") // 긴 텍스트를 위해
    private String medicalHistory;

    @Column(nullable = false)
    private String streetAddress;

    @Column(nullable = false)
    private String detailAddress;

    // 여러 명의 Patient가 한 명의 User에게 속할 수 있음 (N:1 관계)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false) // 외래 키(FK) 설정
    private UserEntity user;

    @Builder
    public PatientEntity(String name, int age, double height, double weight, String medicalHistory, String streetAddress, String detailAddress) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.medicalHistory = medicalHistory;
        this.streetAddress = streetAddress;
        this.detailAddress = detailAddress;
    }

    // 연관관계 편의 메서드
    public void setUserEntity(UserEntity user) {
        this.user = user;
        user.getPatients().add(this);
    }
}