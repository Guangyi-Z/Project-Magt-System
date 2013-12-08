package com.pmsystem.action.pj;

import java.util.HashMap;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.model.pj.MemberMessage;
import com.pmsystem.service.pj.MemberMessageService;

public class MemberMessageAction extends ActionSupport{
	private MemberMessage message;
	private Map<String, Object> jsonMap;
	private MemberMessageService memberMessageService;
	private boolean success;
	
	private String id ;
	
	public MemberMessageAction(){
		jsonMap = new HashMap<String, Object>();
	}
	
	public String findMemberMsgByID(){
		jsonMap.clear();
		message = memberMessageService.getMemberMsgByID(id);
		if(message != null)
		{
			jsonMap.put("message", message);
			jsonMap.put("success", true);
		}
		else
			jsonMap.put("success", false);
		return SUCCESS;
	}

	public MemberMessage getMessage() {
		return message;
	}

	public void setMessage(MemberMessage message) {
		this.message = message;
	}

	public Map<String, Object> getJsonMap() {
		return jsonMap;
	}

	public void setJsonMap(Map<String, Object> jsonMap) {
		this.jsonMap = jsonMap;
	}

	public MemberMessageService getMemberMessageService() {
		return memberMessageService;
	}

	public void setMemberMessageService(MemberMessageService memberMessageService) {
		this.memberMessageService = memberMessageService;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	
}
