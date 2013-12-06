package com.pmsystem.service.impl.fr;

import java.util.List;

import com.pmsystem.dao.fr.FriendManageDAO;
import com.pmsystem.model.fr.FProject;
import com.pmsystem.model.fr.Friend;

import com.pmsystem.model.fr.UserInformation;
import com.pmsystem.model.fr.Staff;
import com.pmsystem.model.pj.Project;

import com.pmsystem.service.fr.FriendManageService;

public class FriendManageServiceImpl implements FriendManageService {

	private FriendManageDAO friendManageDAO;

	public List<Friend> findAllFriend(String MyID) {
		// TODO Auto-generated method stub
		return friendManageDAO.findAllFriend(MyID);
	}

	public String deleteFriend(String FriendID, String MyID) {
		try {
			friendManageDAO.deleteFriend(FriendID, MyID);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public List<Staff> findStaff(String StaffID) {
		// TODO Auto-generated method stub
		return friendManageDAO.findStaff('%' + StaffID + '%');
	}

	public List<Project> findProject(String FriendID) {
		// TODO Auto-generated method stub
		return friendManageDAO.findProject(FriendID);
	}

	public String addFriend(String FriendID, String MyID) {
		// TODO Auto-generated method stub
		friendManageDAO.addFriend(FriendID, MyID);
		return null;
	}

	public String applyForProject(String MyID, String ProjectID) {
		// TODO Auto-generated method stub
		friendManageDAO.applyForProject(MyID, ProjectID);
		return null;
	}

	public FriendManageDAO getFriendManageDAO() {
		return friendManageDAO;
	}

	public void setFriendManageDAO(FriendManageDAO friendManageDAO) {
		this.friendManageDAO = friendManageDAO;
	}

	public String modifyRemark(String MyID,String friend_id,String friend_remark) {
		// TODO Auto-generated method stub
		friendManageDAO.modifyRemark(MyID,friend_id,friend_remark);
		return null;
	}

	public List<FProject> getProject(String MyID) {
		// TODO Auto-generated method stub
		return friendManageDAO.getProject(MyID);		
	}

	public String inviteFriendToProject(String[] projectRecord,String friend_id) {
		// TODO Auto-generated method stub
		int len = projectRecord.length/2;
		for(int i = 0; i<len; i++)
		{
//			System.out.println(projectRecord[i*2+0]);
//			System.out.println(projectRecord[i*2+1]);
			friendManageDAO.inviteFriendToProject(projectRecord[i*2+0],projectRecord[i*2+1],friend_id);
		}
		
		return null;
	}

	public List<UserInformation> getUserInformation(String friend_id) {
		// TODO Auto-generated method stub

		return friendManageDAO.getUserInformation(friend_id);

	}

}
