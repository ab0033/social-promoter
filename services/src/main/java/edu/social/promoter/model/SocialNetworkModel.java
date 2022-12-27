package edu.social.promoter.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class SocialNetworkModel {
    private Long id;
    private String name;
    private List<SocialNetworkEventModel> eventTypes;
}
