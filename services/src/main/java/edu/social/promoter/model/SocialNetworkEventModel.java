package edu.social.promoter.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SocialNetworkEventModel {
    private Long id;
    private String eventName;
    private Double price;
}
