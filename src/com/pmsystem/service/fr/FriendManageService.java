package com.pmsystem.service.fr;

import java.util.List;

import com.pmsystem.model.fr.FProject;
import com.pmsystem.model.fr.Friend;
import com.pmsystem.model.fr.UserInformation;



public interface FriendManageService {
	public List<Friend> findAllFriend(String MyID);
	public String modifyRemark(String MyID,String friend_id,String friend_remark);
	public List<FProject> getProject(String MyID);
	public String inviteFriendToProject(String [] project_record,String friend_id);
	public List<UserInformation> getUserInformation(String friend_id);
}
