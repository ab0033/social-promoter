package edu.social.promoter.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
public class SocialNetwork extends BaseEntity {
    @Column
    private String name;
    @OneToMany(fetch=FetchType.LAZY ,mappedBy = "socialNetwork" , cascade = {CascadeType.ALL})
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Set<SocialNetworkEvent> events;
}
