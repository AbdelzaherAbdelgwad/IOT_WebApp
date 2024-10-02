package com.Logs.login.Cameras;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CamerasRepository extends JpaRepository<Cameras,Integer> {
     Cameras findByName(String Name);
}
