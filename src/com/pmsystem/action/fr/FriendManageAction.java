package com.pmsystem.action.fr;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.model.fr.Friend;
import com.pmsystem.model.fr.Staff;
import com.pmsystem.model.pj.Project;
import com.pmsystem.service.fr.FriendManageService;

public class FriendManageAction extends ActionSupport {
	private Map<String, Object> jsonMap;
	private String MyID;
	private String StaffID;
	private String FriendID;
	private String ProjectID;

	private FriendManageService friendManageService;

	public FriendManageAction() {
		jsonMap = new HashMap<String, Object>();
	}

	public String findAllFriend() {
		jsonMap.clear();
		List<Friend> friends = friendManageService.findAllFriend(MyID);
		jsonMap.put("friends", friends);
		jsonMap.put("totalCount", friends.size());
		return SUCCESS;
	}

	public String deleteFriend() {
		jsonMap.clear();
		friendManageService.deleteFriend(FriendID, MyID);
		System.out.println("friendID:" + FriendID);
		jsonMap.put("success", true);
		return SUCCESS;
	}

	public String findStaff() {
		jsonMap.clear();
		List<Staff> staffs = friendManageService.findStaff(StaffID);
		jsonMap.put("staffs", staffs);
		return SUCCESS;
	}

	public String findProject() {
		jsonMap.clear();
		jsonMap.put("projects", friendManageService.findProject(FriendID));
		return SUCCESS;
	}

	public String applyForProject() {
		jsonMap.clear();
		friendManageService.applyForProject(MyID, ProjectID);
		return SUCCESS;
	}

	public String addFriend() {
		jsonMap.clear();
		friendManageService.addFriend(FriendID, MyID);
		jsonMap.put("success", true);
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

	public String getFriendID() {
		return FriendID;
	}

	public void setFriendID(String friendID) {
		FriendID = friendID;
	}

	public String getStaffID() {
		return StaffID;
	}

	public void setStaffID(String staffID) {
		StaffID = staffID;
	}

	public String getProjectID() {
		return ProjectID;
	}

	public void setProjectID(String projectID) {
		ProjectID = projectID;
	}

}
