package com.Logs.login.Login;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data //setters,getters
@AllArgsConstructor
@NoArgsConstructor
@Table
@Entity
public class Login {

    @Id //primary key
    @SequenceGenerator(
            name = "LoginSeq",
            sequenceName = "LoginSeqt",
            allocationSize = 1,
            initialValue = 1


    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "LoginSeqt"

    )

    private int id;
    private String username;
    private String password;



}
