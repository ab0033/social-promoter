package edu.social.promoter.config;

import edu.social.promoter.repo.CryptoRepo;
import edu.social.promoter.repo.SocialNetworkRepo;
import edu.social.promoter.service.CryptoService;
import edu.social.promoter.service.SendingEmailService;
import edu.social.promoter.service.SocialNetworkService;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.cache.CacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;

@Configuration
@Data
public class SpringConfig {

    @Bean
    public SendingEmailService sendingEmailService(JavaMailSender javaMailSender, CacheManager cacheManager, MailConfig mailConfig) {
        return new SendingEmailService(javaMailSender, cacheManager, mailConfig);
    }

    @Bean
    public SocialNetworkService socialNetworkService(SocialNetworkRepo socialNetworkRepo) {
        return new SocialNetworkService(socialNetworkRepo);
    }

    @Bean
    @ConfigurationProperties("mail")
    public MailConfig mailConfig() {
        return new MailConfig();
    }

    @Bean
    public CryptoService cryptoService(CryptoRepo cryptoRepo){
        return new CryptoService(cryptoRepo);
    }

}
