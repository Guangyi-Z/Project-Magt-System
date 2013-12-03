package com.pmsystem.dao.fr;

import java.util.List;

import com.pmsystem.model.fr.Friend;

public interface FriendManageDAO {
	public List<Friend> findAllFriend(String MyID);
}
