package com.Logs.login.AppliedUsers;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserReopsitory  extends JpaRepository<User,Integer> {
    User findByfullName(String fullName);
}
