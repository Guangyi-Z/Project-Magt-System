package com.pmsystem.model.pj;

public class MemberMessage {
	private String memberID;
	private String memberEmail;
	private String memberName;
	private String memberPhone;
	private String memberIntroduction;
	public MemberMessage() {
		super();
	}
	public MemberMessage(String memberID, String memberEmail,
			String memberName, String memberPhone, String memberIntroduction) {
		super();
		this.memberID = memberID;
		this.memberEmail = memberEmail;
		this.memberName = memberName;
		this.memberPhone = memberPhone;
		this.memberIntroduction = memberIntroduction;
	}
	public String getMemberID() {
		return memberID;
	}
	public void setMemberID(String memberID) {
		this.memberID = memberID;
	}
	public String getMemberEmail() {
		return memberEmail;
	}
	public void setMemberEmail(String memberEmail) {
		this.memberEmail = memberEmail;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getMemberPhone() {
		return memberPhone;
	}
	public void setMemberPhone(String memberPhone) {
		this.memberPhone = memberPhone;
	}
	public String getMemberIntroduction() {
		return memberIntroduction;
	}
	public void setMemberIntroduction(String memberIntroduction) {
		this.memberIntroduction = memberIntroduction;
	}
	
	
}
