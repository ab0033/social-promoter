package edu.social.promoter.entity;

import lombok.Data;

import javax.persistence.*;

@Entity

@Data
public class SocialNetworkEvent extends BaseEntity{

    @ManyToOne(optional = false)
    @JoinColumn(name = "social_network_id")
    private SocialNetwork socialNetwork;
    @ManyToOne(optional = false)
    @JoinColumn(name = "event_type_id")
    private EventType eventType;
    @Column(nullable = false)
    private Double price;
}
