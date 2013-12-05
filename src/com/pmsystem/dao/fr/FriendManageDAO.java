package com.pmsystem.dao.fr;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.pmsystem.model.fr.Friend;
import com.pmsystem.model.fr.Staff;
import com.pmsystem.model.pj.Project;

public interface FriendManageDAO {
	public List<Friend> findAllFriend(String MyID);

	public int deleteFriend(@Param(value = "FriendID") String FriendID,
			@Param(value = "MyID") String MyID);

	public List<Staff> findStaff(String StaffID);

	public String addFriend(@Param(value = "FriendID") String FriendID,
			@Param(value = "MyID") String MyID);

	public List<Project> findProject(String FriendID);

	public int applyForProject(@Param(value = "MyID") String MyID,
			@Param(value = "ProjectID") String ProjectID);
}
