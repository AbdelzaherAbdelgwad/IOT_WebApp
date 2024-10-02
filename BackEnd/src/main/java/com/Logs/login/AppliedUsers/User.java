package com.Logs.login.AppliedUsers;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "User")
public class User {
    @Id
    @SequenceGenerator(initialValue = 1,name = "UserSeq",sequenceName = "UserSeq")
    @GeneratedValue(generator = "UserSeq")
    private int id;
    private String fullName;
    private String email;
    private String package_;
}
