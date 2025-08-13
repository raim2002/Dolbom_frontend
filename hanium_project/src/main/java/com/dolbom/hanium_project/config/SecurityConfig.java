package com.dolbom.hanium_project.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean // 이 메서드가 반환하는 객체를 스프링이 관리하는 Bean으로 등록합니다.
    public PasswordEncoder passwordEncoder() {
        // BCrypt는 강력한 해싱 알고리즘으로, 가장 많이 사용되는 암호화 방식 중 하나입니다.
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // CSRF 보호 비활성화 (API 서버에서는 보통 비활성화합니다)
        http.csrf((csrf) -> csrf.disable());

        // 특정 URL에 대한 접근 권한 설정
        http.authorizeHttpRequests((authorize) -> authorize
                .requestMatchers("/api/auth/**").permitAll() // '/api/auth/'로 시작하는 모든 요청은 인증 없이 허용
                .anyRequest().authenticated() // 그 외 모든 요청은 인증 필요
        );

        return http.build();
    }
}