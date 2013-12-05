package com.pmsystem.action.fr;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.model.fr.FProject;
import com.pmsystem.model.fr.Friend;
import com.pmsystem.model.fr.UserInformation;
import com.pmsystem.service.fr.FriendManageService;

public class FriendManageAction extends ActionSupport{
	private Friend friend;
	private UserInformation userinformation;
	private FProject fproject;
	private Map<String, Object> jsonMap;
	private String MyID;
	private FriendManageService friendManageService ;
//	private Object[] fproject_array;
	private String[] fproject_array;
	
	public String[] getFproject_array() {
		return fproject_array;
	}

	public void setFproject_array(String[] fprojectArray) {
		fproject_array = fprojectArray;
	}

	public FProject getFproject() {
		return fproject;
	}

	public void setFproject(FProject fproject) {
		this.fproject = fproject;
	}
	
	public String getMyID() {
		return MyID;
	}

	public void setMyID(String myID) {
		MyID = myID;
	}

	
	public Friend getFriend() {
		return friend;
	}

	public void setFriend(Friend friend) {
		this.friend = friend;
	}

	public UserInformation getUserinformation() {
		return userinformation;
	}

	public void setUserinformation(UserInformation userinformation) {
		this.userinformation = userinformation;
	}

	
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
	
	public String inviteFriendToProject(){	

		friendManageService.inviteFriendToProject(fproject_array, friend.getId());
		
		return SUCCESS;
	}
	
	public String getUserInformation()
	{
		jsonMap.clear();		
		List<UserInformation> userinformation =  friendManageService.getUserInformation(friend.getId());
		jsonMap.put("informations", userinformation);
		jsonMap.put("totalCount", 1);

		return SUCCESS;
	}
	
	public String getProject(){			
		jsonMap.clear();
		List<FProject> fprojects = friendManageService.getProject(MyID);
		jsonMap.put("fprojects", fprojects);
		jsonMap.put("totalCount", fprojects.size());
		//System.out.println("totalCount:"+fprojects.size());
		return SUCCESS;
	}
	
	public String modifyRemark(){
		jsonMap.clear();
		friendManageService.modifyRemark(MyID,friend.getId(),friend.getRemark());
		jsonMap.put("success",true);
		return SUCCESS;		
	}

	public Map<String, Object> getJsonMap() {
		return jsonMap;
	}

	public void setJsonMap(Map<String, Object> jsonMap) {
		this.jsonMap = jsonMap;
	}


	public FriendManageService getFriendManageService() {
		return friendManageService;
	}

	public void setFriendManageService(FriendManageService friendManageService) {
		this.friendManageService = friendManageService;
	}
	
	
}
