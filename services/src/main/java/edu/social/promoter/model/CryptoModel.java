package edu.social.promoter.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CryptoModel {
    private String name;
    private String address;
    private String qr;
}
