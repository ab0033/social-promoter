package edu.social.promoter.entity;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@Data
public class CryptoEntity extends BaseEntity{
    @Column
    private String name;
    @Column
    private String address;
    @Column
    private String qr;
}
