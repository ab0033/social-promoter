package edu.social.promoter.service;

import edu.social.promoter.config.MailConfig;
import edu.social.promoter.exception.AmountException;
import edu.social.promoter.model.EmailInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;

import javax.servlet.http.HttpServletRequest;


@RequiredArgsConstructor
public class SendingEmailService {
    private final JavaMailSender emailSender;
    // todo validator
    private final CacheManager cacheManager;
    private final MailConfig mailConfig;

    public void sendMessage(HttpServletRequest request, EmailInfo emailInfo) throws AmountException {
        String ip = request.getRemoteAddr();
        Cache data = cacheManager.getCache("ipAddress");
        if (data.get(ip) == null) {
            data.put(ip, 1);
            sendSimpleMessage(emailInfo);
        } else {
            Cache.ValueWrapper value = data.get(ip);
            System.out.println(value);
            Integer intValue = Integer.valueOf(String.valueOf(value.get()));
            switch (intValue) {
                case 1:
                    sendSimpleMessage(emailInfo);
                    data.put(ip, 2);
                case 2:
                    throw new AmountException("Too many tries, try in few minutes");

            }
        }

    }

    public void sendSimpleMessage(EmailInfo emailInfo) {
        SimpleMailMessage message = new SimpleMailMessage();
        String emailMessage =
                        "Имеил : " + emailInfo.getEmail() + "\n" +
                        "Количество : " + emailInfo.getAmount() + "\n" +
                        "Ссылка на пост : " + emailInfo.getSocialNetworkLink() + "\n" +
                        "Цена : " + emailInfo.getTotal();
        message.setTo(mailConfig.getTarget());
        message.setSubject(mailConfig.getSubject());
        message.setText(emailMessage);
        emailSender.send(message);
    }

    @Scheduled(initialDelay = 600000)
    public void evictCache() {
        cacheManager.getCache("ipAddress").clear();
    }
}
