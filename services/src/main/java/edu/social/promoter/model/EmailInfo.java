package edu.social.promoter.model;

import lombok.Data;

@Data
public class EmailInfo {
    private int amount;
    private int total;
    private String email;
    private String socialNetworkLink;
}
