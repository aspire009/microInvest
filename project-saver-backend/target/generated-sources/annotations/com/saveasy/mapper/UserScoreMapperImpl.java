package com.saveasy.mapper;

import com.saveasy.entity.UserScoreEntity;
import com.saveasy.model.UserScoreDto;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-05-24T18:34:16+0530",
    comments = "version: 1.3.0.Final, compiler: javac, environment: Java 11.0.11 (Oracle Corporation)"
)
@Component
public class UserScoreMapperImpl implements UserScoreMapper {

    @Override
    public UserScoreDto toDto(UserScoreEntity userScoreEntity) {
        if ( userScoreEntity == null ) {
            return null;
        }

        UserScoreDto userScoreDto = new UserScoreDto();

        userScoreDto.setId( userScoreEntity.getId() );
        userScoreDto.setOverallScore( userScoreEntity.getOverallScore() );
        userScoreDto.setRiskProfile( userScoreEntity.getRiskProfile() );

        return userScoreDto;
    }
}
