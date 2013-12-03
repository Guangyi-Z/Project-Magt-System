package com.pmsystem.service.fr;

import java.util.List;

import com.pmsystem.model.fr.Friend;



public interface FriendManageService {
	public List<Friend> findAllFriend(String MyID);
}
