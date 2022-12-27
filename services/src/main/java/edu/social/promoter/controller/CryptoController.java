package edu.social.promoter.controller;

import edu.social.promoter.model.CryptoModel;
import edu.social.promoter.service.CryptoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/crypto")
public class CryptoController {

    private CryptoService cryptoService;

    @Autowired
    public CryptoController(CryptoService cryptoService) {
        this.cryptoService = cryptoService;
    }

    @GetMapping("/{name}")
    public CryptoModel getCryptoDetails(@PathVariable String name) {
        return cryptoService.getCryptoDetails(name);
    }
}
