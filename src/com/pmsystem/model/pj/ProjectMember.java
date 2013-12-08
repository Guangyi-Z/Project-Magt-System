package com.pmsystem.model.pj;

public class ProjectMember {
	private String projectID;
	private String memberID;
	private String memberLimit;
	private String memberRole;
	
	private String memberName;
	
	public ProjectMember() {
		super();
	}
	public ProjectMember(String projectID, String memberID, String memberLimit,
			String memberRole) {
		super();
		this.projectID = projectID;
		this.memberID = memberID;
		this.memberLimit = memberLimit;
		this.memberRole = memberRole;
	}
	
	
	public ProjectMember(String projectID, String memberID, String memberLimit,
			String memberRole, String memberName) {
		super();
		this.projectID = projectID;
		this.memberID = memberID;
		this.memberLimit = memberLimit;
		this.memberRole = memberRole;
		this.memberName = memberName;
	}
	public String getProjectID() {
		return projectID;
	}
	public void setProjectID(String projectID) {
		this.projectID = projectID;
	}
	public String getMemberID() {
		return memberID;
	}
	public void setMemberID(String memberID) {
		this.memberID = memberID;
	}
	public String getMemberLimit() {
		return memberLimit;
	}
	public void setMemberLimit(String memberLimit) {
		this.memberLimit = memberLimit;
	}
	public String getMemberRole() {
		return memberRole;
	}
	public void setMemberRole(String memberRole) {
		this.memberRole = memberRole;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	
	
}
