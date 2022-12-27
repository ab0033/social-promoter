package edu.social.promoter.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
public class EventType extends BaseEntity{
    @Column
    private String name;
    @OneToMany(fetch=FetchType.LAZY,mappedBy = "eventType")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Set<SocialNetworkEvent> socialNetworks;

}
