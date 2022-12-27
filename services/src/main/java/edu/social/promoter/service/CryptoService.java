package edu.social.promoter.service;

import edu.social.promoter.entity.CryptoEntity;
import edu.social.promoter.model.CryptoModel;
import edu.social.promoter.repo.CryptoRepo;
import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
public class CryptoService {

    private final CryptoRepo cryptoRepo;

    public CryptoModel getCryptoDetails(String name) {
        CryptoEntity entity = cryptoRepo.findByName(name);
        return new CryptoModel(
                entity.getName(),
                entity.getAddress(),
                entity.getQr()
        );
    }
}
