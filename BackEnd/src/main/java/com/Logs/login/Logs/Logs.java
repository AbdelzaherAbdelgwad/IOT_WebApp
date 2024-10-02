package com.Logs.login.Logs;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table( name = "Logs_TBL")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Logs {
    @Id
    @GeneratedValue
   // private int id;
    private String command;
    //private LocalDateTime date;


}
