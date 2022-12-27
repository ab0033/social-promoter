package edu.social.promoter.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
public class AmountExceptionHandler {

    @ExceptionHandler(value = AmountException.class)
    @ResponseBody
    public ResponseEntity<Object> exception(AmountException amountException) {
        List<String> errors = new ArrayList<>();
        errors.add(amountException.getMessage());
        return new ResponseEntity<>(new ErrorMessage(errors), HttpStatus.FORBIDDEN);
    }
}
