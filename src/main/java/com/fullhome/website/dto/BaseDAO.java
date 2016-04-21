package com.fullhome.website.dto;

import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;

import java.util.List;

public class BaseDAO extends SqlSessionDaoSupport {

    @Autowired
    @Override
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    /**
     * 批量操作
     * @param sqlStatement 语句名称
     * @param recordList 数据列表
     */
    protected void batchInsertOrUpdate(String sqlStatement, List recordList) {
        if (StringUtils.isBlank(sqlStatement) || CollectionUtils.isEmpty(recordList)) {
            return;
        }
        if (recordList.size() <= 50) {
            getSqlSession().update(sqlStatement, recordList);
        } else {
            getSqlSession().update(sqlStatement, recordList.subList(0, 50));
            batchInsertOrUpdate(sqlStatement, recordList.subList(50, recordList.size()));
        }
    }

}
