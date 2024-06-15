package com.gk.study.controller;

import com.gk.study.common.APIResponse;
import com.gk.study.common.ResponeCode;
import com.gk.study.entity.Ad;
import com.gk.study.entity.Feedback;
import com.gk.study.permission.Access;
import com.gk.study.permission.AccessLevel;
import com.gk.study.service.AdService;
import com.gk.study.service.FeedbackService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

/**
 * @author lengqin1024(微信)
 * @email net936@163.com
 */
@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    private final static Logger logger = LoggerFactory.getLogger(FeedbackController.class);

    @Autowired
    FeedbackService service;


    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public APIResponse list(){
        List<Feedback> list =  service.getFeedbackList();
        return new APIResponse(ResponeCode.SUCCESS, "查询成功", list);
    }


    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @Transactional
    public APIResponse create(Feedback feedback) throws IOException {
        if(!StringUtils.isEmpty(feedback.title)) {
            service.createFeedback(feedback);
            return new APIResponse(ResponeCode.SUCCESS, "创建成功");
        }else {
            return new APIResponse(ResponeCode.FAIL, "创建失败");
        }
    }

    @Access(level = AccessLevel.ADMIN)
    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public APIResponse delete(String ids){
        System.out.println("ids===" + ids);
        // 批量删除
        String[] arr = ids.split(",");
        for (String id : arr) {
            service.deleteFeedback(id);
        }
        return new APIResponse(ResponeCode.SUCCESS, "删除成功");
    }

}
