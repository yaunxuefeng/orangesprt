package com.fullhome.website.dto;

import com.fullhome.website.pojo.UserInfo;
import org.springframework.stereotype.Repository;

/**
 * Created by yuanxuefeng on 15/11/18.
 */
@Repository
public class UserInfoDaoImpl extends BaseDAO implements UserInfoDao {

    @Override
    public UserInfo getById(long userId) {
        return getSqlSession().selectOne("UserInfoMapper.getById", userId);
    }

    @Override
    public void insertUserInfo(UserInfo userInfo) {
        getSqlSession().insert("UserInfoMapper.insertUserInfo", userInfo);
    }
}
