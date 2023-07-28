package com.feedback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feedback.models.FeedBack;
import com.feedback.service.FeedBackService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins="*",allowedHeaders="*")
public class FeedBackController {

	
	@Autowired
	private FeedBackService fservice;
	 
	@PostMapping("/addfeed")
	public FeedBack AddFeedback(@RequestBody FeedBack feedback) {
		return fservice.addFeedback(feedback);
	}
	
	@GetMapping("/getFeeds")
	public List<FeedBack> getAllFeeds() {
        return fservice.getAllFeeds();
    }
}
