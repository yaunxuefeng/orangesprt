package com.fullhome.website.service.impl;

import com.fullhome.website.dto.UserInfoDao;
import com.fullhome.website.pojo.UserInfo;
import com.fullhome.website.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *  用户操作信息
 * Created by yuanxuefeng on 15/11/18.
 */
@Service
public class UserInfoServiceImpl implements UserInfoService {

   @Autowired
   private UserInfoDao userInfoDao;

   public void  addUser(UserInfo userInfo) {
      userInfoDao.insertUserInfo(userInfo);
   }
}
