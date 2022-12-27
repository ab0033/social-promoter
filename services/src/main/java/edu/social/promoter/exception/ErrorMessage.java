package edu.social.promoter.exception;

import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

public record ErrorMessage(List<String> errorMessages) {
}
