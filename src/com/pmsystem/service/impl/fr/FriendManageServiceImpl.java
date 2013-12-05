package com.pmsystem.service.impl.fr;

import java.util.List;

import com.pmsystem.dao.fr.FriendManageDAO;
import com.pmsystem.model.fr.Friend;
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

}
