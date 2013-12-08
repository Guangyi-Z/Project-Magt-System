package com.pmsystem.service.impl.pj;

import com.pmsystem.dao.pj.MemberMessageDAO;
import com.pmsystem.model.pj.MemberMessage;
import com.pmsystem.service.pj.MemberMessageService;

public class MemberMessageServieceImpl implements MemberMessageService{
	private MemberMessageDAO memberMessageDAO;
	
	public MemberMessage getMemberMsgByID(String ID){
		MemberMessage message = new MemberMessage();
		try{
			message = memberMessageDAO.getMemberMsgByID(ID);
		}catch(Exception e){
			e.printStackTrace();
		}
		return message;
	}

	public MemberMessageDAO getMemberMessageDAO() {
		return memberMessageDAO;
	}

	public void setMemberMessageDAO(MemberMessageDAO memberMessageDAO) {
		this.memberMessageDAO = memberMessageDAO;
	}
	
	
}
