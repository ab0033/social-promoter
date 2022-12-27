package edu.social.promoter.controller;

import edu.social.promoter.exception.AmountException;
import edu.social.promoter.model.EmailInfo;
import edu.social.promoter.service.SendingEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin("*")
@RestController
@RequestMapping("/payment")
public class EmailController {

    private SendingEmailService service;

    @Autowired
    public EmailController(SendingEmailService service) {
        this.service = service;
    }

    @PostMapping
    public void sendEmail(HttpServletRequest request,@RequestBody EmailInfo email) throws AmountException {
        service.sendMessage(request, email);
    }


}
