package com.pmsystem.action.pj;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;
import com.pmsystem.model.pj.ProjectMember;
import com.pmsystem.service.pj.ProjectMemberServiece;

public class ProjectMemberAction extends ActionSupport{

	private ProjectMember member;
	private Map<String, Object> jsonMap;
	private ProjectMemberServiece projectMemberServiece;
	private boolean success;
	
	private String projectID;
	private String memberID;
	private String memberLimit;
	private String memberRole;
	private List<ProjectMember> members;
	private int totalCount;
	private int start;
	private int limit;
	
	public ProjectMemberAction(){
		jsonMap = new HashMap<String, Object>();
	}
	
	public String addMember(){
		jsonMap.clear();
		member = new ProjectMember();
		member.setMemberID(memberID);
		member.setProjectID(projectID);
		member.setMemberLimit("未设置");
		member.setMemberRole("未设置");
		System.out.println("" + member.getMemberID());
		System.out.println("" + member.getProjectID());
		System.out.println("" + member.getMemberLimit());
		System.out.println("" + member.getMemberRole());
		if(projectMemberServiece.addMember(member) == "ok"){
			jsonMap.put("success", true);
		}else
			jsonMap.put("success", false);
		
		return SUCCESS;
	}
	
	public String deleteMember(){
		jsonMap.clear();
		if(projectMemberServiece.deleteMember(projectID, memberID) != null){
			
		}
		jsonMap.put("success", true);
		return SUCCESS;
	}
	
	public String updateMember(){
		jsonMap.clear();
		member = new ProjectMember();
		member.setMemberID(memberID);
		member.setProjectID(projectID);
		member.setMemberLimit(memberLimit);
		member.setMemberRole(memberRole);
		System.out.println("" + member.getMemberID());
		System.out.println("" + member.getProjectID());
		System.out.println("" + member.getMemberLimit());
		System.out.println("" + member.getMemberRole());
		if(projectMemberServiece.updateMember(member) == null){
			
		}
		jsonMap.put("success", true);
		return SUCCESS;
	}
	
	public String findAllMember(){
		jsonMap.clear();
		if(projectMemberServiece.getAllMembers(limit, start, projectID) != null){
			members = projectMemberServiece.getAllMembers(limit, start, projectID);
			totalCount = projectMemberServiece.getCount();
			jsonMap.put("members", members);
			jsonMap.put("totalCount", totalCount);
			jsonMap.put("success", true);
		}
		else
			jsonMap.put("success", false);
		return SUCCESS;
	}

	public ProjectMember getMember() {
		return member;
	}

	public void setMember(ProjectMember member) {
		this.member = member;
	}

	public Map<String, Object> getJsonMap() {
		return jsonMap;
	}

	public void setJsonMap(Map<String, Object> jsonMap) {
		this.jsonMap = jsonMap;
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

	public ProjectMemberServiece getProjectMemberServiece() {
		return projectMemberServiece;
	}

	public void setProjectMemberServiece(ProjectMemberServiece projectMemberServiece) {
		this.projectMemberServiece = projectMemberServiece;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
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

	public List<ProjectMember> getMembers() {
		return members;
	}

	public void setMembers(List<ProjectMember> members) {
		this.members = members;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getStart() {
		return start;
	}

	public void setStart(int start) {
		this.start = start;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}
	
	
}
