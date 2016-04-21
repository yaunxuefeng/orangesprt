package com.fullhome.website.pojo;

import java.util.Date;

/**
 * 信息资讯
 * @author yuanxuefeng
 * @date 2016-04-20 下午10:59
 */
public class News {

    /**
     * id
     */
    private Long articleId;

    /**
     * 文章类型 NEWS资讯栏 BANNER 滚动栏
     */
    private String articleType;

    /**
     * 创建时间
     */
    private Date createDate;

    /**
     * 是否是否 0未使用 1 使用
     */
    private Integer isUse;

    /**
     * 图片地址
     */
    private String imageUrl;

    /**
     * 内容
     */
    private String content;

    /**
     * banner 下架时间
     */
    private Date endTime;

    /**
     * 文章标题
     */
    private String title;

    /**
     * 是否置顶 0不制顶 1 置顶
     */
    private Integer isTop;

    public Long getArticleId() {
        return articleId;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public String getArticleType() {
        return articleType;
    }

    public void setArticleType(String articleType) {
        this.articleType = articleType;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Integer getIsUse() {
        return isUse;
    }

    public void setIsUse(Integer isUse) {
        this.isUse = isUse;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getIsTop() {
        return isTop;
    }

    public void setIsTop(Integer isTop) {
        this.isTop = isTop;
    }
}
