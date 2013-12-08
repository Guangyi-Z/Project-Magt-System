package com.pmsystem.dao.pj;

import java.util.List;
import java.util.Map;

import com.pmsystem.model.pj.MemberMessage;

public interface MemberMessageDAO {
	//public int getCount();
	
	//public List<MemberMessage> getAllMemberMsg(Map<String, Integer> map);
	
	public MemberMessage getMemberMsgByID(String ID);
}
