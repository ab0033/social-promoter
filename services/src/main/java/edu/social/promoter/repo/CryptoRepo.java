package edu.social.promoter.repo;

import edu.social.promoter.entity.CryptoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CryptoRepo extends JpaRepository<CryptoEntity,Long> {
    CryptoEntity findByName(String name);
}
