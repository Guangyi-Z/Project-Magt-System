package com.pmsystem.service.fr;

import java.util.List;

import com.pmsystem.model.fr.Friend;
import com.pmsystem.model.fr.Staff;
import com.pmsystem.model.pj.Project;



public interface FriendManageService {
	public List<Friend> findAllFriend(String MyID);
	public String deleteFriend(String FriendID,String MyID);
	public List<Staff> findStaff(String StaffID);
	public String addFriend(String FriendID,String MyID);
	public List<Project> findProject(String FriendID);
	public String applyForProject(String MyID,String ProjectID);
}
