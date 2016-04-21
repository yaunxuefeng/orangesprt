package com.fullhome.website.utils;

import org.codehaus.jackson.map.DeserializationConfig;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;

import java.text.SimpleDateFormat;


public class CustomJSONMapper extends ObjectMapper {

    public CustomJSONMapper() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SerializationConfig config = getSerializationConfig();
        config.setDateFormat(dateFormat);

        DeserializationConfig deserializationConfig = getDeserializationConfig();
        deserializationConfig.setDateFormat(dateFormat);
    }
}
