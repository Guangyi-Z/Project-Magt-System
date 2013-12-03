package com.pmsystem.action.fr;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.model.fr.Friend;
import com.pmsystem.service.fr.FriendManageService;

public class FriendManageAction extends ActionSupport{
	private Map<String, Object> jsonMap;
	private String MyID;
	
	private FriendManageService friendManageService ;
	
	public FriendManageAction(){
		jsonMap = new HashMap<String, Object>();
	}
	
	public String findAllFriend(){
		jsonMap.clear();
		List<Friend> friends = friendManageService.findAllFriend(MyID);
		System.out.println("action:"+friends.get(0).getId());
		jsonMap.put("friends", friends);
		jsonMap.put("totalCount", friends.size());
		return SUCCESS;
	}

	public Map<String, Object> getJsonMap() {
		return jsonMap;
	}

	public void setJsonMap(Map<String, Object> jsonMap) {
		this.jsonMap = jsonMap;
	}

	public String getMyID() {
		return MyID;
	}

	public void setMyID(String myID) {
		MyID = myID;
	}

	public FriendManageService getFriendManageService() {
		return friendManageService;
	}

	public void setFriendManageService(FriendManageService friendManageService) {
		this.friendManageService = friendManageService;
	}
	
	
}
