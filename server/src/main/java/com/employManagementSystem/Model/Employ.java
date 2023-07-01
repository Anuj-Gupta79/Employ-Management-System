package com.employManagementSystem.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employ {
    private Long id;
    private String firstName;
    private String lastName;
    private String emailId;

}
