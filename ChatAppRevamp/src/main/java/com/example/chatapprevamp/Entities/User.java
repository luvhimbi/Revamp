package com.example.chatapprevamp.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@AllArgsConstructor
@Entity
@Data
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstname;
    private String lastname;
    private String username;
    private String email;
    private String password;
    @Enumerated(EnumType.STRING)
    private OnlineStatus onlineStatus = OnlineStatus.OFFLINE;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<Contact> contacts;
}
