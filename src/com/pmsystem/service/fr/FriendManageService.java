package com.pmsystem.service.fr;

import java.util.List;

import com.pmsystem.model.fr.Account;
import com.pmsystem.model.fr.FProject;
import com.pmsystem.model.fr.Friend;
import com.pmsystem.model.fr.UserInformation;
import com.pmsystem.model.fr.Staff;
import com.pmsystem.model.pj.Project;



public interface FriendManageService {
	public List<Friend> findAllFriend(String MyID);
	public String modifyRemark(String MyID,String friend_id,String friend_remark);
	public List<FProject> getProject(String MyID);
	public String inviteFriendToProject(String [] project_record,String friend_id);
	public List<UserInformation> getUserInformation(String friend_id);
	public String deleteFriend(String FriendID,String MyID);
	public List<Staff> findStaff(String StaffID);
	public String addFriend(String FriendID,String MyID);
	public List<Project> findProject(String FriendID);
	public String applyForProject(String MyID,String ProjectID);
	public List<Account> checkOldPassword(String account,String password);
	public String modifyPassword(String account,String newPassword);
}
