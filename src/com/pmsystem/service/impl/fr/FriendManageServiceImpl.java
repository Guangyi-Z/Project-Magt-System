package com.pmsystem.service.impl.fr;

import java.util.List;

import com.pmsystem.dao.fr.FriendManageDAO;
import com.pmsystem.model.fr.Friend;
import com.pmsystem.service.fr.FriendManageService;

public class FriendManageServiceImpl implements FriendManageService {

	private FriendManageDAO friendManageDAO;

	public List<Friend> findAllFriend(String MyID) {
		// TODO Auto-generated method stub
		return friendManageDAO.findAllFriend(MyID);
	}

	public FriendManageDAO getFriendManageDAO() {
		return friendManageDAO;
	}

	public void setFriendManageDAO(FriendManageDAO friendManageDAO) {
		this.friendManageDAO = friendManageDAO;
	}

}
