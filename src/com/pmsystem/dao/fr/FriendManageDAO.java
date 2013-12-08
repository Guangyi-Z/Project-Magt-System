package com.pmsystem.dao.fr;

import java.util.List;
import org.apache.ibatis.annotations.Param;

import com.pmsystem.model.fr.FProject;
import com.pmsystem.model.fr.Friend;
import com.pmsystem.model.fr.UserInformation;

import org.apache.ibatis.annotations.Param;

import com.pmsystem.model.fr.Friend;
import com.pmsystem.model.fr.Staff;
import com.pmsystem.model.pj.Project;
import com.pmsystem.model.fr.Account;

public interface FriendManageDAO {
	public List<Friend> findAllFriend(String MyID);
	public String modifyRemark( 
			@Param (value = "MyID")  String MyID,
			@Param (value = "friend_id") String friend_id,
			@Param (value = "friend_remark") String friend_remark);
	public List<FProject> getProject(@Param (value = "MyID")   String MyID);
	public int inviteFriendToProject(@Param (value = "project_id") String project_id,@Param (value = "project_name") String project_name,@Param (value = "friend_id")  String friend_id);
	public List<UserInformation> getUserInformation(@Param (value = "friend_id") String friend_id);
	
	// weapon2

	public int deleteFriend(@Param(value = "FriendID") String FriendID,
			@Param(value = "MyID") String MyID);

	public List<Staff> findStaff(String StaffID);

	public String addFriend(@Param(value = "FriendID") String FriendID,
			@Param(value = "MyID") String MyID);

	public List<Project> findProject(String FriendID);

	public int applyForProject(@Param(value = "MyID") String MyID,
			@Param(value = "ProjectID") String ProjectID);
	
	public List<Account> checkOldPassword(@Param(value = "account") String account, 
			@Param(value = "password") String password);
	
	public String modifyPassword(@Param(value = "account") String account, 
			@Param(value = "newPassword") String newPassword);
	
}
