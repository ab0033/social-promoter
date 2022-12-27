package edu.social.promoter.service;

import edu.social.promoter.entity.SocialNetwork;
import edu.social.promoter.entity.SocialNetworkEvent;
import edu.social.promoter.model.SocialNetworkEventModel;
import edu.social.promoter.model.SocialNetworkModel;
import edu.social.promoter.repo.SocialNetworkRepo;
import lombok.RequiredArgsConstructor;

import java.util.List;


@RequiredArgsConstructor
public class SocialNetworkService {
    private final SocialNetworkRepo socialNetworkRepo;

    public List<SocialNetworkModel> getAll() {
        List<SocialNetwork> entities = socialNetworkRepo.findAll();
        return entities.stream()
                .map(entity -> toSocialNetworkModel(entity))
                .toList();
    }

    private SocialNetworkModel toSocialNetworkModel(SocialNetwork entity) {
        List<SocialNetworkEventModel> eventModels = entity.getEvents().stream()
                .map(socialNetworkEvent -> toSocialNetworkEventModel(socialNetworkEvent))
                .toList();
        return new SocialNetworkModel(entity.getId(), entity.getName(), eventModels);
    }

    private SocialNetworkEventModel toSocialNetworkEventModel(SocialNetworkEvent entity) {
        return new SocialNetworkEventModel(
                entity.getEventType().getId()
                , entity.getEventType().getName()
                , entity.getPrice());
    }
}
