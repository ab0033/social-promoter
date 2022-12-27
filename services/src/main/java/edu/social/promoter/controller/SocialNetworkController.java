package edu.social.promoter.controller;

import edu.social.promoter.model.SocialNetworkModel;
import edu.social.promoter.service.SocialNetworkService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@CrossOrigin("*")
@RestController
@RequestMapping("/networks")
public class SocialNetworkController {

    private SocialNetworkService service;
    @Autowired
    public SocialNetworkController(SocialNetworkService service) {
        this.service = service;
    }

    @GetMapping
    public List<SocialNetworkModel> getAllSocialNetworks(){
        return service.getAll();
    }


}